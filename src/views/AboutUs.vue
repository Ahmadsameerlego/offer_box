<template>
    <!-- header  -->
    <pageHeader />

    <!-- about head  -->
    <aboutHead />

    <!-- about statistics  -->
    <aboutStatis />

    <!-- download app  -->
    <aboutDownload />

    <!-- footer  -->
    <pageFooter />
</template>

<script>
import pageHeader from '../components/home/pageHeader.vue'
import pageFooter from '../components/home/pageFooter.vue'
import aboutHead from '../components/about/aboutHead.vue';
import aboutStatis from '../components/about/aboutStatistics.vue';
import aboutDownload from '../components/about/downloadApp.vue'
export default {
    
    components:{
        pageHeader,
        pageFooter,
        aboutHead,
        aboutStatis,
        aboutDownload
    }
}
</script>

<style>

</style>