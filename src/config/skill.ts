import type { SkillConfig } from './types';

const skills: SkillConfig[] = [
  {
    title: 'Linux 系统管理',
    description: '熟悉 RHEL 与 Debian 系 Linux 系统运维，掌握磁盘、SSH、NFS、systemd 与 cgroups 等基础组件，具备 Nginx、HAProxy、Keepalived 等基础服务配置及系统、网络故障排查经验。',
    technology: ['RHEL / Debian', 'systemd', 'cgroups', 'SSH', 'NFS', 'Disk & Network Troubleshooting', 'Nginx', 'Keepalived'],
  },
  {
    title: '容器与云平台',
    description: '熟悉 Docker 容器化及 Kubernetes 平台部署与运维，掌握工作负载、调度与亲和性、Service/Ingress、存储、弹性伸缩及应用发布，并具备集群网络、服务访问和应用运行异常排查经验。',
    technology: ['Docker', 'Dockerfile', 'Multi-cluster Management', 'Kubernetes', 'AKS', 'Ingress', 'HPA / VPA', 'Ingress', 'Blue-Green'],
  },
  {
    title: '基础设施与平台交付',
    description: '具备企业私有云与 Kubernetes 平台实施交付经验，熟悉 VMware vSphere、华为 DCS 等虚拟化/云基础设施环境，参与 Immutable OS 节点适配、虚拟机自动化发版及平台网络、负载均衡等基础设施集成与故障排查。',
    technology: ['VMware vSphere', '华为 DCS', 'Immutable OS', 'Kubernetes', 'VM Automation', 'MetalLB', 'Platform Delivery'],
  },
  {
    title: '国际化交付与沟通',
    description: '具备英语工作能力，能够使用全英文完成产品 Demo、主持客户周例会、响应技术咨询与故障，并协调定制需求和生产变更。',
    technology: ['Business English', 'Product Demo', 'Technical Support', 'Weekly Meeting', 'Requirement Tracking', 'Change Management'],
  },
];

export default skills;
