import { createRouter, createWebHistory } from 'vue-router';

import routes from './routes.js';
// const isAuthorized = localStorage.getItem('token');

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (!isAuthorized && !to.meta.requiresAuth) {
//     return next({ name: "Login" });
//   } else if (isAuthorized && to.meta.isAuthPage) {
//     return next({ name: "Dashboard" });
//   } else {
//   return next();
//   }
// });

export default router;
