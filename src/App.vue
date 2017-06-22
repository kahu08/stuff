<template>
  <div id="app">
      <div class="header-top-w3layouts">
          <div class="container">
              <div class="col-md-6 logo-w3">
                  <router-link to="/"><img src="../src/assets/images/logo.png" alt=" " /></router-link>
              </div>
              <div class="col-md-6 phone-w3l">
                  <ul>
                      <li><span class="glyphicon glyphicon-earphone" aria-hidden="true"></span></li>
                      <li>+254 721 954 217</li>
                  </ul>
              </div>
              <div class="clearfix"></div>
          </div>
      </div>
      <g-header></g-header>
    <router-view></router-view>
      <g-footer></g-footer>
  </div>
</template>

<script>
import GHeader from '../src/views/layout/GHeader'
import GFooter from '../src/views/layout/GFooter'
import Sidebar from '../src/views/layout/GSidebar'

export default {
  name: 'app',
  components: [GHeader, Sidebar, GFooter]
}
</script>
<style scoped>
    .newsletter{
        margin-top: 100px;
    }
</style>

