<template>
    <div class="header-bottom-w3ls">
        <div class="container">
            <nav class="navbar navbar-default navbar-static-top">
                <div class="row">
                    <div class="col-md-7 col-lg-7">
                <div class="navbar-header nav_2 nav">
                    <button type="button" class="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse" id="bs-megadropdown-tabs">
                    <ul class="g-menu" role="navigation">
                        <li class=""><router-link to="/" class="hyper "><span>Home</span></router-link></li>
                        <li v-for="menu in menus" v-bind:class="{'dropdown': menu.children.length>0}" >
                            <router-link :to="menu.children.length==0?`/categories/${menu.id}`:``" v-bind:class="{'dropdown-toggle': menu.children.length>0}" class="hyper" data-toggle="dropdown" >
                                {{ menu.name }}
                            </router-link>
                            <ul class="dropdown-menu multi multi1" v-if="menu.children.length>0">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <ul class="multi-column-dropdown">
                                            <li v-for="child in menu.children">
                                                <router-link :to="`/categories/${child.id}`">
                                                    <icon name="angle-right" aria-hidden="true"></icon>{{ child.name }}
                                                </router-link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-4">

                                        <ul class="multi-column-dropdown">
                                            sgrdhtfj
                                            <li><a href="facial.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Lip Stick</a></li>
                                            <li><a href="hair.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Peruvian Weaves</a></li>
                                            <li><a href="hair.html"><i class="fa fa-angle-right" aria-hidden="true"></i>T444z</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-4 w3l">
                                        <a href="women.html"><img src="images/menu1.jpg" class="img-responsive" alt=""></a>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </ul>
                        </li>
                        <li>
                            <a href="#" class="dropdown-toggle hyper" data-toggle="dropdown" ><span> Accessories</span></a>
                            <ul class="dropdown-menu multi multi1">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <ul class="multi-column-dropdown">
                                            <li><a href="accessories.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Bags </a></li>
                                            <li><a href="handbags.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Bags </a></li>
                                            <li><a href="accessories.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Men</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-4">
                                        <ul class="multi-column-dropdown">
                                            <li><a href="shoes.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Shoes</a></li>
                                            <li><a href="women.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Women</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-4 w3l">
                                        <a href="jewellery.html"><img src="images/menu2.jpg" class="img-responsive" alt=""></a>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </ul>
                        </li>
                        <li><router-link to="/" class="hyper"><span>Contact Us</span></router-link></li>
                    </ul>
                </div>
                <div class="col-md-3 col-sm-12 col-lg-3 search-agileinfo">
                    <input type="search" name="Search" placeholder="Search for a Product..." required="">
                    <button type="submit" class="btn btn-default search" aria-label="Left Align">
                        <icon name="search"> </icon>
                    </button>
                </div>
                <div class="col-md-1 col-lg-1 cart-wthree">
                    <div class="cart">
                        <form action="#" method="post" class="last">
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="display" value="1" />
                            <button class="w3view-cart btn-lg" type="submit" name="submit" value="">
                                <icon name="cart-arrow-down" aria-hidden="true"></icon></button>
                        </form>
                    </div>
                </div>
                </div>
                    <div class="clearfix"></div>
                </div>
            </nav>
        </div>
    </div>

</template>

<script>
import { getCategoriesMenu } from '../../api'
import $ from 'jquery'
export default {
  name: 'g-header',
  data () {
    return {
      menus: []
    }
  },
  methods: {
    getCategoriesMenu () {
      getCategoriesMenu({}).then((res) => {
        this.menus = res.data.data
      })
    }
  },
  mounted () {
    this.getCategoriesMenu()
    $('.dropdown').hover(
      function () {
        $('.dropdown-menu', this).stop(true, true).slideDown('fast')
        $(this).toggleClass('open')
      },
      function () {
        $('.dropdown-menu', this).stop(true, true).slideUp('fast')
        $(this).toggleClass('open')
      }
  )
  }
}
</script>

<style scoped>
.g-menu li{
    display: inline !important;
}
/*Strip the ul of padding and list styling*/
ul {
    list-style-type:none;
    margin:0;
    padding:0;
    position: absolute;
}

/*Create a horizontal list with spacing*/
li {
    display:inline-block;
    float: left;
    margin-right: 1px;
}
/*Style for menu links*/
li a {
    display:block;
    min-width:100px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #000000;
    background: transparent;
    text-decoration: none;
}

/*Hover state for top level links*/
li:hover a {
    background: #e60073;
}

/*Style for dropdown links*/
li:hover ul a {
    background: #ffffff;
    color: #ffffff;
    height: 40px;
    line-height: 40px;
}

/*Hover state for dropdown links*/
li:hover ul a:hover {
    background: #CFCFCF;

}
/*Hide dropdown links until they are needed*/
li ul {
    display: none;
}

/*Make dropdown links vertical*/
li ul li {
    display: block;
    float: none;
}

/*Prevent text wrapping*/
li ul li a {
    width: auto;
    min-width: 100px;
    padding: 0 20px;
}

/*Display the dropdown on hover*/
ul li a:hover + .hidden, .hidden:hover {
    display: block;
}
#primary_nav_wrap
{
    margin-top:15px
}

ul
{
    list-style:none;
    position:relative;
    float:left;
    margin:0;
    padding:0
}

ul a
{
    display:block;
    color:#9a9a9a;
    text-decoration:none;
    font-weight:700;
    text-align: center;
    font-size:12px;
    line-height:32px;
    padding:0 15px;
    font-family:"HelveticaNeue","Helvetica Neue",Helvetica,Arial,sans-serif
}
ul a:hover
{
    color:#ffffff;
}
ul li
{
    position:relative;
    float:left;
    margin:0;
    padding:0
}

ul li.current-menu-item
{
    background:#ddd
}

ul li:hover
{
    background:#f6f6f6
}

ul ul
{
    display:none;
    position:absolute;
    top:100%;
    left:0;
    background:#fff;
    padding:0
}

ul ul li
{
    float:none;
    width:200px
}

ul ul a
{
    line-height:120%;
    padding:10px 15px
}

ul ul ul
{
    top:0;
    left:100%
}

ul li:hover > ul
{
    display:block;
}
ul li:hover > ul li
{
    display:block;
}
</style>
