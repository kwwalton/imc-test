<template>
  <Header :manufacturerId="manufacturerId" :companyName="companyName" />
  <main>
    <router-view></router-view>
  </main>
  <Footer :companyName="companyName" :developerName="developerName" />
</template>

<script>
import { useStore } from 'vuex'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  setup() {
    const store = useStore()

    function loadLocalJSON() {
      store.dispatch('loadLocalJSON')
    }

    //const localJSONIsLoading = () => store.state.localJSONIsLoading

    return { loadLocalJSON }
  },

  data() {
    return {
      developerName: 'Ken Walton'
    }
  },

  components: {
    Header,
    Footer
  },

  computed: {
    islocalJSONLoading() {
      return this.$store.state.localJSONIsLoading
    },

    manufacturerId() {
      return this.$store.state.localJSON
        ? parseInt(this.$store.state.localJSON.ManufacturerID)
        : 0
    },

    companyName() {
      return this.$store.state.localJSON
        ? this.$store.state.localJSON.CompanyName
        : ''
    }
  },

  methods: {},

  created() {
    this.loadLocalJSON()
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  height: 100%;
}

body,
div#app {
  margin: 0;
  min-height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
}

header {
  grid-row-start: 0;
  grid-row-end: 1;
}

main {
  background-color: #e0e0e0;
  padding: 20px;
}

footer {
  grid-row-start: 2;
  grid-row-end: 3;
}
</style>
