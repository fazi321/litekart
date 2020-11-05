<template>
    <section class="deliver-container">
        <div class="deliver-section">
            <div class="deliver">
                <div>
                    <img src="../../assets/images/deliver.svg" alt="img"  />
                </div>
                <h2>Deliver Faster</h2>
                <p>Accelerate time-to-market with a proven & flexible foundation built on Aws</p>
            </div>
            <div class="deliver">
                <div>
                    <img src="../../assets/images/less.svg" alt="img" />
                </div>
                <h2>Faster ecommerce</h2>
                <p>Complete website loads under 3 second. API calls processed under 0.4s</p>
            </div>
            <div class="deliver">
                <div>
                    <img src="../../assets/images/scale.svg" alt="img" />
                </div>
                <h2>Operate at Scale</h2>
                <p>Build on a managed platform that's powerful, DevOps-free & scales autonomously as needs grow</p>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Delivery'
    }
</script>

<style scoped>
.deliver-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
}

.deliver-container .deliver-section {
    width: 1300px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.deliver-container .deliver-section .deliver {
    width: 30%;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.deliver-container .deliver-section .deliver>div {
    width: 50px;
    height: 50px;
}

.deliver-container .deliver-section .deliver>div img {
    width: 100%;
}

.deliver-container .deliver-section .deliver h2 {
    color: #323c47;
    font-size: 1.25rem;
    margin: 0;
    font-weight: normal;
}

.deliver-container .deliver-section .deliver p {
    padding-top: .5rem;
    font-size: 1.125rem;
    color: #718096;
    line-height: 1.5;
    margin: 0;
}
</style>