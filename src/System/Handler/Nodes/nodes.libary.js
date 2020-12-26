/**
 * Array of a Node Libary
 * @type {*[]}
 */
export let NodesLibary = [];

/**
 *
 * @param {Component} Component
 * @param {String} NodeKey
 */
export function addNodeToLibary(Component, NodeKey) {
   console.log(`Adding ${NodeKey}`);
   NodesLibary.push({
      component: Node,
      key: NodeKey,
   });
   NodesLibary.forEach((e) => {
      console.log(e.key);
   });
}
