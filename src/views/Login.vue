<template>
  <div id="login-page" class="row">
    <div class="col s12 z-depth-6 card-panel">
      <div class="row">
        <div class="col">
          <h3 style="margin-left: 175px"><b>Login</b></h3>
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
              type="text"
              @blur='$v.username.$touch()'
              :class="{invalid: $v.username.$dirty && !$v.username.required}"
            >
            <label for="username" data-error="wrong" data-success="right">Username*</label>
            <small
              class="helper-text invalid red-text"
              v-if="$v.username.$dirty && !$v.username.required"
            >This field is required</small>
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
              :class="{invalid: $v.password.$dirty && !$v.password.required}"
            >
            <label for="password">Password*</label>
            <small
              class="helper-text invalid red-text"
              v-if="$v.password.$dirty && !$v.password.required"
            >This field is required</small>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <button type="submit" href="#" class="btn waves-effect waves-light col s12">Login</button>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6 m6 l6">
            <p class="margin medium-small"><a href="#">Create account</a></p>
          </div>
          <div class="input-field col s6 m6 l6">
            <p class="margin right-align medium-small"><a href="#">Forgot password?</a></p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import {required} from 'vuelidate/lib/validators'
import axios from 'axios'

export default {
  name: 'Login',
  props: ['website'],
  data() {
    return {
      username: '',
      password: '',
    }
  },
  validations: {
    username: {required},
    password: {required}
  },
  methods: {
    ...mapActions(['login']),
    async handleSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      const response = await axios.post(this.website + 'api-token-auth/', {
        username: this.username,
        password: this.password
      })
      console.log(response.data.token)
      this.login({user: response.data.user, token: response.data.token})
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
  margin-top: 120px;
  margin-bottom: 130px;
  width: 500px;
}
</style>
