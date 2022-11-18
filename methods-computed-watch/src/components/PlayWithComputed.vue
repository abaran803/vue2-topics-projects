<template>
    <div>
        <div>Original Message: {{ message }}</div>
        <div>Reversed Message: {{ reversedMessage }}</div>
    </div>
</template>

<script>
export default {
    name: 'PlayWithComputed',
    data() {
        return {
            message: 'Hello, welcome to the world of VueJS'
        }
    },
    computed: {
        reversedMessage() {
            return this.message.split('').reverse().join('');
        }
    }
}
</script>