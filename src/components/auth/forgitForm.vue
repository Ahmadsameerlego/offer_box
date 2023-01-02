<template>
  <div>
    <form action="">
      <div class="d-flex align-items-center flex-column">
        <v-img
          lazy-src="@/assets/logoz.png"
          height="200"
          width="200"
          src="@/assets/logoz.png"
        ></v-img>

        <h2 class="fontBold">مرحبا بك</h2>

        <p class="fontBold">الرجاء إدخال بيانات الحساب لتسجيل الدخول</p>
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
              lazy-src="@/assets/noun_mobile.png"
              height="25"
              width="25"
              src="@/assets/noun_mobile.png"
            ></v-img>
          </span>
          <v-select :items="items" solo></v-select>
        </div>
      </div>

      <div class="mt-3 mb-3 d-flex justify-content-center">
        <button class="main_btn up">تأكيد</button>
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
