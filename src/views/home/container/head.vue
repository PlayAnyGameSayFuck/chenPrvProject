<template>
    <div class="head" :style="{width: headScreenWidth + 'px', height: headScreenHeight + 'px'}">
       <div class="home_logo" @click="home_logo_click()">
          <router-link to="/"><div class="head_logo_img"></div></router-link>
       </div> 
       <div class="head_nav">
           <a v-for="(item, index) in head_nav" :key="index">{{item}}</a>
       </div>
    </div>
</template>
<script>
export default {
    name: 'Head',
    props: {
        headScreenWidth: { type: Number, default: 0},
        headScreenHeight: { type: Number, default: 0},
    },
    data() {
        return {
            head_nav: []
        }
    },
    created(){
    },
    beforeDestroy(){
    },
    methods: {
        home_logo_click(){
        },
    },
    mounted() {
    },
    watch: {
    }
}
</script>
<style scoped="scoped">
    .head{
        color: rgb(230, 94, 180);
        border-bottom: 3px solid rgb(243, 226, 226);
        box-shadow: 0px 2px 0px 0px rgb(109, 12, 195);
        background: -webkit-linear-gradient(white, rgb(210, 243, 243));
        padding-left: 60px;
        overflow: hidden;
    }
    a {
        height: 80px;
        padding-left: 10px;
        padding-right: 10px;
        text-decoration: none;
        cursor: pointer;
        text-shadow: 2px 3px rgb(184, 155, 155);
        font-size: 28px;
        font-family:cursive;
        position: relative;
    }
    a:hover {
        color: rgb(243, 161, 212);
    }
    .head_logo_img {
        background-image: url("../../../assets/img/head/logo.jpg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        margin-top: -22px;
        margin-left: 10px;
        width: 35px;
        height: 35px;
    }
    .home_logo {
        float: left;
        background-color: white;
        width: 55px;
        height: 55px;
        border-radius: 50%;
        cursor: pointer;
        text-align: center;
        margin-right: 20px;
        border: 1px dotted;
    }
    .home_logo:hover {
        background-color: rgb(189, 230, 247);
    }
</style>