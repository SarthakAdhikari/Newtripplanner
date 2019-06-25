import Vue from "vue";
import Vuex from "vuex";
import axios from "../axios-auth";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    key: null,
    midDestinations: [],
    tripIDs: [],
    userPlans: [],
    individualResponse: null,
    viewTripID: null
  },
  mutations: {
    authUser(state, userData) {
      state.key = userData.key;
    },
    clearAuthData(state) {
      state.key = null;
    },
    storePlansID(state, plansID) {
      state.tripIDs = plansID;
    },
    clearMidDestinations(state) {
      state.midDestinations = [];
    },
    storePlans(state, plans) {
      state.userPlans = plans;
    },
    storeIndividualResponse(state, payload) {
      state.individualResponse = payload;
    },
    storeViewTripID(state, payload) {
      state.viewTripID = payload;
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
          commit("authUser", {
            key: res.data.key
          });
          localStorage.setItem("newTripPlannerKey", res.data.key);
          router.push("/");
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
        axios
          .post(
            "/create-trip",
            { headers: { Authorization: `Token ${getters.getKey}` } },
            formData
          )
          .then(res => {
            console.log(res.data);
          })
          .catch(error => console.log(error));
      } else {
        axios
          .post("/create-trip", formData)
          .then(res => {
            let tripID = res.data.trip_id;
            let tripIDs;
            const tripIDsJSON = localStorage.getItem("newTripIDs");

            let tripResponses = [];

            if (tripIDsJSON !== null) {
              tripIDs = JSON.parse(tripIDsJSON);
            } else {
              tripIDs = [];
            }

            tripIDs.push(tripID);

            tripIDs.forEach((el, index) => {
              axios
                .get("http://newtripplanner.com/app/core/view-trip/92")
                .then(res => {
                  commit("storeIndividualResponse", res.data);
                  const response = {
                    response: res.data,
                    trip_id: el
                  };
                  tripResponses.push(response);
                  
                  if (index === (tripIDs.length - 1)) {
                    commit("storePlansID", tripIDs);
                    commit("storePlans", tripResponses);
                    localStorage.setItem("newTripIDs", JSON.stringify(tripIDs));
                    localStorage.setItem(
                      "newTripPlans",
                      JSON.stringify(tripResponses)
                    );
                    router.push("/trip-plan-response");
                  }
                })
                .catch(error => console.log(error));
            });

            setTimeout(() => {
              //
            }, 2000 * tripIDs.length);
          })
          .catch(error => console.log(error));
      }
    },
    tryAutoFetchTripPlan({ commit }) {
      const tripPlansJSON = localStorage.getItem("newTripPlans");
      const tripIDsJSON = localStorage.getItem("newTripIDs");

      if (tripIDsJSON !== null) {
        commit("storePlansID", JSON.parse(tripPlansJSON));
      }

      if (tripPlansJSON !== null) {
        commit("storePlans", JSON.parse(tripPlansJSON));
      }
    },
    viewTrip({ commit }, payload) {
      commit("storeViewTripID", payload);
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
      return state.key;
    },
    getTripIDs(state) {
      return state.tripIDs;
    },
    getIndividualResponse(state) {
      return state.individualResponse;
    },
    getViewTripID(state) {
      return state.viewTripID;
    }
  }
});
