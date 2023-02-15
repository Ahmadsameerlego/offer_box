<template>
    <!-- header -->
    <pageHeader />

    <!-- filtered store  -->
    <filteredStore />

    <!-- footer -->
    <pageFooter />
</template>

<script>
import pageHeader from '../components/home/pageHeader.vue'
import pageFooter from '../components/home/pageFooter.vue'
import filteredStore from '../components/store/filteredStore.vue'
export default {
    components:{
        pageHeader,
        pageFooter,
        filteredStore
    }
}
</script>

<style>

</style>