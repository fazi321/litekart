<template>
   <section class="partner-container">
        <div class="partners-top">
            <h2>Our Partners</h2>
        </div>

        <div class="partner-inner">
            <div class="svg-container">
                <svg xmlns="http://www.w3.org/2000/svg" alt="img" xmlns:xlink="http://www.w3.org/1999/xlink" width="989" height="194" viewBox="0 0 989 194">
                    <defs>
                        <path id="ellipses-a"
                            d="M11.409383,1.234408 L979.826475,1.234408 C985.350309,1.234408 989.826656,5.711636 989.826656,11.234524 L989.826656,184.682176 C989.826656,190.204672 985.350309,194.6819 979.826475,194.6819 L11.409383,194.6819 C5.88654,194.6819 1.409202,190.204672 1.409202,184.682176 L1.409202,11.234524 C1.409202,5.711636 5.88654,1.234408 11.409383,1.234408 Z" />
                    </defs>
                    <g fill="none" fill-rule="evenodd" transform="translate(-1 -1)">
                        <mask id="ellipses-b" fill="#fff">
                            <use xlink:href="#ellipses-a" />
                        </mask>
                        <path fill="#177DFB"
                            d="M973.588795-151.96986C1054.30198-151.96986 1119.73327-86.53886 1119.73327-5.82568 1119.73327 74.88809 1054.30198 140.31909 973.588795 140.31909 892.87532 140.31909 827.444025 74.88809 827.444025-5.82568 827.444025-86.53886 892.87532-151.96986 973.588795-151.96986zM71.304775-214.805046C201.5379-214.805046 307.112825-109.230552 307.112825 21.002844 307.112825 151.235766 201.5379 256.811208 71.304775 256.811208-58.92835 256.811208-164.50375 151.235766-164.50375 21.002844-164.50375-109.230552-58.92835-214.805046 71.304775-214.805046zM481.497965-91.95919C531.797615-91.95919 572.57365-51.183155 572.57365-.88332 572.57365 49.416145 531.797615 90.19218 481.497965 90.19218 431.198315 90.19218 390.42228 49.416145 390.42228-.88332 390.42228-51.183155 431.198315-91.95919 481.497965-91.95919zM606.1092 85.95604C626.96991 85.95604 643.880856 102.867017 643.880856 123.727599 643.880856 144.588576 626.96991 161.499237 606.1092 161.499237 585.248412 161.499237 568.337466 144.588576 568.337466 123.727599 568.337466 102.867017 585.248412 85.95604 606.1092 85.95604zM702.479885 28.062909C709.10852 28.062909 714.482114 33.436557 714.482114 40.065381 714.482114 46.6938 709.10852 52.067475 702.479885 52.067475 695.85125 52.067475 690.477656 46.6938 690.477656 40.065381 690.477656 33.436557 695.85125 28.062909 702.479885 28.062909z"
                            mask="url(#ellipses-b)" />
                    </g>
                </svg>
            </div>
            <div class="partner-div">
                <div class="partner-text">
                    <h2>Ready to try Litekart?</h2>
                    <p>We're excited about helping you achieve amazing results.</p>
                </div>
                    <a href="#" class="btn btn-blue">Get a Demo </a>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name : 'Partners'
    }
</script>

<style scoped>
.partner-container {
    width: 100%;
    padding-bottom: 50px;
}

.partner-container .partners-top {
    padding-bottom: 2.5rem;
}

.partner-container .partners-top h2 {
    font-size: 1.875rem;
    font-weight: 700;
    color: #1a202c;
    text-align: center;
}

.partner-container .partner-inner {
    border-radius: 15px;
    background-color: #0874f9;
    border-color: #0874f9;
    box-shadow: 0 10px 62px 0 rgba(8, 116, 249, .5);
    background-image: url(/ellipses.svg);
    height: 200px;
    margin: 0 30px;
    position: relative;
}

.partner-container .partner-div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
}

.partner-container .partner-inner .partner-text {
    margin-bottom: 30px;
}

.partner-container .partner-inner .partner-text h2 {
    font-size: 1.5rem;
    color: #fff;
    margin: 0;
}

.partner-container .partner-inner .partner-text p {
    padding-top: .5rem;
    margin: 0;
    color: #cfd7de;
}

.partner-container .partner-inner .btn-blue {
    box-shadow: 1px 1px 3px 0 rgba(8, 116, 249, .4);
    border: 2px solid #fff;
    font-weight: 700;
    color: #fff;
    background-color: #3182ce;
    border-radius: 9999px;
}
</style>