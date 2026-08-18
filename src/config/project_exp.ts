import type { ProjectExperienceConfig } from './types';

const projectExperience: ProjectExperienceConfig[] = [
  {
    project_name: '某商业银行私有云 Kubernetes 平台交付',
    externalURL: true,
    url: 'https://example.com/project1',
    description: '基于 VMware vSphere + Immutable OS 方案的企业客户项目，面向某商业银行完成约 30 节点 Kubernetes 平台实施与交付，并在实际客户环境中验证相关部署及运维流程。',
    responsibility: '负责平台现场部署与实施，针对首次 vSphere 环境适配过程中出现的部署及运行问题完成现象复现、日志与环境信息收集，并协调产品及研发团队分析处理；根据解决方案完成现场操作、验证及后续部署，持续推进问题闭环并最终完成平台交付。',
    technology: ['VMware vSphere', 'Kubernetes', 'Immutable OS', 'MetalLB', 'Product Delivery', 'VM Automation', 'Issue Coordination'],
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
