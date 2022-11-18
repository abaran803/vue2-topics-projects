<template>
    <div>
        <input type="text" v-model="message" @keyup.enter="popupMessage(message)">
        <button @click="popupMessage(message)">
            Pop Message
        </button>
        <button @click="printMessage">
            Print Message
        </button>
    </div>
</template>

<script>
export default {
    name: 'PlayWithMethods',
    data() {
        return {
            message: ''
        }
    },
    methods: {
        popupMessage(message) {
            alert(message);
        },
        printMessage: () => {
            // console.log(this.message);
            console.log("Can't message variable, b/c doesn't have this");
        }
    }
}
</script>