<template>
  <div>
    <div class="container">
      <b-table striped hover :items="items"></b-table>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Vue.use(Vuelidate);
Vue.use(BootstrapVue);

export default {
  data() {
    return {
      items: [
        {
          first_name: "Dickerson",
          last_name: "Macdonald",
          birthdate: "12.02.1977",
          gender: "male",
          hobby: "react, vue"
        },
        {
          first_name: "Larsen",
          last_name: "Shaw",
          birthdate: "10.04.1980",
          gender: "male",
          hobby: "vue"
        },
        {
          first_name: "Geneva",
          last_name: "Wilson",
          birthdate: "24.06.1982",
          gender: "female",
          hobby: "react, vue"
        },
        {
          first_name: "Jami",
          last_name: "Carney",
          birthdate: "26.01.1970",
          gender: "female",
          hobby: "react"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss"></style>
