<template>
  <div>
    <div id="form1">
      <form
        v-on:submit.prevent="
          przetworz();
          wyzerujFormularz();
        "
      >
        <p>
          <label>
            Imię
            <input v-model="fName" type="text" placeholder="Imię" />
          </label>
        </p>
        <p>
          <label>
            Nazwisko
            <input v-model="lName" type="text" placeholder="Nazwisko" />
          </label>
        </p>
        <p>
          <label>
            Data urodzenia
            <input v-model="date" type="date" placeholder="" />
          </label>
        </p>
        <p>
          <label>
            Technologia
            <select v-model="wybranatechnologia">
              <option disabled value="">Wybierz</option>
              <option
                v-for="tech in technologie"
                v-bind:value="tech"
                v-bind:key="tech"
              >
                {{ tech }}
              </option>
            </select>
          </label>
        </p>
        <!-- <p>
        <label>
          Szkolenie komercyjne ?
          <input type="checkbox" v-model="komercyjne" />
        </label>
      </p> -->
        <p>
          Płeć
          <label>
            <input v-model="gender" type="checkbox" value="Mężczyzna" />
            Mężczyzna
          </label>
          <label>
            <input v-model="gender" type="checkbox" value="Kobieta" />
            Kobieta
          </label>
        </p>
        <input type="submit" value="Zapisz" />
      </form>
      <!-- <p>Wpisałeś następujący kod: {{ kodszkolenia }}</p>
    <div id="courselist" v-if="szkolenia.length">
      <ul>
        <li v-for="szkol of szkolenia" v-bind:key="szkol.kodszkolenia">
          {{ szkol.kodszkolenia }}/{{ szkol.wybranatechnologia }}
          {{ szkol.komercyjne ? "komercyjne" : "dofinansowane" }}, poziom wiedzy
          {{ szkol.poziom }}
        </li>
      </ul>
    </div> -->
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kodszkolenia: "",
      wybranatechnologia: "",
      komercyjne: false,
      poziom: "",
      technologie: ["React", "Vue", "Angular"],
      szkolenia: []
    };
  },
  methods: {
    przetworz: function() {
      // alert(this.kodszkolenia+' '+this.wybranatechnologia+' '+this.komercyjne+' '+this.poziom)
      this.szkolenia.push({
        kodszkolenia: this.kodszkolenia,
        wybranatechnologia: this.wybranatechnologia,
        komercyjne: this.komercyjne,
        poziom: this.poziom
      });
    },
    wyzerujFormularz: function() {
      this.kodszkolenia = "";
      this.wybranatechnologia = "";
      this.komercyjne = false;
      this.poziom = "";
    }
  }
};
</script>

<style scoped lang="scss"></style>
