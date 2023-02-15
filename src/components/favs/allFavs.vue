<template>
  <section id="favs" class="mt-4" v-if="favorites.length>0">
    <div class="container">
        <h5 class="labeledSection fw-bold">{{$t('nav.favs')}}</h5>
        <section class="favs mt-4">
            <div class="row">

                <!-- single fav  -->
                <div class="col-md-4" v-for="fav in favorites" :key="fav.id">
                    <!-- single new offer  -->
                    <router-link to="/">

                    <v-lazy
                        v-model="isActive"
                        :options="{
                        threshold: .5
                        }"
                        min-height="200"
                        transition="scroll-y-transition"
                    >
                        <div class="singleNewOffer">

                            <!-- offer image  -->
                            <img :src="fav.ad_image" alt="new offer image" class="newOfferImage">

                            <!-- store name -->
                            <div class="storeName">
                                <h5> {{ fav.store_name }} </h5>
                                <h6> {{ fav.ad_name }} </h6>
                            </div>

                            <!-- time -->
                            <span class="offerTime">
                                {{ fav.created_at }}
                                <button class="removeFav btn" @click.prevent="removeFav(fav.ad_id)">
                                    <i class="fa-solid fa-trash-can text-danger"></i>
                                </button>
                            </span>

                            <!-- add to fav  -->
                            <span class="addToFav btn">
                                <i class="fa-solid fa-heart red"></i>
                            </span>

                            <!-- category  -->
                            <span class="offerCate"> {{ fav.menu_name }} </span>

                        </div>
                    </v-lazy>    
                    </router-link>
                </div>
            </div>
    </section>
    </div>

  </section>


    <section v-else>
    <v-alert
      type="info"
      class="noFound"
    >
      {{ $t('common.notFound') }}
    </v-alert>
  </section>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            src : require('../../assets/slider1.jpg'),
            isActive : false,
            ad_id : null
        }
    },
    props : {
        favorites :Array
    },
    methods:{
        async removeFav(adId){
            await axios.post(`remove-from-fav`, {
                ad_id : adId,
                mac_address : localStorage.getItem('macAddress')
            })
            .then( (res)=>{
                this.$swal({
                    icon: 'success',
                    title: res.data.msg,
                    timer: 2000
                });
                location.reload()
            } )
            .catch( (err)=>{
                console.error( err )
            } )
        }
    }
    // mounted(){
    //     this.ad_id = 
    // }
}
</script>

<style lang="scss">
    $base-color: #1ec2a8;
    .removeFav{
        background-color: rgb(255 0 0 / 17%) !important;
        border-radius: 50% !important;
        margin-right: 10px;
        width: 30px;
        height: 30px;
        padding: 0 !important;
    }
    .addToFav{
        position: absolute;
        top: 10px;
        right:10px;
        width: 30px;
        height: 30px;
        background-color: #1ec2a8 !important;
        color:#fff !important;
        border-radius: 50% !important;
        padding: 1px 7px !important;
    }
    .fa-heart.red{
        color:#f52626
    }
</style>