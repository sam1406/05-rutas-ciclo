<template>
    <div>
        <router-link :to="{name: 'home'}">List</router-link>
        <router-link :to="{name: 'about'}">about</router-link>
        <router-link :to="{name:'item-id', params:{id:1}}">item</router-link>
        <router-link :to="{name: 'dbz-about'}">about-dbz</router-link>
        <router-link :to="{name: 'dbz-characters'}">Characters</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>