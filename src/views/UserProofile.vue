<template>
    <!-- header  -->
    <pageHeader />

    <!-- profile component  -->
    <profileCompo />

    <!-- footer  -->
    <pageFooter />
</template>

<script>
import pageHeader from '../components/home/pageHeader.vue';
import pageFooter from '../components/home/pageFooter.vue';
import profileCompo from '../components/profile/profileComponent.vue'
export default {
    components:{
        pageHeader,
        pageFooter,
        profileCompo
    }
}
</script>

<style>

</style>