<template>
  <div id="logreg-forms">
    <form @submit.prevent="handleSubmit" class="form-signup">
      <div class="social-login">
        <button class="btn facebook-btn social-btn" type="button"><span><i class="fab fa-facebook-f"></i> Sign up with Facebook</span>
        </button>
      </div>
      <div class="social-login">
        <button class="btn google-btn social-btn" type="button"><span><i class="fab fa-google-plus-g"></i> Sign up with Google+</span>
        </button>
      </div>

      <p style="text-align:center">OR</p>

      <input type="text" v-model="username" class="form-control" placeholder="Username" required autofocus="">
      <input type="text" v-model="first_name" class="form-control" placeholder="First name" autofocus="">
      <input type="text" v-model="last_name" class="form-control" placeholder="Last name" autofocus="">
      <input type="email" v-model="email" class="form-control" placeholder="Email" required autofocus="">
      <vue-tel-input v-model="phone" v-on:country-changed="countryChanged" v-bind="bindProps"
                     style="height: 45px; margin-bottom: 2px;"></vue-tel-input>
      <input type="password" v-model="password" class="form-control" placeholder="Password" required autofocus="">
      <input type="password" v-model="password2" class="form-control" placeholder="Repeat Password" required
             autofocus="">

      <button class="btn btn-primary btn-block" type="submit"><i class="fas fa-user-plus"></i> Sign Up</button>
      <a href="#" id="cancel_signup"><i class="fas fa-angle-left"></i>Back</a>
    </form>
  </div>
</template>

<script>
import Vue from 'vue'
import VueTelInput from 'vue-tel-input'
import axios from "axios";

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
        validCharactersOnly: true,
        maxLen: 18,
        disabledFetchingCountry: false,
        preferredCountries: ['IL', 'US', 'RU'],
      }
    }
  },
  methods: {
    countryChanged(country) {
      this.country = country.dialCode
    },
    async handleSubmit() {
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

      localStorage.setItem('token', response.data.token)
    }
  }
}
</script>

<style scoped>
@import 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css';
@import 'https://use.fontawesome.com/releases/v5.3.1/css/all.css';

#logreg-forms {
  width: 412px;
  margin: 10vh auto;
  background-color: #f3f3f3;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
}

#logreg-forms form {
  width: 100%;
  max-width: 410px;
  padding: 15px;
  margin: auto;
}

#logreg-forms .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}

#logreg-forms .form-control:focus {
  z-index: 2;
}

#logreg-forms .form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

#logreg-forms .form-signin input[type="password"] {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

#logreg-forms .social-login {
  width: 390px;
  margin: 0 auto;
  margin-bottom: 14px;
}

#logreg-forms .social-btn {
  font-weight: 100;
  color: white;
  width: 190px;
  font-size: 0.9rem;
}

#logreg-forms a {
  display: block;
  padding-top: 10px;
  color: lightseagreen;
}

#logreg-form .lines {
  width: 200px;
  border: 1px solid red;
}


#logreg-forms button[type="submit"] {
  margin-top: 10px;
}

#logreg-forms .facebook-btn {
  background-color: #3C589C;
}

#logreg-forms .google-btn {
  background-color: #DF4B3B;
}

#logreg-forms .form-signup .social-btn {
  width: 210px;
}

#logreg-forms .form-signup input {
  margin-bottom: 2px;
}

.form-signup .social-login {
  width: 210px !important;
  margin: 0 auto;
}

/* Mobile */

@media screen and (max-width: 500px) {
  #logreg-forms {
    width: 300px;
  }

  #logreg-forms .social-login {
    width: 200px;
    margin: 0 auto;
    margin-bottom: 10px;
  }

  #logreg-forms .social-btn {
    font-size: 1.3rem;
    font-weight: 100;
    color: white;
    width: 200px;
    height: 56px;

  }

  #logreg-forms .social-btn:nth-child(1) {
    margin-bottom: 5px;
  }

  #logreg-forms .social-btn span {
    display: none;
  }

  #logreg-forms .facebook-btn:after {
    content: 'Facebook';
  }

  #logreg-forms .google-btn:after {
    content: 'Google+';
  }

}
</style>
