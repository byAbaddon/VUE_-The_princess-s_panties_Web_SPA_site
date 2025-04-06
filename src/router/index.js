import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },

  {
    path: '/menu',
    name: 'menu',
    component: () => import('../views/MenuView.vue')
  },
  {
    path: '/details',
    name: 'details',
    component: () => import('../views/DetailsView.vue')
  },

  {
    path: '/game',
    name: 'game',
    component: () => import('../views/GameView.vue'),
    children: []
  },
  {
    path: '/epilogue',
    name: 'epilogue',
    component: () => import('../views/EpilogueView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {  //go to up page 
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 }
    }
  }
})



export default router;








