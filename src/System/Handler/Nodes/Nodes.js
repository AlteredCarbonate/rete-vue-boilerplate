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
   // console.log(NodesArray);
}

/**
 *
 * @param {Component} component
 * @param {String} nodeKey
 */
export function addNodeToLibary(component, nodeKey) {
   return new Promise((resolve) => {
      console.log('AddNodeToLibary');
      let node = {
         component: component,
         key: nodeKey,
      };

      // TODO FILTER DOESN'T WORK
      if (NodesArray.length !== 0) {
         NodesArray.forEach((e) => {
            console.log('Filtering');
            console.log(NodesArray);
            if (e.key === node.key || node.key === undefined) {
               console.log(`${nodeKey} Already added, moving on.`);
               resolve();
            } else {
               addNode(node);
               resolve();
            }
         });
      } else {
         addNode(node);
         resolve();
      }
   });
}

function addNode(node) {
   NodesArray.push(node);
   console.log(`Adding ${node.key}`);
}
