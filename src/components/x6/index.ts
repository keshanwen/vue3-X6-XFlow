import { Graph } from '@antv/x6';
import intiDnd from './dnd'
import initEvent from './Event'


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