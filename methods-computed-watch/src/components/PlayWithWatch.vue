<template>
    <div>
        <input type="text" v-model="query">
        <br><br>
        <div v-if="!result.length">No Data Found</div>
        <ul v-if="result.length" type="none">
            <h2>List of Movies</h2>
            <li v-for="e in result" :key="e.show.id">
                <div style="padding: 5px;">
                    {{e.show.name}} | {{e.show.type}} | {{e.show.language}}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'PlayWithWatch',
    data() {
        return {
            query: '',
            result: []
        }
    },
    watch: {
        async query(newVal, oldVal) {
            this.result = [];
            const res = await fetch('https://api.tvmaze.com/search/shows?q='+newVal);
            const data = await res.json();
            this.result = data;
            console.log(newVal, oldVal, data);
        }
    }
}
</script>