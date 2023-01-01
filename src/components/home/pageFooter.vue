<template>
  <footer class=" pt-5">
    <div class="container">
      <div class="row">

        <div class="col-md-4">
            <h6 class="labeledSection  mb-4">تعرف علينا</h6>

            <div class="main_links d-flex flex-column mt-3">
              <router-link to="/"> من نحن </router-link>
              <router-link to="/"> الشروط والاحكام </router-link>
              <router-link to="/"> اسئلة مكررة </router-link>
              <router-link to="/"> اتصل بنا </router-link>
            </div>
        </div>


        <div class="col-md-4">
            <h6 class="labeledSection  mb-4">تواصل معنا</h6>

            <div class="contactUs mt-3">

              <div class="d-flex align-items-baseline">
                <img :src="location" alt="" class="location">
                <p class="fw-600"> الرياض - المملكة العربية السعودية </p>
              </div>

              <a href="tel:01013746111" class="d-flex align-items-baseline">
                <img :src="tel" alt="" class="tel">
                <p class="fw-600"> 01013746111 </p>
              </a>

              <a href="mailto:ahmadsamerlego@gmail.com" class="d-flex align-items-baseline">
                <img :src="mail" alt="" class="mail">
                <p class="fw-600"> ahmadsamerlego </p>
              </a>

              <!-- social media  -->
              <div class="soicalMedia d-flex justify-start align-items-center">
                <router-link to="/">
                  <img :src="face" alt="" class="socail_media_img">
                </router-link>

                <router-link to="/">
                  <img :src="face" alt="" class="socail_media_img">
                </router-link>

                <router-link to="/">
                  <img :src="face" alt="" class="socail_media_img">
                </router-link>

                <router-link to="/">
                  <img :src="face" alt="" class="socail_media_img">
                </router-link>
              </div>

            </div>
        </div>

        <div class="subscription col-md-4 ">
            <h6 class="labeledSection  mb-4">البريد الالكتروني</h6>

            <div class="form-group">
              <form>
                <label for="" class="follow_us"> تابعنا ليصلك كل جديد من خلال البريد الالكتروني </label>

                <input type="text" v-model="subscription" class='form-control' placeholder="البريد الالكتروني">

                <v-btn
                  elevation="2"
                  class="button w-50"
                  
                > الاشتراك </v-btn>
              </form>
            </div>
        </div>

      </div>

      <!-- download app  -->
      <div class="downloadApp mt-3">
        <h6>حمل التطبيق الان</h6>
        <div class="d-flex">
          <a href="#">
            <img :src="appStore" alt="">
          </a>

          <a href="#">
            <img :src="googlePlay" alt="">
          </a>
        </div>
      </div>

      <!-- copy right  -->
      <div class="copyRight d-flex justify-content-between mt-4">
        <p>جميع الحقوق محفوظة لدى offerBox 2022</p>
        <p> تصميم <a href="https://aait.sa/">اوامر الشبكة</a> </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data(){
    return{
      location : require('../../assets/location.png'),
      tel : require('../../assets/tele.png'),
      mail : require('../../assets/mail.png'),
      face : require('../../assets/facebook.png'),
      googlePlay : require('../../assets/googlePlay.png'),
      appStore : require('../../assets/appStore.png')
    }
  }
}
</script>

<style lang="scss">
    $base-color: #1ec2a8;

  footer{
    background-color: #f5f5f5;
    margin-top: 60px !important;
    .labeledSection{
      color:#1ec2a8;
      font-weight: normal;
    }
    .main_links{
      a{
        color:#111;
        margin-bottom: 12px;
      }
    }
    .contactUs{
      img{
        margin: 0 4px;
      }
      .location{
        width: 14px;
        height: 20px;
      } 
      .tel{
        width:18px;
      }
      .mail{
        width:21px;
      }
      a{
        color:#111;
      }
      .fw-600{
        font-weight: 600;
      }
      .socail_media_img{
        width:30px;
        height:30px;
        border-radius: 50%;
        margin-left: 9px;
      }
    }
    .subscription{
      label{
        color: gray;
        font-size: 11px;
        margin-bottom: 12px;
      }
      input{
        border: 1px solid #1ec2a8;
        font-size: 12px;
        height:40px;
      }
      button{
        margin-top: 12px;
        color:#fff !important;
      }
    }
    .downloadApp{
      img{
        width: 190px;
        height: 67px;
        object-fit: contain;
        margin-left: 12px;
      }
    }
    .copyRight{
      p{
        font-size: 15px;
        font-weight: 600;
      }
      a{
        color:#111
      }
    }
  }
</style>