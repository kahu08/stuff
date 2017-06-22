<template>
    <div class="col-md-3 top-product-grids tp4">
        <div href="#"><div class="product-img">
            <img :src="product.image_url" :alt="product.name" />
            <div class="p-mask">
                <form action="#" method="post">
                    <input type="hidden" name="cmd" value="_cart" />
                    <input type="hidden" name="add" value="1" />
                    <input type="hidden" name="w3ls1_item" value="Eye shades" />
                    <input type="hidden" name="amount" value="60.00" />
                    <button type="button" @click="addToCart(product)" class="w3ls-cart pw3ls-cart"><icon name="shopping-cart"></icon>  Add to cart</button>
                </form>
            </div>
        </div></div>
        <i class="fa fa-star yellow-star" aria-hidden="true"></i>
        <i class="fa fa-star yellow-star" aria-hidden="true"></i>
        <i class="fa fa-star yellow-star" aria-hidden="true"></i>
        <i class="fa fa-star gray-star" aria-hidden="true"></i>
        <i class="fa fa-star gray-star" aria-hidden="true"></i>
        <h4>{{ product.name }}</h4>
        <h5>Kshs. {{ product.price}}</h5>
    </div>

</template>

<script>
export default{
  name: 'thumbnail-product',
  props: ['product'],
  methods: {
    addToCart (product) {

    }
  }
}
</script>
