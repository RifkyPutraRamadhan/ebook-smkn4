<template>
  <Nav />
  <router-view />
  <Footer />
</template>

<script setup>
import Nav from "./components/Index/Nav.vue";
import Footer from "./components/Index/Footer.vue";
</script>

<style>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.nav-color {
  background-color: #777B7E;
}

@media (min-width: 1024px) {

  .hero {
    background-attachment: fixed;
  }
}

@media (max-width: 991px) {
  .hero {
    height: auto;
    padding: 120px 0 60px 0;
  }

  .hero .hero-img {
    text-align: center;
    margin-top: 80px;
  }

  .hero .hero-img img {
    width: 80%;
  }
}

@media (max-width: 768px) {
  .hero {
    text-align: center;
  }

  .hero h1 {
    font-size: 32px;
  }

  .hero h2 {
    font-size: 24px;
  }

  .hero .hero-img img {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  [data-aos-delay] {
    transition-delay: 0 !important;
  }
}

.header {
  transition: all 0.5s;
  z-index: 997;
  padding: 20px 0;
}

.header.header-scrolled {
  background: #fff;
  padding: 15px 0;
  box-shadow: 0px 2px 20px rgba(1, 41, 112, 0.1);
}

.header .logo {
  line-height: 0;
}

.header .logo img {
  max-height: 40px;
  margin-right: 6px;
}

.header .logo span {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #1B1E23;
  font-family: "Nunito", sans-serif;
  margin-top: 3px;
}

*{margin: 0px auto;}
html,body{
    height: 100%;
}

#container{
    position: relative;
}

.header{
    padding: 10px;
}

.content{
    padding: 10px;
}

body {
  font-family: "Open Sans", sans-serif;
  color: #444444;
}

a {
  color: #4154f1;
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Nunito", sans-serif;
}

.hero .hero-img {
  text-align: right;
}

.features .feature-icons h3 {
  color: #012970;
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 20px;
  text-align: center;
}

.features .feature-icons {
    margin-top: 120px;
}

.row>* {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
    margin-top: var(--bs-gutter-y);
}

.b-tbsm {
  background-image: url(assets/tbsm.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.b-rpl {
  background-image: url(assets/pplg.jpg);
  background-size: 100%;
  background-attachment: fixed;
}

.b-tjkt {
  background-image: url(assets/tjkt.jpg);
  background-size: 100%;
  background-attachment: fixed;
}

.b-dkv {
  background-image: url(assets/dkv.jpg);
  background-size: 100%;
  background-attachment: fixed;
}

.b-toi {
  background-image: url(assets/toi.jpg);
  background-size: 100%;
  background-attachment: fixed;
}
</style>