<template>
  <div class="container">
    <div class="row">
      <h2>Place an ad</h2>
      <div class="divider"></div>
      <br>
      <div class="row">
        <div class="input-field col s6">
          <select>
            <option value="" disabled selected>Choose product category</option>
            <option value="1">Computers</option>
            <option value="2">Auto</option>
            <option value="3">Sport</option>
          </select>
          <label>Category</label>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <div class="input-field col s6">
            <i class="material-icons prefix">create</i>
            <input id="name" type="text" class="validate" data-length="120">
            <label for="name">Product name</label>
          </div>
        </div>
        <div class="col s12">
          <div class="input-field col s6">
            <i class="material-icons prefix">description</i>
            <textarea id="description" class="materialize-textarea"></textarea>
            <label for="description">Description</label>
          </div>
        </div>
        <div class="col s12">
          <div class="input-field col s2">
            <i class="prefix" style="font-size: 35px">₪</i>
            <input id="price" type="number" class="validate">
            <label for="price">Price</label>
          </div>
        </div>
        <div class="col s12">
          <div class="input-field col s2">
            <i class="material-icons prefix">date_range</i>
            <input v-model="year" id="year" type="number" class="validate">
            <label for="year">Year</label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="file-field input-field col s6">
          <div class="btn">
            <span>File</span>
            <input type="file" multiple>
          </div>
          <div class="file-path-wrapper">
            <input class="file-path validate" type="text"
                   placeholder="Upload one or more images of your product">
          </div>
        </div>
      </div>
      <p>
        <label>
          <input name="group1" type="radio"/>
          <span>Draw</span>
        </label>
      </p>
      <br>
      <p>
        <label>
          <input name="group1" type="radio" checked/>
          <span>Advertisement</span>
        </label>
      </p>
      <br>
      <br>
      <button class="btn waves-effect waves-light" type="submit" name="action">Submit
        <i class="material-icons right">send</i>
      </button>
    </div>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  name: "AddItem",
  data () {
    return {
      year: 2021
    }
  },
  mounted() {
    $(document).ready(function () {
      $('select').formSelect();
    });

    $(document).ready(function () {
      $('input#name').characterCounter();
    });
  }
}
</script>

<style scoped>

</style>
