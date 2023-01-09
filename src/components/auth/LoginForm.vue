<template>
  <div>
    <form ref="form" @submit.prevent="submitForm">
      <div class="d-flex align-items-center flex-column">
        <v-img
          lazy-src="../../assets/logoz.png"
          height="200"
          width="200"
          src="../../assets/logoz.png"
        ></v-img>

        <h2 class="fontBold">{{ $t('auth.wellcome') }}</h2>

        <p class="fontBold">
          {{ $t('auth.dataLogin') }}
        </p>
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
          <v-select :items="items" v-model="countryCode" name="code" solo></v-select>
        </div>
      </div>

      <div class="mt-3 mb-3">
        <h6 class="fontBold mb-0">{{ $t('auth.password') }}</h6>
        <div class="form__label">
          <input
            class="default_input"
            required=""
            v-model="password"
            name="password"
            placeholder="{{ $t('auth.insert') }} {{ $t('auth.password') }}"
            :type="passwordFieldType"
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
      <router-link class="default-link" :to="{ name: 'forgetPassowrd' }">
        {{ $t('auth.forgitPassword') }}
        </router-link>
      <div class="mt-3 mb-3 d-flex justify-content-center">
        <button class="main_btn up" color="#1ec2a8" elevation="0" x-large>{{ $t('auth.login') }}</button>
      </div>
      <div class="mt-3 mb-3 d-flex justify-content-center" style="gap:5px">
        <span>{{ $t('auth.notsigned') }}</span>
        <router-link class="default-link mainColor" :to="{ name: 'HomeRegester' }"
        >{{ $t('auth.signup') }}</router-link
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
    password: "",
    phone: "",
    countryCode: "",
    passwordFieldType: "password"
  }),
  methods: {
    switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
    },

    async submitForm(){
      const formData = new FormData(this.$refs.form)
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