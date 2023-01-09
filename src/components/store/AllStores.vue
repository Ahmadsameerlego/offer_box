<template>
  <section id="stores" class="mt-5 mb-5">
    <div class="container">
      <h5 class="labeledSection fw-bold"> {{ $t('nav.stores') }} </h5>

      <!-- filter process  -->
      <section class="filter_process mt-3">
        <h6 class=""> {{ $t('nav.storeDepend') }} </h6>

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

      <!-- filtered store  -->
      <section class="filtered_section mt-3">
        <div class="row">

          <v-lazy
            v-model="isActive"
            :options="{
              threshold: .5
            }"
            min-height="200"
            transition="scroll-y-transition"
          >

            <div class="col-md-4 mb-4">
              <!-- single store  -->
              <div class="single_store">
                <!-- store image -->
                <div class="store_image">
                  <img :src="src" alt="" />
                </div>

                <h5 class="text-center">اسم المتجر</h5>

                <p
                  class="
                    storeLocation
                    d-flex
                    justify-content-start
                    align-items-center
                  "
                >
                  <img :src="locaImage" alt="" />
                  <span> شارع الصندوق الاسود , الرياض </span>
                </p>

                <router-link
                  :to="'/store/'+1"
                  class="button d-flex justify-content-center mx-auto w-75"
                >
                  {{ $t('home.showStore') }}
                </router-link>

                <div class="store_status">
                  <span class="status"></span>
                  <p>مفتوح</p>
                </div>
              </div>
            </div>

          </v-lazy>
          
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      src: require("../../assets/storeLogo.png"),
      flag: require("../../assets/flag.png"),
      current: false,
      old: false,
      nearest: false,
      isActive: false,

    };
  },
};
</script>

<style lang="scss">
$base-color: #1ec2a8;
.filter_process{
    h6{
        font-size: 20px;
    }
}
.v-select .v-field .v-field__append-inner > .v-icon {
  color: #1ec2a8;
}
.v-field--variant-filled .v-field__overlay {
  background-color: #fff;
  box-shadow: 0px 0px 15px rgba(51, 51, 51, 0.137);
}
.v-field--variant-filled .v-field__outline::before,
.v-field--variant-underlined .v-field__outline::before {
  border: none;
}
.customCheck {
  position: relative;
  .v-input__control {
    box-shadow: 1px 3px 10px #3333332b;
    border-radius: 5px;
    height: 47px;
  }
  .v-label.v-field-label {
    color: #333;
    opacity: 1;
    margin: 0 28px;
    margin-top: -4px;
  }
  img {
    width: 9px;
    height: 16px;
    position: absolute;
    right: 22px;
    top: 30px;
  }
}
.checks {
  .v-selection-control--inline .v-label {
    color: #333;
    opacity: 1;
    font-weight: 600;
    font-size: 15px;
  }
}
</style>