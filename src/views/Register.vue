<template>
  <div id="login-page" class="row">
    <div class="col s12 z-depth-6 card-panel">
      <div class="row">
        <div class="col">
          <h4 style="margin-left: 125px"><b>Create Account</b></h4>
        </div>
      </div>
      <form @submit.prevent="handleSubmit" class="login-form">
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">person</i>
            <input
              class="validate"
              id="username"
              v-model.trim="username"
              @blur='$v.username.$touch()'
              type="text"
              :class="{invalid: ($v.username.$dirty && !$v.username.required) || ($v.username.$dirty && !$v.username.maxLength)}"
            >
            <label for="username" data-error="wrong" data-success="right">Username*</label>
            <small
              class="helper-text invalid red-text"
              v-if="$v.username.$dirty && !$v.username.required"
            >Username field can not be empty</small>
            <small
              class="helper-text invalid red-text"
              v-if="$v.username.$dirty && !$v.username.maxLength"
            >Username field can not contain more than 150 characters</small>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="input-field col s6">
              <input
                class="validate"
                id="first_name"
                v-model="first_name"
                @blur='$v.first_name.$touch()'
                type="text"
                :class="{invalid: $v.first_name.$dirty && !$v.first_name.alpha}"
              >
              <label for="first_name" data-error="wrong" data-success="right">First Name</label>
              <small
                class="helper-text invalid red-text"
                v-if="$v.first_name.$dirty && !$v.first_name.alpha"
              >This field accepts only alphabet characters.</small>
            </div>
            <div class="input-field col s6">
              <input
                class="validate"
                id="last_name"
                v-model="last_name"
                @blur='$v.last_name.$touch()'
                type="text"
                :class="{invalid: $v.last_name.$dirty && !$v.last_name.alpha}"
              >
              <label for="last_name" data-error="wrong" data-success="right">Last Name</label>
              <small
                class="helper-text invalid red-text"
                v-if="$v.last_name.$dirty && !$v.last_name.alpha"
              >This field accepts only alphabet characters.</small>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <vue-tel-input
              class="validate"
              v-model.trim="phone"
              v-on:country-changed="countryChanged"
              v-bind="bindProps"
              @blur='$v.phone.$touch()'
              :class="{invalid: ($v.phone.$dirty && !$v.phone.required) || ($v.phone.$dirty && !$v.phone.numeric)}"
            ></vue-tel-input>
            <p
              class="helper-text invalid red-text"
              v-if="$v.phone.$dirty && !$v.phone.required"
            >This field is required</p>
            <small
              class="helper-text invalid red-text"
              v-if="$v.phone.$dirty && !$v.phone.numeric"
            >This field can contain only numeric symbols</small>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">email</i>
            <input class="validate"
                   id="email"
                   v-model.trim="email"
                   @blur='$v.email.$touch()'
                   :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
                   type="text"
            >
            <label for="email" data-error="wrong" data-success="right">Email*</label>
            <small
              class="helper-text invalid red-text"
              v-if="$v.email.$dirty && !$v.email.email"
            >Email address is incorrect</small>
            <small
              class="helper-text invalid red-text"
              v-else-if="$v.email.$dirty && !$v.email.required"
            >Email field can not be empty</small>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">lock_outline</i>
            <input
              id="password"
              v-model.trim="password"
              type="password"
              @blur='$v.password.$touch()'
              :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
            >
            <label for="password">Password*</label>
            <small
              class="helper-text invalid red-text"
              v-if="$v.password.$dirty && !$v.password.required"
            >This field can not be empty</small>
            <small
              class="helper-text invalid red-text"
              v-if="$v.password.$dirty && !$v.password.minLength"
            >Password is too short</small>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">lock_outline</i>
            <input
              id="password2"
              v-model="password2"
              type="password"
              @blur='$v.password2.$touch()'
              :class="{invalid: ($v.password2.$dirty && !$v.password2.required) || ($v.password2.$dirty && !$v.password2.sameAsPassword)}"
            >
            <label for="password2">Confirm Password*</label>
            <small
              class="helper-text invalid red-text"
              v-if="$v.password2.$dirty && !$v.password2.required"
            >This field is required</small>
            <small
              class="helper-text invalid red-text"
              v-else-if="$v.password2.$dirty && !$v.password2.sameAsPassword"
            >Passwords did not match. Try again.</small>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <button type="submit" href="#" class="btn waves-effect waves-light col s12">Create account</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import {mapActions} from 'vuex'
import VueTelInput from 'vue-tel-input'
import axios from "axios";
import {required, email, alpha, numeric, sameAs, minLength, maxLength} from 'vuelidate/lib/validators'

Vue.use(VueTelInput)

export default {
  name: 'Register',
  props: ['website'],
  data() {
    return {
      username: undefined,
      first_name: undefined,
      last_name: undefined,
      email: undefined,
      password: undefined,
      password2: undefined,

      phone: undefined,
      country: undefined,

      bindProps: {
        dynamicPlaceholder: true,
        maxLen: 17,
        disabledFetchingCountry: false,
        preferredCountries: ['IL', 'US', 'RU'],
      }
    }
  },
  validations: {
    username: {required, maxLength: maxLength(150)},
    first_name: {alpha},
    last_name: {alpha},
    phone: {required, numeric},
    country: {required},
    email: {email, required},
    password: {required, minLength: minLength(9)},
    password2: {required, sameAsPassword: sameAs('password')},
  },
  methods: {
    ...mapActions(['login']),
    countryChanged(country) {
      this.country = country.dialCode
    },
    async handleSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      console.log({
        username: this.username,
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.username,
        profile: {
          phone_num_code: this.country,
          phone_num: this.phone
        }
      })
      const response = await axios.post('api/user/', {
        username: this.username,
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.username,
        profile: {
          phone_num_code: parseInt(this.country),
          phone_num: this.phone
        }
      })
      this.login(response.data.user, response.data.token)
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
html,
body {
  height: 100%;
}

html {
  display: table;
  margin: auto;
}

body {
  display: table-cell;
  vertical-align: middle;
  background: #4ECDC4;
}

#login-page {
  margin-top: 70px;
  margin-bottom: 130px;
  width: 500px;
}
</style>
