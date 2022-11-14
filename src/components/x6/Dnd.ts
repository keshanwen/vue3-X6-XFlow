import { Addon } from '@antv/x6'

const intiDnd = function(target, options = {}) {
    const { Dnd } = Addon

    if (!target) {
        return
    }

    const dnd = new Dnd({
        target,
        ...options
    })

    return dnd
}

const startDrag = function(graph, e, data ) {

    if (!graph.dnd) return
    
   const node = graph.createNode({
    width: 100,
    height: 40,
    attrs: {
      label: {
        text: 'Rect',
        fill: '#6a6c8a',
      },
      body: {
        stroke: '#31d0c6',
        strokeWidth: 2,
      },
    },
  })

  graph.dnd.start(node, e)
}



export {
    startDrag
}
export default intiDnd