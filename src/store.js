import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let _api = axios.create({
  baseURL: '//localhost:3000/api/'
})

export default new Vuex.Store({
  state: {
    games: [],
    activeGame: {}
  },
  mutations: {
    setGames(state, payload) {
      state.games = payload
    },
    setActiveGame(state, payload) {
      state.activeGame = payload
    }
  },
  actions: {
    async getGames({ commit, dispatch }) {
      try {
        let res = await _api.get('games')
        commit('setGames', res.data)
      } catch (error) {

      }
    },
    async getGameById({ commit, dispatch }, payload) {
      try {
        let res = await _api.get('games/' + payload.gameId)
        commit('setActiveGame', res.data)
      } catch (error) {

      }
    }
  }
})
