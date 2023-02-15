<template>

    <!-- loader  -->
    <loader v-if="loader" />

    <!-- header  -->
    <pageHeader />


    <notificationList :notes="notes" :pagination="pagination" />

    <!-- footer  -->
    <pageFooter />
    
</template>

<script>
import pageHeader from '../components/home/pageHeader.vue';
import pageFooter from '../components/home/pageFooter.vue';
import notificationList from '../components/profile/notificationList.vue';
import loader from '../components/share/pageLoader.vue'
import axios from 'axios'

export default {
    data(){
        return{
            loader : true ,
            notes : [],
            pagination : {}
        }
    },
    components:{
        pageHeader,
        pageFooter,
        notificationList,
        loader
    },
    methods:{
        async getNotification(){
            await axios.get(`notifications?h`, {
                headers : {
                    Authorization:  `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                this.notes = res.data.data.notifications
                this.pagination = res.data.data.pagination

                this.loader = false
            } )
            .catch( (err)=>{
                console.error(err)
            } )
        }
    },
    mounted(){
        this.getNotification()
    }
}
</script>

<style>

</style>