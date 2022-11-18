<template>
    <div style="display: block;">
        <div v-if="dogImageUrl.length == 0">No Dogs</div>
        <img v-if="dogImageUrl.length > 0" width="120" height="120" :src="dogImageUrl"><br>
        <button @click="loadRandomDog">Random Dog</button>
    </div>
</template>

<script>

export default {

    name: 'ComponentTwo',
    data() {
        return {
            dogImageUrl: ''
        }
    },
    methods: {
        async loadRandomDog() {
            const res = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await res.json();
            this.dogImageUrl = data.message;
        }
    }

}

</script>