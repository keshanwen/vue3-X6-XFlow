import { Graph, Path } from "@antv/x6";
import "@antv/x6-vue-shape";
import DragNode from './components/dragNode.vue'
import { ports } from './config/port'

// 注册自定义组件节点
Graph.registerNode(
    'dag-node', 
    {
        inherit: 'vue-shape',
        width: 220,
        height: 60,
        ports: { ...ports },
        component: {
        template: `
        <DragNode/>
        `,
        components: {
            DragNode: DragNode,
        },
        },
    },
    true
  );

// 注册边
Graph.registerEdge(
    'dag-edge',
    {
      inherit: 'edge',
      attrs: {
        line: {
          stroke: '#C2C8D5',
          strokeWidth: 1,
          targetMarker: null,
        },
      },
    },
    true,
  )

  // 注册连接器
  Graph.registerConnector(
    'algo-connector',
    (s, e) => {
      const offset = 4
      const deltaY = Math.abs(e.y - s.y)
      const control = Math.floor((deltaY / 3) * 2)
  
      const v1 = { x: s.x, y: s.y + offset + control }
      const v2 = { x: e.x, y: e.y - offset - control }
  
      return Path.normalize(
        `M ${s.x} ${s.y}
         L ${s.x} ${s.y + offset}
         C ${v1.x} ${v1.y} ${v2.x} ${v2.y} ${e.x} ${e.y - offset}
         L ${e.x} ${e.y}
        `,
      )
    },
    true,
  )
