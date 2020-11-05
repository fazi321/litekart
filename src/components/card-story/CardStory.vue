<template>
<div>
   <CardHead />
   <!-- card story -->
   <section class="story-card">
      <div class="container">
         <div class="container-main">
            <div class="card-primary">
               <div>
                  <div class="card-secondry">
                     <div class="card-actual">
                        <div class="card-actual-head card-gray-head shap-gray">
                           <div class="card-v-head">
                              <span>v6</span>
                           </div>
                           <div class="date-set">
                              <span>JANUARY</span>
                              <span>2020</span>
                           </div>
                        </div>
                        <div class="list-card">
                           <ul>
                              <li>Improved documentation</li>
                              <li>introduced affilate features</li>
                              <li>flash deals + deals api</li>
                              <li>elastic search</li>
                              <li>email templates</li>
                           </ul>
                        </div>
                        <div class="image-bottom">
                           <img src="../../assets/images/affiliate.jpg" />
                        </div>
                     </div>
                  </div>
               </div>
               <div>
                  <div class="card-secondry">
                     <div class="card-actual">
                        <div class="card-actual-head card-blue-head shap-blue">
                           <div class="card-v-head">
                              <span>v6</span>
                           </div>
                           <div class="date-set">
                              <span>JANUARY</span>
                              <span>2020</span>
                           </div>
                        </div>
                        <div class="list-card">
                           <ul>
                              <li>Improved documentation</li>
                              <li>introduced affilate features</li>
                              <li>flash deals + deals api</li>
                              <li>elastic search</li>
                              <li>email templates</li>
                           </ul>
                        </div>
                        <div class="image-bottom">
                           <img src="../../assets/images/variants.jpg" />
                        </div>
                     </div>
                  </div>
               </div>
               <div>
                  <div class="card-secondry">
                     <div class="card-actual">
                        <div class="card-actual-head card-lightgreen-head shap-light-green">
                           <div class="card-v-head">
                              <span>v6</span>
                           </div>
                           <div class="date-set">
                              <span>JANUARY</span>
                              <span>2020</span>
                           </div>
                        </div>
                        <div class="list-card">
                           <ul>
                              <li>Improved documentation</li>
                              <li>introduced affilate features</li>
                              <li>flash deals + deals api</li>
                              <li>elastic search</li>
                              <li>email templates</li>
                           </ul>
                        </div>
                        <div class="image-bottom">
                           <img src="../../assets/images/admin-panel.png" />
                        </div>
                     </div>
                  </div>
               </div>
               <div>
                  <div class="card-secondry">
                     <div class="card-actual">
                        <div class="card-actual-head card-pink-head shap-pink">
                           <div class="card-v-head">
                              <span>v6</span>
                           </div>
                           <div class="date-set">
                              <span>JANUARY</span>
                              <span>2020</span>
                           </div>
                        </div>
                        <div class="list-card">
                           <ul>
                              <li>Improved documentation</li>
                              <li>introduced affilate features</li>
                              <li>flash deals + deals api</li>
                              <li>elastic search</li>
                              <li>email templates</li>
                           </ul>
                        </div>
                        <div class="image-bottom">
                           <img src="../../assets/images/arialshop.jpg" />
                        </div>
                     </div>
                  </div>
               </div>
               <div>
                  <div class="card-secondry">
                     <div class="card-actual">
                        <div class="card-actual-head card-darkblue-head shap-dark-blue">
                           <div class="card-v-head">
                              <span>v6</span>
                           </div>
                           <div class="date-set">
                              <span>JANUARY</span>
                              <span>2020</span>
                           </div>
                        </div>
                        <div class="list-card">
                           <ul>
                              <li>Improved documentation</li>
                              <li>introduced affilate features</li>
                              <li>flash deals + deals api</li>
                              <li>elastic search</li>
                              <li>email templates</li>
                           </ul>
                        </div>
                        <div class="image-bottom">
                           <img src="../../assets/images/variants.jpg" />
                        </div>
                     </div>
                  </div>
               </div>
               <div>
                  <div class="card-secondry">
                     <div class="card-actual">
                        <div class="card-actual-head card-blue-head shap-blue">
                           <div class="card-v-head">
                              <span>v6</span>
                           </div>
                           <div class="date-set">
                              <span>JANUARY</span>
                              <span>2020</span>
                           </div>
                        </div>
                        <div class="list-card">
                           <ul>
                              <li>Improved documentation</li>
                              <li>introduced affilate features</li>
                              <li>flash deals + deals api</li>
                              <li>elastic search</li>
                              <li>email templates</li>
                           </ul>
                        </div>
                        <div class="image-bottom">
                           <img src="../../assets/images/login.png" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <!-- card story -->
