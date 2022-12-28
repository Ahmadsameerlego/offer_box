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
    background-color: #f7f7f7 !important;
}
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
  background-color: #1ec2a8;
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
}
</style>
