<template>
  <div class="container">
    <div class="row center">
      <p class="flow-text">One ticket = {{ ticket_price }}₪</p>
      <p class="flow-text">Total price: <i class="green-text">{{ price }}₪</i></p>
    </div>
    <div class="row">
      <div class="col l2 offset-m2 offset-l2">
        <a v-on:click="amount++" class="btn-floating btn-large waves-effect"><i class="material-icons">add</i></a>
      </div>
      <div class="col l3 s3 m3 ">
        <input
          v-model="amount"
          v-on:input="count"
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
      <button class="btn green">Buy</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BuyTicket",
  props: ['ticket_price'],
  data() {
    return {
      amount: 0,
      price: 0
    }
  },
  methods: {
    decrease () {
      if (this.amount !== 0) {
        this.amount--
      }
    }
  },
  watch: {
    amount: function () {
      if (this.amount <= 0) {this.amount = 0}
      this.price = (this.amount * this.ticket_price).toFixed(2)
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
