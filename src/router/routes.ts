import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/modules/views/Home/Home.vue"),
    meta: {
      title: "Início - Jogo da Memória",
    },
  },
  {
    path: "/game",
    name: "Game",
    component: () => import("@/modules/views/Game/Game.vue"),
    meta: {
      title: "Jogar - Jogo da Memória",
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/modules/views/About/About.vue"),
    meta: {
      title: "Sobre - Jogo da Memória",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/modules/views/NotFound/NotFound.vue"),
    meta: {
      title: "Página não encontrada",
    },
  },
];

export default routes;
