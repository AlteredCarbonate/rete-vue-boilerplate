import Rete from 'rete';
import { StringSocket } from '../../System/Sockets';
import { Nodes } from '../../System/Handler';

const NodeKey = 'String';

export default class NodeString extends Rete.Component {
   constructor() {
      super(NodeKey);
   }

   builder(node) {
      let out = new Rete.Output('num2', 'String', StringSocket);

      node.addOutput(out);
   }

   // worker(node, inputs, outputs) {
   //    // outputs['num'] = node.data.num;
   // }
}

Nodes.addNode(NodeString, NodeKey);
