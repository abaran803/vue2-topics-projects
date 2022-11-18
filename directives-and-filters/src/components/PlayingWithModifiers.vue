<template>
    <div>

        <!-- Here .prevent modifier is used to get rid of reloading page on form submit -->
        <form @submit.prevent="printData">

            <div class="form-title" v-customText.dark="'heading'">Final Form</div>

            <label for="username">
                Username: <input type="text" v-model="username">
            </label>
            
            <label for="email">
                Email: <input type="email" v-model.lazy="email"><br>
                Current Email: {{email || "No Mail"}}
            </label>

            <label for="age">
                <!-- .number modifier automatically convert datatype to number, if possible  -->
                Age: <input type="age" v-model.number="age">
            </label>

            <label for="password">
                <!-- .trim modifier trims the extra spaces from front/back, to avoid problems with password -->
                <!-- On pressing enter, .enter modifier will execute the provided method -->
                Password: <input type="password" @keyup.enter="printData" v-model.trim="password">
            </label>

            <button type="submit">Submit Details</button>

        </form>

    </div>
</template>

<script>

export default {
    name: 'PlayingWithModifiers',
    data() {
        return {
            username: '',
            password: '',
            email: '',
            age: ''
        }
    },
    methods: {
        printData() {
            if (this.username && this.password && this.email && this.age) {
                console.log("Name:", this.username);
                console.log("Password:", this.password);
                console.log("Email:", this.email);
                console.log("Age of User:", this.age);
                console.log(typeof this.age);
            }
        }
    }
}

</script>

<style>
form {
    margin-left: 20px;
}

label {
    display: block;
    margin-bottom: 10px;
}

button {
    margin-top: 10px;
    margin-bottom: 20px;
}
</style>