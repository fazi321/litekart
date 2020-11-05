<template>
    <section class="technology-main">
        <div class="techology-container">
            <div class="tech-head">
                <h2>Build using <span>Latest Technologies</span></h2>
                <p>Litekart is always updated with latest technologies</p>
                <div class="tech-img">
                    <img src="../../assets/images/mobile-layout-final.png" alt="img" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'TechnologyHead',
    }
</script>

<style scoped>
.technology-main {
    background-color: #f7fafc;
}

.technology-main .techology-container {
    margin: 0 auto;
    width: 1266px;
}

.technology-main .techology-container .tech-head {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.technology-main .techology-container .tech-head h2 {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: .5rem;
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: .05em;
    color: #2d3754;
    line-height: 1.8;
}

.technology-main .techology-container .tech-head h2 span {
    background-image: linear-gradient(90deg, #fa709a 0, #fee140);
    background-repeat: no-repeat;
    background-size: 100% .2em;
    background-position: 0 100%;
    transition: background-size .25s ease-in;
    text-decoration: none;
    padding-bottom: 3px;
}

.technology-main .techology-container .tech-head p {
    color: #1a202c;
    letter-spacing: .1em;
    text-align: center;
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.8;
    font-weight: 700;
}

.technology-main .techology-container .tech-head .tech-img {
    width: 1000px;
    margin: 0 auto;
    margin: 2rem 0;
}

.technology-main .techology-container .tech-head .tech-img img {
    max-width: 100%;
    height: auto;
}
</style>