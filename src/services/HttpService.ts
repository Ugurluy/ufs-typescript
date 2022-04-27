import axios from "axios";
import env from "../config/Env";
import store from "@/store/index";

const service = axios.create();

service.interceptors.request.use((config: any) => {
  // if (config.url.indexOf("[api]")) {
  // config.headers = store.getters.token
  config.url = config.url.replace("[api]", env.apiService);
  // }
  return config;
});
export default service;
