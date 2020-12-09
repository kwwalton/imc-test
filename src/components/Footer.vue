<template>
  <footer>
    <p>{{ companyName }} by {{ developerName }}</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',

  props: {
    companyName: String,
    developerName: String
  },

  data() {
    return {}
  }
}
</script>

<style lang="css" scoped>
footer {
  background-color: #fff;
  box-shadow: 3px 3px 5px 6px #ccc;
}
p {
  text-align: center;
}
</style>
