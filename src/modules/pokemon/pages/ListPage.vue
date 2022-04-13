<template>
    <div class="list-page">
        <h1>{{ title }}</h1>
        <ul>
            <li v-for="item in items" :key="item.id">
                <router-link :to="{ name: 'item', params: { id: item.id } }">{{ item.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            title: 'List',
            items: [],
        }
    }
}
</script>

<style>

</style>