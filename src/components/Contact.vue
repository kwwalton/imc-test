<template>
  <div class="contact" :class="{ overrides: isProductDetails }">
    <ul>
      <li><strong>Sales Rep:</strong> {{ fullName }}</li>
      <li>
        <strong>Phone:</strong> <a :href="phoneLink">{{ phone }}</a>
      </li>
      <li>
        <strong>Cell:</strong> <a :href="cellPhoneLink">{{ cellPhone }}</a>
      </li>
      <li>
        <strong>Email:</strong> <a :href="emailLink">{{ email }}</a>
      </li>
      <li><strong>Location:</strong> {{ location }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Contact',

  props: {
    salesRep: Object,
    isProductDetails: Boolean
  },

  data() {
    return {}
  },

  computed: {
    fullName() {
      return `${this.salesRep.FirstName} ${this.salesRep.LastName}`
    },

    phone() {
      return this.salesRep.Phone
    },

    phoneLink() {
      return `tel:${this.salesRep.Phone}`
    },

    cellPhone() {
      let numberString = this.salesRep.CellPhone
      let hyphenIndexes = [
        [0, 3],
        [3, 6],
        [6, 10]
      ]
      let sections = []
      hyphenIndexes.forEach((elem, ind) => {
        sections[ind] = numberString.slice(
          hyphenIndexes[ind][0],
          hyphenIndexes[ind][1]
        )
      })
      return sections.join('-')
    },

    cellPhoneLink() {
      return `tel:${this.cellPhone}`
    },

    email() {
      return this.salesRep.EmailAddress
    },

    emailLink() {
      return `mailto:${this.salesRep.EmailAddress}`
    },

    location() {
      return `${this.salesRep.City}, ${this.salesRep.State}, ${this.salesRep.PostalCode}`
    }
  },

  methods: {}
}
</script>

<style lang="css" scoped>
ul {
  columns: 1;
  padding: 10px;
  border: 1px solid #bdbdbd;
  background-color: rgba(0, 0, 0, 0.05);
}

li {
  list-style: none;
  padding: 0;
  margin: 5px 0;
  line-height: 20px;
}

li:first-of-type {
  font-size: x-large;
}

strong {
  font-size: smaller;
}

a {
  color: #454137;
  border-bottom: 2px solid #ff6d00;
  text-decoration: none;
}

@media screen and (min-width: 768px) {
  ul {
    columns: 3;
  }
}

@media screen and (min-width: 1280px) {
  ul {
    columns: 5;
  }
}
/* Applied in product details only*/
.overrides {
  display: block;
  width: 100%;
  align-self: baseline;
}
.overrides ul {
  columns: 1 !important;
}

.overrides li {
  margin-bottom: 10px;
}
</style>
