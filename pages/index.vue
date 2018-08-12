<template>
  <div class="page-index">
    <Nav />
    <Links />
    <About />
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import Header from '~/components/Header.vue'
import Nav from '~/components/Nav.vue'
import Links from '~/components/Links.vue'
import About from '~/components/About.vue'

export default {
  components: {
    About,
    Nav,
    Links,
    Header,
  },
}
</script>
