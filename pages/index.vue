<template>
  <div class="page-index">
    <Nav />
    <Header />
    <About />
    <Map />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Nav from '~/components/Nav.vue'
import Map from '~/components/Map.vue'
import About from '~/components/About.vue'

export default {
  components: {
    About,
    Nav,
    Map,
    Header,
  },
}
</script>
