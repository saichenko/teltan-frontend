<template>
  <div class="container">
    <modal name="confirm-modal" :height="330" :width="620" :adaptive="true">
      <div class="row center">
        <h4>Confirmation</h4>
        <hr>
        <p class="flow-text">Your balance: <i class="green-text">{{ getBalance }}₪</i><i class="red-text"> -
          {{ price }}₪</i></p>
        <p class="flow-text">Total ticket price: {{ price }}₪</p>
      </div>
      <div class="row center">
        <button class="btn green" v-on:click="buyTickets">Buy Now</button>
        &nbsp&nbsp
        <button class="btn red" v-on:click="$modal.hide('confirm-modal')">Cancel</button>
      </div>
    </modal>

    <div class="row center">
      <h5 class="flow-text">One ticket = {{ product.ticket_price }}₪</h5>
      <h5><b>Your chance to win:</b> {{ chanceToWin }}%</h5>

      <h5 v-if="price > getBalance"><b>Total price:</b> <i class="red-text">{{ price }}₪</i></h5>
      <h5 v-else><b>Total price:</b> <i class="green-text">{{ price }}₪</i></h5>

      <p v-if="price > getBalance" class="red-text">Total price larger than your balance. Your balance is
        {{ getBalance }}.</p>
    </div>
    <div class="row">
      <div class="col l2 offset-m2 offset-l2">
        <a v-on:click="amount++" class="btn-floating btn-large waves-effect"><i class="material-icons">add</i></a>
      </div>
      <div class="col l3 s3 m3 ">
        <input
          v-model="amount"
          id="last_name"
          type="number"
          style="text-align: center; font-size: 22px"
          class="validate">
      </div>
      <div class="col l2">
        <a v-on:click="decrease" class="btn-floating btn-large waves-effect"><i class="material-icons">remove</i></a>
      </div>
    </div>
    <div class="row center">
      <button class="btn green" v-on:click="openModal" v-bind:class="{ disabled: correctPrice }">Buy</button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Vue from "vue";

export default {
  name: "BuyTicket",
  props: ['product'],
  data() {
    return {
      amount: 0,
      price: 0,
      correctPrice: null,
      chanceToWin: 0
    }
  },
  computed: mapGetters(['getBalance']),
  methods: {
    ...mapActions(['fetchBalance']),

    openModal() {
      this.$modal.show('confirm-modal')
    },

    decrease() {
      if (this.amount !== 0) {
        this.amount--
      }
    },

    buyTickets() {
      Vue.axios.post('api/ticket/', {product: this.product.id, tickets_amount: this.amount})
      this.$router.go(this.$router.currentRoute)

    }
  },
  async mounted() {
    this.amount++
    await this.fetchBalance()
  },
  watch: {
    amount: function () {
      if (this.amount <= 0) {
        this.amount = 0
      }
      if (this.amount > (this.product.tickets_amount - this.product.tickets_bought)) {
        this.amount = this.product.tickets_amount - this.product.tickets_bought
      }

      this.price = parseFloat((this.amount * this.product.ticket_price).toFixed(2))
      this.chanceToWin = (this.amount / (this.product.tickets_amount - this.product.tickets_bought) * 100).toFixed(2)
    },
    price: function () {
      this.correctPrice = this.price > this.getBalance || this.price === 0
    }
  }
}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
