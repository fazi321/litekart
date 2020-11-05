<template>
    <section class="customized-container">
        <div class="customize-inner">
            <div class="customize-head">
                <h2>Create the applications you need, fast!</h2>
                <p>Litekart provides a powerful and easy-to-use backend platform for building and running web and mobile applications.
                </p>
            </div>
            <div class="customize-mid">
                <div class="left-side">
                    <h2>Customized Design</h2>
                    <p>Create a unique brand presense with a custom ecommerce store. We help you develop a UI/UX that impacts your customer thought process and connects with your audience. The cutting edge design and UX practices will help you meet your
                        business objectives faster with a fluid & unique customer experience.
                    </p>
                    <ul>
                        <li>A fully custom designed product & listing page</li>
                        <li>Ability to show product variations and size/color filters</li>
                        <li>Bulk import/export and categorizatio</li>
                        <li>Abandonned cart & Wishlist feature</li>
                        <li>bought together’ & ‘simmilar products’ suggestions</li>
                        <li>Low inventory alert</li>
                        <li>Dynamic transactional emails</li>
                        <li>Advanced single page checkout</li>
                        <li>Unlimited static pages</li>
                    </ul>
                </div>
                <div class="right-side">
                    <div>
                        <img src="../../assets/images/hero-banner.png" alt="img" />
                    </div>
                </div>
            </div>
            <div class="customize-mid payment-gateway">
                <div class="left-side">
                    <h2>Payment Gateway</h2>
                    <p>Offer a secure payment gateway to your buyers. We have integrations with over 10 gateways including CC Avenue, PayU, PayPal, PayZippy, Mobikwik, Paytm, Instamojo, Razorpay, Cashfree and more. You can easily accept payments via credit
                        card, debit card, online wallets and net banking.
                    </p>
                </div>
                <div class="right-side">
                    <div>
                        <img src="../../assets/images/secure.png" alt="img" />
                    </div>
                </div>
            </div>
            <div class="customize-mid">
                <div class="left-side">
                    <h2>Hosting</h2>
                    <p>Based on cloud architecture, it gives uptime as high as 99.99%. Everything is hosted inside a personal VPS which helps us nullify security issues and optimize network performance. Further to that we are using Serverless / Microservices
                        / FaaS to separate different modules. It gives highest speed, uptime as well as maintainance free</p>
                </div>
                <div class="right-side">
                    <div>
                        <img src="../../assets/images/amazon-node.png" alt="img" />
                    </div>
                </div>
            </div>
            <div class="customize-mid payment-gateway">
                <div class="left-side">
                    <h2>Marketing</h2>
                    <p>Reach your buyers with automated marketing & engagement tools. Grow your sales via advertisements, custom discount coupons, SEO tools, etc. Choose one of our marketing partners to drive traffic to your website and eventually grow your
                        sales.
                    </p>
                </div>
                <div class="right-side">
                    <div>
                        <img src="../../assets/images/prod-detail.png" alt="img" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'AppCards'
    }
</script>

<style scoped>
.customized-container {
    padding-top: 5rem;
    padding-bottom: 2.5rem;
}

.customized-container .customize-inner {
    display: flex;
    flex-direction: column;
}

.customized-container .customize-inner .customize-head {
    text-align: center;
}

.customized-container .customize-inner .customize-head h2 {
    margin: 0;
    font-size: 1.875rem;
}

.customized-container .customize-inner .customize-head p {
    margin: 0;
    padding-top: .25rem;
    color: #718096;
}
.customize-mid {
    display: flex;
    width: 1020px;
    margin: 1.5rem auto;
}

.customize-mid .left-side {
    width: 50%;
    padding: 20px;
}

.customize-mid .left-side h2 {
    font-size: 2.25rem;
    font-weight: 700;
    margin: 0;
    letter-spacing: .05em;
    color: #2d3754;
    line-height: 1.8;
}

.customize-mid .left-side p {
    margin: 0;
    color: #1a202c;
    line-height: 1.5;
}

.customize-mid .left-side ul {
    padding: 18px;
    margin: 0px;
}

.customize-mid .left-side ul li {
    line-height: 2;
    letter-spacing: .05em;
}

.customize-mid .right-side {
    width: 50%;
    padding: 15px 30px;
}

.customize-mid .right-side>div img {
    width: 100%;
}

.payment-gateway {
    flex-direction: row-reverse;
}
</style>