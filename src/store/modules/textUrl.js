import serviceUrl from '../../api/serviceUrl'

// initial state
const state = {
  urlTestOne:'',
  urlAPI:{},
  newData:{},
  newlinkOne:'',
  status:null,
  full_short_link:'',
  full_short_link_two:'',
  full_short_link_three:'',
  short_link:'',
  short_link_two:'',
  short_link_three:'',
}
// getters
const getters = {
  getnewLink (state){
    return state.newlinkOne
  },
  checkStatus (state){
    if(state.status == true){
      return state.status
    }
  }
}
// actions
const actions = {
  async getUrlAPI ({commit}, textUrl) {
    try {
      const response = await serviceUrl.getUrlnew(textUrl);
      commit('setUrlAPI', response.data);
    } catch (error) {
    }
  },
}
// mutations
const mutations = {
  setUrlAPI (state, data){
    state.full_short_link = data.result.full_short_link;
    state.full_short_link_two = data.result.full_short_link2;
    state.full_short_link_three = data.result.full_short_link3;

    state.short_link = data.result.short_link;
    state.short_link_two = data.result.short_link2;
    state.short_link_three = data.result.short_link3;
    // state.urlAPI = data // should devide smaller
    // let status = data.ok
    let link = data.result.short_link
    //set data into state
    state.newlinkOne = link
    state.newData = data
    state.status = data.ok
    //Check Is data received?
    console.log(data);
    // console.log(status);
    console.log(link);
  },

  //example get data to payload
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
