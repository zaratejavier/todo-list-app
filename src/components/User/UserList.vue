<template>
  <div class="user-list-content">
    <h1 class="user-list-title">Users</h1>
    <user-item
      v-for="user in users"
      v-bind:key="user.id"
      class="user-item"
      :user="user"
    >
    </user-item>
  </div>
</template>

<script>
import UserItem from './UserItem';
export default {
  name: 'user-list',
  components: {
    UserItem
  },
  props: {
    msg: String
  },
  data() {
    return {
      showModal: false,
    };
  },
  created() {
    this.$store.dispatch('retrieveUsers')
  },
  computed: {
    users() {
      return this.$store.getters.users
    }
  },
  methods: {
    
    closeModal() {
      this.showModal = false; 
    },
    openTodoModal() {
      this.showModal = true;
    },

  }
};
</script>

<style>

.user-list-title{
  padding: 10px;
}
</style>
