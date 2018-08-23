<template>
  <div class="page-message">
    <Nav />
    <Thanks />>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Nav from '~/components/Nav.vue'
import Thanks from '~/components/Thanks.vue'

export default {
  components: {
    Footer,
    Nav,
    Thanks,
  },
}
</script>
