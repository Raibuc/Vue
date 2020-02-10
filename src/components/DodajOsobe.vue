<template>
  <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <div>
            <h2>Dodaj osobę</h2>
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="firstName">First Name</label>
                <input
                  type="text"
                  v-model="user.firstName"
                  id="firstName"
                  name="firstName"
                  class="form-control"
                  placeholder="First Name"
                  :class="{
                    'is-invalid': submitted && $v.user.firstName.$error
                  }"
                />
                <div
                  v-if="submitted && $v.user.firstName.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.user.firstName.required"
                    >First Name is required</span
                  >
                  <span v-if="!$v.user.firstName.alpha">Only characters </span>
                  <span v-if="!$v.user.firstName.minLength"
                    >First Name must be at least 2 characters</span
                  >
                </div>
              </div>
              <div class="form-group">
                <label for="lastName">Last Name</label>
                <input
                  type="text"
                  v-model="user.lastName"
                  id="lastName"
                  name="lastName"
                  class="form-control"
                  placeholder="Last Name"
                  :class="{
                    'is-invalid': submitted && $v.user.lastName.$error
                  }"
                />
                <div
                  v-if="submitted && $v.user.lastName.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.user.lastName.required"
                    >Last Name is required</span
                  >
                  <span v-if="!$v.user.lastName.alpha">Only characters </span>
                  <span v-if="!$v.user.lastName.minLength"
                    >Last Name must be at least 2 characters</span
                  >
                </div>
              </div>
              <div class="form-group">
                <label for="password">Birthdate</label>
                <input
                  type="date"
                  v-model="user.date"
                  id="date"
                  name="date"
                  class="form-control"
                  :class="{
                    'is-invalid': submitted && $v.user.date.$error
                  }"
                />
                <div
                  v-if="submitted && $v.user.date.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.user.date.required">Date is required</span>
                  <span v-if="!$v.user.date.maxValue">Nieprawidłowa data</span>
                </div>
              </div>
              <b-form-group label="Płeć">
                <b-form-radio
                  v-model="user.radio"
                  name="some-radios"
                  value="Mężczyzna"
                  >Mężczyzna</b-form-radio
                >
                <b-form-radio
                  v-model="user.radio"
                  name="some-radios"
                  value="Kobieta"
                  >Kobieta</b-form-radio
                >
                <div class="mt-3">
                  Wybrałeś: <strong>{{ user.radio }}</strong>
                </div>
              </b-form-group>
              <div>
                <b-form-select
                  v-model="user.hobby"
                  :options="user.options"
                ></b-form-select>
                <div class="mt-3">
                  Wybrałeś: <strong>{{ user.hobby }}</strong>
                </div>
              </div>
              <div class="form-group">
                <button class="btn btn-primary">Zapisz osobę</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, alpha, minLength, maxValue } from "vuelidate/lib/validators";

export default {
  name: "app",
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        date: "",
        radio: "",
        hobby: null,
        options: [
          { value: null, text: "Wskaż prosze swoje główne zainteresowania" },
          { value: "React", text: "React" },
          { value: "Vue", text: "Vue" },
          { value: "Angular", text: "Angular" }
        ]
      },
      submitted: false
    };
  },
  validations: {
    user: {
      firstName: { required, alpha, minLength: minLength(3) },
      lastName: { required, alpha, minLength: minLength(3) },
      date: {
        required,
        maxValue: maxValue(new Date())
      }
    }
  },
  methods: {
    handleSubmit() {}
  }
};
</script>
