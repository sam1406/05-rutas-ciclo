<template>
    <div class="about-page">
        <h1>About</h1>
        <p>{{message}}</p>
        <button @click="onChangeMessage">Cambiar Mensaje</button>
    </div>
</template>

<script>import { onErrorCaptured } from "vue";

export default {

    data() {
        return {
            message: "Hello from the about page"
        };
    },
    methods: {
        onChangeMessage() {
            this.message = "Goodbye from the about page";
        }
    },
    beforeCreate() {
        console.log('AboutPage - beforeCreate');
    },
    created() {
        console.log('AboutPage - created');
    },
    beforeMount() {
        console.log('AboutPage - beforeMount');
    },
    mounted() {
        console.log('AboutPage - mounted');
    },
    beforeUpdate() {
        console.log('AboutPage - beforeUpdate');
    },
    updated() {
        console.log('AboutPage - updated');
    },
    activated() {
        console.log('AboutPage - activated');
    },
    deactivated() {
        console.log('AboutPage - deactivated');
    },
    beforeUnmount() {
        console.log('AboutPage - beforeUnmount');
    },
    unmounted() {
        console.log('AboutPage - unmounted');
    },
    errorCaptured(){
        console.log('AboutPage - errorCaptured');
    },
    renderTracked(){
        console.log('AboutPage - renderTracked');
    },
    renderTriggered(){
        console.log('AboutPage - renderTriggered');
    },

}
</script>

<style>

</style>