/**
 * Created by huangxiaoxian on 2017/9/4.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import  news from '@/vuex/news'

export default new Vuex.Store({
  modules:{
    news
  }
})
