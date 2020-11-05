<template>
    <div>
        <TechnologyHead />
        <TechHost />
        <Cards set=""/>
    </div>
</template>

<script>
    import TechnologyHead from './TechnologyHead';
    import TechHost from './TechHost';
    import Cards from '../include-card/Cards';
    export default {
        name: 'Technology',
        components: {
            TechnologyHead,
            TechHost,
            Cards
        },
    }
</script>

<style scoped>

</style>