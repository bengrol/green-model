<template>
  <div class="page-index">
    <Nav />
    <Header />
    <About />
    <!--<Pricing />-->
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
import Pricing from '~/components/Pricing.vue'
import Products from '~/components/Products.vue'
import Reservation from '~/components/Reservation.vue'

export default {
  components: {
    About,
    Contact,
    Footer,
    Header,
    Map,
    Nav,
    Pricing,
    Products,
    Reservation,
  },
}
</script>
