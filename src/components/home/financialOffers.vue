<template>
    <div class="container mt-5">
         <swiper
            :slidesPerView="3"
            :spaceBetween="12"
            :pagination="{
            clickable: true,
            }"
            :modules="modules"
            class="mySwiper mt-4"
        >

            <swiper-slide  class="swiperSlide">
                <!-- single new offer  -->
                <div class="singleNewOffer">

                    <!-- offer image  -->
                    <img :src="src" alt="new offer image" class="newOfferImage">

                    <!-- store name -->
                    <div class="storeName">
                        <h5>اسم المتجر</h5>
                        <h6>اسم الاعلان</h6>
                    </div>

                    <!-- time -->
                    <span class="offerTime">منذ 1 ساعة</span>

                    <!-- category  -->
                    <span class="offerCate"> الكترونيات </span>

                </div>
            </swiper-slide>
        </swiper>

    </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

export default {
    data(){
        return{
            src : require('../../assets/slider1.jpg'),
            finanOffers : []
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination],
        };
    },
}
</script>

<style lang="scss" scoped>
    $base-color: #1ec2a8;
    .swiper{
        padding-bottom:50px;
        // .swiperSlide{
        //     position: relative;
        //     width: 175px !important;
        //     height: 92px;
        //     border-radius: 20px;
        // }

        .swiper-pagination-bullet{
            width: 11px;
            height:11px;
            background-color: #dcdcdc;
            opacity: 1;
        }
        .swiper-pagination-bullet-active{
            background-color: #1ec2a8 !important;
        }
    }
    .swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal{ bottom: 0; }
</style>