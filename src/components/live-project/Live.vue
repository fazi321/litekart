<template>
    <div>
        <div class="project-heading">
            <h2><span>Live</span> Projects</h2>
        </div>
        <div v-for="(card, index) in cards" :key="index">
                <LiveSection :cardSet="card"/>
        </div>
    </div>
</template>

<script>
    import LiveSection from './LiveSection';
    export default {
        name: 'Live',
        components: {
            LiveSection
        },
        data: function () {
            return {
               cards: [
                   //    card start
                   {
                       image: 'grocery.png', 
                       header: 'Litekart Grocery is a grocery flavour of litekart ecommerce stack', 
                       paragraph: 'The project is written ground up based on cutting edge tech stack of 2020. NodeJS | GraphQL | Typescript | TailwindCSS | MongoDB | Vue makes it very powerfull and robust. Focussed on speed and customization capability.',
                       link: '#',
                       cardFlow: '',
                        bottomCard:[
                        {
                            head: '121%',
                            text: 'growth of daily visitors'
                        },
                        {
                            head: '65%',
                            text: 'growth of daily visitors'
                        },
                        {
                            head: '100%',
                            text: 'growth of daily visitors'
                        }
                    ]
                    },
                   //    card start
                   {
                       image: 'grocery.png', 
                       header: 'Litekart Grocery is a grocery flavour of litekart ecommerce stack', 
                       paragraph: 'The project is written ground up based on cutting edge tech stack of 2020. NodeJS | GraphQL | Typescript | TailwindCSS | MongoDB | Vue makes it very powerfull and robust. Focussed on speed and customization capability.',
                       link: '#',
                        cardFlow: 'reverse-container',
                        bottomCard:[
                       
                        {
                            head: '100%',
                            text: 'growth of daily visitors'
                        }
                    ]
                    },
                   //    card start
               ]
            }
        },
    }
</script>

<style scoped>
.project-heading {
    margin-bottom: 4rem;
    margin-top: 2rem;
}

.project-heading h2 {
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: .05em;
    color: #2d3754;
    line-height: 1.8;
}
 .project-heading h2 span {
    background-image: linear-gradient(90deg, #fa709a 0, #fee140);
    background-repeat: no-repeat;
    background-size: 100% .2em;
    background-position: 0 100%;
    transition: background-size .25s ease-in;
    text-decoration: none;
    padding-bottom: 3px;
}
</style>