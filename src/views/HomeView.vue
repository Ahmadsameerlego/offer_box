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
</template>

<script>

import { defineComponent } from 'vue';
import pageHeader from '../components/home/pageHeader.vue';
import HomeParts from '../components/home/HomeParts.vue';
import newOffers from '../components/home/NewOffers.vue';
import financialOffers from '../components/home/financialOffers.vue';
import famouseStores from '../components/home/famousStores.vue'
export default defineComponent({
  name: 'HomeView',

  components: {
    pageHeader,
    HomeParts,
    newOffers,
    financialOffers,
    famouseStores
  },
});
</script>
