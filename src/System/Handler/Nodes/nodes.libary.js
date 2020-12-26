export let NodesLibary = [];

/**
 *
 * @param {Rete.Component} Component
 * @param {String} NodeKey
 */
// export function addNodetoLibary(Component, NodeKey) {
//    if (!Node) {
//    }
//
//    // console.log(Node);
//    // console.log(NodeKey);
//    // console.log(NodesLibary.find((e) => e.key !== NodeKey));
//    console.log(`Libary Before `);
//    let isFound = NodesLibary.find((e) => e.key !== NodeKey);
//    if (!isFound) {
//       console.log(`NodeKey not found - Adding ${NodeKey}`);
//       NodesLibary.push({
//          component: Node,
//          key: NodeKey,
//       });
//       console.log('Libary After');
//       NodesLibary.forEach((e) => {
//          console.log(e.key);
//       });
//    }
// }

/**
 *
 * @param {Rete.Component} Component
 * @param {String} NodeKey
 */
export function addNodeToLibary(Component, NodeKey) {
  NodesLibary.push({
    component: Node,
    key: NodeKey,
  });
  NodesLibary.forEach((e) => {
    console.log(e.key);
  });
}
