<template>
  <div id="app">
    <AiPanel />
  </div>
</template>

<script>
import AiPanel from './components/AiPanel.vue';

export default {
  name: 'App',
  components: {
    AiPanel,
  },
};
</script>

<style>
#app {
  height: 100%;
  box-sizing: border-box;
}
</style>