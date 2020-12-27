import Rete from 'rete';
import { StringSocket } from '../../System/Sockets';
import { Nodes } from '../../System/Handler';

const NodeKey = 'Console';

export default class NodeLog extends Rete.Component {
   constructor() {
      super(NodeKey);
   }

   builder(node) {
      let inp = new Rete.Input('num1', 'Message', StringSocket);

      node.addInput(inp);
   }

   // worker(node, inputs, outputs) {}
}

Nodes.addNode(NodeLog, NodeKey);
