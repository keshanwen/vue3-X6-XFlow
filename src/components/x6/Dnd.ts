import { Addon } from '@antv/x6'

const intiDnd = function(target: any, options = {}) {
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

const startDrag = function(allObj: any, e: Event, data: any ) {
    const { graph,dnd } = allObj
    if (!dnd) return
    
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

  dnd.start(node, e)
}



export {
    startDrag
}
export default intiDnd