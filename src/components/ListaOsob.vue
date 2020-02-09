<template>
  <div id="lista-osob">
    <h2>Lista osób</h2>
    <table class="table table-bordered table striped">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Birthdate</th>
          <th>Gender</th>
          <th>Hobby</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" v-bind:key="item.id">
          <td>{{ item.first_name }}</td>
          <td>{{ item.last_name }}</td>
          <td>{{ item.birthdate }}</td>
          <td>{{ item.gender }}</td>
          <td>{{ item.hobby }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.state.items;
    }
  }
};
</script>

<style scoped lang="scss"></style>
