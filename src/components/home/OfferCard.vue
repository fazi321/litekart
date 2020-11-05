<template>
    <section class="generation-container">
        <div class="generation-div">
            <div class="gen-img">
                <div class="mid-content">
                    <span class="arrow-circle">
                        <i class="fa fa-long-arrow-left"></i>
                        <span class="mid-icons">
                            <i class="fa fa-chevron-right"></i>
                            <i class="fa fa-minus"></i>
                        </span>
                    </span>

                </div>
            </div>
            <div class="gen-text">
                <div>
                    <p><span>The Next Generation of Commerce</span> - Get started selling within minutes. Featuring a complete e-commerce store designed for products and services with tons of free and exciting features.
                    </p>
                    <a href="#">Learn more about our offerings <i class="fa fa-long-arrow-right"></i></a>
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

.generation-container .generation-div .gen-img .mid-content span.arrow-circle>i {
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

.generation-container .generation-div .gen-img .mid-content .mid-icons {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 36px;
}

.generation-container .generation-div .gen-img .mid-content .mid-icons .fa-minus {
    margin-top: 36px;
}

.generation-container .generation-div .gen-img .mid-content .mid-icons i {
    color: #fff;
    font-size: 100px;
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