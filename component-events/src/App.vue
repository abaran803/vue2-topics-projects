<template>
  <div id="app">

    <img alt="Vue logo" src="./assets/logo.png"><br>
    
    <!-- Child component, having the events -->
    <!-- toggle-details and popup-noti events are available -->
    <!-- for child nodes -->
    <ChildComponent 
      :showDetails="showDetails" 
      @toggle-details="showDetails = !showDetails" 
      @popup-noti="popNotification" 
    />

    <!-- Show when no data -->
    <div style="margin-top: 30px;" v-if="!showDetails">
      No Description
    </div>

    <!-- Table to show the data -->
    <table v-if="showDetails">
      <tr>
        <th>Attribute</th>
        <th>Value</th>
      </tr>
      <tr>
        <td style="font-weight: 600;">Project Name</td>
        <td>{{projectDetails.name}}</td>
      </tr>
      <tr>
        <td style="font-weight: 600;">Developer</td>
        <td>{{projectDetails.developer}}</td>
      </tr>
      <tr>
        <td style="font-weight: 600;">Date</td>
        <td>{{projectDetails.date}}</td>
      </tr>
      <tr>
        <td style="font-weight: 600;">Day</td>
        <td>{{projectDetails.day}}</td>
      </tr>
      <tr>
        <td style="font-weight: 600;">Purpose</td>
        <td>{{projectDetails.purpose}}</td>
      </tr>
    </table>

  </div>
</template>

<script>
import ChildComponent from './components/ChildComponent.vue';


export default {
  name: 'App',
  components: {
    ChildComponent
},
  data() {
    return {
      projectDetails: {
        name: "Component Event",
        developer: "Ayush Baranwal",
        date: "18/Nov/2022",
        day: "Friday",
        purpose: "Learning"
      },
      showDetails: false
    }
  },
  methods: {
    popNotification(value) {
      alert(value);
    }
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
table, tr, td, th {
  border: 1px solid black;
  border-collapse: collapse;
}
table {
  margin: auto;
  margin-top: 30px;
}
td, th {
  padding: 8px 20px;
}
</style>
