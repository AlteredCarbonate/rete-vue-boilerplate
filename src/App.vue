<template>
   <div id="app">
      <button>Run</button>
      <Editor />
   </div>
</template>

<script>
   import Editor from './System/Editor';

   export default {
      components: {
         Editor,
      },
   };
</script>

<style lang="scss">
   #app {
      height: 100vh;
      width: 100vw;
   }

   html,
   body {
      margin: 0;
      height: 100%;
      width: 100%;
   }
</style>
