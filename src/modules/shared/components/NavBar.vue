<template>
    <CustomLink />
</template>

<script>
import { defineAsyncComponent } from "vue"
export default {
    components: {
        CustomLink: defineAsyncComponent(() => import("./CustomLink.vue"))
    },
}
</script>

<style>
div{

    padding: 0 30px;
}
div a{
    color: #2c3e50;
    font-weight: bold;
    text-decoration: none;
    margin: 0 10px;
}
div .router-link-exact-active{
    color: #3498db;
}
</style>