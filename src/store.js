import { createStore } from 'vuex'
import network from './network'

const state = {
  localJSONIsLoading: false,
  localJSON: null,
  localJSONErrorMessage: ''
}

const getters = {
  getItems(state) {
    return state.localJSON.items
  }
}

const mutations = {
  setLocalJSONIsLoading(state, value) {
    state.localJSONIsLoading = value
  },
  setLocalJSON(state, value) {
    state.localJSON = value
  },
  setLocalJSONErrorMessage(state, value) {
    console.log('hey', value)
    state.localJSONErrorMessage = value
  }
}

const actions = {
  loadLocalJSON({ commit }) {
    commit('setLocalJSONIsLoading', true)
    network.LocalData.GetLocalData()
      .then(res => {
        console.log('loaded that local data')
        console.log(res.data)
        commit('setLocalJSON', res.data)
      })
      .catch(err => commit('setLocalJSONErrorMessage', err))
      .finally(() => commit('setLocalJSONIsLoading', false))
  }
}

export default createStore({
  state,
  getters,
  mutations,
  actions
})
