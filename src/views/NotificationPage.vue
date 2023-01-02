<template>
    <!-- header  -->
    <pageHeader />


    <notificationList />

    <!-- footer  -->
    <pageFooter />
    
</template>

<script>
import pageHeader from '../components/home/pageHeader.vue';
import pageFooter from '../components/home/pageFooter.vue';
import notificationList from '../components/profile/notificationList.vue';

export default {
    components:{
        pageHeader,
        pageFooter,
        notificationList,
    }
}
</script>

<style>

</style>