import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
 
//组件模块
import Home from './home.vue'
// import Todo from './components/todo.vue'

export default new Router({
  routes: [
    { 
        path: '/', 
        name: 'Home', 
        component: Home
    }
  ]
})