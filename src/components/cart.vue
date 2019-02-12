<template>
  <div>
   <p>Cart</p>
      <div v-bind:key='carts.id' v-for='carts in cart.itemId'>
        <h3>{{ carts.name }}</h3>
        <h2>{{ carts.cost }}</h2>
      </div>
      <p>Total: {{ cart.cartCount }}</p>

  </div>
</template>

<script>
export default {
  name: 'cart',
  props: {
    cart: Object,
  },
  data: function() {
    return {
      topping: [
        {
          name: 'Sprinkles',
          cose: 0.25
        },
        {
          name: 'Chocolate Chip',
          cose: 0.25
        },
      ]
    }
  }
}
</script>