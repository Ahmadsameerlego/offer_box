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
                      <router-link to="/" class="nav-link" :class="{active : $route.path === '/'}"> الرئيسية </router-link>
                    </li>

                    <li class="nav-item">
                      <router-link to="/stores" class="nav-link" :class="{ active : $route.path === '/stores' }"> المتاجر </router-link>
                    </li>

                    <li class="nav-item">
                      <router-link to="/offers" class="nav-link" :class="{ active: $route.path === '/offers' }"> الاعلانات </router-link>
                    </li>

                    <li class="nav-item">
                      <router-link to="/favorites" class="nav-link"  :class="{ active : $route.path === '/favorites' }"> المفضلة </router-link>
                    </li>

                    <li class="nav-item">
                      <router-link to="/" class="nav-link"> من نحن </router-link>
                    </li>

                    <li class="nav-item">
                      <router-link to="/" class="nav-link"> تواصل معنا   </router-link>
                    </li>


                  </ul>

                </div>
              </nav>

              <!-- user icons  -->
              <div class="userAction d-flex">

                <!-- location  -->
                

                <v-dialog
                  v-model="dialog"
                  width="500"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="transparent lighten-2"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      @click="dialog = true"
                    >
                      <i class="fa-solid fa-location-dot"></i>
                    </v-btn>
                  </template>

                  <v-card>
                    <v-card-title class="text-h5 grey lighten-2">
                      Privacy Policy
                    </v-card-title>

                    <v-card-text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="primary"
                        text
                        @click="dialog = false"
                      >
                        I accept
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <!-- alerts  -->
                <router-link to="/" class="alert_Icon">
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
                        <span>حسابي</span>
                      </router-link>
                      
                    </li>

                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="fa-solid fa-right-from-bracket"></i>
                        <span>تسجيل الخروج</span>
                      </a>
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
                  label="البحث عن اعلان"
                  class="searchBox"
              ></v-autocomplete>
              <i class="fa-solid fa-magnifying-glass"></i>
            </section>




        </div>
    </section>

  </header>
</template>

<script>
import PageSlider from './PageSlider.vue'
export default {
    data(){
      return{
        src : require('../../assets/logo.png'),
        items: ['foo', 'bar', 'fizz', 'buzz'],
        value: null,
        dialog: false,
      }
    },
    components:{
      PageSlider
    }

    
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