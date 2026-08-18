export interface OverallConfig {
  name: string;
  monogram: string;
  siteLabel: string;
  avatarUrl: string;
  availability: string;
  role: string;
  subtitle: string;
  bannerIntro: string;
  location: string;
  languages: string;
  email: string;
  enableResumeDownload: boolean;
  resumeDownloadURL: string;
  footerYear: number;
  closingEyebrow: string;
  closingTitle: string[];
  socialText: string;
}

export interface SkillConfig {
  title: string;
  description: string;
  technology: string[];
}

export interface WorkExperienceConfig {
  time: string;
  company: string;
  job_title: string;
  location: string;
  description: string;
  content: string[];
}

export interface ProjectExperienceConfig {
  project_name: string;
  externalURL: boolean;
  url: string;
  description: string;
  responsibility: string;
  technology: string[];
}

export interface EducationExperienceConfig {
  time: string;
  institution: string;
  major: string;
  location: string;
}

export interface ExtraConfig {
  title: string;
  externalURL: boolean;
  url: string;
  content: string | string[];
}
