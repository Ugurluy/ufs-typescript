import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

const vuexPersist = new VuexPersist({
  storage: localStorage
});

Vue.use(Vuex);

const store = {
  plugins: [vuexPersist.plugin],
  strict: false,
  state: {
    user: null,
    token: null,
    definitions: []
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setToken(state, payload) {
      state.token = payload;
    },
    setDefinitions(state, payload) {
      state.definitions = payload;
    }    
  },
  actions: {
    addUser({ commit }, payload) {
      commit("setUser", payload);
    },
    addToken({ commit }, payload) {
      commit("setToken", payload);
    },
    addDefinitions({ commit }, payload) {
      commit("setDefinitions", payload);
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    token(state) {
      return state.token;
    },
    definitions(state) {
      return state.definitions;
    }
  }
};

export default new Vuex.Store(store);
