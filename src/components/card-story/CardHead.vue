<template>
    <div>
        <!-- story section development -->
        <section class="story-head">
            <div class="story-primary">
                <div>
                    <h4><span>Development</span>Story</h4>
                    <p>It all started 2014 in the name of Litekart. After 6 years of evolution, the software now powers
                        more
                        than 800 stores worldwide</p>
                </div>
            </div>
        </section>
        <!-- story section development -->
    </div>
</template>

<script>
    export default {
        name: 'CardHead'
    }
</script>

<style scoped>
/* story head */
.story-head .story-primary{
   display: flex;
   justify-content: center;
   background-color: #F7F7F7;
}
.story-head .story-primary h4{
    text-align: center;
    font-size: 32px;
    font-weight: lighter;
    letter-spacing: .05em;
    margin: 35px 0; 
 }
 .story-head .story-primary h4 span{
    margin-right:10px;
    background-image: linear-gradient(90deg,#fa709a 0,#fee140);
    background-repeat: no-repeat;
    background-size: 100% .2em;
    background-position: 0 100%;
    transition: background-size .25s ease-in;
    padding-bottom: 8px;
 }
 .story-head .story-primary p{
    line-height: 1.625;
    letter-spacing: .025em;
    text-align: center;
}
.story-primary>div{
    width: 46%;
    margin-bottom: 35px;
}
/* story head end*/
</style>