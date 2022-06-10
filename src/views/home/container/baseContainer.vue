<template>
  <div class="baseContainer" :style="{ height: screenHeight + 'px', width: screenWidth + 'px', marginLeft: screenLeft + 'px' }"
  >
    <Head
      :headScreenWidth="headScreenWidth"
      :headScreenHeight="headScreenHeight"
    ></Head>
    <Content
      :contentScreenWidth="contentScreenWidth"
      :contentScreenHeight="contentScreenHeight"
      :contentMarginTop="contentMarginTop"
      :contentMarginLeft="contentMarginLeft"
    >
    </Content>
  </div>
</template>
<script>
import Head from "./head.vue";
import Content from "./content.vue";

export default {
  name: "BaseContainer",
  components: { Head, Content },
  data() {
    return {
      screenWidth: 0,
      screenHeight: 0,
      screenLeft: 0,

      headScreenWidth: 0,
      headScreenHeight: 0,

      contentScreenWidth: 0,
      contentScreenHeight: 0,
      contentMarginLeft: 0,
      contentMarginTop: 0,
    };
  },
  created() {
    this.screenWidth = window.innerWidth - 6;
    this.screenHeight = window.innerHeight;
    this.screenLeft = -8;
    /* head */
    this.headScreenWidth = this.screenWidth;
    this.headScreenHeight = 60;
    /* content */
    this.contentScreenWidth = this.screenWidth;
    this.contentScreenHeight = this.screenHeight - this.headScreenHeight - 7;
    this.contentMarginLeft = 0;
    this.contentMarginTop = 1;

    window.addEventListener("resize", this.handlerResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handlerResize);
  },
  methods: {
    handlerResize(event) {
      this.screenWidth = window.innerWidth - 6;
      this.screenHeight = window.innerHeight;
      this.screenLeft = -8;
      /* head */
      this.headScreenWidth = this.screenWidth;
      this.headScreenHeight = 60;
      /* content */
      this.contentScreenWidth = this.screenWidth;
      this.contentScreenHeight = this.screenHeight - this.headScreenHeight - 7;
      this.contentMarginLeft = 0;
      this.contentMarginTop = 1;
    },
  },
  mounted() {},
};
</script>
<style scoped="scoped">
.baseContainer {
  background-color: none;
  color: white;
}
body {
  overflow: hidden;
}
</style>
