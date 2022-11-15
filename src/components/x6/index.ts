import { Graph } from '@antv/x6';
import intiDnd from './dnd'
import initEvent from './Event'
import '@/components/x6/registerNode'
import mockData from './config/mock';


// 生成 grap 实例
function FlowGrap (container: HTMLElement, options: any = {}):any {
    if (!container) {
        throw Error('没有传入容器dom') 
        return
    } 
    const graph = new Graph({
        container,
        width: 400,
        height: 400,
        background: {
            color: '#fffbe6', // 设置画布背景颜色
          },
        grid: {
            size: 10,      // 网格大小 10px
            visible: true, // 渲染网格背景
        },
        panning: {
            enabled: true,
            eventTypes: ['leftMouseDown', 'mouseWheel'],
        },
        mousewheel: {
            enabled: true,
            modifiers: 'ctrl',
            factor: 1.1,
            maxScale: 1.5,
            minScale: 0.5,
        },
        highlighting: {
            magnetAdsorbed: {
              name: 'stroke',
              args: {
                attrs: {
                  fill: '#fff',
                  stroke: '#31d0c6',
                  strokeWidth: 4,
                },
              },
            },
        },
        connecting: {
            snap: true,
            allowBlank: false,
            allowLoop: false,
            highlight: true,
            connector: 'algo-connector',
            connectionPoint: 'anchor',
            anchor: 'center',
            validateMagnet({ magnet }) {
              return magnet.getAttribute('port-group') !== 'top'
            },
            createEdge() {
              return graph.createEdge({
                shape: 'dag-edge',
                attrs: {
                  line: {
                    strokeDasharray: '5 5',
                  },
                },
                zIndex: -1,
              })
            },
        },
        selecting: {
            enabled: true,
            multiple: true,
            rubberEdge: true,
            rubberNode: true,
            modifiers: 'shift',
            rubberband: true,
        },
        ...options
    })

    return {
        graph
    }
}

// 初始化 graph实例，配置 
function init(container: HTMLElement, options: any = {}) {
    let allObj = FlowGrap(container, options) 
    allObj.dnd = intiDnd(allObj.graph)
    initEvent(allObj)
  
    return allObj
}
export default init