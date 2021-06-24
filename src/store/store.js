import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    selectedTodo: {
      id: -1,
      title: '',
      text: '',
      editing: false
    },
    token: localStorage.getItem('token') || null,

    showModal: false,
    todos: [],
    users: []
  },
  getters: {
    loggedIn(state) {
      return state.token != null;
    },
    isAdmin(state) {
      if (state.token != null) {
        const user = JSON.parse(decodeURIComponent(state.token));
        return user.role === 'admin';
      }
      return false;
    },
    showModal: state => {
      return state.showModal;
    },
    todos(state) {
      return state.todos;
    },
    users(state) {
      return state.users;
    },
    selectedTodo(state) {
      return state.selectedTodo;
    }
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push({
        id: todo.id,
        title: todo.title,
        text: todo.text
      });
    },
    updateTodo(state, todo) {
      const index = state.todos.findIndex(item => item.id == todo.id);
      state.todos.splice(index, 1, {
        id: todo.id,
        title: todo.title,
        text: todo.text
      });
    },
    selectedTodo(state, id) {
      const index = state.todos.findIndex(item => item.id == id);
      state.selectedTodo = {
        id: state.todos[index].id,
        title: state.todos[index].title,
        text: state.todos[index].text
      };
    },
    deleteTodo(state, id) {
      const index = state.todos.findIndex(item => item.id == id);
      state.todos.splice(index, 1);
    },
    retrieveToken(state, token) {
      state.token = token;
    },
    destroyToken(state) {
      state.token = null;
    },
    retrieveTodos(state, todos) {
      state.todos = todos;
    },
    retrieveUsers(state, users) {
      state.users = users;
    }
  },
  actions: {
    destroyToken(context) {
      axios.defaults.headers.common['Authorization'] =
        'Bearer ' + context.state.token;

      if (context.getters.loggedIn) {
        return new Promise(resolve => {
          localStorage.removeItem('token');
          context.commit('destroyToken');
          resolve({ successful: true });
        });
      }
    },
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:9090/api/v1/auth', {
            email: credentials.username,
            password: credentials.password
          })
          .then(response => {
            const token = response.data.token;
            localStorage.setItem('token', token);
            context.commit('retrieveToken', token);
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    addTodo(context, todo) {
      let today = new Date().toISOString().slice(0, 10);
      axios
        .post(
          'http://localhost:9090/api/v1/items',
          {
            title: todo.title,
            text: todo.text,
            date: today
          },
          {
            headers: {
              Authorization: context.state.token
            }
          }
        )
        .then(response => {
          context.commit('addTodo', response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    retrieveTodos(context) {
      console.log('getRequest');
      axios
        .get('http://localhost:9090/api/v1/items', {
          headers: {
            Authorization: context.state.token
          }
        })
        .then(response => {
          context.commit(
            'retrieveTodos',
            response.data.filter(todo => todo != null)
          );
        })
        .catch(error => {
          console.log(error);
        });
    },
    updateTodo(context, todo) {
      debugger;
      let today = new Date().toISOString().slice(0, 10);
      axios
        .put(
          'http://localhost:9090/api/v1/items/' + todo.id,
          {
            title: todo.title,
            text: todo.text,
            date: today
          },
          {
            headers: {
              Authorization: context.state.token
            }
          }
        )
        .then(response => {
          context.commit('updateTodo', response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    deleteTodo(context, id) {
      axios
        .delete('http://localhost:9090/api/v1/items/' + id, {
          headers: {
            Authorization: context.state.token
          }
        })
        .then(() => {
          context.commit('deleteTodo', id);
        })
        .catch(error => {
          console.log(error);
        });
    },
    retrieveUsers(context) {
      axios
        .get('http://localhost:9090/api/v1/users', {
          headers: {
            Authorization: context.state.token
          }
        })
        .then(response => {
          context.commit('retrieveUsers', response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
});
