<template>
  <div id="app">
    <myHead/>
    <myNav/>
    <section>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
    </section>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import myHead from '@/components/myHead.vue';
import myNav from '@/components/myNav.vue';

export default {
  name: 'App',
  components:{
    myHead,
    myNav
  }
}
</script>

<style>
@import url(./css/common.css);
@import url(./css/html5-common.css);
section{width: 100%;height:100%;}
section>div{width: 100%;height:100%;}
</style>
