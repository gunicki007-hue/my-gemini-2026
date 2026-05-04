import React, { useEffect, useRef, useState } from 'react';
import { useAnimationFrame, MotionValue, motion } from 'motion/react';

interface ParticleTextProps {
  text: string;
  scrollYProgress: MotionValue<number>;
  imageUrl?: string;
}

export const ParticleText: React.FC<ParticleTextProps> = ({ text, scrollYProgress, imageUrl = '/assets/01-1.webp' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const originalCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles = useRef<any[]>([]);
  const [isReady, setIsReady] = useState(false);

  const loadedImgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // Reset when imageUrl changes
    loadedImgRef.current = null;
    setIsReady(false);
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let timeout: number;
    let retryTimeout: number;

    const initParticles = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) return;
      
      const img = loadedImgRef.current;
      if (!img) return;

      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      if (rect.width <= 0 || rect.height <= 0) {
        // Retry later if layout hasn't settled yet
        clearTimeout(retryTimeout);
        retryTimeout = window.setTimeout(initParticles, 250);
        return;
      }

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      
      // --- Create Offscreen Canvas for Pristine Snapshot ---
      const offCanvas = document.createElement('canvas');
      offCanvas.width = canvas.width;
      offCanvas.height = canvas.height;
      const offCtx = offCanvas.getContext('2d', { willReadFrequently: true });
      if (!offCtx) return;
      offCtx.scale(dpr, dpr);

      offCtx.clearRect(0, 0, rect.width, rect.height);

      // If we have an image and it successfully loaded
      if (img !== ('fallback' as any) && img.naturalWidth) {
        // Calculate perfect draw bounds
        const padding = window.innerWidth >= 768 ? 120 : 24;
        const drawWidth = rect.width - (padding * 2);
        const imgAspect = img.naturalHeight / img.naturalWidth;
        const drawHeight = drawWidth * imgAspect;
        
        const dx = padding;
        const cy = rect.height / 2;
        const dy = cy - (drawHeight / 2) - (window.innerWidth < 768 ? 10 : 30); 
        offCtx.drawImage(img, dx, dy, drawWidth, drawHeight);
      } else {
        // Fallback: If image failed, generate raw text pixels internally! Always guaranteed to work.
        offCtx.fillStyle = 'white';
        offCtx.font = `900 ${window.innerWidth < 768 ? '60px' : '150px'} "Inter", sans-serif`;
        offCtx.textAlign = 'center';
        offCtx.textBaseline = 'middle';
        offCtx.fillText(text, rect.width / 2, rect.height / 2 - 20);
      }

      originalCanvasRef.current = offCanvas;

      // --- Harvest Pixels ---
      try {
        if (img !== ('fallback' as any) && img.dataset.tainted === "true") {
           throw new Error("Canvas is tainted because image loaded without CORS");
        }

        const imageData = offCtx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        const newParticles = [];

        const step = window.innerWidth < 768 ? 6 : 4;
        const cw = canvas.width;
        const ch = canvas.height;

        for (let py = 0; py < ch; py += step) {
          for (let px = 0; px < cw; px += step) {
            const index = (py * cw + px) * 4;
            const a = data[index + 3];
            
            if (a > 30) {
              // Safety: If the user uploaded a black text image, particles would be invisible on black BG. Force white.
              const r = data[index];
              const g = data[index + 1];
              const b = data[index + 2];
              const isDark = (r + g + b) < 20;
              const finalColor = isDark ? `rgba(255, 255, 255, ${a / 255})` : `rgba(${r}, ${g}, ${b}, ${a / 255})`;

              newParticles.push({
                originX: px / dpr, 
                originY: py / dpr,
                angle: (Math.random() - 0.5) * Math.PI * 2,
                speed: Math.random() * 600 + 100,
                size: Math.random() * 1.5 + 0.5,
                wobble: Math.random() * 20,
                color: finalColor
              });
            }
          }
        }

        particles.current = newParticles;
        
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0); 
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(offCanvas, 0, 0);
        ctx.restore();

        setIsReady(true);
      } catch (e) {
        if (e instanceof Error && e.message.includes("is tainted")) {
            console.warn(e.message + " - particle effect disabled.");
        } else {
            console.error("Canvas pixel read failed.", e);
        }
        // Still display the image even if we can't extract particles from it
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0); 
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(offCanvas, 0, 0);
        ctx.restore();
        setIsReady(true);
      }
    };

    // Load image ONLY ONCE, bypass fetch block and restore natural loading
    if (!loadedImgRef.current) {
      const loadWithUrl = (urlToTry: string, allowCors: boolean, useProxy = false) => {
        const img = new Image();
        if (allowCors) {
            img.crossOrigin = "anonymous";
        }

        const finalUrl = useProxy 
          ? `https://images.weserv.nl/?url=${encodeURIComponent(urlToTry.replace(/^https?:\/\//, ''))}` 
          : urlToTry;

        img.onload = () => {
          if (!allowCors) {
             img.dataset.tainted = "true";
          }
          loadedImgRef.current = img;
          initParticles();
        };
        img.onerror = (e) => {
          if (allowCors && !useProxy) {
            console.warn("CORS fetch failed. Falling back to proxy...");
            loadWithUrl(urlToTry, true, true);
          } else if (allowCors && useProxy) {
            console.warn("Proxy also failed. Falling back to non-CORS image load (no particles)...");
            loadWithUrl(urlToTry, false, false);
          } else {
             console.warn("All image load attempts failed. Forcing internal Canvas Font synthesis bypass.", e);
             loadedImgRef.current = 'fallback' as any;
             initParticles();
          }
        };
        img.src = finalUrl;
      };

      loadWithUrl(imageUrl, true, false);
    } else {
      initParticles();
    }

    const handleResize = () => {
      // 1. Instantly redraw to new dimensions to avoid CSS scaling distortion/latency
      const img = loadedImgRef.current;
      if (img && canvasRef.current) {
        const dpr = window.devicePixelRatio || 1;
        const rect = canvasRef.current.getBoundingClientRect();
        canvasRef.current.width = rect.width * dpr;
        canvasRef.current.height = rect.height * dpr;
        const tempCtx = canvasRef.current.getContext('2d');
        if (tempCtx) {
          tempCtx.scale(dpr, dpr);
          
          if (img !== ('fallback' as any) && img.naturalWidth) {
             const padding = window.innerWidth >= 768 ? 120 : 24;
             const drawWidth = rect.width - (padding * 2);
             const drawHeight = drawWidth * (img.naturalHeight / img.naturalWidth);
             const dy = (rect.height / 2) - (drawHeight / 2) - (window.innerWidth < 768 ? 10 : 30);
             tempCtx.drawImage(img as HTMLImageElement, padding, dy, drawWidth, drawHeight);
          } else {
             tempCtx.fillStyle = 'white';
             tempCtx.font = `900 ${window.innerWidth < 768 ? '60px' : '150px'} "Inter", sans-serif`;
             tempCtx.textAlign = 'center';
             tempCtx.textBaseline = 'middle';
             tempCtx.fillText(text, rect.width / 2, rect.height / 2 - 20);
          }
        }
      }

      // 2. Debounce the heavy particle recalculation
      clearTimeout(timeout);
      timeout = window.setTimeout(initParticles, 150);
    };

    const observer = new ResizeObserver(() => {
        handleResize();
    });

    if (canvasRef.current && canvasRef.current.parentElement) {
        observer.observe(canvasRef.current.parentElement);
    }
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      clearTimeout(timeout);
      clearTimeout(retryTimeout);
    };
  }, [text, imageUrl]);

  useAnimationFrame((time) => {
    if (!isReady) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const progress = scrollYProgress.get();
    
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0); // Isolate DPR-scaled space for backdrop effects

    // 1. Pure Crisp State (0 scroll)
    if (progress <= 0.001) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (originalCanvasRef.current) {
            ctx.drawImage(originalCanvasRef.current, 0, 0);
        }
        ctx.restore();
        return;
    }

    // 2. Motion Trail Effect
    ctx.fillStyle = `rgba(0, 0, 0, 0.3)`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 3. Smooth Ghost Fade (Text stands still briefly while sand blows off)
    if (progress < 0.1 && originalCanvasRef.current) {
        ctx.globalAlpha = Math.max(0, 1 - (progress * 10)); // rapid fade to 0
        ctx.drawImage(originalCanvasRef.current, 0, 0);
    }
    
    ctx.restore(); // Re-enable DPR context for correct particle positioning

    // Optimization: Halt rendering if scrolled far away
    if (progress > 0.6) return;

    const opacity = Math.max(0, 1 - progress * 2.5);
    ctx.globalAlpha = opacity;

    const windForce = Math.pow(progress, 1.2) * 500; 

    for (let i = 0; i < particles.current.length; i++) {
        const p = particles.current[i];
        
        let cx = p.originX;
        let cy = p.originY;

        if (progress > 0) {
            const turbulenceAngle = Math.sin(time * 0.001 + p.originY * 0.01) * 0.5;
            const dirX = Math.cos(-Math.PI/4 + turbulenceAngle);
            const dirY = Math.sin(-Math.PI/4 + turbulenceAngle);
            
            cx += dirX * windForce * (p.speed / 300);
            cy += dirY * windForce * (p.speed / 300);
            
            cx += Math.sin(time * 0.002 + p.originX) * p.wobble * (progress * 2);
        }

        ctx.fillStyle = p.color;
        if (progress > 0) {
           ctx.fillRect(cx, cy, p.size * 1.5, p.size * 0.5); // Elongate for blur effect
        } else {
           ctx.fillRect(cx, cy, p.size, p.size);
        }
    }

    ctx.globalAlpha = 1.0;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.1 }}
      className="w-full relative flex justify-center translate-y-[100px] md:translate-y-[200px]"
    >
        {/* Adjusted wrapper to align perfectly with the absolute 80px container bounds */}
        <div className="w-full h-[400px] md:h-[600px] -my-[100px] md:-my-[200px] pointer-events-none">
          <canvas 
              ref={canvasRef} 
              className="w-full h-full pointer-events-none"
          />
        </div>
    </motion.div>
  );
};
