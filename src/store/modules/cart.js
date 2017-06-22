/**
 * Created by kevyn on 20/06/2017.
 */
const state = {
  items: []
}

const mutations = {
  ADD_TO_CART (state, product) {
    const inCart = state.items.find(p => p.id === product.id)
    if (inCart) {
        // In Cart
    } else {
        // Not In Cart
    }
    window.console.log(inCart)
  },
  RESTORE_CART (state, cart) {
    state.items = cart
  },
  ADD_QUANTITY_TO_CART (state, product) {
    // Add
  },
  REMOVE_QUANTITY_FROM_CART (state, product) {
    // Remove
  }
}

export default {
  state,
  mutations
}
