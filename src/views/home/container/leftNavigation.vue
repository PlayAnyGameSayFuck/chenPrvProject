<template>
    <div class="leftNavigation" :style="{width: leftNavigationWidth + 'px', height: leftNavigationHeight + 'px',
    left: leftNavigationPositionLeft + 'px', top: leftNavigationPositionTop + 'px'}">
        <LeftNavContent></LeftNavContent>
    </div>
</template>
<script>
import LeftNavContent from '../content/leftNavContent.vue'

export default {
    name: 'LeftNavigation',
    components: { LeftNavContent },
    props: {
        leftNavigationWidth: { type: Number, default: 0},
        leftNavigationHeight: { type: Number, default: 0},
        leftNavigationPositionLeft: {type: Number, default: 0},
        leftNavigationPositionTop: {type: Number, default: 0},
    },
    data() {
        return {
        }
    },
    created(){
      
    },
    beforeDestroy() {
        
    },
    methods: {
        
    },
    mounted() {
        
    }
}
</script>
<style scoped="scoped">
    .leftNavigation{
        background: -webkit-radial-gradient(rgb(176, 176, 176),rgb(13, 13, 13));
        color: white;
        border-right: 3px solid rgb(243, 226, 226);
        box-shadow: 0px 2px 0px 0px rgb(109, 12, 195);
        position: relative;
        overflow: scroll;
    }
     /* 滚动条 整体样式 */
    ::-webkit-scrollbar {
        width: 15px;         /* 竖 滚动条 - 宽度 */
        height: 0px;        /* 横 滚动条 - 高度 */
        background: none;
        cursor: pointer;
    }
    /* 滚动条 - 滑块 */
    ::-webkit-scrollbar-thumb {
        background-color: rgb(27, 15, 28);
        border-radius: 3em;
        cursor: pointer;
    }
</style>