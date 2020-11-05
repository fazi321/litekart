<template>
     <section class="hero-container">
        <div class="hero">
            <div class="hero-left">
                <h2>Start your ecommerce under <br /><span class="two">2 <span class="hour">hours</span><br /> </span>
                    Starting $6k <span class="once"> /once</span></h2> 
                    <div class="demo-btn">
                        <a href="#" class="btn btn-blue">Visit Demo Fashion Store</a>
                    </div>
                <div class="hero-text">
                    <i class="fa fa-minus"></i>
                    <p>Scale to infinity with powerfull platform and cutting-edge tech stack. NodeJS, GraphQL, Typescript, Vue, MongoDB, Flutter, Elastic search</p>
                </div>
            </div>
            <div class="hero-right">
                <div class="hero-video">
                    <a href="#">
                        <video autoplay="autoplay" muted="muted" loop="loop" style="height: 600px;">
                            <source
                                src="https://res.cloudinary.com/itswadesh/video/upload/v1596646954/litekart-demo/Storefront.mp4"
                                type="video/mp4"></video>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Hero',
    }
</script>

<style scoped>
.hero-container {
    background-color: #fef3dc;
    background-image: url('/images/grid.png');
    background-size: 100%;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);
    padding: 50px 0;
    display: flex;
    justify-content: center;
}

.hero-container .hero {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1266px;
}

.hero-container .hero .hero-left {
    width: 50%;
    padding: 0 30px;
}

.hero-container .hero .hero-left h2 {
    font-size: 4rem;
    letter-spacing: -.025em;
    color: #2d3748;
    line-height: 1.25;
    font-weight: 700;
    text-align: left;
}

.hero-container .hero .hero-left h2 .two {
    background-image: linear-gradient(45deg, #fdc200, #fdcf01);
    background-repeat: repeat-x;
    background-size: auto;
    padding: 5px;
    margin: 5px 0;
}

.hero-container .hero .hero-left h2 .hour {
    font-size: .75rem;
}

.hero-container .hero .hero-left h2 .once {
    font-size: .75rem;
}

.btn-blue {
    background-color: #4299e1;
    color: #fff;
    font-size: 16px!important;
}
.demo-btn{
    width: 350px;
}

.hero-container .hero .hero-left .hero-text {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}

.hero-container .hero .hero-left .hero-text .fa {
    border-top-right-radius: .25rem;
    border-bottom-right-radius: .25rem;
    font-size: 36px;
    color: #3182ce;
}

.hero-container .hero .hero-left .hero-text p {
    color: #4a5568;
    font-size: .875rem;
    margin: 0 0 0 20px;
    line-height: 1.5;
    font-weight: normal;
}

.hero-container .hero .hero-right {
    width: 50%;
}

.hero-container .hero .hero-right .hero-video {
    margin-left: 6rem;
}

</style>