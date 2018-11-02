<template>
    <div class="header">
        <i>111</i><h1>{{title}}</h1><i class="el-icon-search"></i>
    </div>
</template>
<script>
export default {
    name:'header',
    data(){
        return {
            title:'this is header'
        }
    }
}
</script>

<style scoped>
.header{width: 100%;height:35px;line-height: 35px;display: flex;}
.header i:nth-child(1){width: 20%;text-align: right;}
.header h1{width: 60%;text-align: center;}
.header i:nth-child(3){width: 20%;text-align: center;line-height: 35px;}
</style>