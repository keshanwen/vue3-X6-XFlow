<template>
  <main>
    <button @click="outputCallback">导出</button>
    <button @click="showCallbak">反显</button>
    <button @click="animationCallbak">动画</button>
  </main>
</template>

<script setup lang="ts"> 
import { inject , onUnmounted, ref } from 'vue'

const allObj:any = inject('allObj')
let templateVlue = ref()

const outputCallback = () => {
  templateVlue.value = allObj.value.graph.toJSON()
  console.log(templateVlue.value, 'templateVlue.value~~~~')
}

const showCallbak = () => {
  window.alert('我先清除掉，4s之后在回显')
  allObj.value.graph.clearCells()
  setTimeout( () => {
    if (!templateVlue.value) return 
    allObj.value.graph.fromJSON(templateVlue.value)
  }, 4000)
}


const animationCallbak = () => {

}

</script>

<style lang="less" scoped>

</style>




