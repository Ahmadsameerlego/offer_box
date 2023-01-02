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

        <p class="fontBold">الرجاء إدخال رمز التحقق المرسل الي جوالك</p>
      </div>
      <div class="d-flex align-items-center justify-content-center">
        <v-otp-input
          ref="otpInput"
          input-classes="otp-input"
          separator=" "
          :num-inputs="6"
          :should-auto-focus="true"
          :is-input-num="true"
          @on-change="handleOnChange"
          @on-complete="handleOnComplete"
        />
      </div>
      <div class="mt-3 mb-3 d-flex justify-content-center">
        <button class="main_btn up">تأكيد</button>
      </div>
    </form>
  </div>
</template>

<script>
// Import in a Vue component
import VOtpInput from "vue3-otp-input";

export default {
  components: {
    VOtpInput,
  },
  setup() {
    const otpInput = null;

    const handleOnComplete = (value) => {
      console.log("OTP completed: ", value);
    };

    const handleOnChange = (value) => {
      console.log("OTP changed: ", value);
    };

    return { handleOnComplete, handleOnChange, otpInput };
  },
};
</script>

<style lang="scss" scoped>
$base-color: #1ec2a8;

.position-relative {
  position: relative;
}
.otp-input {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
  &:focus{
    border: 1px solid $base-color;
  }
}

.otp-input.is-complete {
    background-color: #f1f1f1;
    border: 1px solid #f1f1f1;
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input::placeholder {
  font-size: 15px;
  text-align: center;
  font-weight: 600;
}
</style>
