<template>
    <div>

        <!-- Using global filter to make capitalize the first letter of each word -->
        <div>{{ 'Hey, my name is Ayush' | makeItCapital }}</div>

        <!-- Using local filter to make capitalize the last letter of each word -->
        <div>{{ 'Welcome to our platform' | makeLastCapital }}</div>

    </div>
</template>

<script>
export default {
    name: 'PlayingWithFilter',

    // Creating filter locally
    filters: {
        makeLastCapital(value) {
            if (!value) return '';
            value = value.toString();

            let wordList = value.split(' ');
            wordList = wordList.map(item => {
                return (item.slice(0, item.length - 1).toLowerCase()
                    + item[item.length - 1].toUpperCase());
            });

            return wordList.join(' ');
        }
    }
}
</script>