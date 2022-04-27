import Vue from "vue";
import VueRouter from "vue-router";

import HomeComp from "../components/HomeComp.vue";
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

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeComp,
      // meta:{ requiresAuth: true }
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/desiparca",
      name: "DesiParca",
      component: DesiParca,
      // meta:{ requiresAuth: true }
    },
    {
      path: "/dikis",
      name: "Dikis",
      component: Dikis,
      // meta:{ requiresAuth: true }
    },
    {
      path: "/eklikece",
      name: "EkliKece",
      component: EkliKece,
      // meta:{ requiresAuth: true }
    },
    {
      path: "/haritalama",
      name: "Haritalama",
      component: Haritalama,
      // meta:{ requiresAuth: true }
    },
    {
      path: "/iskartatakip",
      name: "IskartaTakip",
      component: IskartaTakip,
      // meta:{ requiresAuth: true }
    },
    {
      path: "/hookandloop",
      name: "HookandLoop",
      component: HookandLoop,
      // meta:{ requiresAuth: true }
    },
    {
      path: "/izbasim",
      name: "IzBasim",
      component: IzBasim,
      // meta:{ requiresAuth: true }
    },
    {
      path: "/kalitekontrol",
      name: "KaliteKontrol",
      component: KaliteKontrol,
      // meta:{ requiresAuth: true }
    },
    {
      path: "/kesim",
      name: "Kesim",
      component: Kesim,
      // meta:{ requiresAuth: true }
    },
    {
      path: "/kirpimutu",
      name: "KirpimUtu",
      component: KirpimUtu,
      // meta:{ requiresAuth: true }
    },
    {
      path: "/stokambalaj",
      name: "StokAmbalaj",
      component: StokAmbalaj,
      // meta:{ requiresAuth: true }
    },
    {
      path: "/yapistirma",
      name: "Yapistirma",
      component: Yapistirma,
      // meta:{ requiresAuth: true }
    },
  ],
});

export default router;
