export type Locale = 'en' | 'zh';

export interface GlobalConfig {
  email: string;
  socials: {
    linkedin: string;
    twitter: string;
  };
}

export interface NavDict {
  projects: string;
  about: string;
  awards: string;
  contact: string;
}

export interface HeroDict {
  title: string;
  subtitle: string;
  backgroundVideoUrl: string;
  particleImageUrl: string;
}

export interface AboutDict {
  title: string;
  description: string;
  tags: string[];
}

export interface ProjectItemDict {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  accentColor: string;
  link: string;
}

export interface ProjectsDict {
  title: string;
  items: ProjectItemDict[];
}

export interface CaseStudyDict {
  metricsLabel: string;
  performanceData: string;
}

export interface AwardItemDict {
  year: string;
  name: string;
}

export interface AwardsDict {
  title: string;
  items: AwardItemDict[];
}

export interface SiteConfig {
  i18n: {
    defaultLocale: Locale;
    locales: Locale[];
  };
  global: GlobalConfig;
  nav: Record<Locale, NavDict>;
  hero: Record<Locale, HeroDict>;
  about: Record<Locale, AboutDict>;
  projects: Record<Locale, ProjectsDict>;
  caseStudy: Record<Locale, CaseStudyDict>;
  awards: Record<Locale, AwardsDict>;
}

export const siteConfig: SiteConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
  },
  global: {
    email: 'hello@nicki.design',
    socials: {
      linkedin: 'https://linkedin.com/in/nickidesign',
      twitter: 'https://twitter.com/nickidesign',
    },
  },
  nav: {
    en: {
      projects: 'PROJECT',
      about: 'ABOUT',
      awards: 'AWARDS',
      contact: 'CONTACT',
    },
    zh: {
      projects: '作品档案',
      about: '关于我',
      awards: '国际荣誉',
      contact: '联系我',
    },
  },
  hero: {
    en: {
      title: 'PORTFOLIO',
      subtitle: 'VISUAL & AI EXPERIENCE',
      backgroundVideoUrl: '/assets/video-bg.mp4',
      particleImageUrl: 'https://img.nickiresume.cn/Nimage/01-1.webp',
    },
    zh: {
      title: 'PORTFOLIO',
      subtitle: '视觉与 AI 体验探索',
      backgroundVideoUrl: '/assets/video-bg.mp4',
      particleImageUrl: 'https://img.nickiresume.cn/Nimage/01-1.webp',
    },
  },
  about: {
    en: {
      title: 'ABOUT ME',
      description: '12 Years of Crafting Future-Forward Digital Identities. Operating at the intersection of Web3, Fintech, and AI-driven workflows.',
      tags: ['Creative Direction', 'Web3', 'Fintech', 'AI Automation', 'Interaction Design'],
    },
    zh: {
      title: 'ABOUT ME',
      description: '12 年设计管理经验。游走于 Web3、金融科技与 AI 自动化工作流的交汇处，专注构建具有前瞻性的数字体验。',
      tags: ['创意指导', 'Web3体系', '金融科技', 'AI 自动化', '交互探索'],
    },
  },
  projects: {
    en: {
      title: 'SELECTED ARCHIVES',
      items: [
        {
          id: 'aston-martin',
          title: 'ASTON MARTIN: SILVER WINGS',
          category: 'AI Workflow',
          thumbnail: '/assets/projects/aston-martin.jpg',
          accentColor: '#D4A017',
          link: '/case-study/aston-martin',
        },
        {
          id: 'web3-payment',
          title: 'WEB3 PAYMENT SYSTEM',
          category: 'Product & Brand',
          thumbnail: '/assets/projects/web3-payment.jpg',
          accentColor: '#00FF66',
          link: '/case-study/web3-payment',
        },
        {
          id: 'digital-immortality',
          title: 'DIGITAL IMMORTALITY',
          category: 'AI Twin Experience',
          thumbnail: '/assets/projects/digital-immortality.jpg',
          accentColor: '#86868B',
          link: '/case-study/digital-immortality',
        },
        {
          id: 'design-automation-os',
          title: 'DESIGN AUTOMATION OS',
          category: 'Internal Tools',
          thumbnail: '/assets/projects/design-automation.jpg',
          accentColor: '#E5E5EA',
          link: '/case-study/design-automation',
        },
      ],
    },
    zh: {
      title: 'SELECTED ARCHIVES',
      items: [
        {
          id: 'aston-martin',
          title: '阿斯顿·马丁：银色之翼',
          category: 'AI 工作流',
          thumbnail: '/assets/projects/aston-martin.jpg',
          accentColor: '#D4A017',
          link: '/case-study/aston-martin',
        },
        {
          id: 'web3-payment',
          title: 'Web3 支付系统',
          category: '产品与品牌体系',
          thumbnail: '/assets/projects/web3-payment.jpg',
          accentColor: '#00FF66',
          link: '/case-study/web3-payment',
        },
        {
          id: 'digital-immortality',
          title: '数字永生',
          category: 'AI 孪生体验',
          thumbnail: '/assets/projects/digital-immortality.jpg',
          accentColor: '#86868B',
          link: '/case-study/digital-immortality',
        },
        {
          id: 'design-automation-os',
          title: '设计自动化系统',
          category: '企业级基建',
          thumbnail: '/assets/projects/design-automation.jpg',
          accentColor: '#E5E5EA',
          link: '/case-study/design-automation',
        },
      ],
    },
  },
  caseStudy: {
    en: {
      metricsLabel: 'Performance Metrics',
      performanceData: 'Delivering up to 60-80% efficiency boost in asset production.',
    },
    zh: {
      metricsLabel: '效能提升',
      performanceData: '在资产规模化产出阶段，提供了 60-80% 的效能跃升。',
    },
  },
  awards: {
    en: {
      title: 'HONORS & AWARDS',
      items: [
        { year: '2024', name: 'Awwwards Site of the Month' },
        { year: '2023', name: 'FWA of the Day' },
        { year: '2022', name: 'Red Dot Design Award' },
      ],
    },
    zh: {
      title: 'HONORS & AWARDS',
      items: [
        { year: '2024', name: 'Awwwards 月度最佳网站' },
        { year: '2023', name: 'FWA 每日最佳' },
        { year: '2022', name: '红点设计传达大奖' },
      ],
    },
  },
};
