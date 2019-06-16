import Vue from "vue";
import Vuex from "vuex";
import axios from "./axios-auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    key: null,
    userPlans: []
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
          console.log(res);
        })
        .catch(error => console.log(error));
    },
    login({ commit, dispatch }, authData) {
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
    fetchTripPlan({ commit }) {
      let tripPlan = {
        daysRequired: "4",
        tripPeriod: "Jan 24 to Jan 28, 2019",
        orig: "Kathmandu",
        dest: "Pokhara",
        tripAttractions: [
          {
            title: "Bouddha",
            date: "Jan 24",
            strtTime: "8 am",
            endTime: "1 pm",
            hrDmd: "4",
            images: [
              "https://www.newtripplanner.com/blog/content/images/2019/02/Syambhu.jpg",
              "https://www.newtripplanner.com/blog/content/images/size/w1000/2019/02/Bhaktapur-durbar-Square.jpg",
              "https://www.newtripplanner.com/blog/content/images/2019/02/Kathmandu-Durbar-Square.jpg"
            ],
            text:
              "Bouddha is the ancient buddhist stupa and one of the UNESCO Heritage Site located in Kathmandu Valley."
          },
          {
            title: "Swayambhunath",
            date: "Jan 24",
            strtTime: "2 pm",
            endTime: "5 pm",
            hrDmd: "4",
            images: [
              "https://www.newtripplanner.com/blog/content/images/2019/02/Syambhu.jpg",
              "https://www.newtripplanner.com/blog/content/images/size/w1000/2019/02/Bhaktapur-durbar-Square.jpg",
              "https://www.newtripplanner.com/blog/content/images/2019/02/Kathmandu-Durbar-Square.jpg"
            ],
            text:
              "Syambhunath is the ancient buddhist stupa and one of the UNESCO Heritage Site located in Kathmandu Valley."
          },
          {
            driveFrom: "Kathmandu",
            driveTo: "Chitwan",
            driveBy: "Drive",
            date: "Jan 25",
            strtTime: "7 am",
            endTime: "10 am",
            hrsDmd: "4"
          },
          {
            title: "Chitwan National Park",
            date: "Jan 25",
            strtTime: "12 pm",
            endTime: "5 pm",
            hrDmd: "4",
            images: [
              "https://www.newtripplanner.com/blog/content/images/2019/02/ABC.jpg",
              "https://www.newtripplanner.com/blog/content/images/2019/02/Tilicho-lake.jpg",
              "https://www.newtripplanner.com/blog/content/images/size/w1000/2019/01/lake-tilicho.jpg"
            ],
            text: "Chitwan National Park is one of the ancient national park."
          },
          {
            title: "Sauraha",
            date: "Jan 26",
            strtTime: "9 am",
            endTime: "5 pm",
            hrDmd: "4",
            images: [
              "https://www.newtripplanner.com/blog/content/images/2019/02/ABC.jpg",
              "https://www.newtripplanner.com/blog/content/images/2019/02/Tilicho-lake.jpg",
              "https://www.newtripplanner.com/blog/content/images/size/w1000/2019/01/lake-tilicho.jpg"
            ],
            text: "Sauraha is the destination full of natural beauty."
          },
          {
            driveFrom: "Chitwan",
            driveTo: "Pokhara",
            driveBy: "Drive",
            date: "Jan 27",
            strtTime: "9 am",
            endTime: "5 pm",
            hrsDmd: "4"
          },
          {
            title: "Lake Phewa",
            date: "Jan 28",
            strtTime: "6 am",
            endTime: "12 pm",
            hrDmd: "4",
            images: [
              "https://www.newtripplanner.com/blog/content/images/2019/02/ABC.jpg",
              "https://www.newtripplanner.com/blog/content/images/2019/02/Tilicho-lake.jpg",
              "https://www.newtripplanner.com/blog/content/images/size/w1000/2019/01/lake-tilicho.jpg"
            ],
            text: "Phewa Lake is one of the beautiful places in Nepal."
          },
          {
            title: "Sarangkot",
            date: "Jan 28",
            strtTime: "1 pm",
            endTime: "5 pm",
            hrDmd: "4",
            images: [
              "https://www.newtripplanner.com/blog/content/images/2019/02/ABC.jpg",
              "https://www.newtripplanner.com/blog/content/images/2019/02/Tilicho-lake.jpg",
              "https://www.newtripplanner.com/blog/content/images/size/w1000/2019/01/lake-tilicho.jpg"
            ],
            text:
              "Sarangkot is one of the most fascinating destination in Pokhara."
          }
        ]
      };
      const tripPlansJSON = localStorage.getItem("newTripPlannerPlans");
      let tripPlans;
      if (tripPlansJSON !== null) {
        tripPlans = JSON.parse(tripPlansJSON);
      } else {
        tripPlans = [];
      }
      tripPlans.push(tripPlan);
      localStorage.setItem("newTripPlannerPlans", JSON.stringify(tripPlans));
      commit("storePlans", tripPlans);
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
    }
  }
});
