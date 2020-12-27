<template>
   <div id="rete" class="node-editor" />
</template>

<script>
   import { editor, engine } from '../globals';

   import ConnectionPlugin from 'rete-connection-plugin';
   import AlightRenderPlugin from 'rete-alight-render-plugin';
   import ContextMenuPlugin from 'rete-context-menu-plugin';
   import ModulePlugin from 'rete-module-plugin';

   import '../Components/Nodes';
   import { registerAllNodes } from './Handler/Nodes';

   export default {
      data() {
         return {
            $editor: null,
            $engine: null,
         };
      },
      mounted() {
         let container = document.querySelector('#rete');
         this.$editor = editor(container);
         this.$engine = engine();

         if (this.$editor || this.$engine) {
            this.$editor.use(ConnectionPlugin, { curvature: 0.4 });
            this.$editor.use(AlightRenderPlugin);
            this.$editor.use(ContextMenuPlugin);

            this.$editor.use(ModulePlugin, {
               engine: this.$engine,
               modules: this.modules,
            });
            this.$editor.on(
               'process nodecreated noderemoved connectioncreated connectionremoved',
               async () => {
                  console.log('process');
                  await this.$engine.abort();
               }
            );
            this.$editor.view.resize();

            registerAllNodes(this.$editor, this.$engine);
         }
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
