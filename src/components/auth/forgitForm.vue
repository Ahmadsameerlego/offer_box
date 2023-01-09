<template>
  <div>
    <form ref="forgetForm" @submit.prevent="submitForm">
      <div class="d-flex align-items-center flex-column">
        <v-img
          lazy-src="@/assets/logoz.png"
          height="200"
          width="200"
          src="@/assets/logoz.png"
        ></v-img>
        <h2 class="fontBold">{{ $t('auth.wellcome') }}</h2>

        <p class="fontBold">{{ $t('auth.dataConfirm') }}</p>
      </div>
      <div class="mt-3 mb-3">
        <h6 class="fontBold mb-0">{{ $t('auth.phone') }}</h6>
        <div class="form__label">
          <input
            class="default_input"
            type="number"
            required=""
            v-model="phone"
            name="phone"
            placeholder="{{ $t('auth.insert') }} {{ $t('auth.phone') }}"
          />
          <label class="float__label" for="">{{ $t('auth.insert') }} {{ $t('auth.phone') }}</label>
          <span class="icon-input">
            <v-img
              lazy-src="../../assets/noun_mobile.png"
              height="25"
              width="25"
              src="../../assets/noun_mobile.png"
            ></v-img>
          </span>
          <v-select :items="items" solo v-model="countryCode" name="countryCode"></v-select>
        </div>
      </div>

      <div class="mt-3 mb-3 d-flex justify-content-center">
        <button class="main_btn up">{{ $t('auth.confirm') }}</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({
    items: ["+996", "+20", "565", "+10"],
    phone: "",
    countryCode: "",
  }),
  methods:{
    async submitForm(){
      const formData = new FormData(this.$refs.forgetForm)
      await axios.post(
        `https://jsonplaceholder.typicode.com/posts`,
        formData ,
      ).then((response) => {
        if(response.status == 201){
          console.log(response)
        }
      }).catch(e => {
        console.error(e);
      })
    }
  }
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
