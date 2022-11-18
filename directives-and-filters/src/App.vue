<template>
  <div>

    <!-- V-BIND -->
    <div><a v-bind:href=LinkToGoogle>Go to Google</a></div>
    <div><a v-bind:href=LinkToBing>Go to Bing</a></div>
    <!-- <a href="http://www.google.com">Go to Google</a> -->

    <!-- V-ON -->
    <div>
      <button @click="textColor = 'green'">Hello Button</button>
      <button v-on:click="printHello">Print Hello</button>
      <div :style="{ color: textColor, backgroundColor: backColor }" v-on:mouseover="changeColor">
        Site Content Here
      </div>
    </div>

    <!-- V-IF -->
    <div v-if=isAllowed>GO!!!</div>
    <div v-if="trafficLight == 'green'">Cross the Road</div>

    <!-- V-SHOW -->
    <div v-show=isAllowedToShow>Showing tag 1</div>
    <!-- <div>Showing tag 1</div> -->

    <div v-show=isAllowedToShow2>Showing tag 2</div>
    <!-- <div style="display: none;">Showing tag 2</div> -->

    <!-- V-FOR -->
    <ul type="none">
      <li>
        <h3>List of Users</h3>
      </li>
      <li v-for="(element, index) in listOfUsers" :key="index">
        User {{ index + 1 }}: {{ element.name }}
      </li>
    </ul>

    <!-- V-MODEL -->
    
    <!-- Using V-Model -->
    <label for="username">

      Enter Username: <input type="text" id="username" v-model=username>
      <button @click="submitUser">Submit User</button><br>

    </label>
    
    <!-- Using alternate way -->
    <label for="email">

      Enter Email: <input type="email" id="email" :value=email @input="changeMail">
      <button @click="submitUser2">Submit Email</button><br>

    </label>

    <CustomDirectives />

    <br><br><br>

    <PlayingWithModifiers />

    <br><br><br>

    <PlayingWithFilters />

  </div>
</template>

<script>
import CustomDirectives from './components/CustomDirectives.vue';
import PlayingWithFilters from './components/PlayingWithFilters.vue';
import PlayingWithModifiers from './components/PlayingWithModifiers.vue';


export default {
    name: "App",
    data() {
        return {
            username: "",
            email: "",
            listOfUsers: [
                { name: "Ram" },
                { name: "Shyam" },
                { name: "Rohan" },
                { name: "Sohan" },
                { name: "Mohan" }
            ],
            isAllowedToShow: true,
            isAllowedToShow2: false,
            trafficLight: "green",
            isAllowed: false,
            LinkToGoogle: "http://www.google.com",
            LinkToBing: "http://www.bing.com",
            textColor: "white",
            backColor: "red"
        };
    },
    methods: {
        submitUser() {
            if (this.username.length) {
                alert("Username with value " + this.username + " submitted...");
            }
        },
        submitUser2() {
            if (this.email.length) {
                alert("Username with email " + this.email + " submitted...");
            }
        },
        changeMail(event) {
            this.email = event.target.value;
        },
        printHello() {
            let helloTag = document.createElement("div");
            helloTag.innerHTML = "Hello, World!!!";
            document.querySelector("body").append(helloTag);
        },
        changeColor() {
            this.textColor = "red";
            this.backColor = "white";
        }
    },
    components: { CustomDirectives, PlayingWithModifiers, PlayingWithFilters }
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
