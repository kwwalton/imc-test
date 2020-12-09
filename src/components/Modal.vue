<template>
  <button @click="toggleModal">Click Me!</button>
  
  <div class="modal" v-if="isVisible">
    <div class="modal-content">
      <span class="close" @click="toggleModal">&times;</span>
      <p>Some text in the Modal..</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',

  data() {
    return {
        isVisible: false,
    }
  },

  methods: {
    toggleModal() {
      this.isVisible = !this.isVisible
    }
  }
}
</script>

<style lang="css" scoped>
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto; 
  padding: 20px;
  border: 1px solid #888;
  width: 80%; 
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
