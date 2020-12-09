<template>
  <div class="product-tile">
    <img :src="imageSourceThumbnail" :alt="itemName" />
    <p>{{ itemName }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProductTile',

  props: {
    imageSource: String,
    itemName: String
  },

  computed: {
    imageSourceThumbnail() {
      return `${this.imageSource}?height=200&borderWidth=0`
    }
  }
}
</script>

<style lang="css" scoped>
img {
  object-fit: contain;
  max-height: 200px;
  max-width: 100%;
  margin: auto;
}

.product-tile {
  display: flex;
  flex-direction: column;
  padding: 20px;
  transition: all 0.5s;
  min-width: 100%;
}

p {
  margin-left: -20px;
  margin-right: -20px;
  margin-bottom: -20px;
  background-color: #fafafa;
  padding: 20px;
  text-align: center;
  border-top: 1px solid #eeeeee;
  color: #424242;
  transition: all 0.5s;
}

.product-tile:hover p {
  color: #212121;
  background-color: #eeeeee;
}
</style>
