<template>
<div class="nav">
    <ul>
        <router-link tag="li" v-for="list in navList" :to="list.url">{{list.tit}}</router-link>
    </ul>
</div>
</template>
<script>
import axios from 'axios';

export default {
    name:'myNav',
    data(){
        return{
            navList:[
                {tit:'推荐',url:'/remmend'},
                {tit:'歌手',url:'/person'},
                {tit:'排行',url:'/rank'},
                {tit:'搜索',url:'/search'}
            ]
        }
    }
}
</script>
<style scoped>
.nav{width: 100%;height: 40px;line-height: 40px;}
.nav>ul{width: 100%;display: flex;}
.nav>ul>li{flex:1;text-align: center;}
.router-link-active{border-bottom:1px solid #f00;box-sizing: border-box;}
</style>