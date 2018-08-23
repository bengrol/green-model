<template>
  <div class="page-message">
    <Nav />
    <open_a_green />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Nav from '~/components/Nav.vue'
import open_a_green from '~/components/open-a-green-saladbar'

export default {
  components: {
    Footer,
    Nav,
    open_a_green,
  },
}
</script>
