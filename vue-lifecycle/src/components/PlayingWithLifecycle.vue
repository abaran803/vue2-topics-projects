<template>
    <div class='parentBox' style="position: absolute; z-index: 0;" @click="toggleParent">
        <h2>
            Parent
            <p style="font-size: 10px;">Click to toggle Parent</p>
        </h2>
        <div class='childBoxContainer' style="position: relative;">
            <div class='childBox' style="opacity: 0.4; z-index: 999;" @click="toggleChild">
                <h3>
                    Child
                    <p style="font-size: 10px;">Click to toggle Child</p>
                </h3>
            </div>
            <ChildComponent v-if="showChild" :toggleChild="toggleChild" />
        </div>
    </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
    name: "PlayingWithLifecycle",
    props: {
        toggleParent: Function
    },
    components: { ChildComponent },
    data() {
        return {
            showChild: true
        };
    },
    methods: {
        toggleChild(event) {
            event.stopPropagation();
            this.showChild = !this.showChild
        }
    },
    beforeCreate() {
        alert("Parent component creating")

    },
    created() {
        alert("Parent component created")

    },
    beforeMount() {
        alert("Parent component mounting")
    },
    mounted() {
        alert("Parent component mounted")
    },
    beforeUpdate() {
        alert("Parent component updating");
    },
    updated() {
        alert("Parent component updated");
    },
    beforeDestroy() {
        alert("Parent element destroying")
    },
    destroyed() {
        alert("Parent element destroyed")
    },
}
</script>

<style scoped>
.parentBox {
    width: 225px;
    height: 225px;
    margin: auto;
    margin-bottom: 20px;
    background-color: orange;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    cursor: grabbing;
}

h2 {
    margin-top: 20px;
}

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