<template>
    <section class="generation-container">
        <div class="generation-div">
            <div class="gen-img">
                <div class="mid-content">
                    <span class="arrow-circle">
                        <div class="svg-arrow">
                            <svg fill="currentColor" viewBox="0 0 24 24" class="w-full h-full text-indigo-900"><path d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42
                           1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z"></path></svg>
                        </div>
                        <span class="mid-icons">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-line" width="200" height="120" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="relative text-white fill-current fa-w-16"><path fill="currentColor" d="M257.981 272.971L63.638 467.314c-9.373 9.373-24.569
                                9.373-33.941 0L7.029
                                444.647c-9.357-9.357-9.375-24.522-.04-33.901L161.011 256 6.99
                                101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373
                                24.569-9.373 33.941 0L257.981 239.03c9.373 9.372 9.373 24.568 0
                                33.941zM640 456v-32c0-13.255-10.745-24-24-24H312c-13.255 0-24
                                10.745-24 24v32c0 13.255 10.745 24 24 24h304c13.255 0 24-10.745
                                24-24z"></path></svg>
                            
                        </span>
                    </span>

                </div>
            </div>
            <div class="gen-text">
                <div>
                    <p><span>The Next Generation of Commerce</span> - Get started selling within minutes. Featuring a complete e-commerce store designed for products and services with tons of free and exciting features.
                    </p>
                    <a href="#">Learn more about our offerings →</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'OfferCard',
    }
</script>

<style scoped>
.generation-container {
    background-color: #edf2f7;
    padding: 5rem 0;
}

.generation-container .generation-div {
    width: 1100px;
    margin: 0 auto;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, .25);
    border-radius: .5rem;
    background-color: #fff;
    display: flex;
}

.generation-container .generation-div .gen-img {
    width: 45%;
    background-image: linear-gradient(#3c366b8c, #3c366bd9), url('../../assets/images/working-team.jpg');
    height: 400px;
}

.generation-container .generation-div .gen-img .mid-content {
    height: 100%;
}

.generation-container .generation-div .gen-img .mid-content span.arrow-circle {
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: -30px;
}
.generation-container .generation-div .gen-img .mid-content .mid-icons svg{
    color: #fff;
}
.generation-container .generation-div .gen-img .mid-content span.arrow-circle .svg-arrow {
    width: 65px;
    height: 60px;
    background-color: #fff;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
}
.svg-arrow svg{
    width: 24px;
    color: #3c366b;
}
.generation-container .generation-div .gen-img .mid-content .mid-icons {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 36px;
}

.generation-container .generation-div .gen-text {
    width: 55%;
    padding: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.generation-container .generation-div .gen-text p span {
    font-weight: 600;
    color: #1a202c;
    line-height: 1.8;
    letter-spacing: .05em;
}

.generation-container .generation-div .gen-text p {
    margin: 0;
    font-size: large;
    margin-bottom: 28px;
    letter-spacing: .05em;
    word-wrap: break-word;
    color: #2d3754;
    line-height: 1.8;
    font-weight: 400;
}

.generation-container .generation-div .gen-text a {
    text-decoration: none;
    color: #5a67d8;
    font-weight: 500;
    font-size: large;
}

.generation-container .generation-div .gen-text a:hover {
    color: #3c366b;
}

.generation-container .generation-div .gen-text .fa-long-arrow-right {
    margin-left: 10px;
}
</style>