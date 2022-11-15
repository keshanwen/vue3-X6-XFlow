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
    
    graph.on(
        'node:mouseenter',
    FunctionExt.debounce(() => {
        const ports = container.querySelectorAll('.x6-port-body') as NodeListOf<SVGAElement>;
        showPorts(ports, true);
    }),
    500,
    );

    graph.on('node:mouseleave', () => {
    const ports = container.querySelectorAll('.x6-port-body') as NodeListOf<SVGAElement>;
    showPorts(ports, false);
    });
}

export default initEvent