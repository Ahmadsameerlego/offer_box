<template>
  <div>
    <form action="">
      <div class="d-flex align-items-center flex-column">
        <v-img
              lazy-src="../../assets/logoz.png"
              height="200"
              width="200"
              src="../../assets/logoz.png"
            ></v-img>

            <h2 class="fontBold">مرحبا بك</h2>

            <p class="fontBold">
              الرجاء إدخال بيانات الحساب لتسجيل الدخول
            </p>
      </div>
      <div class="mt-3 mb-3">
        <h6 class="fontBold mb-0">رقم الجوال</h6>
        <div class="form__label">
          <input
            class="default_input"
            type="number"
            required=""
            placeholder="الرجاء إدخال رقم الجوال"
          />
          <label class="float__label" for="">الرجاء إدخال رقم الجوال</label>
          <span class="icon-input">
            <v-img
              lazy-src="../../assets/noun_mobile.png"
              height="25"
              width="25"
              src="../../assets/noun_mobile.png"
            ></v-img>
          </span>
          <v-select :items="items" solo></v-select>
        </div>
      </div>

      <div class="mt-3 mb-3">
        <h6 class="fontBold mb-0">كلمة المرور</h6>
        <div class="form__label">
          <input
            class="default_input"
            required=""
            placeholder="الرجاء إدخال كلمة المرور"
            :type="passwordFieldType" v-model="password"
          />
          <label class="float__label" for="">الرجاء إدخال كلمة المرور</label>
          <span class="icon-input">
            <v-img
              lazy-src="../../assets/Unlock.png"
              height="25"
              width="25"
              src="../../assets/Unlock.png"
            ></v-img>
          </span>
          <v-btn class="float_btn" color="white" elevation="0" small
            type="button" @click="switchVisibility"
            ><v-img
              lazy-src="../../assets/eye-close.png"
              height="25"
              width="25"
              src="../../assets/eye-close.png"
            ></v-img>
          </v-btn>
        </div>
      </div>
      <router-link class="default-link" :to="{ name: 'forgetPassowrd' }"
        >هل نسيت كلمة المرور ؟</router-link
      >
      <div class="mt-3 mb-3 d-flex justify-content-center">
        <button class="main_btn up" color="#1ec2a8" elevation="0" x-large>تسجيل الدخول</button>
      </div>
      <div class="mt-3 mb-3 d-flex justify-content-center" style="gap:5px">
        <span>ليس لديك حساب ؟</span>
        <router-link class="default-link mainColor" :to="{ name: 'HomeRegester' }"
        >تسجيل جديد</router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: ["+996", "+20", "565", "+10"],
    password: "",
    passwordFieldType: "password"
  }),
  methods: {
    switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
    }
  },
};
</script>

<style lang="scss" scoped>
    $mainColor: #1ec2a8;
    .mainColor{
      color: $mainColor;
    }
.v-select {
  position: absolute;
  line-height: 1;
  left: 0;
  top: 0;
  height: 100%;
  .v-field__append-inner {
    padding-top: 12px;
  }
  .v-field--variant-filled {
    .v-field__overlay {
      background-color: unset;
    }
  }
}
</style>
