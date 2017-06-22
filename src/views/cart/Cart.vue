<template>
    <div class="w3ls_dresses_grid_left_grid">
        <h3>Cart</h3>
        <div class="w3ls_dresses_grid_left_grid_sub">
            <div class="ecommerce_color ecommerce_size">
                <ul v-for="item in items">
                    <li>
                        <g-cart-item :item="item"></g-cart-item>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import GCartItem from './CartItem'
export default{
  components: {GCartItem},
  name: 'g-cart',
  data () {
    return {
      items: []
    }
  },
  methods: {
  }
}
</script>
