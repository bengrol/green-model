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
        <div class="header-content text-right pull-right">
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

<style>
.contact .section-content {
  color: #fff;
}

.contact .section-title {
  padding: 10% 20%;
}

.contact-form {
  padding: 50px 0;
}

.header-content {
  display: inline-block;
  margin-top: 30vh;
}

.header-sub-title {
  font-size: 16px;
  margin-left: 10px;
}

.header-title {
  font-size: 112px;
  font-weight: 100;
  line-height: 1;
  margin-bottom: 0;
}

.header-title, .header-sub-title {
  color: #573678;
  font-family: 'Roboto',sans-serif;
  text-transform: uppercase;
  text-shadow: 4px 4px #b9d2379e;

}
.header-sub-title {
font-weight: bold;

}

.owl-carousel {
  margin-top: 156px;
}

.owl-carousel .owl-wrapper, .owl-carousel .owl-item .item {
  background-repeat: no-repeat;
  height: 80vh;
}

.owl-carousel .owl-wrapper, .owl-carousel .owl-item:nth-child(1) .item {
  background: url(/images/salade-2.jpg);
  background-position: bottom;
  background-size: cover;
}

.owl-carousel .owl-wrapper, .owl-carousel .owl-item:nth-child(3) .item {
  background: url(/images/fresh-juice-3.jpg);
  background-size: cover;
}

.owl-carousel .owl-wrapper, .owl-carousel .owl-item:nth-child(2) .item {
  background: url(/images/salade-3.jpg);
  background-size: cover;
}

.owl-next {
  right: 21%;
}

.owl-prev {
  right: 25%;
}

.owl-theme .owl-controls .owl-buttons div {
  background: #b9d237;
  border-radius: 100%;
  bottom: -25px;
  color: #000;
  color: #fff;
  font-size: 15px;
  height: 50px;
  margin: 0;
  opacity: 1;
  padding: 15px;
  position: absolute;
  transition: all .4s;
  width: 50px;
}

.owl-theme .owl-controls .owl-buttons div:hover {
  background: #fff;
  color: #000;
}

@media (max-width: 767px) {

   .header-sub-title {
    margin-left: 3px;
  }

  .header-title {
    font-size: 45px;
    margin-bottom: 5px;
  }

    .owl-carousel {
    margin-top: 80px;
  }

  .owl-carousel .owl-wrapper, .owl-carousel .owl-item:nth-child(1) .item, .owl-carousel .owl-wrapper, .owl-carousel .owl-item:nth-child(2) .item, .owl-carousel .owl-wrapper, .owl-carousel .owl-item:nth-child(3) .item {
    background-position: center;
  }

  .owl-theme .owl-controls .owl-buttons .owl-next {
    right: 5%;
  }

  .owl-theme .owl-controls .owl-buttons .owl-prev {
    right: 20%;
  }


}

@media (max-width: 991px) and (min-width: 768px) {

  .header-title {
    font-size: 62px;
  }


  .owl-carousel {
    margin-top: 85px;
  }

  .owl-theme .owl-controls .owl-buttons .owl-next {
    right: 12%;
  }

  .owl-theme .owl-controls .owl-buttons .owl-prev {
    right: 20%;
  }
}

@media (min-width: 1366px) {

  .owl-carousel {
    margin-top: 94px;
  }

}
</style>
