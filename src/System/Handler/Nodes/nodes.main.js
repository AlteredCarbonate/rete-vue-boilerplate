import { NodesLibary } from './nodes.libary';

function initNodes() {
   return new Promise((res, rej) => {
      if (!NodesLibary) {
         rej('[nodes.main]: No Nodes added');
      }
      res('[nodes.main]: initedNodes');
   });
}
