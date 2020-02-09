<template>
  <div class="lista-osob">
    <span>===============to jest właściwa lista osób ze store===========</span>
    <ListaOsob />
    <span>==============================================================</span>
    <DodajOsobe />
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

Vue.use(BootstrapVue);

export default {
  name: "home",
  components: {
    ListaOsob,
    DodajOsobe
  }
};
</script>
