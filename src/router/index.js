// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: "/home",
        component: () => import("../views/Home"),
        name: "Início",
      },
      {
        path: "/avisos/:page",
        component: () => import("../views/Avisos"),
        name: "Avisos",
      },
      {
        path: "/avisos/avisosmsg/:id",
        component: () => import("../views/AvisoMsg"),
        name: "Comunicados",
      },
      {
        path: "/reservas",
        component: () => import("../views/Reservas"),
        name: "Reservas",
      },
      {
        path: "/visitantes",
        component: () => import("../views/Visitantes"),
        name: "Visitantes",
      },
      {
        path: "/mudanca",
        component: () => import("../views/Mudanca"),
        name: "Mudança",
      },
      {
        path: "/sindico",
        component: () => import("../views/Sindico"),
        name: "Síndico",
      },
      {
        path: "/boleto",
        component: () => import("../views/Boletos"),
        name: "Boletos",
      },
      {
        path: "/portaria",
        component: () => import("../views/Portaria"),
        name: "Portaria",
      },
      {
        path: "/denuncias",
        component: () => import("../views/Denuncias"),
        name: "Denuncias",
      },
      {
        path: "/entregas",
        component: () => import("../views/Entregas"),
        name: "Correios",
      },
      {
        path: "/aplicativos",
        component: () => import("../views/Aplicativos"),
        name: "Entregas",
      },

    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
