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
                       image: 'frontendfun.png', 
                       header: 'Frontendfun', 
                       paragraph: 'This is an website for free softwares, scripts, themes and more. Contains 10,000+ free alternative to most of the premium projects. Just download and use as an boilerplate for your own project',
                       link: '#',
                        cardFlow: 'reverse-container',
                        bottomCard:[
                       
                        {
                            head: '151%',
                            text: 'growth of daily visitors'
                        },
                        {
                            head: '96%',
                            text: 'growth of daily visitors'
                        },
                        {
                            head: '210%',
                            text: 'growth of daily visitors'
                        }
                    ]
                    },
                   //    card end
                    //    card start
                   {
                       image: 'misiki.png', 
                       header: 'Misiki started its journey from Litekart', 
                       paragraph: 'With an innovative idea in mind, Misiki Technologies started their journey with Litekart framework. As a food startup they had a stringent speed, availability, scalability. Project was delived in 1 weeks',
                       link: '#',
                        cardFlow: '',
                        bottomCard:[
                       
                        {
                            head: '91%',
                            text: 'growth of daily visitors'
                        },
                        {
                            head: '88%',
                            text: 'growth of daily visitors'
                        },
                        {
                            head: '100%',
                            text: 'growth of daily visitors'
                        }
                    ]
                    },
                   //    card end
                    //    card start
                   {
                       image: 'hopyshopy.png', 
                       header: 'Hopyshopy - An amazon affiliate', 
                       paragraph: 'With automation in mind, hopyshopy started with Flipkart affiliate, whereas Flipkart temporarily stopped its affiliate program. They contacted us again and we changed from flipkart affiliate to amazon affiliate within 1 day time',
                       link: '#',
                        cardFlow: 'reverse-container',
                        bottomCard:[
                       
                        {
                            head: '166%',
                            text: 'growth of daily visitors'
                        },
                        {
                            head: '92%',
                            text: 'growth of daily visitors'
                        },
                        {
                            head: '200%',
                            text: 'growth of daily visitors'
                        }
                    ]
                    },
                   //    card end
                    //    card start
                   {
                       image: 'arialshop-mobile.png', 
                       header: 'Arialshop - Ready to use single page ecommerce built using NodeJS & VueJS', 
                       paragraph: 'This project is available at Codecanyon for download and is ready to use for any ecommerce requirement. Its license is designed so that you can modify and use it the way you wish. Only restrication is reselling',
                       link: '#',
                        cardFlow: '',
                        bottomCard:[
                       
                        {
                            head: '71%',
                            text: 'growth of daily visitors'
                        },
                        {
                            head: '67%',
                            text: 'growth of daily visitors'
                        },
                        {
                            head: '253%',
                            text: 'growth of daily visitors'
                        }
                    ]
                    },
                   //    card end
                    //    card start
                   {
                       image: 'foodfire.png', 
                       header: 'Foodfire - An open source food ordering app with firebase', 
                       paragraph: 'This project can be directly downloaded from github. With a growing community support it is the most comprehensive project for food ordering using firebase for authentication and catalogue listing',
                       link: '#',
                        cardFlow: 'reverse-container',
                        bottomCard:[
                       
                        {
                            head: '82%',
                            text: 'growth of daily visitors'
                        },
                        {
                            head: '84%',
                            text: 'growth of daily visitors'
                        },
                        {
                            head: '195%',
                            text: 'growth of daily visitors'
                        }
                    ]
                    },
                   //    card end
                    //    card start
                   {
                       image: 'arialshop-mobile.png', 
                       header: 'Litekart - The older friend of Litekart', 
                       paragraph: 'We started ecommerce development from Litekart, which subsequently grown into Arialshop and after a lot of itterations now its ready for enterprise level application',
                       link: '#',
                        cardFlow: '',
                        bottomCard:[
                       
                        {
                            head: '88%',
                            text: 'growth of daily visitors'
                        },
                        {
                            head: '63%',
                            text: 'growth of daily visitors'
                        },
                        {
                            head: '156%',
                            text: 'growth of daily visitors'
                        }
                    ]
                    },
                   //    card end
                    //    card start
                   {
                       image: 'lalavish.png', 
                       header: 'Lalavish - A modern saloon & spa', 
                       paragraph: 'With innovative product catalogue and service catalogue, lalavish is still a growing destination in city.',
                       link: '#',
                        cardFlow: 'reverse-container',
                        bottomCard:[
                       
                        {
                            head: '89%',
                            text: 'growth of daily visitors'
                        },
                        {
                            head: '78%',
                            text: 'growth of daily visitors'
                        },
                        {
                            head: '124%',
                            text: 'growth of daily visitors'
                        }
                    ]
                    },
                   //    card end
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
    font-size: 44px;
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