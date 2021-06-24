<template>
    <b-modal v-model="showModal" id="bv-modal-example" hide-footer>
      <div class="d-block todo-text-center">
        <h3>Edit Todo</h3>
      </div>
      <div>
        <label>Title:</label>
        <input type="text" class="input-text" v-model="localTodo.title">
        <label>Text: </label>
        <input type="text" class="input-text" v-model="localTodo.text">
      </div>
      <div class="buttons">
      <div class="close">
      <b-button
        variant="warning"
        size="sm"
        class="float-right"
        @click="$emit('close')"
      >
        Close
      </b-button>
      </div>
      <div class="close">
      <b-button variant="success"
        size="sm"
        class="float-left" v-on:click="update">Update
        </b-button>
      </div>
      </div>
    </b-modal>   
</template>
<script>
export default {
  name: 'todo-modal',
  props: {
    todo: {
      type: Object,
      required: true
    },
    showModal: {
      type: Boolean
    }
  },
  data() {
    return {
      localTodo: {
        id: this.todo.id,
        title: this.todo.title,
        text: this.todo.text
      }
    };
  },
  computed: {
  },
  methods: {
    update(){
      this.$store.dispatch('updateTodo', this.localTodo)
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.todo-text-center{
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
}

input[class=input-text]  {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
.buttons{
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}

.close {
padding: 10px;
}

</style>
