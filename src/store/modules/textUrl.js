// import shop from '../../api/shop'
import serviceUrl from '../../api/serviceUrl'

// initial state
const state = {
  url: '',
  text:'456',
  urlTestOne:'',
  urlAPI:''
}
// getters
const getters = {}
// actions
const actions = {
  async getUrlAPI ({commit}, textUrl) {
    try {
      const response = await serviceUrl.getUrlnew(textUrl);
      commit('setUrlAPI', response.data);
    } catch (error) {
    }
  },

  getDataLocal({commit}, textUrl){
    commit('setUrl', textUrl)
  }
}
// mutations
const mutations = {
  setUrlAPI (state, url){
    state.urlAPI = url
    console.log(url);
  },

  setUrl (state, url){
    state.url = url
  },
  getText (state, text){
    state.text = text
  },
  setUrlTestOne (state, payload){
    state.urlTestOne = payload.textUrl
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
