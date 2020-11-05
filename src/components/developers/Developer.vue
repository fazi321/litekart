<template>
    <div>
         <ForDevelopers />
         <IncludeCards />
    </div>
</template>

<script>
import ForDevelopers from './ForDeveloper';
import IncludeCards from '../include-card/Cards';
    export default {
        name: 'Developer',
        components: {
            ForDevelopers,
            IncludeCards
        },
    }
</script>

<style scoped>

</style>