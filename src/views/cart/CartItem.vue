<template>
    <div class="media mb-1 collection-item list-group-item">
        <div class="media-left">
            <img class="media-object rounded" :src="item.image_url" width="50" height="50" :alt="item.title">
        </div>
        <div class="media-body">
            <strong class="d-block">{{item.name}}</strong>
            <span>{{item.price | formatMoney('Kshs.') }} &times; {{ item.quantity }}</span>
            <div class="input-group">
                <div class="input-group-btn">
                    <button type="button" class="btn btn-default btn-sm" @click="removeQuantityFromCart(item)">-</button>
                </div>
                <!--    <span class="align-middle">
                      {{ item.quantity }}
                    </span>-->
                <div class="row">
                    <div class="input-group col-lg-2">
                        <input type="number" class="form-control input-sm" v-model="item.quantity" @input="updateItemQuantity(item)"/>
                    </div>
                </div>
                <div class="input-group-btn">
                    <button type="button" class="btn btn-default btn-sm" @click="addQuantityToCart(item)">+</button>
                </div>
            </div>

            <div class="align-middle">

            </div>
            <!--  <span>Quantity: {{item.quantity}} - {{item.price | formatMoney}}</span>-->
        </div>

        <div class="media-right align-middle">
            <remove-from-cart :product="item"></remove-from-cart>
        </div>

    </div>
</template>
<script>
export default{
  name: 'g-cart',
  props: ['item']
}
</script>
