<template>
    <section class="accelerate-container">
        <div class="main-container">
            <div class="accelerate-inner">
                <div class="acc">
                    <div>
                        <img src="../../assets/images/logo.svg" alt="img" />
                    </div>
                    <h2>Accelerate development of your digital vision</h2>
                    <p>litekart makes idea into sells faster and with less risk.</p>
                </div>
                <div class="litekart-way-container">
                    <div class="kart-image">
                        <div class="trai-img">
                            <img src="../../assets/images/traingle.svg" alt="img" />
                        </div>
                        <div class="med-img">
                            <img src="../../assets/images/meditation.svg" alt="img" />
                        </div>
                    </div>
                    <div class="kart-text">
                        <h2>The Litekart Way</h2>
                        <p>Start your ecommerce with litekart under 3 minutes with a unbelievable price. Then scale to infinity. Whenever you are ready with a technical team, separate from litekart to your own platform whenever you wish without much glitch.
                            Architecture for Agile Organizations</p>
                    </div>
                </div>
            </div>
            <div class="Architecture-container">
                <div class="archit">
                    <h2>Architecture for Agile Organizations</h2>
                    <div class="power">
                        <p>litekart is powered by </p>
                        <span><img src="../../assets/images/aws.svg" alt="img" /></span>
                    </div>
                </div>
                <div class="arich-card">
                    <div class="card-dev">
                        <div>
                            <img src="../../assets/images/managed data.svg" alt="img" />
                        </div>
                        <h2>Managed Data</h2>
                        <p>All litekart database and storage instances are fully managed, secure and fault-tolerant.</p>
                    </div>
                    <div class="card-dev">
                        <div>
                            <img src="../../assets/images/serverless computing.svg" alt="img" />
                        </div>
                        <h2>Serverless Computing</h2>
                        <p>litekart takes care of your computing resources in a fast, easy and inexpensive way.</p>
                    </div>
                    <div class="card-dev">
                        <div>
                            <img src="../../assets/images/graphql api.svg" alt="img" />
                        </div>
                        <h2>Powerful <span>GraphQL</span> API</h2>
                        <p>A secure, self-documented and instantly-provisioned accesspoint for all your backend resources.</p>
                    </div>
                    <div class="card-dev">
                        <div>
                            <img src="../../assets/images/devops free.svg" alt="img" />
                        </div>
                        <h2>DevOps-free</h2>
                        <p>Companies powered by litekart require no DevOps personnel.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Accelerate',
    }
</script>

<style scoped>
.accelerate-container {
    background-color: #14202e;
    padding: 50px 0;
    display: flex;
    justify-content: center;
}

.accelerate-container .accelerate-inner .acc {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.main-container{
    width: 1266px;
}
.accelerate-container .accelerate-inner .acc>div {
    height: 100px;
    width: 100px;
}

.accelerate-container .accelerate-inner .acc>div img {
    width: 100%;
}

.accelerate-container .accelerate-inner .acc h2 {
    margin: 0;
    color: #fff;
    padding-top: 16px;
    font-size: 26px;
    font-weight: normal;
}

.accelerate-container .accelerate-inner .acc p {
    margin: 0;
    color: #cbd5e0;
    padding-top: .5rem;
}

.litekart-way-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
}

.litekart-way-container .kart-image {
    width: 50%;
    position: relative;
    padding: 50px;
}

.litekart-way-container .kart-image .med-img {
    max-width: 360px;
    position: absolute;
    top: 62px;
    left: 116px;
}

.litekart-way-container .kart-image img {
    width: 100%;
}

.litekart-way-container .kart-text {
    width: 50%;
    padding: 20px
}

.litekart-way-container .kart-text h2 {
    margin: 0;
    color: #fff;
    margin-top: 1rem;
    font-size: 1.875rem;
}

.litekart-way-container .kart-text p {
    margin: 0;
    color: #cbd5e0;
    text-align: left;
    padding-top: .5rem;
}

.Architecture-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.Architecture-container .archit {
    padding: 6rem 0;
}

.Architecture-container .archit h2 {
    margin: 0;
    color: #fff;
    font-size: 1.5rem;
    font-weight: normal;
}

.Architecture-container .archit p {
    margin: 0;
    padding-top: .5rem;
    color: #cbd5e0;
    font-size: 1.25rem;
}

.Architecture-container .archit .power {
    display: flex;
    justify-content: center;
    align-items: center;
}

.Architecture-container .archit span {
    width: 40px;
    margin-top: 5px;
    height: 0px;
    margin-left: 5px;
}

.Architecture-container .archit span img {
    width: 100%;
}

.arich-card {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.arich-card .card-dev {
    width: 25%;
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.arich-card .card-dev>div {
    width: 40px;
    height: 40px;
}

.arich-card .card-dev>div img {
    width: 100%;
}

.arich-card .card-dev h2 {
    margin: 0;
    margin: 0;
    color: #fff;
    font-size: 1.5rem;
    font-weight: normal;
}

.arich-card .card-dev h2 span {
    color: #b83280;
}

.arich-card .card-dev p {
    margin: 0;
    margin: 0;
    padding-top: .5rem;
    color: #cbd5e0;
    font-size: 16px;
}
</style>