<template>
    <div>
        <Hero />
        <DiscountAd />
        <Delivery />
        <Accelerate />
        <AppCards />
        <OfferCard />
        <Features />
        <Performance />
        <BestSale />
        <Partners />
    </div>
</template>

<script>
import Accelerate from './Accelerate';
import AppCards from './AppCards';
import BestSale from './BestSale';
import Delivery from './Delivery';
import DiscountAd from './DiscountAd';
import Features from './Features';
import OfferCard from './OfferCard';
import Partners from './Partners';
import Performance from './Performance';
import Hero from './Hero';
    export default {
        name: 'FrontPage',
        components: {
            Accelerate,
            Hero,
            Partners,
            Performance,
            OfferCard,
            Features,
            DiscountAd,
            Delivery,
            BestSale,
            AppCards
        },
    }
</script>

<style lang="scss" scoped>

</style>