<template>
  <main>
    <div v-for="item in datasource" :key="item.data" @mousedown="mouseDownCallback($event,item)" class="data-item">
        {{ item.label }}
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, inject,onMounted, watch} from 'vue'
import { startDrag } from '@/components/x6/Dnd'

const allObj:any = inject('allObj')

let datasource = ref([
    { label: '数据一', data: 'a', status: 'default' },
    { label: '数据二', data: 'b', status: 'default' },
])


const mouseDownCallback = (e: Event,item: any) => {
   startDrag(allObj.value, e, item)
}




</script>

<style lang="less" scoped>
.data-item {
    margin-bottom: 10px;
    cursor: pointer;
}
</style>




