import Rete from 'rete';
import { StringSocket } from '../../System/Sockets';
import { addNodeToLibary } from '../../System/Handler/Nodes';

const NodeKey = 'String';

export default class NodeString extends Rete.Component {
   constructor() {
      super('String');
   }

   builder(node) {
      let out = new Rete.Output('num2', 'String', StringSocket);

      node.addOutput(out);
      // node.addControl(numControl('num'));
   }

   worker(node, inputs, outputs) {
      // outputs['num'] = node.data.num;
   }
}
addNodeToLibary(NodeString, 'String');
