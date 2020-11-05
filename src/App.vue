<template>
  <div id="app">
    <AppHeader />
    <div class="main">
    <router-view />
    <AppFooter/>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/header/AppHeader";
import AppFooter from "@/components/footer/AppFooter";
export default {
  components: {
    AppHeader,
    AppFooter
  },
};
</script>

<style>
/* common css */
.main {
  position: relative;
  top: 120px;
}
.container {
  max-width: 1266px;
  margin: 0 auto;
}
.btn {
  border-radius: 50px;
  text-decoration: none;
  padding: 12px 42px;
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
  overflow: hidden;
  display: block;
  background-image: url("./assets/images/right-shadow.svg"),
    url("./assets/images/right-chevron.svg");
  background-position: 107% 100%, 90% 50%;
  background-size: auto 140%, 6px 740px;
  background-repeat: no-repeat, no-repeat;
  color:#fff;
  background-color: #3182CE;
}
/* common css */
#app {
  margin: 0;
  font-family: Montserrat, sans-serif;
  color: #282c3f;
}
body{
  margin:0;
}
</style>
