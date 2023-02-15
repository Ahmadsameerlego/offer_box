<template>
    <!-- loader  -->
    <loader v-if="loader" />
    <!-- header  -->
    <pageHeader />

    <!-- favs  -->
    <allFavs :favorites="favorites" />

    <!-- footer -->
    <pageFooter />

</template>

<script>
import pageHeader from '../components/home/pageHeader.vue'
import pageFooter from '../components/home/pageFooter.vue'
import allFavs from '../components/favs/allFavs.vue';
import loader from '../components/share/pageLoader.vue'

import axios from 'axios'
export default {

    data(){
        return{
            favorites : [],
            // token : '',
            loader : true
        }
    },
    components:{
        pageHeader,
        pageFooter,
        allFavs,
        loader
    },
    methods : {
        async getFavs(){
            await axios.get(`favorites?mac_address=${localStorage.getItem('macAddress')}` , {
                headers : {
                    Authorization:  `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{

                if( res.data.key == "success" && res.data.code == 200 ){
                    this.favorites = res.data.data.favorites;
                }else{
                    return false
                }
                this.loader = false
            } )
            .catch( (err)=>{
                console.error(err)
            } )
        }
    },
    mounted(){
        this.getFavs()
        console.log(this.token)
    },
    computed : {
    token(){
      return this.$store.getters.getToken
    }
  }

}
</script>

<style>

</style>