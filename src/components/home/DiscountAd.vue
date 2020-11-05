<template>
     <section class="discount-container">
        <div class="discount-text">
            <p>Up to <span>90% discount</span> for qualified startups.</p>
        </div>
            <a href="#" class="btn btn-yellow">LET'S TALK </a>
    </section>
</template>

<script>
    export default {
        name: 'DiscountAd'
    }
</script>

<style scoped>
.discount-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 0;
    background-color: #44337a;
}

.discount-text p {
    font-size: 1.5rem;
    --text-opacity: 1;
    color: #fff;
}

.discount-text p span {
    color: #00bb6e;
    font-weight: 700;
}
.btn-yellow {
    background-color: #fdc700;
}
</style>