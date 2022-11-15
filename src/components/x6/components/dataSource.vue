<template>
  <main>
    <div v-for="item in datasource" :key="item.data" @mousedown="mouseDownCallback($event,item)" class="data-item">
        {{ item.label }}
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, inject,onMounted, watch} from 'vue'

const emits = defineEmits(['mouseDownCallback'])

const graphRef = inject('allObj')

let datasource = ref([
    { label: '数据一', data: 'a'},
    { label: '数据二', data: 'b'},
])


const mouseDownCallback = (e: Event,item: any) => {
   emits('mouseDownCallback', { e, data: item })
}


</script>

<style lang="less" scoped>
.data-item {
    margin-bottom: 10px;
    cursor: pointer;
}
</style>




