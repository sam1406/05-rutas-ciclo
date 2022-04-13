<template>
    <div v-if="pokemon">
        <h1>{{ pokemon.name }}</h1>
       <img :src="pokemon.sprites.front_default" :alt="pokemon.name">

    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            pokemon: null
        };
    },
    created() {
        this.getPokemon()
        console.log(this.pokemon);
    },

    methods:{
        async getPokemon() {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then( res => res.json() );
                this.pokemon = response;
                console.log(this.pokemon);

            } catch (error) {
               this.$router.push('/');
            }
        }
    },
    watch: {
        id: function() {
            this.getPokemon();
        }
    }
}
</script>

<style>

</style>