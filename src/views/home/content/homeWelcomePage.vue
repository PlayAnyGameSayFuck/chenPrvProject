<template>
  <div class="home_welcome_page">
    <button class="hwp_login_btn" @click="showLogin()">prv_jarkchen</button>
    <div id="parent">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="home_welcome_login" v-show="loginShow">
      <Login></Login>
    </div>
  </div>
</template>
<script>
import Login from "./login/login.vue"

export default {
  name: 'HomeWelcomePage',
  components: { Login },
  data(){
    return {
      loginShow: false,
    }
  },
  created(){
  },
  methods: {
    showLogin(){
      this.loginShow = !this.loginShow;
    }
  },
  mounted(){
  },
}
</script>

<style scoped="scoped">
body {
  overflow: hidden;
}
* {
  user-select: none;
}
.home_welcome_page {
  background-image: url("../../../assets/img/right_content/homeWelcomePage/welcome.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-color: red;
  width: 100%;
  height: 900px;
}	
#parent{
  background: none;
  margin: 0 auto;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 500px;
  left:48%;
  transform: rotate(45deg);
  transform-style: preserve-3d;
  animation: 10s spin linear infinite;
  transition: transform 1s liner;
}
#parent>div{
  width: 60px;
  height: 60px;
  position: absolute;
  border: 5px solid #ccc;
}
#parent>div:nth-child(1){
  transform: translateZ(-150px);
  transition: transform 1s linear;
  background: red;

}
#parent>div:nth-child(2){
  transform: rotateY(-90deg) translateZ(150px);
  transition: transform 1s linear;
  background: green;
}
#parent>div:nth-child(3){
  transform: rotateY(-90deg) translateZ(-150px);
  transition: transform 1s linear;
  background: rgb(52, 177, 222);
}
#parent>div:nth-child(4){
  transform: rotateX(90deg) translateZ(150px);
  transition: transform 1s linear;
  background: orange;
}
#praent>div:nth-child(5){
  transform: rotateX(90deg) translateZ(-150px);
  transform: transform 1s linear;
  background: yellow;
}
#parent>div:nth-child(6){
  transform: translateZ(150px);
  background: purple;
}
@keyframes spin {
  0%{
    transform: rotateX(0deg) rotateY(0deg);
  }
  100%{
    transform: rotateX(360deg) rotateY(360deg);
  }
}
.home_welcome_login {
  position: absolute;
  left: 30%;
  top: 20%;
  width: 40%;
}
.hwp_login_btn {
  background: none;
  cursor: pointer;
  width: 120px;
  height: 20px;
  position: relative;
  left: 20px;
  margin-top: 10px;
}
</style>