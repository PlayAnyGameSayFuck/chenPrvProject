<template>
  <div class="leftNavContent">
        <p v-for="(item, index) in leftNav" :key="index" 
          @mouseenter="item.active = true" 
          @mouseleave="item.active = false">
          <img class="left_nav_img" :src="item.active?item.url2:item.url" />
          <img class="left_nav_img" src="../../../assets/img/left_nav/weather_img.jpg" />
          <a class="leftNavA">
            <router-link :to="item.to">{{item.name}}</router-link>
          </a>
        </p>
  </div>
</template> 
<script>

export default {
  name: 'LeftNavContent',
  data() {
    return {
      leftNav: [],
    }
  },
  created(){
  },
  methods: {
  },
  mounted() {
    let that = this;
    this.$http({
      method: 'post',
      url: '/leftNav/getAll',
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify({
      }),
    }).then(function(response){
      let leftNavData = response.data.obj;
      if(leftNavData.length>0){
        for(var i=0;i<leftNavData.length;i++){
          that.leftNav.push({
            name: leftNavData[i].navName, 
            url: leftNavData[i].navUrl,
            url2: leftNavData[i].navUrl2, 
            to: leftNavData[i].navTo, 
            active: leftNavData[i].active
          });
          console.info(require( leftNavData[i].navUrl.toString() ));
        }
      }
    }).catch(function(error){
      layer.msg("服务器异常了--" + error, {icon:2, time:1500});
    })
  },
}
</script>
<style scoped="scoped">
.leftNavContent {
    width: 500px;
    background: none;
    padding-left: 10px;
    cursor: pointer;
}
a {
    height: 80px;
    padding-right: 10px;
    text-decoration: none;
    cursor: pointer;
    text-shadow: 2px 3px rgb(52, 35, 60);
    font-size: 22px;
    font-family: serif;
    /* color: rgb(147, 144, 144); */
    font-weight: bold;
    background: -webkit-linear-gradient(90deg, #f3fbfe, #92cef4);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
a:hover {
  background: -webkit-linear-gradient(90deg, #f3fbfe, orange);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.leftNavA{
  position: relative;
  top: -8px;
}
.left_nav_img {
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    margin-left: 10px;
    border-radius: 50%;
}
</style>