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
          <h6 class="fontBold mb-0">كلمة المرور</h6>
          <div class="form__label">
            <input
              class="default_input"
              type="password"
              required=""
              placeholder="الرجاء إدخال كلمة المرور"
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
              ><v-img
                lazy-src="../../assets/eye-close.png"
                height="25"
                width="25"
                src="../../assets/eye-close.png"
              ></v-img>
            </v-btn>
          </div>
        </div>
        <div class="mt-3 mb-3">
          <h6 class="fontBold mb-0">تأكيد كلمة المرور</h6>
          <div class="form__label">
            <input
              class="default_input"
              type="password"
              required=""
              placeholder="الرجاء إدخال تأكيد كلمة المرور"
            />
            <label class="float__label" for="">الرجاء إدخال تأكيد كلمة المرور</label>
            <span class="icon-input">
              <v-img
                lazy-src="../../assets/Unlock.png"
                height="25"
                width="25"
                src="../../assets/Unlock.png"
              ></v-img>
            </span>
            <v-btn class="float_btn" color="white" elevation="0" small
              ><v-img
                lazy-src="../../assets/eye-close.png"
                height="25"
                width="25"
                src="../../assets/eye-close.png"
              ></v-img>
            </v-btn>
          </div>
        </div>
        <div class="mt-3 mb-3 d-flex justify-content-center">
          <button class="main_btn up" color="#1ec2a8" elevation="0" x-large>تأكيد</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data: () => ({
      items: ["+996", "+20", "565", "+10"],
    }),
  };
  </script>
  
  <style lang="scss" scoped>
  
  </style>
  