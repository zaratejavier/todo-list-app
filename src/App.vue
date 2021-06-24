<template>
  <div id="app">
    <todo-list></todo-list>
  </div>
</template>

<script>

import TodoList from './components/TodoList.vue'
import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)


export default {
  name: 'App',
  components: {
    TodoList,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  margin: 0;
  font-size: 24px;
}
</style>
