<template>
  <div id="logreg-forms">
    <form action="/signup/" class="form-signup">
      <div class="social-login">
        <button class="btn facebook-btn social-btn" type="button"><span><i class="fab fa-facebook-f"></i> Sign up with Facebook</span>
        </button>
      </div>
      <div class="social-login">
        <button class="btn google-btn social-btn" type="button"><span><i class="fab fa-google-plus-g"></i> Sign up with Google+</span>
        </button>
      </div>

      <p style="text-align:center">OR</p>

      <input type="text" id="user-name" class="form-control" placeholder="Username" required autofocus="">
      <input type="text" id="first-name" class="form-control" placeholder="First name" autofocus="">
      <input type="text" id="last-name" class="form-control" placeholder="Last name" autofocus="">
      <input type="email" id="email" class="form-control" placeholder="Email" required autofocus="">
      <vue-tel-input v-bind="bindProps"></vue-tel-input>
      <input type="password" id="pass" class="form-control" placeholder="Password" required autofocus="">
      <input type="password" id="repeatpass" class="form-control" placeholder="Repeat Password" required autofocus="">

      <button class="btn btn-primary btn-block" type="submit"><i class="fas fa-user-plus"></i> Sign Up</button>
      <a href="#" id="cancel_signup"><i class="fas fa-angle-left"></i>Back</a>
    </form>
  </div>
</template>

<script>
import Vue from "vue"
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueTelInput from 'vue-tel-input'
// import 'vue-tel-input/dist/vue-tel-input.css';

Vue.use(VueTelInput)
Vue.use(VueAxios, axios)
export default {
  name: 'Register',
  props: ['website'],
  data() {
    return {
      bindProps: {
        dynamicPlaceholder: true,
        disabledFetchingCountry: false,
        preferredCountries: ['IL', 'US', 'RU'],
      }
    }
  },
  mounted() {
    console.log(this.website + 'api/country/')
    Vue.axios.get(this.website + 'api/country/')
      .then((resp) => {
        console.log(resp.data.results)
        this.countries = resp.data.results
      })
  },
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
