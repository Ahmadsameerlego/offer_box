<template>
  <div class="container mt-4">
    <div class="d-flex justify-content-between">
        <h5 class="labeledSection fw-bold">الاعلانات</h5>

        <router-link to="/" >
            <h6 class="allStores">جميع الاعلانات</h6>
        </router-link>
    </div>

    <section class="mt-4">
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
                    <span class="offerTime">منذ 1 ساعة</span>

                    <!-- category  -->
                    <span class="offerCate"> الكترونيات </span>

                </div>
            </router-link>
        </div>
    </section>
  </div>
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

<style>

</style>