<template>
  <div class="node">
    <img :src="image.logo" />
    <span class="label">{{ label }}</span>
    <span class="status">
        <template v-if="status === 'success'">
            <img :src="image.success" />
        </template>
        <template v-if="status === 'failed'">
            <img :src="image.failed" />
        </template>
        <template v-if="status === 'running'">
            <img :src="image.running" />
        </template>
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, inject } from 'vue'
import { Node } from '@antv/x6';

interface NodeStatus {
  id: string
  status: 'default' | 'success' | 'failed' | 'running'
  label?: string
}
const image = {
  logo: 'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*evDjT5vjkX0AAAAAAAAAAAAAARQnAQ',
  success:
    'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*6l60T6h8TTQAAAAAAAAAAAAAARQnAQ',
  failed:
    'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*SEISQ6My-HoAAAAAAAAAAAAAARQnAQ',
  running:
    'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*t8fURKfgSOgAAAAAAAAAAAAAARQnAQ',
}

const status = ref('default')
const label = ref('')

const init = () => {
    const getNode: Function | undefined = inject<Function>('getNode');
    const node: Node = getNode?.()

    console.log(node.hasChanged('data'), 'hasChanged')

    label.value = node.data.label
    status.value = node.data.status

     // 监听数据改变事件
    node?.on('change:data', ({ current }) => {
        console.log(current, 'data...change')
    });
}


onMounted( () => {
    init()
})

</script>

<style lang="less" scoped>
.node {
  display: flex;
  align-items: center;
  width: 200px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #c2c8d5;
  border-left: 4px solid #5F95FF;
  border-radius: 4px;
  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.06);
}
.node img {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-left: 8px;
}
.node .label {
  display: inline-block;
  flex-shrink: 0;
  width: 104px;
  margin-left: 8px;
  color: #666;
  font-size: 12px;
}
.node .status {
  flex-shrink: 0;
}
.node.success {
  border-left: 4px solid #52c41a;
}
.node.failed {
  border-left: 4px solid #ff4d4f;
}
.node.running .status img {
  animation: spin 1s linear infinite;
}
.x6-node-selected .node {
  border-color: #1890ff;
  border-radius: 2px;
  box-shadow: 0 0 0 4px #d4e8fe;
}
.x6-node-selected .node.success {
  border-color: #52c41a;
  border-radius: 2px;
  box-shadow: 0 0 0 4px #ccecc0;
}
.x6-node-selected .node.failed {
  border-color: #ff4d4f;
  border-radius: 2px;
  box-shadow: 0 0 0 4px #fedcdc;
}
.x6-edge:hover path:nth-child(2){
  stroke: #1890ff;
  stroke-width: 1px;
}

.x6-edge-selected path:nth-child(2){
  stroke: #1890ff;
  stroke-width: 1.5px !important;
}

@keyframes running-line {
  to {
    stroke-dashoffset: -1000;
  }
}
@keyframes spin {
  from {
      transform: rotate(0deg);
  }
  to {
      transform: rotate(360deg);
  }
}
</style>




