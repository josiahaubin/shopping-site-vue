import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let _api = axios.create({
  baseURL: '//localhost:3000/api/'
})

export default new Vuex.Store({
  state: {
    games: []
  },
  mutations: {
    setGames(state, payload) {
      state.games = payload
    }
  },
  actions: {
    async getGames({ commit, dispatch }) {
      let res = await _api.get('games')
      commit('setGames', res.data)
    }
  }
})
