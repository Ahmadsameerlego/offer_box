<template>
  <div class="container">
    <ul class="notifyList">
        <li>
            <router-link to="/NotificationPage" class="alert_Icon">
                <div class="d-flex align-items-center gap15">
                <v-img lazy-src="@/assets/bell.png" height="25" width="25" src="@/assets/bell.png"></v-img>
                <div class="d-flex flex-column">
                    <span class="fontBold font13">هذا نص بديل يمكن ان يستبدل</span>
                    <span class="font10">هذا نص بديل لنص اخر</span>
                </div>
                </div>
            </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {};
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
            a{
                display: block;
                color: #000;
                padding: 15px;
                border-radius: 5px;
                box-shadow: 0 0 6px #ddd;
            }
            
        }
    }
</style>
