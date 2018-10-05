<template>
  <div class="page-index">
    <Nav />
    <Header />
    <About />
    <Products />
    <Contact />
    <Map />
    <Footer />
  </div>
</template>

<script>
import About from '~/components/About.vue'
import Contact from '~/components/Contact.vue'
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue'
import Map from '~/components/Map.vue'
import Nav from '~/components/Nav.vue'
import Products from '~/components/Products.vue'

export default {
  components: {
    About,
    Contact,
    Footer,
    Header,
    Map,
    Nav,
    Products,
  },
}
</script>
