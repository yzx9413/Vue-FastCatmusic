<template>
    <div>
        <swiper/>
    </div>
</template>
<script>
import swiper from '@/components/swiper';
import axios from 'axios';

export default {
    name:'remmend',
    components:{
        swiper
    },
    data(){
        bannerList:[]
    }
}
</script>
<style>

</style>