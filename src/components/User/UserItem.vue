<template>
  <b-card class="user-text-center"
  style="max-width: 20rem;">
    <user-modal :showModal="showModal" :user="user" @close="closeModal"></user-modal>
    <div>
      <div>
        <div v-on:click="openModal" class="user-info">
          Email: {{ user.email }} <br>
        </div>
      </div>
      
    </div>
  </b-card>
</template>

<script>
import UserModal from './UserModal';
export default {
  name: 'user-item',
  components: {
    UserModal
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showModal: false
    }
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.user-text-center{
  margin: 20px auto;
  max-width: 600px;
  
}
</style>
