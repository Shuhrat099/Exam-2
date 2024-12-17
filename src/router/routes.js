export default [
  {
    path: '/',
    name: 'Home',
    meta: {
      requiresAuth: true,
    },
    component: () => import('../pages/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      requiresAuth: true,
    },
    component: () => import('../pages/About.vue'),
  },
  {
    path: '/blog',
    name: 'Blog',
    meta: {
      requiresAuth: true,
    },
    component: () => import('../pages/Blog.vue'),
  },
]
