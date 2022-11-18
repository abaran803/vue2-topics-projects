<template>
  <div id="app">
    <KeepAliveComponents />
    <SiimpleComponents />
  </div>
</template>

<script>
import KeepAliveComponents from './components/KeepAliveComponents.vue';
import SiimpleComponents from './components/SiimpleComponents.vue';


export default {
  name: 'App',
  components: {
    KeepAliveComponents,
    SiimpleComponents
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
  margin: auto;
  margin-top: 60px;
  width: 80%;
  display: flex;
  justify-content: space-evenly;
}

table,
tr,
td,
th {
  border: 2px solid black;
  border-collapse: collapse;
}

td:nth-child(1) {
  padding: 10px;
  cursor: pointer;
}

td:nth-child(1):hover {
  color: white;
  background-color: rgba(0, 0, 0, 0.505);
}

.components {
  width: 300px;
}

caption {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 5px;
}
</style>
