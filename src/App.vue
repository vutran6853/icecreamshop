<template>
  <div id="app">
    <!-- <Navbar/> -->
    <!-- <router-view/> -->
    <Icecream v-bind:icecream='icecreamData' v-on:addToCart='handleAddToCart'/>
    <Cart v-bind:cart='cartData'/>
  </div>
</template>

<script>
import Icecream from './components/icecream.vue'
// import Navbar from './components/navbar';
import Cart from './components/cart.vue'

export default {
  name: 'app',
  components: {
    Icecream,
    Cart,
    // Navbar
  },
  data: function() {
    return {
      icecreamData: [ 
        {
          id: 1,
          name: 'Mint Chocolate Chip',
          cost: 1
        },
        {
          id: 2,
          name: 'Chocolate',
          cost: 1
        },
        {
          id: 3,
          name: 'Vanilla',
          cost: 1
        },
      ],
      cartData: {
        cartCount: 0,
        itemId: []
      }
    } 
  },
  methods: {
    handleAddToCart(id, addCount) {
      console.log('LINE 46', 'id:', id, 'addCount', addCount)
      this.cartData.cartCount = this.cartData.cartCount + addCount
      this.cartData.itemId.push(id)
      // this.$emit(this.itemID, this.cartCount)
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
