import Vue from 'vue'
import Router from 'vue-router'
import Games from './views/Games.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'games',
      component: Games
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    },
    {
      path: '/game/:gameId',
      name: 'game',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "gameView" */ './views/GameView.vue')
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
