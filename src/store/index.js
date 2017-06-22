/**
 * Created by kevyn on 20/06/2017.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from '../store/actions'
import getters from '../store/getters'
import cart from '../store/modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    cart
  }
})
