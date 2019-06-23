import Vue from "vue";
import Vuex from "vuex";
import axios from "../axios-auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    key: null,
    userPlans: [],
    midDestinations: []
  },
  mutations: {
    authUser(state, userData) {
      state.key = userData.key;
    },
    clearAuthData(state) {
      state.key = null;
    },
    storePlans(state, plans) {
      state.userPlans = plans;
    },
    clearMidDestinations(state) {
      state.midDestinations = [];
    }
  },
  actions: {
    signup(authData) {
      axios
        .post("/create-user", {
          username: authData.username,
          password: authData.password,
          email: authData.email
        })
        .then(res => {
          console.log(res);
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
          commit("authUser", {
            key: res.data.key
          });
          localStorage.setItem("newTripPlannerKey", res.data.key);
        })
        .catch(error => console.log(error));
    },
    tryAutoLogin({ commit }) {
      const key = localStorage.getItem("newTripPlannerKey");
      if (!key) {
        return;
      }
      commit("authUser", { key: key });
    },
    logout({ commit }) {
      commit("clearAuthData");
      localStorage.removeItem("newTripPlannerKey");
    },
    fetchTripPlan({ commit, getters }, formData) {
      commit("clearMidDestinations");
      if (getters.isAuthenticated) {
        console.log("is authenticated");
        axios
          .get("/create-trip", {headers: {"Authorization": `Token ${getters.getKey}`}}, formData)
          .then(res => {
            console.log(res.data);
          })
          .catch(error => console.log(error));
      } else {
        axios
          .post("/create-trip", formData)
          .then(res => {
            console.log(res.data);
          })
          .catch(error => console.log(error));
      }
      /* const tripPlansJSON = localStorage.getItem("newTripPlannerPlans");
      let tripPlans;
      if (tripPlansJSON !== null) {
        tripPlans = JSON.parse(tripPlansJSON);
      } else {
        tripPlans = [];
      } */
      //tripPlans.push(tripPlan);
      //localStorage.setItem("newTripPlannerPlans", JSON.stringify(tripPlans));
      //commit("storePlans", tripPlans);
    },
    tryAutoFetchTripPlan({ commit }) {
      const tripPlansJSON = localStorage.getItem("newTripPlannerPlans");

      if (tripPlansJSON !== null) {
        commit("storePlans", JSON.parse(tripPlansJSON));
      }
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.key !== null;
    },
    getUserPlans(state) {
      return state.userPlans;
    },
    getKey(state) {
      return state.key
    }
  }
});
