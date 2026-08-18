import type { ExtraConfig } from './types';

const extra: ExtraConfig[] = [
  {
    title: '语言能力',
    externalURL: false,
    url: '',
    content: ['汉语普通话 — 母语', '日语 — 日本语能力检定 N1'],
  },
  {
    title: '个人荣誉',
    externalURL: false,
    url: '',
    content: ['2020 年 校级优秀学生奖学金', '2021 年 校级程序设计竞赛一等奖'],
  },
  {
    title: '个人博客',
    externalURL: true,
    url: 'https://example.com/blog',
    content: '长期维护的个人技术博客，记录 Linux、Kubernetes、云平台相关技术实践。',
  },
];

export default extra;
