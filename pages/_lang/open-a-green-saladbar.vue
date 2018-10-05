<template>
  <div class="page-message">
    <Nav />
    <Header />
    <open_a_green />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header-contact.vue'
import Nav from '~/components/Nav.vue'
import open_a_green from '~/components/open-a-green-saladbar'

export default {
  components: {
    Footer,
    Nav,
    open_a_green,
    Header

  },
}
</script>
