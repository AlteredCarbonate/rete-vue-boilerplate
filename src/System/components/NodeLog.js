import Rete from 'rete';

export let numSocket = new Rete.Socket('String');

export default class NodeLog extends Rete.Component {
   constructor() {
      super('Console');
   }

   builder(node) {
      let inp = new Rete.Input('num1', 'Message', numSocket);

      node.addInput(inp);
   }

   worker(node, inputs, outputs) {}
}
