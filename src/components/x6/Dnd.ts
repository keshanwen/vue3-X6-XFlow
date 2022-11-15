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
    const { label } = data
    if (!dnd) return
    
   const node = graph.createNode({
    shape: 'dag-node',
    width: 200,
    height: 40,
    data: {
      label,
      status: "default"
    }
  })

  dnd.start(node, e)
}



export {
    startDrag
}
export default intiDnd