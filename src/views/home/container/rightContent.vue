<template>
    <div class="rightContent" :style="{width: rightContentWidth + 'px', height: rightContentHeight + 'px',
    left: rightContentPositionLeft + 'px', top: rightContentPositionTop + 'px'}">
        <router-view></router-view>
    </div>
</template>
<script>

export default {
    name: 'RightContent',
    props: {
        rightContentWidth: { type: Number, default: 0},
        rightContentHeight: { type: Number, default: 0},
        rightContentPositionLeft: {type: Number, default: 0},
        rightContentPositionTop: {type: Number, default: 0},
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
.rightContent{
    background: none;
    color: black;
    overflow: scroll;
    border-right: 3px solid rgb(243, 226, 226);
    box-shadow: 0px 2px 0px 0px rgb(109, 12, 195);
    position: relative;
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
    background-color: rgb(226, 207, 207);
    border-radius: 3em;
    cursor: pointer;
}
</style>