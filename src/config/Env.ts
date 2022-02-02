const Env = process.env.NODE_ENV || "development";

const local = {
  apiService: "http://localhost:8080"
};

const development = {
  apiService: "http://localhost:8080"
};

const production = {
  apiService: "http://localhost:8080"
};

const test = {
  apiService: "http://localhost:8080"
};

const config = {
  local,
  development,
  production,
  test
};

const defaultConfigs = {
  appName: "ufs-admin-page",
  appDescription: "ufs-admin-page CRM",
  defaultLanguage: "tr",
  languages: [
    { locale: "tr", name: "LANGUAGES.LANG_TR" },
    { locale: "en", name: "LANGUAGES.LANG_EN" }
  ]
};

export default { ...config[Env], ...defaultConfigs };
