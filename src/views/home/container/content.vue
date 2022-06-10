<template>
    <div class="content" :style="{width: contentScreenWidth + 'px', height: contentScreenHeight + 'px', 
    marginLeft: contentMarginLeft + 'px', marginTop: contentMarginTop + 'px'}">
      <LeftNavigation
        :leftNavigationWidth="leftNavigationWidth"  
        :leftNavigationHeight="leftNavigationHeight"
        :leftNavigationPositionTop="leftNavigationPositionTop"
        :leftNavigationPositionLeft="leftNavigationPositionLeft"
      ></LeftNavigation>
      <RightContent
        :rightContentWidth="rightContentWidth"
        :rightContentHeight="rightContentHeight"
        :rightContentPositionLeft="rightContentPositionLeft"
        :rightContentPositionTop="rightContentPositionTop"
      ></RightContent>
      <LeftNavStowButton
        :leftNavigationWidth="leftNavigationWidth"  
        :leftNavigationHeight="leftNavigationHeight"
        @changeLeftNavidationWidth="changeLeftNavidationWidth"
        ref="leftNavStowButton"
      >
    </LeftNavStowButton>
    </div>
</template>
<script>
import LeftNavigation from './leftNavigation.vue';
import RightContent from './rightContent.vue';
import LeftNavStowButton from '../components/leftNavigationStowButton.vue';

export default {
    name: 'Content',
    components: { LeftNavigation, RightContent, LeftNavStowButton },
    props: {
        contentScreenWidth: { type: Number, default: 0},
        contentScreenHeight: { type: Number, default: 0},
        contentMarginLeft: { type: Number, default: 0},
        contentMarginTop: { type: Number, default: 0},
        content: {type: Object, default: null},
    },
    data() {
        return {
            /* leftNavigation */
            leftNavigationWidth: 0,
            leftNavigationHeight: 0,
            leftNavigationPositionLeft: 0,
            leftNavigationPositionTop: 0,

            /* rightContent */
            rightContentWidth: 0,
            rightContentHeight: 0,
            rightContentPositionLeft: 0,
            rightContentPositionTop: 0,

            /* leftNavStowWidth */
            leftNavStowWidth: 0,
            timer: null,
        }
    },
    created(){
         /* leftNavigation */
        this.leftNavigationWidth = this.contentScreenWidth * 0.15;
        this.leftNavigationHeight = this.contentScreenHeight;
        this.leftNavigationPositionLeft = 0;
        this.leftNavigationPositionTop = 1;

        /* rightContent */
        this.rightContentWidth = this.contentScreenWidth * 0.85
        this.rightContentHeight = this.contentScreenHeight;
        this.rightContentPositionLeft =  this.leftNavigationWidth;
        this.rightContentPositionTop = 1-this.rightContentHeight;

        window.addEventListener("resize", this.handlerResize);
    },
    beforeDestroy(){
        window.removeEventListener("resize", this.handlerResize);
    },
    methods: {
        handlerResize(event) {
            /* leftNavigation */
            this.leftNavigationWidth = this.contentScreenWidth * 0.15 + this.leftNavStowWidth;
            this.leftNavigationHeight = this.contentScreenHeight;
            this.leftNavigationPositionLeft = 0;
            this.leftNavigationPositionTop = 1;

            /* rightContent */
            this.rightContentWidth = this.contentScreenWidth * 0.85 + this.leftNavStowWidth;
            this.rightContentHeight = this.contentScreenHeight;
            this.rightContentPositionLeft = this.leftNavigationWidth - this.leftNavStowWidth;
            this.rightContentPositionTop = 1-this.rightContentHeight;
        },
        changeLeftNavidationWidth(canLeft,canRight){
            if(canLeft){
                this.leftNavStowWidth = this.leftNavigationWidth * 0.6;
                clearInterval(this.timer);
                this.timer = setInterval(() => {
                    if(this.contentScreenWidth * 0.15 - this.leftNavigationWidth < this.leftNavStowWidth){
                        this.leftNavigationWidth -= 20;
                        this.rightContentPositionLeft -= 20;
                        this.rightContentWidth += 20;
                        this.$refs.leftNavStowButton.leftNavStowButtonLeft -= 20;
                    }else{
                        clearInterval(this.timer);
                    }
                }, 100);
            }
            if(canRight){
                this.leftNavStowWidth = 0;
                clearInterval(this.timer);
                this.timer = setInterval(() => {
                    if(this.contentScreenWidth * 0.15 - this.leftNavigationWidth > this.leftNavStowWidth){
                        this.leftNavigationWidth += 20;
                        this.rightContentPositionLeft += 20;
                        this.rightContentWidth -= 20;
                        this.$refs.leftNavStowButton.leftNavStowButtonLeft += 20;
                    }else{
                        clearInterval(this.timer)
                    }
                }, 100);
            }
        }
    },
    mounted() {
    },
}
</script>
<style scoped="scoped">
@import "../../../assets/css/scroll/homeScroll.css";
.content {
    border: 0;
}
</style>