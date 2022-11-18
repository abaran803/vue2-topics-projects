<template>
  <div id="app">
    <PlayWithMethods />
    <br><br><br>
    <PlayWithComputed />
    <br><br><br>
    <PlayWithWatch />
  </div>
</template>

<script>
import PlayWithComputed from './components/PlayWithComputed.vue';
import PlayWithMethods from './components/PlayWithMethods.vue';
import PlayWithWatch from './components/PlayWithWatch.vue';


export default {
  name: 'App',
  components: {
    PlayWithMethods,
    PlayWithComputed,
    PlayWithWatch
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
