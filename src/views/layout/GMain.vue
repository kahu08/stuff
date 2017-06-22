<template>
    <div class="container-fluid">
        <div class="sub-banner my-banner4">
        </div>
        <div class="row">
        <div class="col-md-2 w3ls_dresses_grid_left">
            <div class="w3ls_dresses_grid_left_grid" v-if="childCategories.length>0">
                <h3>Categories</h3>
                <div class="w3ls_dresses_grid_left_grid_sub">
                    <div class="ecommerce_dres-type">
                        <ul>
                            <li v-for="category in childCategories">
                                <router-link :to="`/categories/${category.id}`">{{ category.name }}</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="w3ls_dresses_grid_left_grid" v-for="option in categoryOptions">
                <h3>{{ option.name }}</h3>
                <div class="w3ls_dresses_grid_left_grid_sub">
                    <div :class="option.name.toLowerCase()=='colour'?'ecommerce_color':'ecommerce_color ecommerce_size' ">
                        <ul>
                            <li><a href="#"><i></i> Red(5)</a></li>
                            <li><a href="#"><i></i> Brown(2)</a></li>
                            <li><a href="#"><i></i> Yellow(3)</a></li>
                            <li><a href="#"><i></i> Violet(6)</a></li>
                            <li><a href="#"><i></i> Orange(2)</a></li>
                            <li><a href="#"><i></i> Blue(1)</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="w3ls_dresses_grid_left_grid">
                <h3>Size</h3>
                <div class="w3ls_dresses_grid_left_grid_sub">
                    <div class="ecommerce_color ecommerce_size">
                        <ul>
                            <li><a href="#">Medium</a></li>
                            <li><a href="#">Large</a></li>
                            <li><a href="#">Extra Large</a></li>
                            <li><a href="#">Small</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="w3ls_dresses_grid_left_grid">
                <div class="dresses_img_hover">
                    <img src="images/offer3.jpg" alt=" " class="img-responsive" />
                    <div class="dresses_img_hover_pos">
                        <h4>Upto<span>30%</span><i>Off</i></h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-8 col-sm-8 women-dresses">
            <router-view></router-view>
        </div>
        <div class="col-md-2 col-sm-12 w3ls_dresses_grid_left" v-if="hasCartItems">
            <g-cart></g-cart>
        </div>
    </div>
    </div>
</template>
<script>
import { getChildCategories, getCategoryOptions } from '../../api'
export default{
  name: 'g-main',
  data () {
    return {
      childCategories: [],
      categoryOptions: [],
      hasCartItems: true
    }
  },
  methods: {
    getChildCategories () {
      var id = this.$route.params.id
      getChildCategories({id: id}).then((res) => {
        this.childCategories = res.data.data
      })
    },
    getCartItems () {

    },
    getCategoryOptions () {
      var id = this.$route.params.id
      getCategoryOptions({id: id}).then((res) => {
        this.categoryOptions = res.data.data
      })
    }
  },
  mounted () {
    this.getChildCategories()
    this.getCategoryOptions()
  },
  updated () {
    // this.getChildCategories()
  }
}
</script>
