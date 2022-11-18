<template>
    <div>
        <table>
            <caption>Data saved</caption>
            <tr>
                <td @click="changeComponentA('ComponentOne')"
                    :style="componentA == 'ComponentOne' && {background: 'black', color: 'white'}">
                    Component 1
                </td>
                <td rowspan="5" class="components">
                    <keep-alive>
                        <component :is='componentA' />
                    </keep-alive>
                </td>
            </tr>
            <tr>
                <td @click="changeComponentA('ComponentTwo')"
                    :style="componentA == 'ComponentTwo' && { background: 'black', color: 'white' }">
                    Component 2
                </td>
            </tr>
            <tr>
                <td @click="changeComponentA('ComponentThree')"
                    :style="componentA == 'ComponentThree' && { background: 'black', color: 'white' }">
                    Component 3
                </td>
            </tr>
            <tr>
                <td @click="changeComponentA('ComponentFour')"
                    :style="componentA == 'ComponentFour' && { background: 'black', color: 'white' }">
                    Component 4
                </td>
            </tr>
            <tr>
                <td @click="changeComponentA('ComponentFive')"
                    :style="componentA == 'ComponentFive' && { background: 'black', color: 'white' }">
                    Component 5
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import ComponentFive from './ComponentFive.vue';
import ComponentFour from './ComponentFour.vue';
import ComponentOne from './ComponentOne.vue';
import ComponentThree from './ComponentThree.vue';
import ComponentTwo from './ComponentTwo.vue';

export default {
    name: "KeepAliveComponents",
    data() {
        return {
            componentA: "ComponentOne"
        };
    },
    methods: {
        changeComponentA(componentName) {
            this.componentA = componentName;
        }
    },
    components: { ComponentOne, ComponentTwo, ComponentThree, ComponentFour, ComponentFive }
}
</script>