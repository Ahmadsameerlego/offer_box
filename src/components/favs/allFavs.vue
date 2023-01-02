<template>
  <section id="favs" class="mt-4">
    <div class="container">
        <h5 class="labeledSection fw-bold">{{$t('nav.favs')}}</h5>
        <section class="favs mt-4">
            <div class="row">
                <div class="col-md-4">
                    <!-- single new offer  -->
                    <router-link to="/">
                        <div class="singleNewOffer">

                            <!-- offer image  -->
                            <img :src="src" alt="new offer image" class="newOfferImage">

                            <!-- store name -->
                            <div class="storeName">
                                <h5>اسم المتجر</h5>
                                <h6>اسم الاعلان</h6>
                            </div>

                            <!-- time -->
                            <span class="offerTime">
                                منذ 1 ساعة
                                <button class="removeFav btn">
                                    <i class="fa-solid fa-trash-can text-danger"></i>
                                </button>
                            </span>

                            <!-- add to fav  -->
                            <button class="addToFav btn">
                                <i class="fa-solid fa-heart"></i>
                            </button>

                            <!-- category  -->
                            <span class="offerCate"> الكترونيات </span>

                        </div>
                    </router-link>
                </div>
            </div>
    </section>
    </div>

  </section>
</template>

<script>
export default {
    data(){
        return{
            src : require('../../assets/slider1.jpg'),
        }
    }
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
</style>