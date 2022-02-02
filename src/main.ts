import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import VueMeta from "vue-meta";
import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import { messages } from "vee-validate/dist/locale/en.json";
import i18n from "./i18n";
import wb from "./registerServiceWorker";

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

Vue.use(VueMeta);

Vue.config.productionTip = false;
Vue.prototype.$workbox = wb;

/**
 * @description Vee-Validate all rules for validation
 */
for (const [rule, validation] of Object.entries(rules)) {
  extend(rule, { ...validation });
}

/**
 * @description Vee-Validate error messages
 */
Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule],
    message: messages[rule]
  });
});

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount("#app");
