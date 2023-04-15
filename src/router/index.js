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
      {
        path: "/prestacao-de-contas",
        component: () => import("../views/Contas"),
        name: "Contas",
      },
    ],
  },
  {
    path: '/admin/administracao',
    component: () => import('@/layouts/default/Admin.vue'),
    children: [
      {
        path: '',
        name: 'Admin',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/administracao/home.vue'),
      },
      {
        path: '/admin/avisos',
        name: 'admin-avisos',
        component: () => import('@/views/administracao/avisos.vue'),
      },
      {
        path: '/admin/mudancas',
        name: 'admin-mudancas',
        component: () => import('@/views/administracao/mudancas.vue'),
      },
      {
        path: '/admin/reservas',
        name: 'admin-reservas',
        component: () => import('@/views/administracao/reservas.vue'),
      },
      {
        path: '/admin/prestacao-de-contas',
        name: 'admin-prestacao-de-contas',
        component: () => import('@/views/administracao/prestacao-contas.vue'),
      },
      {
        path: '/admin-configs',
        name: 'admin-configuracoes',
        component: () => import('@/views/administracao/configs.vue'),
      },
      {
        path: '/admin-contabilidade',
        name: 'admin-contabilidade',
        component: () => import('@/views/administracao/contabilidade.vue'),
      },
    ]
  },
  {
    path: '/guarita',
    component: () => import('@/layouts/default/Portaria.vue'),
    children: [
      {
        path: '',
        name: 'Guarita',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/portaria/home.vue'),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
