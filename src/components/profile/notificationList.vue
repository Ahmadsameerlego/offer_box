<template>
  <div class="container">
    <ul class="notifyList" v-if="notes.length>0">
        <li v-for="not in notes" :key="not.id">
            <div  class="alert_Icon">
                <div class="d-flex align-items-center gap15">
                <v-img lazy-src="@/assets/bell.png" height="25" width="25" :src="not.icon"></v-img>
                <div class="d-flex flex-column">
                    <span class="fontBold font13"> {{ not.title }} </span>
                    <span class="font10"> {{ not.message }} </span>
                </div>
                </div>
            </div>
        </li>
    </ul>
   <section v-else>
    <v-alert
      type="info"
      class="noFound"
    >
      {{ $t('common.notFound') }}
    </v-alert>
   </section>
    
  </div>
</template>

<script>
// import { inject } from 'vue'

export default {
    props : {
        notes : Array,
        pagination : Object
    },
    data(){
        // return{
        //       inject: ['messaging'],
        // }
    },
    mounted () {
        // console.log('Firebase cloud messaging object', this.$messaging)




    }

};
</script>

<style lang="scss" scoped>
    .notifyList{
        margin: 40px 0;
        padding: 0;
        list-style: none;
        .v-responsive {
            flex: unset;
        }
        li{
            margin: 8px 0;
            transition: .3s all ease;
            background-color: #fff;
                &:hover{
                    box-shadow: inset 0px 100px 0px #1ec2a82e;
            }
            .alert_Icon{
                display: block;
                color: #000;
                padding: 15px;
                border-radius: 5px;
                box-shadow: 0 0 6px #ddd;
            }
            
        }
    }
</style>
