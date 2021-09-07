import loadable from '@loadable/component';

import Layout from '@/layouts';
import Home from '@/pages/home';

const routesConfig = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  // h5 路由
  {
    path: '/h5',
    exact: true,
    component: Layout,
    routes: [
      {
        path: '/',
        exact: false,
        component: loadable(() => import('@/pages/h5')),
      },
    ],
  },
];

export default routesConfig;
