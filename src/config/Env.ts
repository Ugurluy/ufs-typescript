const env = process.env.VUE_APP_ENV || "development";

const local = {
  env: env,
  apiService: "http://localhost:8090/api",
};

// const development = {
//   apiService: "http://localhost:8090",
// };

// const production = {
//   apiService: "http://localhost:8090",
// };

// const test = {
//   apiService: "http://localhost:8090",
// };

const config = {
  local,
  // development,
  // production,
  // test,
};

// const defaultConfigs = {
//   appName: "ufs-admin-page",
//   appDescription: "ufs-admin-page CRM",
//   defaultLanguage: "tr",
//   languages: [
//     { locale: "tr", name: "LANGUAGES.LANG_TR" },
//     { locale: "en", name: "LANGUAGES.LANG_EN" },
//   ],
// };

export default config[env];
