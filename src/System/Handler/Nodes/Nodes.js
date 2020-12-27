/**
 * Array of a Node Libary
 * @type {*[]}
 */
export let NodesArray = [];

/**
 *
 * @returns {Promise<unknown>}
 */
// export function initNodes() {
//    return new Promise((res, rej) => {
//       if (!NodesArray) {
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
   NodesArray.forEach((e) => {
      console.log(`Registering Node ${e.key}`);

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
export function registerOneNode(node, editor, engine) {
   console.log(`Registering Node ${node.key}`);

   editor.register(new node.component());
   engine.register(new node.component());
}

/**
 *
 * @param {Component} Component
 * @param {String} NodeKey
 */
export function addNodeToLibary(Component, NodeKey) {
   console.log(`Adding ${NodeKey}`);
   NodesArray.push({
      component: Component,
      key: NodeKey,
      isRegistered: false,
   });
}