</div>
</template>

<script>
import CardHead from './CardHead';
export default {
  name: "CardStory",
  components:{
      CardHead
  }
};
</script>

<style scoped>
/* story card */
.story-card {
  background-color: #f7f7f7;
  border-bottom: 1px solid #bdbdbd;
}
.story-card .image-bottom {
  width: 100%;
  height: 256px;
}
.story-card .image-bottom img {
  width: 100%;
}
.story-card .container-main {
  display: flex;
  justify-content: center;
}
.story-card .card-primary {
  display: flex;
  position: relative;
  flex-wrap: wrap;
  width: 85%;
  justify-content: space-between;
}
.story-card .container-main .card-primary::before {
  content: "";
  width: 1px;
  background-color: #bdbdbd;
  height: 100%;
  left: 50%;
  position: absolute;
}
.story-card .card-primary hr {
  height: 100%;
  margin: 0;
}
.card-actual {
  width: 450px;
}
.story-card .card-primary > div {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  height: fit-content;
  position: relative;
  border-radius: 8px;
  margin: 0px 36px 70px 36px;
  /* min-height: 540px; */
}
.story-card .card-primary > div:nth-child(1) {
  margin: 60px 36px;
  top: unset !important;
}
.story-card .card-primary > div:nth-child(odd) {
  position: relative;
  top: -140px;
}
.card-actual .card-actual-head {
  display: flex;
  align-items: center;
  padding: 14px;
}
.story-card .card-primary > div:nth-child(odd) .card-actual-head::after {
  content: "";
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  position: absolute;
  right: -15px;
}
.story-card .card-primary > div:nth-child(even) .card-actual-head::after {
  content: "";
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  position: absolute;
  left: -15px;
}

/* dot */
.story-card .card-primary > div:nth-child(odd) .card-actual-head::before {
  position: absolute;
  content: "";
  width: 9px;
  height: 9px;
  background-color: #bdbdbd;
  border-radius: 9px;
  box-shadow: 0 0 2px 8px #f7f7f7;
  right: -58px;
}
.story-card .card-primary > div:nth-child(even) .card-actual-head::before {
  position: absolute;
  content: "";
  width: 9px;
  height: 9px;
  background-color: #bdbdbd;
  border-radius: 9px;
  box-shadow: 0 0 2px 8px #f7f7f7;
  left: -56px;
}
.story-card .card-primary > div:nth-child(2) {
  margin-top: 200px;
}
/* dot */
.story-card .card-secondry {
  border-radius: 8px;
  overflow: hidden;
}
.card-actual .card-actual-head .card-v-head {
  padding: 10px;
  border-radius: 5px;
}
.card-actual .card-v-head span {
  font-size: 35px;
  line-height: 35px;
  font-weight: 600;
  color: #fff;
}
.card-actual .date-set span {
  display: block;
  letter-spacing: 2px;
  font-size: 28px;
}
.card-actual .date-set span:first-child {
  display: block;
  font-size: 12px;
}
.card-actual .date-set {
  padding-left: 10px;
}
.list-card {
  padding: 8px 42px;
  background-color: #fff;
}
.list-card ul {
  padding: 0;
  list-style-type: none;
  letter-spacing: 0.1em;
  line-height: 2;
}
/* story card */
/* colors */
.shap-blue::after {
  border-right: 15px solid #46b8e9;
}
.card-actual .card-blue-head {
  background-color: #46b8e9;
}
.card-actual .card-blue-head .card-v-head {
  background-color: #3a99c2;
}
.shap-gray::after {
  border-left: 15px solid #E2E8F0;
}
.card-actual .card-gray-head {
  background-color:#F7F7F7;
}
.card-actual .card-gray-head .card-v-head {
  background-color: #CDCDCD;
}
.shap-light-green::after {
  border-left: 15px solid #3EE9D1;
}
.card-actual .card-lightgreen-head {
  background-color: #3EE9D1;
}
.card-actual .card-lightgreen-head .card-v-head {
  background-color: #34C2AE;
}
.shap-pink::after {
  border-right: 15px solid #CE43EB;
}
.card-actual .card-pink-head {
  background-color:#CE43EB;
}
.card-actual .card-pink-head .card-v-head {
  background-color: #AB38C3;
}
.shap-dark-blue::after {
  border-left: 15px solid #4D92EB;
}
.card-actual .card-darkblue-head {
  background-color: #4D92EB;
}
.card-actual .card-darkblue-head .card-v-head {
  background-color:#4079C3;
}

/* colors */
</style>