<template>
  <section id="header-slider" class="owl-carousel">
    <div class="item">
      <div class="container">
        <div class="header-content">
          <h1 class="header-title">{{ $t('header.slide-1.title') }}</h1>
          <p class="header-sub-title">{{ $t('header.slide-1.subtitle') }}</p>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="container">
        <div class="header-content">
          <h1 class="header-title">{{ $t('header.slide-2.title') }}</h1>
          <p class="header-sub-title">{{ $t('header.slide-2.subtitle') }}</p>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="container">
        <div class="header-content text-right pull-right">
          <h1 class="header-title">{{ $t('header.slide-3.title') }}</h1>
          <p class="header-sub-title">{{ $t('header.slide-3.subtitle') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import { eventBus } from '../store/index'

export default {
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    this.initSlider()
  },
  methods: {
    initSlider() {
      console.log('init carousel...')
      $('#header-slider').owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 100,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: true,
        pagination: false,
        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
      })
    },
  },
}
</script>
