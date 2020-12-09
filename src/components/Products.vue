<template>
  <div>
    <div v-if="!isLoading">
      <div v-html="message" class="message"></div>
      <Contact :salesRep="salesRep" :isProductDetails="false" />

      <ul>
        <li v-for="(item, key) in items" :key="key">
          <router-link
            :to="{
              name: 'ProductDetails',
              params: { product: item.ProductID }
            }"
          >
            <ProductTile
              :imageSource="item.PhotoName"
              :itemName="item.ItemName"
            />
          </router-link>
        </li>
      </ul>
    </div>

    <div v-else>Loading...</div>
  </div>
</template>

<script>

import ProductTile from './ProductTile'
import Contact from './Contact'

export default {
  name: 'Products',
  
  components: {
    ProductTile,
    Contact
  },

  computed: {
    items() {
      return this.$store.state.localJSON.items
    },

    message() {
      return this.$store.state.localJSON.Message
    },

    salesRep() {
      return this.$store.state.localJSON.SalesRep
    },

    isLoading() {
      return this.$store.state.localJSONIsLoading
    }
  },

}
</script>

<style lang="css" scoped>
ul {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  list-style: none;
  padding: 0;
}

li {
  background-color: #fff;
  border: 1px solid #e0e0e0;
  display: flex;
}

a {
  text-decoration: none;
  display: flex;
  width: 100%;
}

.message {
  color: #424242;
}

.message:first-child {
  font-weight: bold;
}

@media screen and (min-width: 768px) {
  ul {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}
</style>
