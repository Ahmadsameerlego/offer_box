<template>
  <div class="container mt-4">
    <div class="d-flex align-items-center justify-content-between">
      <h1 class="fontBold font20">إسم الاعلان</h1>
      <span class="mainColor2">{{ $t('offers.additionDate') }}  : 30/11/2023 </span>
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <h2 class="fontBold font15">إسم المتجر</h2>
      <span class="mainColor2">إلكترونيات</span>
    </div>
    <div class="categories">
      <span class="catrgItem">إلكترونيات</span>
    </div>
    <div class="row mb-4">
      <div class="col-lg-6 col-12">
        <offerDetailesSlider />
      </div>
      <div class="col-lg-6 col-12">
        <div class="d-flex flex-column gap20">
          <h3 class="fontBold">{{ $t('offers.AdDescription') }}</h3>
          <p>
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق، إذا
            كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد
            الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص
            العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير
            من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع، ومن هنا وجب على
            المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور
            مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة
            له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق، هذا النص يمكن
            أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير
            منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.
          </p>
        </div>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-12 mb-3">
        <h5 class="labeledSection fw-bold">{{ $t('offers.Similar') }}</h5>
      </div>
      <div class="col-lg-4 col-md-6 col-12 mb-3">
        <!-- single new offer  -->
        <router-link :to="'/OfferDescription/' + 1">
          <div class="singleNewOffer">
            <!-- offer image  -->
            <img :src="src" alt="new offer image" class="newOfferImage" />

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
      <div class="col-lg-4 col-md-6 col-12 mb-3">
        <!-- single new offer  -->
        <router-link :to="'/OfferDescription/' + 1">
          <div class="singleNewOffer">
            <!-- offer image  -->
            <img :src="src" alt="new offer image" class="newOfferImage" />

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
      <div class="col-lg-4 col-md-6 col-12 mb-3">
        <!-- single new offer  -->
        <router-link :to="'/OfferDescription/' + 1">
          <div class="singleNewOffer">
            <!-- offer image  -->
            <img :src="src" alt="new offer image" class="newOfferImage" />

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
    </div>
  </div>
</template>

<script>
import offerDetailesSlider from "@/components/offers/offerDetailesSlider.vue";
export default {
  data() {
    return {
      src: require("../../assets/slider1.jpg"),
    };
  },
  components: {
    offerDetailesSlider,
  },
};
</script>

<style lang="scss" scoped>
$mainColor2: #807f7f;

.mainColor2 {
  color: $mainColor2;
}
.categories {
  margin: 25px 0;
  .catrgItem {
    padding: 5px 15px;
    background-color: #eee;
    color: $mainColor2;
    font-size: 18px;
    border-radius: 5px;
    box-shadow: 0 0 5px rgb(241, 241, 241);
  }
}
</style>
