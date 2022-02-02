import axios from "axios";
import Env from "../config/Env";
import store from "@/store/index";

const service = axios.create();

service.interceptors.request.use((config: any) => {
  if (config.url.indexOf("[api]") > -1) {
    // config.headers = store.getters.token
    config.url = config.url.replace("[api]", Env.apiService);
  }
  return config;
});
export default service;
