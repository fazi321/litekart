<template>
    <section class="card-container">
        <div class="card-div">
            <div class="card">
                <div>
                    <img src="../../assets/images/graphql api.svg" alt="img" />
                </div>
                <p>Cutting-edge Technologies</p>
            </div>
            <div class="card">
                <div>
                    <img src="../../assets/images/graphql api.svg" alt="img" />
                </div>
                <p>NodeJS + ES + Microservices</p>
            </div>
            <div class="card">
                <div>
                    <img src="../../assets/images/graphql api.svg" alt="img" />
                </div>
                <p>Customize it the way you want</p>
            </div>
            <div class="card">
                <div>
                    <img src="../../assets/images/graphql api.svg" alt="img" />
                </div>
                <p>Progressive ecommerce app</p>
            </div>
            <div class="card">
                <div>
                    <img src="../../assets/images/graphql api.svg" alt="img" />
                </div>
                <p>High on-page SEO</p>
            </div>
            <div class="card">
                <div>
                    <img src="../../assets/images/graphql api.svg" alt="img" />
                </div>
                <p>Scalable as well as performant</p>
            </div>
            <div class="card">
                <div>
                    <img src="../../assets/images/graphql api.svg" alt="img" />
                </div>
                <p>Modern API architecture</p>
            </div>
            <div class="card active-card">
                <p>see all 100+ features</p>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Features',
    }
</script>

<style scoped>
.card-container {
    margin-top: 1.5rem;
    background-color: #edf2f7;
}

.card-container .card-div {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
}

.card-container .card-div .card {
    min-width: 150px;
    width: 150px;
    height: 100%;
    line-height: 1.5;
    text-align: center;
    padding: 20px 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid #cbd5e0;
}

.card-container .card-div .card>div {
    width: 30px;
    height: 30px;
}

.card-container .card-div .card>div img {
    width: 100%;
}

.card-container .card-div .card p {
    letter-spacing: .05em;
    color: #4a5568;
}

.card-container .card-div .active-card {
    background-image: linear-gradient(90deg, #fa709a 0, #fee140);
    background-size: 100% .2em;
    background-position: 0 100%;
    background-repeat: no-repeat;
    padding: 35px 0px;
}
</style>