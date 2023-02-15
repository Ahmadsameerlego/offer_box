<template>
  <section class="storeDetails mt-5 mb-5">
    <!-- logo -->
    <div class="storeImage d-flex justify-content-center align-items-center">
        <img :src="src" alt="store image">
    </div>
    <!-- name  -->
    <h3 class="text-center mt-3">متجر الفريد</h3>

    <!-- follow  -->
    <div class="follow_store">
        <button class="btn  d-flex align-items-center" :class="{ followActive }" @click="followStore()">
            <i class="fa-regular fa-bell" ></i>
            <span > {{ $t('store.follow') }} </span>
        </button>
    </div>


    <!-- store information  -->
    <div class="row mt-5">

        <div class="col-md-6 mb-3">
            <div class="store_box">
                <h6 class="labeledSection"> {{ $t('store.followed') }} </h6>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nostrum nihil natus molestias nam tenetur earum modi deleniti pariatur perferendis. </p>
            </div>
        </div>

        <div class="col-md-6 mb-3">
            <div class="store_box">
                <h6 class="labeledSection"> {{ $t('store.branches') }} </h6>

                <!-- single branch  -->
                <div class="single_branch mt-3 mb-3 d-flex justify-content-between align-items-center">

                    <div class="d-flex align-items-center">

                        <img :src="flag" alt="" class="flagImage">
                        <div>
                            <h6>الرياض</h6>
                            <span class="text-muted">شارع الصندزق الاسود</span>
                        </div>
                    </div>

                    <div>
                        <img :src="loca" alt="" class="locationImage">
                    </div>

                </div>

            </div>
        </div>

        <div class="col-md-6 mb-3">
            <div class="store_box">
                <h6 class="labeledSection">  {{ $t('store.storeLinks') }} </h6>

                <div class="storeLinks mt-3 mb-3 d-flex justify-content-between">
                    <p>موقع المتجر</p>

                    <a href="aait">aait</a>
                </div>
            </div>
        </div>

        <div class="col-md-6 mb-3">
            <div class="store_box">
                <h6 class="labeledSection"> {{ $t('store.socialMedia') }} </h6>

                <div class="contact_sites d-flex align-items-center mt-3">
                    <img :src="phone" alt="">
                    <a href="tel:01013746111"> {{ $t('store.phone') }} : 01013746111 </a>
                </div>

                <div class="site_social_media d-flex justify-content-around mt-3 mb-3">
                    <a href="#">
                        <img :src="face" alt="social conatct">
                    </a>

                    <a href="#">
                        <img :src="face" alt="social conatct">
                    </a>

                    <a href="#">
                        <img :src="face" alt="social conatct">
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- parts  -->
    <section class="parts">
        <h4 class="labeledSection"> {{ $t('store.parts') }} </h4> 

        <div class="row mt-5">

            <div class="col-md-6" v-for="cat in cats" :key="cat.id">
                <div class="single_part">
                    <router-link :to="'/storeCategories/'+cat.id">
                        <img :src="cat.catImage" alt="">

                        <h5 class=""> {{ cat.catTitle }} </h5>
                    </router-link>
                </div>
            </div>
        </div>

    </section>
  </section>
</template>

<script>
export default {
    data(){
        return{
            src:require('../../assets/logo2.png'),
            flag : require('../../assets/flag.png'),
            loca : require('../../assets/location.png'),
            phone : require('../../assets/phone.png'),
            face : require('../../assets/facebook.png'),
            src1 : require('../../assets/slider1.jpg'),
            followActive : false,

            cats : [
                {
                    id:1, 
                    catImage :  require('../../assets/slider1.jpg'),
                    catTitle : ' هواتف'
                },
                {
                    id:2, 
                    catImage :  require('../../assets/slider1.jpg'),
                    catTitle : ' هواتف'
                },
            ]
        }
    },
    methods:{
        followStore(){
            this.followActive = true
        }
    }
}
</script>
 
<style lang="scss">
    $base-color: #1ec2a8;
    .storeDetails{
        position: relative;
        width:60%;
        margin:auto;
        .storeImage{
            img{
                width: 200px;
                height:140px;
                object-fit: cover;
            }
        }
        .follow_store{
            position: absolute;
            top: 20px;
            left:27px;
            svg, span{
                font-size: 22px;
                font-weight: 600;
                margin:0 5px;
            }
            button.followActive{
                color:#1ec2a8 !important;
            }
        }
        .store_box{
            box-shadow: 0px 0px 10px rgba(51, 51, 51, 0.123);
            border-radius: 6px;
            padding: 5px 10px;
            min-height: 130px;
            max-height: 180px;
            overflow-y: auto;
        }
        .locationImage{
            width:15px;
        }
        .flagImage{
            width: 12px;
            height: 19px;
            margin: 0 4px;
        }
        .storeLinks{
            p{ color:#111; font-weight: 600; }
            a{
                color:#111;
                text-decoration: underline !important;
                font-weight: 600;
            }
        }
        .contact_sites{
            img{
                width: 17px;
                margin: 0 7px;
            }
            a{
                color:#333;
            }
        }
        .single_part{
            position: relative;
            width: 87%;
            height: 300px;
            img{
                position: absolute;
                width:100%;
                height:100%;
                top: 0;
                left:0;
                filter:brightness(.5);
                border-radius: 10px;
            }
            h5{
                transition: .3s all;
                position: absolute;
                top: -9%;
                color: #fff;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 31px;
                font-weight: 600;
            }
            &:hover h5{
                top: 50%;
            }
        }
    }
</style>