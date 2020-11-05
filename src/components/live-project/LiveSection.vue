<template>
    <section class="live-project-container">
        <div class="main-container">
            <div class="project-section" :class="cardSet.cardFlow">
                <div class="project-left">
                    <div class="project-img">
                        <img :src="require(`../../assets/images/${cardSet.image}`)" />
                    </div>
                </div>
                <div class="project-right">
                    <div class="project-content">
                        <h2>{{cardSet.header}}</h2>
                        <p>{{cardSet.paragraph}}</p>
                        <div class="project-persent">
                            <div class="pro-persent" v-for="(growth, index) in cardSet.bottomCard" :key="index">
                                <h1><i class="fa fa-arrow-up"></i>{{growth.head}}</h1>
                                <p>{{growth.text}}</p>
                            </div>
                        </div>
                        <div >
                           <div ><a :href="cardSet.link" class="btn btn-talk">Live Demo</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'LiveSection',
        props: {
          set: String,
          cardSet: null,
        }
    }
</script>

<style scoped>
/* Live Project setion start */
.live-project-container .main-container {
    width: 1266px;
    margin: 0 auto;
}

.live-project-container .main-container .project-section {
    display: flex;
    justify-content: center;
    padding-bottom: 50px;
    margin-top: 50px;
}

.live-project-container .main-container .project-section .project-left {
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center
}

.live-project-container .main-container .project-section .project-left .project-img {
    width: 350px;
}

.live-project-container .main-container .project-section .project-left .project-img img {
    max-width: 100%;
    width: 350px;
    height: 860px;
    object-fit: cover;
}

.live-project-container .main-container .project-section .project-right {
    width: 45%;
    padding: 10px 40px;
}

.live-project-container .main-container .project-section .project-right .project-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.live-project-container .main-container .project-section .project-right .project-content h2 {
    font-size: 1.875rem;
    letter-spacing: .025em;
    line-height: 1.25;
    font-weight: 900;
    color: #2d3754;
    margin: 0;
    width: 100%;
    text-align: left;
}

.live-project-container .main-container .project-section .project-right .project-content p {
    margin: 0;
    letter-spacing: .1em;
    margin-top: 2rem;
    font-size: large;
    margin: 28px 0;
    color: #2d3754;
    line-height: 1.8;
    font-weight: 400;
}

.live-project-container .main-container .project-section .project-right .project-content .btn-blue {
    color: #fff;
    font-size: 1.125rem;
    background-color: #3182ce;
    color: #fff;
}

.live-project-container .main-container .project-section .project-right .project-persent {
    display: flex;
    justify-content: space-between;
    margin-bottom: 7rem;
    width: 100%;
}

.live-project-container .main-container .project-section .project-right .project-persent .pro-persent {
    width: 30%;
}

.live-project-container .main-container .project-section .project-right .project-persent .pro-persent h1 {
    font-size: 3rem;
    font-weight: 900;
    color: #1a202c;
    display: flex;
    justify-content: center;
    align-items: center;
}

.live-project-container .main-container .project-section .project-right .project-persent .pro-persent h1 .fa {
    font-size: 20px;
    color: #48bb78;
    margin-right: 10px;
}

.live-project-container .main-container .project-section .project-right .project-persent .pro-persent p {
    letter-spacing: .05em;
    text-align: center;
    font-size: large;
    margin: 28px 0;
    color: #2d3754;
    line-height: 1.8;
    font-weight: 400;
}

.reverse-container {
    flex-direction: row-reverse;
}


/* Live Project setion end  */
</style>