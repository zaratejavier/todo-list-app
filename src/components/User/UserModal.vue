<template>
  <b-modal
    v-model="showModal"
    id="bv-modal-example"
    hide-footer
    hide-header-close
  >
    <div >

      <div >
        <h3>Email: {{ user.email }}</h3>
        <p>Role: {{ user.role }}</p>
      </div>
      <b-button
        variant="warning"
        size="sm"
        class="float-right"
        @click="$emit('close')"
      >
        Close
      </b-button>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "user-modal",
  props: {
    user: {
      type: Object,
      required: true,
    },
    showModal: {
      type: Boolean,
    },
  },
};
</script>

