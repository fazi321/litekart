<template>
 <!-- section header end -->
    <section class="header-section">
      <div class="since-primary">
        <div class="container">
          <h6>800+ custom stores implementated since 2014</h6>
        </div>
      </div>
      <div class="header-primary">
        <div class="header container">
          <div class="primary-list active-class">
            <div class="logo active-logo">
                <router-link to="/">
                <div><img src="../../assets/images/logo.svg" /></div>
                <div class="logo-text"><span>Litekart</span></div>
              </router-link>
            </div>
            <div class="navigation-list">
              <ul>
                <li class="hover-dropdown"><router-link to="features">FEATURES</router-link>
                  <!-- dorpdown -->
                  <DropDown />
                </li>
                <li><router-link to="/live-projects">LIVE PROJECTS</router-link></li>
                <li><router-link to="/litekart-story">STORY</router-link></li>
                <li><router-link to="/technology">TECHNOLOGY</router-link></li>
                <li><router-link to="/ecommerce-developer">DEVELOPERS</router-link></li>
              </ul>
            </div>
          </div>
          <div class="lets-talk">
            <div>
                <div class="navigation-list price-list active-class">
              <ul>
                <li><router-link to="/pricing">PRICING</router-link></li>
              </ul>
            </div>
            </div>
            <div>
                <router-link to="/contact" class="btn btn-talk">Let's talk</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- section header end -->
</template>

<script>
import DropDown from '@/components/header-dropdown/HeaderDropdown';
export default {
    name: 'AppHeader',
    components: {
      DropDown
    }
};
</script>

<style scoped>
/* header start  */
.header-section{
    background-color: #fff;
    position: relative;
    z-index: 1;
    position: fixed;
    width:100%;
    top:0;
}
.since-primary{
    background-color: #000000;
    text-align: center;
    padding: 10px;
}
.since-primary h6{
    margin: 0;
    font-size: 13px;
    color: #fff;
    word-spacing: 1.5px;
    letter-spacing: 1.5px;
}
.header-primary{
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
    padding:20px 32px;
}
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
.header .primary-list{
    display: flex;
    align-items: center;
}
.header .active-logo .router-link-exact-active{
    background-size: 100% 5px!important;
    border-radius: unset!important;
}
.header .logo a{
    text-decoration: none;
    display: flex;
    align-items: center;
    padding:6px 0;
}
.header .logo img{
    height: 30px;
}
.header .logo a .logo-text{
    font-size: 26px;
    font-weight: bold;
    color: #282c3f;
    padding-left:5px;
}
.header .active-class .router-link-exact-active{
    background-image: linear-gradient(90deg,#fa709a 0,#fee140);
    background-repeat: no-repeat;
    background-size: 100% .2em;
    background-position: 0 100%;
    transition: background-size .25s ease-in;
    text-decoration: none;
    border-radius:8px;
}
.navigation-list>ul{
    display: flex;
    padding:2px 20px;
    margin:0 20px;
    border-left:1px solid #e2e8f0;
}
.navigation-list>ul li{
    list-style-type: none;
    margin: 0 6px;
    position: relative;
    border-radius: 8px;
     top:2px;
}
.navigation-list>ul>li>a{
    text-decoration: none;
    color: #282c3f;
    font-size: 15px;
    display: block;
    padding:5px 14px;
}
.navigation-list>ul>li>a:after {
    content: "";
    width: 0;
    height: 3px;
    display: block;
    position: relative;
    top:5px;
    background-image: linear-gradient(90deg,#fa709a 0,#fee140);
    background-repeat: no-repeat;
    transition: width .2s ease;
    -webkit-transition: width .2s ease;
}
.navigation-list>ul>li>a:hover:after{
    width: 100%;
}
.lets-talk{
    display: flex;
    align-items: center;
}
.lets-talk .btn-talk{
    background-color: #3182CE;
    color:#fff;
    box-shadow: 1px 1px 3px 0 rgba(8,116,249,.4);
}
.lets-talk .price-list ul{
    border-left:unset;
}
.lets-talk .talk-btn:hover{
    transition-duration: .5s;
    background-color: #4299e1;
}
.dropdown-head{
   display: none;
}
.hover-dropdown:hover .dropdown-head {
    display: block;
}
/* header end */

</style>