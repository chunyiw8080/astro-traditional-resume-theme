import type { ProjectExperienceConfig } from './types';

const projectExperience: ProjectExperienceConfig[] = [
  {
    project_name: 'Astro-traditional-resume-theme',
    externalURL: true,
    url: 'https://github.com/chunyiw8080/astro-traditional-resume-theme',
    description: '使用 Astro 框架构建的传统简历主题，支持多语言、响应式设计和自定义配置，适用于个人简历网站。',
    responsibility: '负责主题的设计、开发与维护，优化用户体验和性能，并提供详细的文档和示例以便用户快速上手。',
    technology: ['nodeJS','Astro', 'TypeScript', 'Responsive Design'],
  },
  {
    project_name: '某金融机构容器平台自动化发版项目',
    externalURL: false,
    url: '',
    description: '面向金融行业私有云场景交付约 40 节点 Kubernetes 平台，采用 Immutable OS 构建集群节点，并集成云基础设施实现虚拟机自动化发版与生命周期更新。',
    responsibility: '负责集群与产品部署、自动化发版及更新流程验证，并在实施和运行阶段快速响应、定位和推动解决技术问题。',
    technology: ['Kubernetes', 'Immutable OS', 'VM Automation', 'Product Delivery', 'Troubleshooting'],
  },
  {
    project_name: '某跨国企业云平台驻场技术支持',
    externalURL: false,
    url: '',
    description: '客户驻场技术支持与项目交付，面向客户应用及基础设施团队提供平台技术支持，并作为客户与内部研发团队之间的技术沟通窗口，承担全英文技术沟通与项目协调工作。',
    responsibility: '负责平台日常技术支持及故障排查，主持英文客户周会、需求沟通会及平台新功能 Demo；跟踪客户定制开发需求与技术问题，协调客户基础设施团队及内部研发团队推进事项闭环，并按照变更流程完成生产环境变更实施与验证。',
    technology: ['Technical Support', 'Incident Troubleshooting', 'English Communication', 'Customer-facing', 'Requirement Tracking', 'Production Change'],
  },
];

export default projectExperience;
