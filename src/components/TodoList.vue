<template>
  <div class="content">
    <h1 class="title">To-Do List</h1>
      <input
        type="text"
        class="todo-input"
        placeholder="Title"
        v-model="newTodoTitle"
      >
      <input
        type="text"
        class="todo-input"
        placeholder="Text"
        v-model="newTodoText"
      >
      <b-button v-on:click="addTodo" class="todo-button" variant="success"
        >Add</b-button
      >
    <todo-item
      v-for="todo in todos"
      v-bind:key="todo.id"
      class="todo-item"
      :todo="todo"
    >
    </todo-item>
  </div>
</template>

<script>
import TodoItem from './TodoItem';
export default {
  name: 'todo-list',
  components: {
    TodoItem
  },
  props: {
    msg: String
  },
  data() {
    return {
      newTodoTitle: '',
      newTodoText: '',
      selectedIndex: -1,
      showModal: false
    };
  },
  created() {
    this.$store.dispatch('retrieveTodos');
  },
  computed: {
    todos() {
      return this.$store.getters.todos;
    }
  },
  methods: {
    addTodo() {
      if (
        this.newTodoTitle.trim().length == 0 &&
        this.newTodoText.trim().length == 0
      ) {
        return;
      }
      this.$store.dispatch('addTodo', {
        title: this.newTodoTitle,
        text: this.newTodoText
      });

      this.newTodoTitle = '';
      this.newTodoText = '';
      this.idForTodo++;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.content {
  margin: 20px auto;
  max-width: 600px;

}

input[type='text'] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
.todo-button{
  width: 100%;
}

.title{
  text-align: center;
}
</style>
