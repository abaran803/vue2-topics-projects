<template>
    <div>
        <input type="text" v-model="notification" placeholder="Enter Message">
        <br>
        <!-- Event with argument -->
        <button @click="$emit('popup-noti', notification)">
            Popup Notification
        </button><br><br>
        <!-- Event without argument -->
        <button @click="$emit('toggle-details')">
            {{ showDetails ? 'Hide' : 'Show' }} Details
        </button><br>
    </div>
</template>

<script>

export default {

    name: "ChildComponent",
    props: {
        showDetails: Boolean
    },
    data() {
        return {
            notification: ''
        }
    }

}

</script>