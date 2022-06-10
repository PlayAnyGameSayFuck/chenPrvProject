<template>
  <div class="leftNavStowButton" :style="{top: leftNavStowButtonTop + 'px', left: leftNavStowButtonLeft + 'px',}" 
    @click="rightNavStowClick()">
    <button class="leftNavStowButtonContent stowLeft"
      :class="{stowHidden:canRight}">《</button>
    <button class="leftNavStowButtonContent stowRight" 
      :class="{stowHidden:canLeft}">》</button>
 </div>
</template>
<script>

export default {
  name: 'LeftNavStowButton',
  props: {
        leftNavigationWidth: { type: Number, default: 0},
        leftNavigationHeight: { type: Number, default: 0},
  },
  data(){
      return {
        leftNavStowButtonTop: 0,
        leftNavStowButtonLeft: 0,
        canLeft: true,
        canRight: false,
      }
  },
  created() {
    this.leftNavStowButtonLeft = this.leftNavigationWidth;
    this.leftNavStowButtonTop = this.leftNavigationHeight * 0.5;

    window.addEventListener("resize", this.handlerResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handlerResize);
  },
  methods: {
    handlerResize(event) {
      this.leftNavStowButtonLeft = this.leftNavigationWidth;
      this.leftNavStowButtonTop = this.leftNavigationHeight * 0.5;
    },
    rightNavStowClick(){
      this.$emit("changeLeftNavidationWidth", this.canLeft, this.canRight);
      if(this.canLeft){
        this.canLeft = false;
        this.canRight = true;
      }else{
        this.canLeft = true;
        this.canRight = false;
      }
    }
  },
  mounted() {},  
}
</script>
<style scoped="scoped" type="text/css">
.leftNavStowButton {
    background: rgb(40, 39, 39);
    overflow: hidden;
    position: absolute;
    width: 20px;
    text-align: center;
    cursor: pointer;
    height: 90px;
    border-right: 0px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
}
.leftNavStowButton:hover .leftNavStowButtonContent {
  color: orange;
}
.leftNavStowButtonContent {
    position: absolute;
    left: -5px;
    color: white;
    background: none;
    border: 0;
    cursor: pointer;
}
.stowLeft {
  position: relative;
  top: 35%;
  left: -8px;
}
.stowRight {
  position: relative;
  top: 35%;
  left: -2px;
}
.stowHidden {
  display: none;
}
button {
  border: 0;
  border-style: none;
  outline-style: none;
}
</style>