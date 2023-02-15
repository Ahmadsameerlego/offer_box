<template>
  <section id="stores" class="mt-5 mb-5" v-if="selectedStores.length>1">
    <div class="container">
      <h5 class="labeledSection fw-bold"> {{ $t('nav.stores') }} </h5>

      <!-- filter process  -->
      <section class="filter_process mt-3">
        <h6 class=""> {{ $t('nav.storeDepend') }} </h6>

        <form>
            <v-row align="center">
                <v-col class="customCheck d-flex" cols="12" sm="3">
                    <!-- المحافظة  -->


                      <select name="" id="" v-model="selectedOption1" class="form-select">
                        <option value="" selected disabled hidden> {{$t('nav.governorate')}} </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>

                    <img :src="flag" alt="" />
                    <i class="fa-solid fa-angle-down"></i>
                </v-col>

                <v-col class="customCheck d-flex" cols="12" sm="3">
                    <!-- المدينة  -->


                      <select name="" id="" v-model="selectedOption2" class="form-select">
                        <option value="" selected hidden disabled> {{$t('nav.city')}}</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>

                    <img :src="flag" alt="" />

                    <i class="fa-solid fa-angle-down"></i>
                </v-col>

                <div class="checks d-flex">
                    <v-checkbox
                    v-model="current"
                    color="info"
                    :label="$t('nav.new')"
                    value = "current"
                    class="shrink mr-2 mt-0"
                    ></v-checkbox>

                    <v-checkbox
                    v-model="old"
                    color="info"
                    value = "old"
                    :label="$t('nav.old')"
                    class="shrink mr-2 mt-0"
                    ></v-checkbox>

                    <v-checkbox
                    v-model="near"
                    color="info"
                    value = "near"
                    :label="$t('nav.near')"
                    class="shrink mr-2 mt-0"
                    ></v-checkbox>
                </div>
            </v-row>
        </form>


      </section>

  
      <!-- filtered store  -->
      <section class="filtered_section mt-3">

        <v-lazy
          v-model="isActive"
          :options="{
            threshold: .5
          }"
          min-height="200"
          transition="scroll-y-transition"
        >

        <div class="row">          

            <div class="col-md-4 mb-4" v-for="store in selectedStores" :key="store.id">

              <v-lazy
                v-model="isActive"
                :options="{
                  threshold: .5
                }"
                min-height="200"
                transition="scroll-y-transition"

              >

              <!-- single store  -->
              <div class="single_store">
                <!-- store image -->
                <div class="store_image">
                  <img :src="store.icon" alt="" />
                </div>

                <h5 class="text-center">{{ store.name }}</h5>

                <p
                  class="
                    storeLocation
                    d-flex
                    justify-content-start
                    align-items-center
                  "
                >
                  <img :src="locaImage" alt="" />
                  <span> {{ store.address }} </span>
                </p>

                <router-link
                  :to="'/store/'+1"
                  class="button d-flex justify-content-center mx-auto w-75"
                >
                  {{ $t('home.showStore') }}
                </router-link>

                <div class="store_status" v-if="store.is_open==true">
                  <span class="status"></span>
                  <p> {{ $t('common.open') }} </p>
                </div>

                <div class="store_status" v-else>
                  <span class="status close" style="background:red"></span>
                  <p>{{ $t('common.close') }}</p>
                </div>
              </div>
              </v-lazy>
            </div>

        </div>

        </v-lazy>
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
                v-if="stores.length>0"        
            >
            </paginate>
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
  import Paginate from 'vuejs-paginate-next';
  import axios from 'axios'

export default {
  data() {
    return {
      src: require("../../assets/storeLogo.png"),
      flag: require("../../assets/flag.png"),
      current: false,
      old: false,
      near: false,
      isActive: false,

   
      selectedOption1:'',
      selectedOption2: '',

      currentPage: 0,
      perPage: 0,
      totalPages: 0,


      stores : [],
      

    };
  },

  components:{
    Paginate
  },
  created() {
        this.totalPages = Math.ceil(this.stores.length / this.perPage)
  },

  updated(){
    console.log(this.selectedOption1);
    console.log(this.selectedOption2);
  },

  computed: {
      selectedStores(){
            let start = (this.currentPage - 1) * this.perPage
            let end = start + this.perPage

        // in case that no check must show all items , and if check any item return the value checked
        if( this.near == false && this.old == false && this.current == false && this.selectedOption1 == '' && this.selectedOption2 == ''){
          return this.stores,
                this.stores.slice(start, end)

        }else{
          return this.stores.filter( store => {
              if( this.current && store.timeState == 'current' ){
                return true
                
              }
              
              if( this.near && store.timeState == 'near' ){
                return true
              }

              if( this.old && store.timeState == 'old' ){
                return true
              }
              if( this.selectedOption1 === store.value ){
                return true
              }
              if( this.selectedOption2 === store.value2 ){
                return true
              }
              return false
            }
            
          )
          
        }



        
      } ,

      // displayedData() {
      //       let start = (this.currentPage - 1) * this.perPage
      //       let end = start + this.perPage
      //       return this.stores.slice(start, end)
      // }
  }
  ,
    methods:{
        pageClickHandler(page) {
            this.currentPage = page
        },


        async getStores(){
          await axios.get(`nearstores?lat=${localStorage.getItem('lat')}&long=${localStorage.getItem('lng')}&page=${this.currentPage}`)
          .then( (res)=>{
            this.stores = res.data.data.stores
            this.totalPages = res.data.data.pagination.total_pages
            this.perPage = res.data.data.pagination.per_page
            this.currentPage = res.data.data.pagination.current_page
          } )
        }

    },
    mounted(){
      this.getStores();
    }
};
</script>

<style lang="scss">
$base-color: #1ec2a8;
.noFound{
  width:40%;
  margin:auto;
  margin-top:60px;
}
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
<style>
  .customCheck .form-select{
    background-image:none !important ;
    border: none;
    background-color: #fff;
    box-shadow: 0px 0px 15px rgba(51, 51, 51, 0.137);
    height : 45px;
  }
    .customCheck  .fa-angle-down{
      color: #1ec2a8;
      position: absolute;
      left: 23px;
      top: 28px;
    }
</style>