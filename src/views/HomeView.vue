<template>

  <!-- header -->
  <pageHeader />

  <!-- parts  -->
  <HomeParts />

  <!-- new offers  -->
  <newOffers />

  <!-- financial offers  -->
  <financialOffers />

  <!-- famous stores  -->
  <famouseStores />

  <!-- home offers  -->
  <homeOffers />

  <!-- footer  -->
  <pageFooter />
</template>

<script>

import { defineComponent } from 'vue';
import pageHeader from '../components/home/pageHeader.vue';
import HomeParts from '../components/home/HomeParts.vue';
import newOffers from '../components/home/NewOffers.vue';
import financialOffers from '../components/home/financialOffers.vue';
import famouseStores from '../components/home/famousStores.vue';
import homeOffers from '../components/home/homeOffers.vue';
import pageFooter from '../components/home/pageFooter.vue'
export default defineComponent({
  name: 'HomeView',

  components: {
    pageHeader,
    HomeParts,
    newOffers,
    financialOffers,
    famouseStores,
    homeOffers,
    pageFooter
  },
});
</script>
