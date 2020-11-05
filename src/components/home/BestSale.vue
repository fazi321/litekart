<template>
    <section class="best-sale-container">
        <div class="best-sale">
            <div class="sale-top">
                <h2>Here’s how Litekart helps deliver the best sales</h2>
            </div>
            <div class="sale-inner">
                <div class="sale-card">
                    <div>
                        <img src="../../assets/images/talent-work.svg" alt="img" />
                    </div>
                    <h2>Scalable and secure</h2>
                    <p>Forget about visitors surge during a sale. The architecture takes care of it.</p>
                </div>

                <div class="sale-card">
                    <div>
                        <img src="../../assets/images/get-a-smater.svg" alt="img" />
                    </div>
                    <h2>Superfast image processing</h2>
                    <p>Based on NodeJS, it empowers faster database and file system access.</p>
                </div>

                <div class="sale-card">
                    <div>
                        <img src="../../assets/images/manage-everythinng.svg" alt="img" />
                    </div>
                    <h2>Best in class uptime, performance</h2>
                    <p>Litekart takes advantage of the cloud platforms providing 99.99% uptime.</p>
                </div>
                <div class="sale-card">
                    <div>
                        <img src="../../assets/images/get-a-clear.svg" alt="img" />
                    </div>
                    <h2>7 days money back guarantee</h2>
                    <p>Full refund if you feel the product does not fit your need.</p>
                </div>
            </div>
            <div class="sale-buttons">
                    <a class="btn btn-blue">Get started</a>
                    <a class="btn btn-red">Get a Demo</a>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'BestSale',
    }
</script>

<style scoped>
.best-sale-container {
    width: 100%;
}

.best-sale-container .best-sale {
    padding: 3rem 0.5rem;
}

.best-sale-container .best-sale .sale-inner {
    display: flex;
    justify-content: space-between;
}

.best-sale-container .best-sale .sale-top h2 {
    text-align: center;
    padding-bottom: 3rem;
    margin: 0;
    font-size: 1.875rem;
    font-weight: 700;
    letter-spacing: .05em;
    color: #2d3754;
    line-height: 1.8;
}

.best-sale-container .best-sale .sale-card {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 20px
}

.best-sale-container .best-sale .sale-card>div {
    width: 130px;
}

.best-sale-container .best-sale .sale-card>div img {
    width: 100%;
}

.best-sale-container .best-sale .sale-card h2 {
    margin: 0;
    margin-bottom: .5rem !important;
    font-size: 1.125rem;
    font-weight: 700;
    color: #2d3754;
    line-height: 1.8;
    letter-spacing: .05em;
}

.best-sale-container .best-sale .sale-card p {
    margin: 0;
    line-height: 1.5;
}

.sale-buttons {
    margin-top: 3.5rem;
    display: flex;
    justify-content: center;
}

.sale-buttons .btn-blue {
    background-color: #4299e1;
    color: #fff;
    font-size: 1.125rem;
}

.sale-buttons .btn-red {
    background-color: #f56565;
    color: #fff;
    font-size: 1.125rem;
    margin-left: 30px;
}
</style>