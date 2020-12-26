<template>
   <div id="rete" class="node-editor" />
</template>

<script>
   import Rete from 'rete';
   import ConnectionPlugin from 'rete-connection-plugin';
   import AlightRenderPlugin from 'rete-alight-render-plugin';
   import ContextMenuPlugin from 'rete-context-menu-plugin';
   import ModulePlugin from 'rete-module-plugin';

   import NodeString from '../Components/Nodes/NodeString';
   import NodeLog from '../Components/Nodes/NodeLog';

   export default {
      data() {
         return {
            editor: null,
            engine: null,
            editorID: 'demo@0.1.0',
         };
      },
      methods: {},
      mounted() {
         let container = document.querySelector('#rete');

         this.editor = new Rete.NodeEditor(this.editorID, container);
         this.engine = new Rete.Engine(this.editorID);

         this.editor.use(ConnectionPlugin, { curvature: 1 });
         this.editor.use(AlightRenderPlugin);
         this.editor.use(ContextMenuPlugin);

         this.editor.use(ModulePlugin, {
            engine: this.engine,
            modules: this.modules,
         });
         this.editor.on(
            'process nodecreated noderemoved connectioncreated connectionremoved',
            async () => {
               console.log('process');
               await this.engine.abort();
            }
         );
         this.editor.view.resize();

         const NodeStringComp = new NodeString();
         const NodeLogComp = new NodeLog();
         this.editor.register(NodeStringComp);
         this.editor.register(NodeLogComp);
         this.engine.register(NodeLogComp);
         this.engine.register(NodeStringComp);
      },
   };
</script>

<style lang="scss" scoped>
   .modules-example {
      height: 100vh;
      width: 100vw;
   }

   .module-list {
      padding: 5px;
      cursor: pointer;
   }

   .module:hover {
      color: #a167e7;
   }

   #rete {
      height: 100% !important;
   }
   #modules {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 5;
   }

   .node .socket.number {
      background: #96b38a;
   }

   .node .socket.float {
      background: red;
   }
</style>
