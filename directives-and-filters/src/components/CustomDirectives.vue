<template>
    <div>

        <!-- Highlighting Text: Using global custom directive -->
        <div v-highlight>Highlighted Text</div>

        <!-- Custom Text: Using global custom directives -->
        <div v-customText="'heading'">Heading</div>
        <div v-customText="'title'">Lorem, ipsum dolor.</div>
        <div v-customText="'subtitle'">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, pariatur reprehenderit autem odio
            laudantium doloremque ratione, maiores tempore voluptates iste vero. Facilis, ab quo doloremque iusto dicta
            magnam laborum debitis.
        </div>

        <!-- Custom Faded Heading: Using global directive with value and modifier -->
        <div v-customText.fade="'heading'">Faded Heading</div>

        <!-- Danger Local Custom Derivatives -->
        <div v-danger>I'm Dangerous</div>

    </div>
</template>

<script>

export default {
    name: 'CustomDirectives',
    directives: {
        danger: {
            inserted: function (el) {
                el.style.background = 'red';
            }
        }
    }
}

</script>