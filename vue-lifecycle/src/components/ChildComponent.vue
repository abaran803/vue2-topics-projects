<template>
        <div @click="toggleChild" class='childBox' style="position: absolute; z-index: 999;">
            <h3>
                Child
                <p style="font-size: 10px;">Click to toggle Child</p>
            </h3>
        </div>
</template>

<script>
export default {
    name: 'ChildComponent',
    props: {
        toggleChild: Function
    },
    beforeCreate() {
        alert("Child component creating")

    },
    created() {
        alert("Child component created")

    },
    beforeMount() {
        alert("Child component mounting")
    },
    mounted() {
        alert("Child component mounted")
    },
    beforeUpdate() {
        alert("Child component updating");
    },
    updated() {
        alert("Child component updated");
    },
    beforeDestroy() {
        alert("Child element destroying")
    },
    destroyed() {
        alert("Child element destroyed")
    },
}
</script>

<style scoped>
    .childBoxContainer {
        height: 100%;
        display: flex;
        justify-content: center;
        z-index: 2;
    }
    .childBox {
        width: 120px;
        height: 120px;
        background: orangered;
        cursor: pointer;
    }
    h3 {
        margin-top: 10px;
    }
</style>