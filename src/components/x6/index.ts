import { Graph } from '@antv/x6';
import showPorts from '@/components/x6/showPorts'

// 生成 grap 实例
function FlowGrap (container: HTMLElement, options: any = {}):void {
    if (!container) {
        throw Error('没有传入容器dom') 
        return
    } 
    this.graph = new Graph({
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

   return this.graph
}

// 初始化 graph实例，配置 
function init(container: HTMLElement, options: any = {}) {
    let grap = new FlowGrap(container, options) 
    showPorts(grap)

    return grap
}
export default init