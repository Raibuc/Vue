import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
      {
        id: 1,
        first_name: "Dickerson",
        last_name: "Macdonald",
        birthdate: "12.02.1977",
        gender: "male",
        hobby: "react, vue"
      },
      {
        id: 2,
        first_name: "Larsen",
        last_name: "Shaw",
        birthdate: "10.04.1980",
        gender: "male",
        hobby: "vue"
      },
      {
        id: 3,
        first_name: "Geneva",
        last_name: "Wilson",
        birthdate: "24.06.1982",
        gender: "female",
        hobby: "react, vue"
      },
      {
        id: 4,
        first_name: "Jami",
        last_name: "Carney",
        birthdate: "26.01.1970",
        gender: "female",
        hobby: "react"
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
