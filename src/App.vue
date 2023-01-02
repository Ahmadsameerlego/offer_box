<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>

<style lang="scss">
    $base-color: #1ec2a8;
    $mainColor: #1ec2a8;
    $mainColor2: #bdbaba;

    .mainColor{
      color: $mainColor;
    }

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
    position: relative !important;
    direction: rtl !important;
    text-align: right !important;
    color: #212121 !important;
    font-family:'DIN-Arabic' , sans-serif !important;
    background-color: #f7f7f7 !important;
}
@font-face {
    font-family: 'DIN-Arabic-Bold';
    src: url('assets/fonts/URW-DIN-Arabic-Bold.ttf');
}
@font-face {
    font-family: 'DIN-Arabic';
    src: url('assets/fonts/URW-DIN-Arabic.ttf');
}
@font-face {
    font-family: 'Kalligraaf-Arabic-Medium';
    src: url('assets/fonts/Kalligraaf-Arabic-Medium.ttf');
}
.fontBold{font-weight: 600;}
.v-locale--is-ltr {
    direction: rtl !important;
}
.labeledSection{
  position: relative;
  width: fit-content;
  &::before{
    content: '';
    position: absolute;
    width: 100%;
    height:3px;
    background-color: #1ec2a8;
    left: 0;
    bottom: -7px;
  }
}
.button{
  background-color: #1ec2a8 !important;
  color:#fff;
  border-radius: 3px;
  padding :8px 20px;
  text-decoration: none;
  margin-right: auto;
  margin-left: auto;
  &:hover{
    color: #fff !important;
  }
}
a{
  text-decoration: none !important;
  // color: ;
}

// inputs style
.form__label {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 10px;
  overflow: hidden;

  .default_input {
    position: relative;
    width: 100%;
    height: 45px;
    padding: 5px 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 15px;
    padding-inline-start: 40px;
  }

  .float__label {
    position: absolute;
    top: 13px;
    pointer-events: none;
    right: 40px;
    transition: 0.3s all cubic-bezier(0, 0.11, 0.4, 1.29);
    font-size: 13px;
    font-weight: 400;
    border-radius: 5px;
    z-index: 1;
    color: $mainColor2;
  }
  .icon-input {
    position: absolute;
    right: 1px;
    border: 1px solid #fff;
    top: 10px;
    font-size: 20px;
    color: rgb(100, 100, 100);
    background-color: #fff;
    z-index: 2;
    width: 40px;
    display: flex;
  }
  .flaot_icon {
    position: absolute;
    left: 0;
    width: 35px;
    height: 100%;
    bottom: 0;
  }
  .float_btn {
    position: absolute;
    left: 3px;
    top: 5px;
  }
}

.default_input:focus {
  & + .float__label {
    transform: translateX(150%);
  }
  // &+  .icon-input{
  //     color: $mainColor;
  // }
}

.default_input:not(:placeholder-shown) {
  & + .float__label {
    transform: translateX(150%);
  }
  // & +.icon-input{
  //     transform: translateX(150%);
  // }
}

textarea.default_input + .float__label {
  top: 18px;
  right: 17px;
}

.default_input:focus-visible {
  border-color: $mainColor;
}

textarea.default_input:focus + .float__label,
textarea.default_input:not(:placeholder-shown) + .float__label {
  transform: translateX(150%);
}

input:focus {
  outline: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.default_input::placeholder,
.input_footer input::placeholder {
  opacity: 0;
}

textarea.default_input {
  min-height: 150px;
  padding: 20px !important;
}

.default-link {
  color: $mainColor2;
}
.v-btn {
  color: #fff;
}

// font size
@for $i from 1 through 100 {
    .font#{$i} {
        font-size: $i + 2 + px !important;
    }
}
// flex gap
@for $i from 1 through 50 {
    .gap#{$i} {
        gap: $i + px !important;
    }
}

    // button style

.fill:hover,
.fill:focus {
    box-shadow: inset 0 0 0 2em $mainColor;
    color: #fff;
}

.pulse:hover,
.pulse:focus {
    animation: pulse 1s;
    box-shadow: 0 0 0 2em rgba(#fff, 0);
}

@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 #fff;
    }
}

.close:hover,
.close:focus {
    box-shadow:
        inset -3.5em 0 0 0 $mainColor,
        inset 3.5em 0 0 0 $mainColor;
}

.raise:hover,
.raise:focus {
    box-shadow: 0 0.5em 0.5em -0.4em #fff;
    transform: translateY(-0.25em);
}

.up:hover,
.up:focus {
    box-shadow: inset 0 -4.25em 0 0 #fff;
    color: $mainColor !important;
    border: 1px solid $mainColor;
}

.slide:hover,
.slide:focus {
    box-shadow: inset 11.5em 0 0 0 #fff;
    color: $mainColor !important;
    border: 1px solid $mainColor;
}

.offset {
    box-shadow:
        0.3em 0.3em 0 0 var(--color),
        inset 0.3em 0.3em 0 0 var(--color);

    &:hover,
    &:focus {
        box-shadow:
            0 0 0 0 var(--mainOpacity),
            inset 6em 3.5em 0 0 var(--mainOpacity);
        color: #fff !important;
    }
}


.main_btn {
    border-radius: 5px;
    white-space: nowrap;
    color: #fff;
    padding: 5px 25px;
    min-width: 200px;
    height: 45px;
    width: fit-content;
    background-color: $mainColor;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .3s all ease;

    &.fluid {
        background-color: #fff;
        color: $mainColor;
        border: 2px solid $mainColor;
    }

    &.radius {
        border-radius: 30px;
    }
}

.round_btn {
    background-color: $mainColor;
    border-radius: 40px;
    color: #fff;
    padding: 10px 20px;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 150px;

    &.fluid {
        background-color: #fff;
        border-radius: 40px;
        color: $mainColor;
        width: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid $mainColor;

        &:hover {
            background-color: $mainColor;
            color: #fff;
        }
    }
}

</style>
