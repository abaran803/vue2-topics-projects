<template>
    <div>
        <!-- Re-rendering component due to change in DOM -->
        <input type="text" v-if="isInputAllowed" :style="`border: 2px solid ${inputBorderColor};`"><br>

        <!-- Toggle show/hide of above tag -->
        <button @click="isInputAllowed = !isInputAllowed">
            Toggle Above Input Tag
        </button><br>

        <!-- Re-rendering component due to change in variable -->
        <button v-if="isInputAllowed" @click="changeInputBorderColor">Change Border Color</button>
    </div>
</template>

<script>

export default {
    name: "PlayingWithUpdate",
    data() {
        return {
            isInputAllowed: true,
            inputBorderColor: 'rgb(0, 0, 0)'
        }
    },
    methods: {

        // Changing the border color of input field
        changeInputBorderColor() {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            this.inputBorderColor = `rgb(${r}, ${g}, ${b})`;
        }
    },
    beforeUpdate() {
        alert("Updation testing component updating");
    },
    updated() {
        alert("Updation testing component updated");
    }
}

</script>