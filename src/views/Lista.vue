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

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 10px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
