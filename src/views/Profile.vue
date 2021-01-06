<template>
  <div class="container">
    <br>
    <br>
    <div class="row">
      <div class="col s12 m4 l6 xl5">
        <div class="card" style="width:300px">
          <div class="card-image">
            <img :src="'http://localhost:8000' + getUser.profile.picture">
          </div>
          <div class="card-action">
            <h5><b>{{getUser.first_name}} {{getUser.last_name}}</b></h5>
            <a href="#">Profile settings</a>
          </div>
        </div>
        <div class="card blue-grey darken-1" style="width:300px">
          <div class="card-content white-text">
                    <span class="card-title">
                        <b>Your balance 3123₪</b>
                    </span>
            <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
          </div>
          <div class="card-action">
            <a href="#">Add money</a>
            <a href="#">Transactions</a>
          </div>
        </div>
      </div>
      <div class="col s12 m12 l12 xl6">
        <div class="row">
          <h4 class="center"><b>Last Spendings</b></h4>
          <table class="highlight center">
            <thead>
            <tr>
              <th>Date</th>
              <th>Product</th>
              <th>Price</th>
            </tr>
            </thead>

            <tbody>
            <tr>
              <td>Alvin</td>
              <td>Eclair</td>
              <td>$0.87</td>
            </tr>
            <tr>
              <td>Alan</td>
              <td>Jellybean</td>
              <td>$3.76</td>
            </tr>
            <tr>
              <td>Jonathan</td>
              <td>Lollipop</td>
              <td>$7.00</td>
            </tr>
            </tbody>
          </table>
          <a href="#" class="right">View whole history</a>
        </div>
        <div class="row">
          <h4 class="center"><b>Participating Now</b></h4>
          <ul class="collection">
            <li class="collection-item avatar">
              <img src="images/yuna.jpg" alt="" class="circle">
              <span class="title">Title</span>
              <p>First Line <br>
                Second Line
              </p>
              <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
            </li>
            <li class="collection-item avatar">
              <i class="material-icons circle">folder</i>
              <span class="title">Title</span>
              <p>First Line <br>
                Second Line
              </p>
              <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
            </li>
            <li class="collection-item avatar">
              <i class="material-icons circle green">insert_chart</i>
              <span class="title">Title</span>
              <p>First Line <br>
                Second Line
              </p>
              <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
            </li>
            <li class="collection-item avatar">
              <i class="material-icons circle red">play_arrow</i>
              <span class="title">Title</span>
              <p>First Line <br>
                Second Line
              </p>
              <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Profile",
  computed: mapGetters(['getUser'])
}
</script>

<style scoped>

</style>
