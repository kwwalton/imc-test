<template>
  <div>
    <div class="breadcrumbs">
      <div>
        <router-link :to="{ name: 'Products' }">
          Back to Product List</router-link
        >
      </div>
      <div class="previous-next" v-if="!isLoading">
        <div class="product-nav">
          <span>Product: {{ displayIndex }} of {{ itemsLength }}</span>
          <button @click="prevButtonClick">Previous</button>
          <button @click="nextButtonClick">Next</button>
        </div>
      </div>
    </div>

    <div class="product-details" v-if="!isLoading">
      <div class="product-image">
        <img
          :srcset="
            `${imageSourceSmall} 480w, ${imageSourceMedium} 800w, ${imageSourceLarge} 1000w`
          "
          sizes="(max-width: 600px) 480px, (max-width: 960px) 800px, 1000px"
          :src="imageSourceMedium"
          :alt="`${item.ItemName}`"
        />
      </div>

      <div class="product-description">
        <ul>
          <li><strong>Item ID:</strong>{{ item.ItemID }}</li>
          <li><strong>Item Name:</strong>{{ item.ItemName }}</li>
          <li v-if="item.Description"><strong>Description:</strong>{{ item.Description }}</li>
          <li><strong>Dimensions:</strong>{{ item.Dimensions }}</li>
          <li><strong>Base Price:</strong>{{ priceToCurrency}}</li>
        </ul>

        <Contact :salesRep="salesRep" :isProductDetails="true" />
      </div>
    </div>

    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Contact from './Contact'

export default {
  name: 'ProductDetails',

  components: {
    Contact
  },

  computed: {
    ...mapGetters(['getItems']),

    isLoading() {
      return this.$store.state.localJSONIsLoading
    },

    product() {
      return this.$route.params.product
    },

    item() {
      let productInt = parseInt(this.product)
      return this.$store.state.localJSON.items.find(
        element => element.ProductID === productInt
      )
    },

    imageSource() {
      return this.item.PhotoName
    },

    imageSourceSmall() {
      return `${this.imageSource}?height=300&borderWidth=0`
    },

    imageSourceMedium() {
      return `${this.imageSource}?height=500&borderWidth=0`
    },

    imageSourceLarge() {
      return `${this.imageSource}?height=700&borderWidth=0`
    },

    salesRep() {
      return this.$store.state.localJSON.SalesRep
    },

    itemsLength() {
      return this.$store.state.localJSON.items.length
    },

    indexInItems() {
      let productInt = parseInt(this.product)
      return this.$store.state.localJSON.items.findIndex(
        element => element.ProductID === productInt
      )
    },

    displayIndex() {
      return this.indexInItems + 1
    },

    previousItem() {
      let items = this.getItems
      let productInt = parseInt(this.product)
      let currentIndex = items.findIndex(
        element => element.ProductID === productInt
      )
      let productCount = items.length
      if (currentIndex === 0) {
        return items[productCount - 1].ProductID
      }
      let previousIndex = currentIndex - 1
      return items[previousIndex].ProductID
    },

    nextItem() {
      let items = this.getItems
      let productInt = parseInt(this.product)
      let currentIndex = items.findIndex(
        element => element.ProductID === productInt
      )
      let productCount = items.length
      if (currentIndex === productCount - 1) {
        return items[0].ProductID
      }
      let nextIndex = currentIndex + 1
      return items[nextIndex].ProductID
    },

    priceToCurrency() {
      return '$' + this.item.BasePrice.toFixed(2)
    }
  },

  methods: {
    prevButtonClick() {
      let prevProduct = this.previousItem
      this.$router.replace({
        name: 'ProductDetails',
        params: { product: prevProduct }
      })
    },

    nextButtonClick() {
      let nextProduct = this.nextItem
      this.$router.replace({
        name: 'ProductDetails',
        params: { product: nextProduct }
      })
    }
  },

  mounted() {
    window.scrollTo(0, 0)
    // Repaint the DOM, to clear out extra space from previous route
    // TODO: find a more elegant solutions
    document.querySelector('#app').style.height = 'fit-content'
  }
}
</script>

<style scoped>
.product-details {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  margin-top: 20px;
}
.product-image {
  background-color: #fff;
  padding: 20px;
  display: flex;
  justify-content: center;
}
img {
  object-fit: contain;
  max-width: 100%;
}
.product-description {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.product-description .contact ul {
  columns: 1 !important;
}

ul {
  list-style: none;
  padding: 0;
  align-self: baseline;
}
li {
  margin-bottom: 10px;
  font-size: larger;
  color: #424242;
}
strong {
  margin-right: 10px;
}

.breadcrumbs {
  display: flex;
  justify-content: space-between;
}

.breadcrumbs a {
  color: #454137;
  border-bottom: 2px solid #ff6d00;
  text-decoration: none;
}

.breadcrumbs a:hover {
  color: #212121;
}

.product-nav {
  font-size: small;
  display: flex;
  align-items: baseline;
}

.product-nav span {
  display: none;
  margin-right: 5px;
}

.product-nav button:first-of-type {
  margin-right: 5px;
}
.product-nav button {
  background-color: #424242;
  color: #fff;
  border: none;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: small;
}

.product-nav button:hover {
  background-color: #212121;
}
@media screen and (min-width: 480px) {
  .product-nav span {
    display: block;
  }
}

@media screen and (min-width: 768px) {
  .product-details {
    grid-template-columns: 2fr 2fr;
    grid-gap: 30px;
  }
}

@media screen and (min-width: 1024px) {
  .product-details {
    grid-template-columns: 2fr 1fr;
    grid-gap: 40px;
  }
}
</style>
