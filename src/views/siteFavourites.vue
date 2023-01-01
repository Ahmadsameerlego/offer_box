<template>
    
    <!-- header  -->
    <pageHeader />

    <!-- favs  -->
    <allFavs />

    <!-- footer -->
    <pageFooter />

</template>

<script>
import pageHeader from '../components/home/pageHeader.vue'
import pageFooter from '../components/home/pageFooter.vue'
import allFavs from '../components/favs/allFavs.vue'
export default {
    components:{
        pageHeader,
        pageFooter,
        allFavs
    }
}
</script>

<style>

</style>