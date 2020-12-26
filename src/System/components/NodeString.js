import Rete from 'rete';
import { numSocket } from './NodeLog';

export default class NodeString extends Rete.Component {
   constructor() {
      super('String');
   }

   builder(node) {
      let out = new Rete.Output('num2', 'String', numSocket);

      node.addOutput(out);
   }

   worker(node, inputs, outputs) {
      // outputs['num'] = node.data.num;
   }
}
