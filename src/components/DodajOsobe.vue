<template>
  <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <div>
            <h2>Dodaj osobę</h2>
            <form>
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
                <span v-if="!$v.user.radio.required"
                  >Wybór jest obowiązkowy</span
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
                <span v-if="!$v.user.hobby.required"
                  >Wybór jest obowiązkowy</span
                >
                <div class="mt-3">
                  Wybrałeś: <strong>{{ user.hobby }}</strong>
                </div>
              </div>
              <div class="akapit">puste</div>
              <div class="form-group">
                <label for="lastName">Data urodzenia</label>
                <v-date-picker
                  v-model="user.date"
                  :max-date="new Date()"
                  :input-props="{
                    class: 'form-control',
                    placeholder: 'Wpisz datę urodzenia'
                  }"
                  :class="{
                    'is-invalid': submitted && $v.user.date.$error
                  }"
                />
              </div>
              <div
                v-if="submitted && $v.user.date.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.user.date.required">Date is required</span>
              </div>
              <div class="form-group">
                <button
                  @click.prevent="
                    save();
                    clear();
                    handleSubmit();
                    dodaj();
                  "
                  class="btn btn-primary"
                >
                  Zapisz osobę
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, alpha, minLength } from "vuelidate/lib/validators";
import Vue from "vue";
import VCalendar from "v-calendar";

Vue.use(VCalendar);

export default {
  name: "app",
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
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
        required
      },
      hobby: { required },
      radio: { required }
    }
  },
  methods: {
    handleSubmit() {
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
    },
    save() {
      var fn = this.user.firstName;
      var ln = this.user.lastName;
      var bd = this.user.date;
      var gd = this.user.radio;
      var hb = this.user.hobby;

      this.$store.state.items.push({
        first_name: fn,
        last_name: ln,
        birthdate: bd,
        gender: gd,
        hobby: hb
      });
    },
    clear() {
      (this.user.firstName = ""),
        (this.user.lastName = ""),
        (this.user.date = ""),
        (this.user.radio = ""),
        (this.user.hobby = null);
    },
    dodaj() {
      this.$store.commit("dodaj", this.user);
    }
  }
};
</script>
<style lang="scss">
.btn-primary {
  margin-top: 20px;
}
.akapit {
  color: transparent;
}
</style>
