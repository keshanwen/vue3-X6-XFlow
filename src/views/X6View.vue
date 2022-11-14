<template>
  <main class="x6-view-home">
    <div class="left-wrap">
       <DataSource/> 
    </div>
    <div class="right-wrap">
        <ToolBar class="tool-bar-wrap"/>
        <div class="grap-container" ref="grapContainerRef"></div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import DataSource from '@/components/x6/dataSource.vue'
import ToolBar from '@/components/x6/toolBar.vue'
import initGrap from '@/components/x6/index'

let grapContainerRef = ref()

// 获取grap容器宽高
const getGrapContainerWH = (dom:HTMLElement) => {
    if (!dom) return
    const { width, height } = dom.getBoundingClientRect()
    return {
        width,
        height
    }
}

// 初始化grap
const init = async () => {
    try {
        const { width, height } = getGrapContainerWH(grapContainerRef.value)
        const options = {
            width,
            height
        }
        let grap = initGrap(grapContainerRef.value, options) 
    
    } catch(error) {
        console.log(error)
    }
}

onMounted( () => {
    init()
})

</script>


<style lang="less" scoped>
.x6-view-home {
    display: flex;
    height: 100%;
    overflow: visible;

    .left-wrap {
        width: 200px;
        border: 1px solid blue;
    }

    .right-wrap {
        flex: 1;
        .tool-bar-wrap {
            height: 50px;
        }
        .grap-container {
            height: calc( 100% - 50px );
            border: 1px solid darkgray;
        }
    }

}
</style>

