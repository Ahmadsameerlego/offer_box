<template>
  <header>

    <section>
        <div class="container">

            <!-- slider  -->
            <PageSlider />

            <!-- nav bar  -->
            <section class="NavBar pt-4 mb-5 d-flex justify-content-between align-items-baseline">
              <!-- logo  -->
              <div id="logo">
                  <img :src="src" alt="">
              </div>

              <!-- navbar -->
              <nav class="navbar navbar-expand-lg navbar-light">
                <div class="" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto flex-row">

                    <li class="nav-item">
                      <router-link to="/" class="nav-link" :class="{active : $route.path === '/'}"> {{  $t('nav.home')}} </router-link>
                    </li>

                    <li class="nav-item">
                      <router-link to="/stores" class="nav-link" :class="{ active : $route.path === '/stores' }"> {{  $t('nav.stores')}} </router-link>
                    </li>

                    <li class="nav-item">
                      <router-link to="/offers" class="nav-link" :class="{ active: $route.path === '/offers' }"> {{  $t('nav.offers')}} </router-link>
                    </li>

                    <li class="nav-item">
                      <router-link to="/favorites" class="nav-link"  :class="{ active : $route.path === '/favorites' }"> {{  $t('nav.favs')}} </router-link>
                    </li>

                    <li class="nav-item">
                      <router-link to="/about-us" class="nav-link" :class="{ active : $route.path === '/about-us' }"> {{  $t('nav.who')}} </router-link>
                    </li>

                    <li class="nav-item">
                      <router-link to="/ContactUs" class="nav-link" :class="{ active : $route.path === '/ContactUs' }"> {{  $t('nav.contact')}}   </router-link>
                    </li>


                  </ul>

                </div>
              </nav>

              <!-- user icons  -->
              <div class="userAction d-flex">

                <!-- location  -->
                

                <googleMap />

                <!-- alerts  -->
                <router-link to="/NotificationPage" class="alert_Icon">
                  <i class="fa-solid fa-bell"></i>
                  <span class="alert_cont">10</span>
                </router-link>

              </div>

                <!-- profile dropdown  -->
                <div class="dropdown">
                  <button class="btn dropdown-toggle d-flex justify-content-between align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    
                    <img :src="src" alt="profile">
                    <span>احمد سمير</span>
                    <i class="fa-solid fa-chevron-down"></i>

                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                    <li class="first_drop">

                      <router-link class="dropdown-item" to="/profile">
                        <i class="fa-regular fa-user"></i>
                        <span>{{  $t('nav.account')}}</span>
                      </router-link>
                      
                    </li>

                    <li>
                      <router-link class="dropdown-item" :to="{name:'HomeLogin'}">
                        <i class="fa-solid fa-right-from-bracket"></i>
                        <span>{{  $t('nav.logout')}}</span>
                      </router-link>

                    </li>

                  </ul>
                </div>
              
            </section>

            <!-- search box  -->
            <section id="search">
                <v-autocomplete
                  v-model="value"
                  :items="items"
                  dense
                  filled
                  :label="$t('nav.searchOffer')"
                  class="searchBox"
              ></v-autocomplete>
              <i class="fa-solid fa-magnifying-glass"></i>
            </section>




        </div>
    </section>

  </header>
</template>

<script>
import PageSlider from './PageSlider.vue';
import googleMap from './googleMap.vue'
export default {
    data(){
      return{
        src : require('../../assets/logoz.png'),
        items: ['foo', 'bar', 'fizz', 'buzz'],
        value: null,
        dialog: false,

    }
    },
    components:{
      PageSlider,
      googleMap,

    },


    
}
</script>

<style lang="scss">
$base-color: #1ec2a8;

header{
  position: relative;
  height: 47vh;
  .NavBar{
    background-color: $base-color;
    #logo{
      position: relative;
      img{
          width: 165px;
          height: 110px;
          object-fit: contain;
      }
    }
    .nav-item{
      margin-right: 9px;
      margin-left: 9px;
        .nav-link{    
          position: relative;
          color: #fff !important;
          font-size: 18px;
          &::before{
            content: '';
            position: absolute;
            width: 0%;
            height:2px;
            right:0;
            bottom: -4px;
            background-color: #1ec2a8;
            transition: .4s all;
          }
          &:hover::before , &.active::before{
            width: 100%;
          }
      }
    }
    .userAction{
      display: flex;
      justify-content: space-between;
      align-items: center;
      button{
        box-shadow: none;
      }
      svg{
        position: relative;
        color: #fff !important;
        font-size: 20px;
        margin: 0 9px;
      }
      .alert_Icon{
        position: relative;
        .alert_cont{
          position: absolute;
          background-color: #1ec2a8;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          color: #fff;
          top: -5px;
          font-size: 11px;
          right: 1px;
          text-align: center;
        }
      }
    }
    .dropdown{
      .dropdown-toggle::after{display: none;}
      .btn{
        color: #fff;
        font-size: 18px;
        img{
          width: 30px;
          height: 30px;
          border-radius: 50%;
          object-fit: cover;
          margin: 0 9px;
        }
        svg{
          margin: 0 9px;
        }
      }
      .dropdown-item{
        display: flex;
        justify-content: start;
        align-items: center;
        font-size: 18px;
        svg{
          margin: 0 5px;
        }
      }
      .first_drop{
        border-bottom: 1px solid rgb(202, 196, 196);
      }
    }
  }
  .v-field--variant-filled .v-field__overlay{ background-color: #fff !important; opacity: 1; }
  .v-field__append-inner{ display: none; }
  .v-field--variant-filled:hover .v-field__overlay , .v-field--variant-filled.v-field--focused .v-field__overlay{ opacity: 1; }
  .v-input--horizontal{
      position: relative;
      .v-label.v-field-label{
        color: #197776;
        opacity: 1;
        
      }
  }
  #search{
    position: relative;
    width: 68%;
    margin: auto;
    .v-field{
      border-radius: 8px;
      height: 50px;
    }
    svg{
      position: absolute;
      left: 18px;
      top: 25%;
      font-size: 20px;
      color: #197776

    }
  }
}

</style>