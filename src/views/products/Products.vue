<template>
    <div class="row">
        <t-product v-for="product in products" :product="product" :key="product.id"></t-product>
    </div>
</template>

<script>
import ProductsList from '../../views/products/ProductsList'
import ThumbnailProduct from '../../views/products/ThumbnailProduct'
import { getCategoryProducts } from '../../api'
import { BASE_PUBLIC_URL } from '../../config'
export default{
  name: 'products',
  components: [ProductsList, ThumbnailProduct],
  data () {
    return {
      products: [
      ]
    }
  },
  methods: {
    getProducts () {
      var id = this.$route.params.id
      getCategoryProducts({id: id}).then((res) => {
        for (var value of res.data.data) {
          value.image_url = BASE_PUBLIC_URL + value.image_url
          this.products.push(value)
          window.console.log(value)
        }
      })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
