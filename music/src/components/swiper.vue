<template>
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="val in swiperData.myRemmendData">
                    <!-- {{val}} -->
                    <img :src="'../../static/img/'+val.url" alt="val.tit">
                </div>
            </div>
                <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import Swiper from 'swiper';

export default {
    name:'swiper',
    data(){
        return {
            swiperData:[]
        }
    },
    mounted(){
        axios.get('../../static/data/myRemmendData.json').then(res=>{
            this.swiperData=res.data;
            console.log(this.swiperData);
        }),
    new Swiper('.swiper-container',{
            spaceBetween: 30,
            centeredSlides: true,
            // autoplay: {
            //     delay: 2500,
            //     disableOnInteraction: false,
            // },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        })
    }
}
</script>
<style scoped>
@import url('swiper/dist/css/swiper.min.css');
.swiper-container{width: 100%;height: 200px;overflow: hidden;}
.swiper-wrapper{width: 100%;height: 100%;}
.swiper-slide{width: 100%;height: 100%;}
.swiper-slide>img{width: 100%;height: 100%;}
</style>
