<template>
   <section class="performance-container">
        <div class="performance">
            <div class="perform-top">
                <h2>Performance</h2>
                <p>A 1-second delay in page load can decrease conversion by 7%. Online stores from Litekart are blazing fast on cloud infrastructure, with an average page load time under 2 seconds – resulting in faster page browsing times, improved conversion,
                    and better customer experience. Progressive web app are the future of Mobile APP. All our products are PWA in built</p>
            </div>
            <div class="perform-para">
                <p>Here are some of the google lighthouse / page speed stats, that proves what we say.</p>
            </div>
            <div class="perform-cir">
                <span class="circle-per">91+</span>
                <span class="circle-per">100</span>
                <span class="circle-per">100</span>
                <span class="circle-per">100</span>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Performance'
    }
</script>

<style scoped>
.performance-container {
    width: 100%;
}

.performance-container .performance {
    width: 1160px;
    margin: 0 auto;
    background-color: #2d3748;
    padding: 3rem;
}

.performance-container .performance .perform-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 80%;
    margin: 0 auto;
}

.performance-container .performance .perform-top h2 {
    font-size: 3rem;
    color: #fff;
    font-weight: 700;
    letter-spacing: .05em;
    line-height: 1.8;
    margin: 0;
}

.performance-container .performance p {
    margin: 28px 0;
    letter-spacing: .05em;
    line-height: 1.8;
    font-weight: 400;
    color: #fff;
    font-size: 1.125rem;
    text-align: center;
}

.performance-container .performance .perform-para {
    padding: 3rem;
}

.performance-container .performance .perform-cir {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}

.performance-container .performance .perform-cir .circle-per {
    border: 10px solid #fff;
    padding: 25px 18px;
    border-radius: 50%;
    color: #6fda44;
    font-size: 1.875rem;
    font-weight: 900;
    margin: 55px;
}

</style>