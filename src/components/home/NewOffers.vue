<template>
  <div class="container mt-4">
        <h5 class="labeledSection fw-bold">{{ $t('home.currentOffs') }}</h5>

        <section class="mt-4">

            <div class="row">

                <router-link to="/"> 
                    <div class="col-md-4 mb-3">
                    
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

                    </div>
                </router-link>

            </div>

            <router-link to="/" class="button d-flex justify-content-center align-items-center"> {{ $t('common.more') }} </router-link>
        </section>
  </div>
</template>

<script>
export default {
    data(){
        return{
            src : require('../../assets/slider1.jpg'),
            newOffers : [],
            offerImage : null,
            storeName : '',
            offerName : '',
            offerTime : '',
            offerCategory : ''
        }
    }
}
</script>

<style lang="scss">
    .singleNewOffer{
        position: relative;
        width: 100%;
        height: 215px;
        border-radius: 8px;
        .newOfferImage{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left:0;
            z-index: 0;
            border-radius: 8px;
        }
        .storeName{
            position: absolute;
            bottom: 15px;
            right:15px;
            h5, h6{
                color: #fff;
            }
        }
        .offerCate, .offerTime{
            color:#f5ebeb;
            position: absolute;
            left:10px
        }
        .offerCate{
            bottom: 10px;
        }
        .offerTime{
            top: 10px;
        }
    }
</style>
<style scoped>
    .button{
        width: 20%;
    }
</style>