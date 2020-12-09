<template>
  <header>
    <router-link :to="{ name: 'Products' }">
      <h1>
        <span>{{ companyName }}</span
        ><img :src="companyLogo" :alt="manufacturerId" class="logo" />
      </h1>
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'Header',

  props: {
    manufacturerId: Number,
    companyName: String
  },

  computed: {
    companyLogo() {
      return `http://images.repzio.com/productimages/${this.manufacturerId}/logo${this.manufacturerId}_lg.jpg`
    }
  }
}
</script>

<style lang="css" scoped>
header {
  box-shadow: 3px 3px 3px 3px #ccc;
background: rgb(255,190,29);
background: linear-gradient(180deg, rgba(255,190,29,1) 0%, rgba(255,190,29,1) 50%, rgba(255,160,0,1) 100%);
z-index: 999;
}

.logo {
  height: 60px;
  max-width: 100px;
  border: 10px solid #fff;
  border-radius: 10px;
  margin-bottom:10px;
}

h1 {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding: 20px 0;
  margin: 0;
}

h1 > span {
  text-align: center;
}

a {
  text-decoration: none;
  color: #454137;
}

a:hover {
  color: #222;
}

@media screen and (min-width: 768px) {
  h1 {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
  }

  h1 > span {
    margin-left: 40px;
  }

  .logo {
  height: 80px;
  margin-bottom:0;
  }
}
</style>
