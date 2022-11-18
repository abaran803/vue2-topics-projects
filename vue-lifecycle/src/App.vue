<template>

  <!-- Root Element -->
  <div id="app">

    <!-- Title of the project -->
    <div>
      <h3>
        You are currently seeing Vue {{ appName }}
      </h3>
    </div>

    <!-- Parent Container -->
    <div style="position: relative; text-align: center;">

      <!-- Shadow of Parent -->
      <div class='parentBox' style="opacity: 0.2;" @click="toggleParent">
        <h2>
          Parent
          <p style="font-size: 10px;">Click to toggle Parent</p>
        </h2>
      </div>

      <!-- Parent Component Used -->
      <div style="width: 100%; display: flex; justify-content: center; position: absolute; top: 0;">
        <PlayingWithLifecycle v-if="showParent" :toggleParent="toggleParent" />
      </div>

      <!-- Component to see updation -->
      <PlayingWithUpdate />
    </div>
  </div>
</template>

<script>
import PlayingWithLifecycle from './components/PlayingWithLifecycle.vue';
import PlayingWithUpdate from './components/PlayingWithUpdate.vue';


export default {
  name: 'App',
  components: {
    PlayingWithLifecycle,
    PlayingWithUpdate
  },
  data() {
    return {
      showParent: true,
      appName: 'Lifecycle Project'
    }
  },
  methods: {
    toggleParent() {
      this.showParent = !this.showParent
    },
  },

  // All the lifecycles

  beforeCreate() {

    console.log(this.appName);
    // Will print undefined, as data isn't available

    alert("App component creating")

  },
  created() {

    console.log(this.appName);
    // Will print actual data

    console.log(this.$el)
    // Undefined: B/c no access to DOM

    alert("App component created")

  },
  beforeMount() {

    console.log(this.appName);
    // Have access to data

    console.log(this.$el)
    // Undefined: B/c no access to DOM

    alert("App component mounting")
  },
  mounted() {

    console.log(this.appName);
    // Have access to data

    console.log(this.$el)
    // Print the DOM of the component

    alert("App component mounted")
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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.parentBox {
  width: 225px;
  height: 225px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: orange;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
}

h2 {
  margin-top: 20px;
}
</style>
