import type { WorkExperienceConfig } from './types';

const workExperience: WorkExperienceConfig[] = [
  {
    time: '2026.04 — 至今',
    company: '云驰信息技术有限公司',
    job_title: '实施工程师',
    location: '杭州, 中国',
    description: '负责企业私有云 Kubernetes 平台项目实施、交付与运维，提供生产环境技术支持并协调相关团队推进技术问题闭环。',
    content: [
      '参与软件实施、私有云及 Kubernetes 平台交付，负责相关云原生组件的部署、配置、升级与日常运维，处理集群网络、存储、服务访问及应用运行异常等问题。',
      '负责大型企业客户私有云/容器平台项目交付，在客户生产及测试环境中完成平台部署、变更实施、故障排查与技术支持。',
      '参与基于 VMware vSphere 等基础设施环境的云平台建设，负责 Immutable OS 节点环境适配、Kubernetes 平台部署及环境集成工作。',
      '负责客户环境中的 Linux 系统、虚拟化及 Kubernetes 平台故障定位，通过日志、网络抓包、系统及集群状态等信息分析并解决部署与运行问题。',
      '承担项目交付过程中的客户沟通与协调工作，负责需求对接、技术方案沟通及跨团队协作，协调客户基础设施团队与内部研发团队推进项目实施及问题闭环。',
    ],
  },
  {
    time: '2022.12 - 2024.09',
    company: 'Meridian Hospitality Group',
    job_title: 'DevOps 工程师',
    location: '堪培拉, 澳大利亚',
    description: '负责度假村酒店与餐厅在线预订系统的运维、容器化交付、数据库高可用及事件响应。',
    content: [
      '负责 Azure Kubernetes Service（AKS）集群及 Azure Database for MySQL 实例的日常运维，执行数据库备份、恢复及相关运行维护工作。',
      '对接外包开发团队完成应用交付，编写 Dockerfile 及 Kubernetes YAML，负责应用镜像构建与仓库推送，并通过 Deployment、Service、ConfigMap 等 Kubernetes 资源完成应用部署与配置管理。',
      '根据业务旺季及低谷期负载变化配置 HPA/VPA，并结合 AKS 节点扩缩容动态调整计算资源，降低低负载期间的资源闲置与云资源成本。',
      '参与应用版本发布与更新，结合灰度发布、蓝绿部署及回滚机制降低版本变更对在线业务的影响，保障应用更新过程中的业务连续性。',
      '维护 MySQL 数据库备份机制，通过独立 MySQL 副本执行全量及增量备份，降低备份任务对生产数据库 I/O 及在线业务的影响。',
      '参与 7×24 小时轮值，基于 Prometheus 与 Alertmanager 进行应用及集群监控、告警响应与故障排查，保障在线预订系统稳定运行。',
    ],
  },
  {
    time: '2021.09 - 2022.03',
    company: 'BrightPixel Digital Marketing',
    job_title: 'DevOps Intern',
    location: '堪培拉, 澳大利亚',
    description: '为中小型商户的在线商店、企业官网和博客提供部署、运维、资源优化与技术支持。',
    content: [
      '负责客户网站的部署和运维，保障在线商店、企业官网及博客等系统的可用性与稳定性。',
      '通过 Ansible 与 Shell 实现服务器环境标准化，大幅缩短应用部署所需时间；结合 Crontab 与 Mailx 提升自动监控和告警效率。',
      '负责域名、DNS 及 DV / OV SSL 证书的申请、部署和续期，并引入 ACME 自动化降低域名维护成本。',
    ],
  },
];

export default workExperience;
