import Vue from "vue";
import Vuex from "vuex";
import axios from "./axios-auth";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    key: null
  },
  mutations: {
    authUser (state, userData) {
      state.key = userData.key
    }
  },
  actions: {
    signup({ commit }, authData) {
      axios
        .post("/create-user", {
          username: authData.username,
          password: authData.password,
          email: authData.email
        })
        .then(res => {
          //console.log(res);
        })
        .catch(error => console.log(error));
    },
    login({ commit }, authData) {
      axios
        .post("/rest-auth/login/", {
          username: authData.username,
          password: authData.password,
          email: authData.email
        })
        .then(res => {
          console.log(res.data.key);
          commit ('authUser', {
            key: res.data.key
          })
        })
        .catch(error => console.log(error));
    }, 
    fetchUserPlans ( {commit} ) {

    },
    storeUser ({commit}) {

    }
  },
  getters: {}
});
