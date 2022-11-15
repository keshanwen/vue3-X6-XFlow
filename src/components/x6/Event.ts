import { FunctionExt } from '@antv/x6';

// 控制连接桩显示/隐藏
function showPorts(ports: NodeListOf<SVGAElement>, show: boolean) {
    for (let i = 0, len = ports.length; i < len; i = i + 1) {
      ports[i].style.visibility = show ? 'visible' : 'hidden';
    }
  }

const initEvent = (allObj: any) => {
    const { graph } = allObj
    const { container } = graph
    
    // 鼠标移入，展示连接桩
    graph.on(
        'node:mouseenter',
    FunctionExt.debounce(() => {
        const ports = container.querySelectorAll('.x6-port-body') as NodeListOf<SVGAElement>;
        showPorts(ports, true);
    }),
    500,
    );

    // 鼠标移出，隐藏连接桩
    graph.on('node:mouseleave', () => {
      const ports = container.querySelectorAll('.x6-port-body') as NodeListOf<SVGAElement>;
      showPorts(ports, false);
    });

    // 边连接时，将连接线设置为实心
    graph.on('edge:connected', ({ edge }) => {
      edge.attr({
        line: {
          strokeDasharray: '',
        },
      })
    })

    // 节点数据改变时，改变连接线的状态，产生动画效果
    graph.on('node:change:data', ({ node }) => {
      const edges = graph.getIncomingEdges(node)
      const { status } = node.getData() 
      edges?.forEach((edge) => {
        if (status === 'running') {
          edge.attr('line/strokeDasharray', 5)
          edge.attr('line/style/animation', 'running-line 30s infinite linear')
        } else {
          edge.attr('line/strokeDasharray', '')
          edge.attr('line/style/animation', '')
        }
      })
    })
}

export default initEvent