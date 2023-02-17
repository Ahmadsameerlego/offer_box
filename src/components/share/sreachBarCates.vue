<template>
    <section id="search">
        
            <div class="position-relative">
                <input type="text" v-model="query" name="query" :placeholder="$t('nav.searchOffer')" class="form-control searchBox" @input="getData()">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>

        <div v-if="showList">
            <ul class="list-group" style="z-index:9999" v-if="categories.length>0">
                <li class="list-group-item" v-for="(item,index) in categories" :key="item.id" >
                    <router-link :to="{ name: 'fileredcates', params: { id: item.id }, query: { slug: item.slug } }" @click="setNewValue(item.name ,item.id, item.slug )">
                        {{index+1}}.{{item.name}}
                    </router-link>
                </li>
            </ul>
            <ul class="list-group" v-else>
                <li class="list-group-item">No Data Found</li>
            </ul>
        </div>


    </section>
</template>

<script>

import axios from 'axios'
export default {
    data(){
        return{
            categories : [],
            query: null,
            loading : false,
            showList : false,
            catId : null,
            catSlug : ''
        }
    },
    
    methods:{
        async getData() {
            await axios.get(`categories?search=${this.query}`)
            .then( (res)=>{
                this.categories = res.data.data.categories

                this.showList = true
                if( this.query == '' ){
                    this.showList = false
                }
            } )
            .catch( (err)=>{
                console.err(err)
            } )
        },

        setNewValue(value, id , slug){

            if( this.$route.path.includes('fileredcategories') ){
                // console.log( this.$route.fullPath )
                    this.$route.fullPath = `/fileredcategories/${id}?slug=${slug}`

                setTimeout(() => {
                    location.reload()
                }, 10);
            }
            this.query = value;

        }
    },
}
</script>

<style scoped>
    .list-group{
        z-index: 9999;
        position: relative;
        max-height: 190px;
        overflow-y: auto;
    }
    .form-control{
        height: 46px;
        box-shadow: 0px 0px 10px #33333321;
    }
    .form-control::placeholder{
        color:#0c4e50;
        font-weight: normal;
    }
</style>