<template>
  <div>
    <form ref="regestForm" @submit.prevent="submitForm">
      <div class="d-flex align-items-center flex-column">
        <v-img
          lazy-src="../../assets/logoz.png"
          height="200"
          width="200"
          src="../../assets/logoz.png"
        ></v-img>

        <h2 class="fontBold">{{ $t('auth.wellcome') }}</h2>

        <p class="fontBold">{{ $t('auth.dataRegester') }}</p>
      </div>
      <div class="mt-3 mb-3">
        <h6 class="fontBold mb-0">{{ $t('auth.userName') }}</h6>
        <div class="form__label">
          <input
            class="default_input"
            type="text"
            required=""
            name="userName"
            v-modal="userName"
            placeholder="{{ $t('auth.insert') }} {{ $t('auth.userName') }}"
          />
          <label class="float__label" for="">{{ $t('auth.insert') }} {{ $t('auth.userName') }}</label>
          <span class="icon-input">
            <v-img
              lazy-src="../../assets/noun_user.png"
              height="25"
              width="25"
              src="../../assets/noun_user.png"
            ></v-img>
          </span>
        </div>
      </div>
      <div class="mt-3 mb-3">
        <h6 class="fontBold mb-0">{{ $t('auth.phone') }}</h6>
        <div class="form__label">
          <input
            class="default_input"
            type="number"
            required=""
            name="phone"
            v-modal="phone"
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
          <v-select :items="items" solo name="countryCode" v-model="countryCode"></v-select>
        </div>
      </div>

      <div class="mt-3 mb-3">
        <h6 class="fontBold mb-0">{{ $t('auth.password') }}</h6>
        <div class="form__label">
          <input
            class="default_input"
            :type="typePass" 
            v-model="password"
            name="password"
            required=""
            placeholder="{{ $t('auth.insert') }} {{ $t('auth.password') }}"
          />
          <label class="float__label" for="">{{ $t('auth.insert') }} {{ $t('auth.password') }}</label>
          <span class="icon-input">
            <v-img
              lazy-src="../../assets/Unlock.png"
              height="25"
              width="25"
              src="../../assets/Unlock.png"
            ></v-img>
          </span>
          <v-btn class="float_btn" color="white" elevation="0" small
            type="button" @click="showPassword"
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
        <h6 class="fontBold mb-0">{{ $t('auth.confirmPassword') }}</h6>
        <div class="form__label">
          <input
            class="default_input"
            :type="typePassConfrm" 
            v-model="confirmPassword"
            name="confirmPassword"
            required=""
            placeholder="{{ $t('auth.insert') }} {{ $t('auth.confirmPassword') }}"
          />
          <label class="float__label" for=""
            >{{ $t('auth.insert') }} {{ $t('auth.confirmPassword') }}</label
          >
          <span class="icon-input">
            <v-img
              lazy-src="../../assets/Unlock.png"
              height="25"
              width="25"
              src="../../assets/Unlock.png"
            ></v-img>
          </span>
          <v-btn class="float_btn" color="white" elevation="0" small
            type="button" @click="confrmPassword"
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
        <button class="main_btn up" color="#1ec2a8" elevation="0" x-large>
          {{ $t('auth.signup') }}
        </button>
      </div>
      <div class="mt-3 mb-3 d-flex justify-content-center" style="gap: 5px">
        <span>{{ $t('auth.signed') }}</span>
        <router-link class="default-link mainColor" :to="{ name: 'HomeLogin' }"
          >{{ $t('auth.login') }}</router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    items: ["+996", "+20", "565", "+10"],
    userName: "",
    phone: "",
    countryCode: "",
    password: "",
    confirmPassword: "",
    typePass: "password",
    typePassConfrm: "password",
  }),
  methods: {
    showPassword() {
      this.typePass = this.typePass === "password" ? "text" : "password";
    },
    confrmPassword() {
      this.typePassConfrm = this.typePassConfrm === "password" ? "text" : "password";
    },
    async submitForm(){
      const formData = new FormData(this.$refs.regestForm)
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
  },
};
</script>

<style lang="scss" scoped>
$mainColor: #1ec2a8;
.mainColor {
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
