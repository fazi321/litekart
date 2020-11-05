<template>
  <div class="dropdown-head">
   <div class="hover-popup">
      <div class="primary-popup">
         <div class="head-text">
            <span>Litekart For</span>
         </div>
         <div class="icon-list">
            <ul>
               <li>
                  <div class="circle">
                     <img src="../../assets/images/enter.svg" />
                  </div>
                  <div class="text-circle">
                     <span>Entrepreneurs</span>
                  </div>
               </li>
               <li>
                  <div class="circle">
                     <img src="../../assets/images/business.svg" />
                  </div>
                  <div class="text-circle">
                     <span>Business, IT & Product Leaders</span>
                  </div>
               </li>
               <li>
                  <div class="circle">
                     <img src="../../assets/images/developers.svg" />
                  </div>
                  <div class="text-circle">
                     <span>Developers</span>
                  </div>
               </li>
            </ul>
         </div>
         <div class="docs">
            <div class="head-text">
               <span>RESOURCES:</span>
            </div>
            <div class="docs-buttons">
               <a href="#">Documentation</a>
               <a href="#">Litekart Technology</a>
            </div>
         </div>
      </div>
      <div class="plate-form">
         <div class="head-text">
            <span>Litekart For</span>
         </div>
         <div class="plate-form-list">
            <ul>
               <li>
                  <router-link to="/features">
                     <div class="circle light-green">
                        <img src="../../assets/images/dev.svg" />
                     </div>
                     <div class="text-plateform">
                        <span>Developers</span>
                        <p>
                           Ecommerce features to start selling immediately and scale to
                           infinity
                        </p>
                     </div>
                  </router-link>
               </li>
               <li>
                  <router-link to="/ecommerce-developer">
                     <div class="circle light-pink">
                        <img src="../../assets/images/graphql.svg" />
                     </div>
                     <div class="text-plateform">
                        <span>GaphQL API Engine</span>
                        <p>GraphQL API with Typescript for rock solid backend.</p>
                     </div>
                  </router-link>
               </li>
               <li>
                  <router-link to="customizations">
                     <div class="circle light-orange">
                        <img src="../../assets/images/integration.svg" />
                     </div>
                     <div class="text-plateform">
                        <span>Integration</span>
                        <p>
                           API based architecture, Integrates with any other service
                        </p>
                     </div>
                  </router-link>
               </li>
               <li>
                  <router-link to="/pricing">
                     <div class="circle light-blue">
                        <img src="../../assets/images/plateform.svg" />
                     </div>
                     <div class="text-plateform">
                        <span>Platform Pricing</span>
                        <p>Pricing to meet developers and business needs.</p>
                     </div>
                  </router-link>
               </li>
            </ul>
         </div>
      </div>
   </div>
  </div>
</template>

<script>
export default {
    name: "DropDown",
};
</script>

<style scoped>
.hover-popup {
    width: 800px;
    position: absolute;
    display: flex;
    overflow: hidden;
    top: 30px;
}

.primary-popup {
    background-color: #323c47;
    padding: 1px;
    width: 40%;
    border: 1px solid #fff;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-right: unset;
}

.hover-popup .primary-popup .head-text {
    padding: 22px 25px;
}

.hover-popup .primary-popup .head-text span {
    color: #88949c;
    font-size: 12px;
}

.icon-list ul {
    padding: 10px;
    flex-direction: column;
}

.icon-list ul li {
    display: flex;
    align-items: center;
    margin: 10px;
    border-radius: 8px;
    overflow: hidden;
    padding: 10px;
    cursor: pointer;
}

.icon-list ul li:hover {
    background-color: #2d3748;
}

.circle {
    padding: 10px;
    border-radius: 50%;
    background-color: #212e3a;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}

.text-circle {
    padding-left: 15px;
}

.text-circle span {
    color: #fff;
    font-size: 14px;
}

.primary-popup a::after {
    width: 0 !important;
}

.docs .docs-buttons {
    padding: 10px;
}

.docs .docs-buttons a {
    text-decoration: none;
    display: block;
    background-color: #424b55;
    color: #fff;
    padding: 17px;
    margin: 12px;
    text-align: center;
    border: 1px solid #57687b;
    font-size: 14px;
    border-radius: 5px;
}

.docs .docs-buttons a:first-child {
    margin-top: 0;
}

.plate-form {
    background-color: #fff;
    padding: 10px;
    border: 1px solid#E2E8F0;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
}

.plate-form .head-text span {
    color: #a0aec0;
    font-size: 14px;
}

.plate-form .head-text {
    padding: 9px 23px 12px 25px;
}

.plate-form .plate-form-list ul {
    padding: 0;
}

.plate-form .plate-form-list ul li {
    padding: 0;
    margin: 10px 0;
    border-radius: 8px;
    overflow: hidden;
}

.plate-form .plate-form-list ul li:nth-child(1) {
    margin: 0;
}

.plate-form .plate-form-list ul li:nth-child(1):hover {
    background-color: #f0fff4;
}

.plate-form .plate-form-list ul li:nth-child(2):hover {
    background-color: #faf5ff;
}

.plate-form .plate-form-list ul li:nth-child(3):hover {
    background-color: ivory;
}

.plate-form .plate-form-list ul li:nth-child(4):hover {
    background-color: #ebf4ff;
}

.plate-form .plate-form-list ul li a {
    display: flex;
    align-items: center;
    padding: 16px;
    text-decoration: none;
}

.plate-form .plate-form-list ul li .text-plateform {
    color: #282c3f;
    padding-left: 10px;
    line-height: 1.5;
    font-size: 16px;
}

.plate-form .plate-form-list ul li .router-link-exact-active {
    background-image: linear-gradient(90deg, #fa709a 0, #fee140);
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 100%;
    transition: background-size 0.25s ease-in;
    text-decoration: none;
}

.plate-form .plate-form-list ul li .text-plateform p {
    margin: 0;
    color: #7f848a;
    font-size: 14px;
}

.light-green {
    background-color: #c6f6d5 !important;
    color: #48bb78;
}

.light-pink {
    background-color: #fbb6ce !important;
    color: #9f7aea;
}

.light-orange {
    background-color: #faf089 !important;
    color: #ecc94b;
}

.light-blue {
    background-color: #a3bffa !important;
    color: #667eea;
}
</style>
