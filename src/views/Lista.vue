<template>
  <div id="app">
    <div>
      <div id="components">
        <lista-osob></lista-osob>
        <dodaj-osobe></dodaj-osobe>
      </div>
    </div>
  </div>
</template>

<script>
import ListaOsob from "@/components/ListaOsob.vue";
import DodajOsobe from "@/components/DodajOsobe.vue";

export default {
  name: "lista",
  components: {
    "lista-osob": ListaOsob,
    "dodaj-osobe": DodajOsobe
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
