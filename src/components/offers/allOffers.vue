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
            <div class="col-md-4">
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
                </v-lazy>
                    
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
            flag: require("../../assets/flag.png"),
            current: false,
            old: false,
            nearest: false,
            isActive : false

        }
    }
}
</script>

<style>

</style>