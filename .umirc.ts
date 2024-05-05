import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '记账本后台管理系统',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/login',
      component: './Login',
      menuRender: false,
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '用户管理',
      path: '/user',
      component: './User',
    },
    {
      name: '账单管理',
      path: '/cash',
      component: './Cash',
    },
  ],
  npmClient: 'pnpm',
});
