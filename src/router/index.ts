import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import DesiParca from "../views/forms/DesiParca.vue";
import Dikis from "../views/forms/Dikis.vue";
import EkliKece from "../views/forms/EkliKece.vue";
import Haritalama from "../views/forms/Haritalama.vue";
import HookandLoop from "../views/forms/HookandLoop.vue";
import IskartaTakip from "../views/forms/IskartaTakip.vue";
import IzBasim from "../views/forms/IzBasim.vue";
import KaliteKontrol from "../views/forms/KaliteKontrol.vue";
import Kesim from "../views/forms/Kesim.vue";
import KirpimUtu from "../views/forms/KirpimUtu.vue";
import StokAmbalaj from "../views/forms/StokAmbalaj.vue";
import Yapistirma from "../views/forms/Yapistirma.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path:"/desiparca",
    name: "DesiParca",
    component: DesiParca
  },
  {
    path:"/dikis",
    name: "Dikis",
    component: Dikis
  },
  {
    path:"/eklikece",
    name: "EkliKece",
    component: EkliKece
  },
  {
    path:"/haritalama",
    name: "Haritalama",
    component: Haritalama
  },
  {
    path:"/hookandloop",
    name: "HookandLoop",
    component: HookandLoop
  },
  {
    path:"/iskartatakip",
    name: "IskartaTakip",
    component: IskartaTakip
  },
  {
    path:"/izbasim",
    name: "IzBasim",
    component: IzBasim
  },
  {
    path:"/kalitekontrol",
    name: "KaliteKontrol",
    component: KaliteKontrol
  },
  {
    path:"/kesim",
    name: "Kesim",
    component: Kesim
  },
  {
    path:"/kirpimutu",
    name: "KirpimUtu",
    component: KirpimUtu
  },
  {
    path:"/stokambalaj",
    name: "StokAmbalaj",
    component: StokAmbalaj
  },
  {
    path:"/yapistirma",
    name: "Yapistirma",
    component: Yapistirma
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
