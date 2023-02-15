<template>
  <section id="offers" class="mt-4">
    <div class="container">
        <h5 class="labeledSection fw-bold"> {{ $t('nav.offers') }} </h5>

        <!-- filter process  -->
        <section class="filter_process mt-3">
            <h6 class="">{{ $t('nav.storeDepend') }}</h6>

            <form>
                <v-row align="center">
                    <v-col class="customCheck d-flex" cols="12" sm="3">
                        <!-- المحافظة  -->
                        <v-select :items="items" :label="$t('nav.governorate')" solo></v-select>

                        <img :src="flag" alt="" />
                    </v-col>

                    <v-col class="customCheck d-flex" cols="12" sm="3">
                        <!-- المدينة  -->
                        <v-select :items="items" :label="$t('nav.city')" solo></v-select>

                        <img :src="flag" alt="" />
                    </v-col>

                    <div class="checks d-flex">
                        <v-checkbox
                        v-model="current"
                        color="info"
                        :label="$t('nav.new')"
                        class="shrink mr-2 mt-0"
                        ></v-checkbox>

                        <v-checkbox
                        v-model="old"
                        color="info"
                        :label="$t('nav.old')"
                        class="shrink mr-2 mt-0"
                        ></v-checkbox>

                        <v-checkbox
                        v-model="nearest"
                        color="info"
                        :label="$t('nav.near')"
                        class="shrink mr-2 mt-0"
                        ></v-checkbox>
                    </div>
                </v-row>
            </form>

        </section>

        <!-- filtered offers  -->
        <section class="filtered_offers">
            <div class="row">
                <div class="col-md-4 mb-3" v-for="ad in displayedData" :key="ad.id">
                    <!-- single new offer  -->
                    <router-link :to="'/OfferDescription/'+1">


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
                            <img :src="ad.src" alt="new offer image" class="newOfferImage">

                            <!-- store name -->
                            <div class="storeName">
                                <h5>{{  ad.storeName}}</h5>
                                <h6>{{ ad.adsName }}</h6>
                            </div>

                            <!-- time -->
                            <span class="offerTime">{{ ad.time }}</span>

                            <!-- category  -->
                            <span class="offerCate"> {{ ad.category }} </span>

                        </div>
                    </v-lazy>
                        
                    </router-link>
                </div>
            </div>
        </section>



            <paginate
                v-model="currentPage"
                :page-count="totalPages"
                :click-handler="page => pageClickHandler(page)"
                :prev-text="'Prev'"
                :next-text="'Next'"
                :container-class="'pagination'"
                :page-class="'page-item'"    
                :no-li-surround="true"   
                v-if="ads.length>0"        
            >
            </paginate>

    </div>
  </section>
</template>

<script>
  import Paginate from 'vuejs-paginate-next';

export default {
    data(){
        return{
            flag: require("../../assets/flag.png"),
            current: false,
            old: false,
            nearest: false,
            isActive : false,

            currentPage: 1,
            perPage: 5,
            totalPages: 0,
            ads: [
                {
                    id:1,
                    adsName : ' اسم الاعلان ',
                    src : require('../../assets/slider1.jpg'),
                    storeName : ' اسم المتجر ',
                    category : ' الكترونيات ',
                    time : ' منذ 1 ساعة ',
                },
                {
                    id:2,
                    adsName : ' اسم الاعلان ',
                    src : require('../../assets/slider1.jpg'),
                    storeName : ' اسم المتجر ',
                    category : ' الكترونيات ',
                    time : ' منذ 1 ساعة ',
                },
                {
                    id:3,
                    adsName : ' اسم الاعلان ',
                    src : require('../../assets/slider1.jpg'),
                    storeName : ' اسم المتجر ',
                    category : ' الكترونيات ',
                    time : ' منذ 1 ساعة ',
                },
                {
                    id:4,
                    adsName : ' اسم الاعلان ',
                    src : require('../../assets/slider1.jpg'),
                    storeName : ' اسم المتجر ',
                    category : ' الكترونيات ',
                    time : ' منذ 1 ساعة ',
                },
                {
                    id:5,
                    adsName : ' اسم الاعلان ',
                    src : require('../../assets/slider1.jpg'),
                    storeName : ' اسم المتجر ',
                    category : ' الكترونيات ',
                    time : ' منذ 1 ساعة ',
                },
                {
                    id:6,
                    adsName : ' اسم الاعلان ',
                    src : require('../../assets/slider1.jpg'),
                    storeName : ' اسم المتجر ',
                    category : ' الكترونيات ',
                    time : ' منذ 1 ساعة ',
                },

                 {
                    id:7,
                    adsName : ' اسم الاعلان ',
                    src : require('../../assets/slider1.jpg'),
                    storeName : ' اسم المتجر ',
                    category : ' الكترونيات ',
                    time : ' منذ 1 ساعة ',
                },

                 {
                    id:8,
                    adsName : ' اسم الاعلان ',
                    src : require('../../assets/slider1.jpg'),
                    storeName : ' اسم المتجر ',
                    category : ' الكترونيات ',
                    time : ' منذ 1 ساعة ',
                },
            ]


        }
    },    
    components: {
      Paginate,
    },
    created() {
        this.totalPages = Math.ceil(this.ads.length / this.perPage)
    },
    computed : {
        displayedData() {
            let start = (this.currentPage - 1) * this.perPage
            let end = start + this.perPage
            return this.ads.slice(start, end)
        }

    },
    methods:{
        pageClickHandler(page) {
            this.currentPage = page
        }

    }

}
</script>

<style>
    .filtered_offers, .filter_process{
        width: 80%;
    }
    .pagination{
        display: flex;
        justify-content: center;
        margin-top: 25px;
        direction: ltr;
    }
    .page-item.active .page-link , .active>.page-link, .page-link.active{
        background-color: #78dacb !important;
        border-color: #78dacb !important;
        color: #fff !important;
    }
    .page-link{
        color:#78dacb !important ;
        cursor: pointer;
    }
    .page-item.active .page-link{
        color: #fff !important;
    }
    .page-item.disabled{
        opacity: .6;
    }
    .page-link:focus{
        box-shadow: none !important;
        outline: none !important;
    }
</style>