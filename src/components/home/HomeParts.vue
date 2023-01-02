<template>
    <div class="container mt-4">
        <h5 class="labeledSection fw-bold"> {{ $t('home.parts') }} </h5>
         <swiper
            :slidesPerView="6"
            :spaceBetween="12"
            :pagination="{
            clickable: true,
            }"
            :modules="modules"
            class="mySwiper mt-4"
        >

                <swiper-slide  class="swiperSlide" v-for="part in parts" :key="part">
                    <router-link to="/" >

                        <img :src="part.partImage" alt="">

                        <h6> {{ part.partName }} </h6>
                    </router-link>
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
            parts : [
                {
                    partName : 'الكترونيات',
                    partImage : require('../../assets/slider1.jpg'),

                },
                 {
                    partName : 'الكترونيات',
                    partImage : require('../../assets/slider1.jpg'),

                },
                 {
                    partName : 'الكترونيات',
                    partImage : require('../../assets/slider1.jpg'),

                },
                 {
                    partName : 'الكترونيات',
                    partImage : require('../../assets/slider1.jpg'),

                },
                 {
                    partName : 'الكترونيات',
                    partImage : require('../../assets/slider1.jpg'),

                },
                 {
                    partName : 'الكترونيات',
                    partImage : require('../../assets/slider1.jpg'),

                },
                 {
                    partName : 'الكترونيات',
                    partImage : require('../../assets/slider1.jpg'),

                }
            ]
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
        .swiperSlide{
            position: relative;
            width: 175px !important;
            height: 92px;
            border-radius: 20px;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 50px;
                filter: brightness(0.5);
            }
            h6{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: #fff;
            }
        }

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