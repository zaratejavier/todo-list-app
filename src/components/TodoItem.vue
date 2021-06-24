<template>
  <div class="text-center">
    <div class="todo-item-container">
      <div class="todo-item-info">
        <div v-if="!todo.editing" class="todo-list">
          <h3 class="todo-item-title">
            {{ todo.title }}
          </h3>
          <p class="todo-item-text">
            {{ todo.text }}
          </p>
            <div class="todo-buttons">
            <b-button
              variant="danger"
              class="todo-remove-item"
              @click="removeTodo(todo.id)"
              >Delete</b-button
            >
            &nbsp;
            <b-button
              v-on:click="editTodo"
              variant="primary"
              class="todo-edit-item"
              >Edit</b-button
            >
            </div>
        </div>
      </div>
    </div>
    <todo-modal
      :showModal="showModal"
      :todo="todo"
      @close="doneEdit"
    ></todo-modal>
  </div>
</template>

<script>
import TodoModal from './TodoModal';
export default {
  components: { TodoModal },
  name: 'todo-item',
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    removeTodo(id) {
      this.$store.dispatch('deleteTodo', id);
    },
    editTodo() {
      this.showModal = true;
    },
    doneEdit() {
      this.showModal = false;
    }
  }
};
</script>

<style>
.todo-item-info .todo-list {
  background-color: #fafafa;
  padding: 0 0 20px 0;
}
.todo-text {
  line-height: normal;
}

.todo-item-container {
  margin: 30px auto;
  max-width: 600px;
}

.todo-item-title {
  color: white;
  background-image: linear-gradient(to top, #feada6 0%, #f5efef 100%);
  color: rgb(181, 105, 105);
  padding: 10px 15px;
  font-size: 1.2em;
  line-height: 1.2em;
  font-weight: bold;
}

.todo-item-text {
  color: black;
  padding: 0px 5px;
  font-size: 1.2em;
  line-height: 1.2em;
  margin: 10px;
}

.todo-edit-item{
  width: 80px;
}

.todo-buttons{
  padding: 10px 0;
 border-top-style:  solid;
  border-top-color: coral;
  margin-bottom: -20px;
  border-width: thin;
}

</style>
