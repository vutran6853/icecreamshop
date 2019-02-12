<template>
  <div>
    <p>Shop</p>
    <div v-bind:key='icecreams.id' v-for='icecreams in icecream'>
      <h3>Kind: {{ icecreams.name }}</h3>
      <h2>Cost: {{ icecreams.cost }}</h2>
      <button @click="$emit('addToCart', icecreams, 1)">add</button>

    </div>
  </div>
</template>

<script>
export default {
  name: 'shop',
  props: {
    icecream: Array,
    // addToCart: Function
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p {
    border: 5px solid blue;
  }
</style>
