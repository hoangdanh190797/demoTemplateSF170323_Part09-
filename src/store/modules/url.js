import shop from '../../api/shop'
import serviceUrl from '../../api/serviceUrl'

// initial state
const state = {
  url: []
}

// getters
const getters = {}

// actions
const actions = {
  // getAllProducts ({ commit }) {
  //   shop.getProducts(products => {
  //     commit('setProducts', products)
  //   })
  // }
  async getUrl ({commit}) {
    const response = await serviceUrl.getUrlnew(url);
    commit('setUrl', response.data)
  }
}

// mutations
const mutations = {
  // setProducts (state, products) {
  //   state.all = products
  // },

  // decrementProductInventory (state, { id }) {
  //   const product = state.all.find(product => product.id === id)
  //   product.inventory--
  // }

  setUrl (state, url){
    state.url = url
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
