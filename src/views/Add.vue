<template>
  <div class="lista-osob">
    <DodajOsobe />
    <ListaOsob />
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from "vue";
import ListaOsob from "@/components/ListaOsob.vue";
import DodajOsobe from "@/components/DodajOsobe.vue";
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);
Vue.use(BootstrapVue);

export default {
  name: "home",
  components: {
    ListaOsob,
    DodajOsobe
  }
};
</script>
