<template>
  <div id="app">
    <div>
      <div id="components">
        <lista-osob></lista-osob>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import ListaOsob from "@/components/ListaOsob.vue";
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

export default {
  name: "lista",
  components: {
    "lista-osob": ListaOsob
  }
};
</script>
