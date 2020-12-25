<template>
   <div class="modules-example">
      <div id="rete" class="node-editor" />
   </div>
</template>

<script>
   import Rete from 'rete';
   import alight from 'alight';
   import ConnectionPlugin from 'rete-connection-plugin';
   import AlightRenderPlugin from 'rete-alight-render-plugin';
   import ContextMenuPlugin from 'rete-context-menu-plugin';
   import ModulePlugin from 'rete-module-plugin';
   import AreaPlugin from 'rete-area-plugin';

   export default {
      data() {
         return {
            editor: null,
         };
      },
      methods: {
         async openModule() {
            this.editor.trigger('process');
         },
         addModule() {
            this.modules[
               'module' + Object.keys(this.modules).length + '.rete'
            ] = {
               data: this.initialData(),
            };
         },
         initialData() {
            return { id: 'demo@0.1.0', nodes: {} };
         },
      },
      mounted() {
         let container = document.querySelector('#rete');

         alight('#modules', {
            modules: this.modules,
            addModule: this.addModule,
            openModule: this.openModule,
         });

         this.editor = new Rete.NodeEditor('demo@0.1.0', container);
         this.editor.use(ConnectionPlugin, { curvature: 0.4 });
         this.editor.use(AlightRenderPlugin);
         this.editor.use(ContextMenuPlugin);

         let engine = new Rete.Engine('demo@0.1.0');

         this.editor.use(ModulePlugin, { engine, modules: this.modules });
         this.editor.on(
            'process connectioncreated connectionremoved',
            async () => {
               if (this.editor.silent) return;

               await engine.abort();
               await engine.process(this.editor.toJSON());
            }
         );
         this.editor.view.resize();
         this.openModule('index.rete').then(() => {
            AreaPlugin.zoomAt(this.editor);
         });
      },
   };
</script>

<style lang="scss" scoped>
   // Since node editor's parent must have a set height
   .modules-example {
      height: 100vh;
      width: 100vw;
   }

   // From codepen
   #rete {
      height: 100% !important;
   }
   #modules {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 5;
   }
   .module-list {
      padding: 5px;
      cursor: pointer;
   }
   .module:hover {
      color: #a167e7;
   }
   .node .socket.number {
      background: #96b38a;
   }
   .node .socket.float {
      background: red;
   }
</style>
