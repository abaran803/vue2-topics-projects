<template>
    <div>
        <form @submit.prevent="submitForm">
            <input type="text" placeholder="Username" v-model="formData.username"><br>
            <input type="email" placeholder="Email" v-model="formData.email"><br>
            <input type="password" placeholder="Password" v-model="formData.password"><br>
            <input type="submit" value="Submit Form" />
        </form>
    </div>
</template>

<script>

export default {

    name: 'ComponentOne',
    data() {
        return {
            formData: {
                username: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        submitForm() {
            console.log(this.formData);
        }
    }

}

</script>

<style scoped>
input {
    margin-bottom: 10px;
    width: 75%;
}
button {
    width: 100%;
}
</style>