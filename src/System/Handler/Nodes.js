/**
 * Array of a Node Libary
 * @type {*[]}
 */
export let NodesLibary = [];

/**
 *
 * @returns {Promise<unknown>}
 */
// export function initNodes() {
//    return new Promise((res, rej) => {
//       if (!NodesLibary) {
//          rej('[nodes.main]: No Nodes added');
//       }
//       res('[nodes.main]: initedNodes');
//    });
// }

/**
 * Registers all Nodes in Libary
 * @param editor
 * @param engine
 */
export function registerAllNodes(editor, engine) {
   NodesLibary.forEach((e) => {
      console.log(`Registering Node: ${e.key}`);

      editor.register(new e.component());
      engine.register(new e.component());
   });
}

/**
 * Registers a specific Node in Libary
 * @param node
 * @param editor
 * @param engine
 */
export function registerNode(node, editor, engine) {
   console.log(`Registering Node: ${node.key}`);

   editor.register(new node.component());
   engine.register(new node.component());
}

/**
 *
 * @param {Component} Component
 * @param {String} NodeKey
 */
export function addNode(Component, NodeKey) {
   console.log(`Adding ${NodeKey}`);
   NodesLibary.push({
      component: Component,
      key: NodeKey,
      isRegistered: false,
   });
}

export default {
   initNodes,
   registerAllNodes,
   registerNode,
   addNode,
};
