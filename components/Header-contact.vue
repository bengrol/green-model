<template>
  <section class="header-slider">
    <no-ssr>
      <carousel :per-page="1" :autoplay="true" :autoplay-timeout="4000" :mouse-drag="true" :navigation-enabled="true" :pagination-enabled="false" :loop="true" >
        <slide v-for="(item, index) in list" :key="index">
          <div class="item">
            <div class="container">
              <div class="header-content" :class="[item.right ? 'text-right pull-right':'']">
                <h1 class="header-title">{{ $t(item.title) }}</h1>
                <p class="header-sub-title">{{ $t(item.subtitle) }}</p>
              </div>
            </div>
          </div>
        </slide>
      </carousel>
    </no-ssr>
    <!-- <i class="fa fa-chevron-right"></i> -->

  </section>
</template>

<script>
// import { eventBus } from '../store/index'
// import { Carousel, Slide } from 'vue-carousel'

export default {
  /* components: {
    Carousel,
    Slide,
  }, */
  data() {
    return {
      loading: true,
      list: [
        {
          title: 'header-contact.slide-1.title',
          subtitle: 'header-contact.slide-1.subtitle',
        },
        {
          right: true,
          title: 'header-contact.slide-2.title',
          subtitle: 'header-contact.slide-2.subtitle',
        },
        {
          right: true,
          title: 'header-contact.slide-3.title',
          subtitle: 'header-contact.slide-3.subtitle',
        },
        {
          right: true,
          title: 'header-contact.slide-4.title',
          subtitle: 'header-contact.slide-4.subtitle',
        },
        {
          right: true,
          title: 'header-contact.slide-5.title',
          subtitle: 'header-contact.slide-5.subtitle',
        }
      ],
    }
  },
  mounted() {
    // setTimeout(() => this.loading = false)
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
  margin-top: 45vh;
  /*
  background-color: rgba(255, 255, 255, 0.7);
  padding: 10px 20px;
  border-radius: 6px 32px;
  */
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
  /* font-weight: 300; */
}

.header-title,
.header-sub-title {
  color: #573678;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  text-shadow: 4px 4px #b9d2379e;
  background-color: #c4c5beab;
  border-radius: 7px;
}

.header-sub-title {
  font-weight: bold;
}

.VueCarousel {
  margin-top: 116px;
  margin-bottom: 24px;
}

.VueCarousel .item {
  background-repeat: no-repeat;
  background-size: cover;
  height: 80vh;
}

.VueCarousel-slide:nth-child(1) .item {
  background-image: url(/images/green-equitable-4.jpg);
}


.VueCarousel-slide:nth-child(2) .item {
  background-image: url(/images/green-equitable-1.jpg);
}

.VueCarousel-slide:nth-child(3) .item {
  background-image: url(/images/green-equitable-3.jpg);
}


.VueCarousel-slide:nth-child(4) .item {
  background-image: url(/images/salad-bar-2.jpg);
}

.VueCarousel-slide:nth-child(5) .item {
  background-image: url(/images/salad-bar-3.jpg);
}



.VueCarousel-navigation-prev,
.VueCarousel-navigation-next {
  transform: inherit !important;
  left: inherit !important;
  top: inherit !important;
  bottom: -24px !important;
  background-color: #b9d237 !important;
  border-radius: 100%;
  color: #fff !important;
  font-size: 15px;
  height: 50px;
  margin: 0;
  opacity: 1;
  padding: 15px !important;
  transition: all 0.4s;
  width: 50px;
}

.VueCarousel-navigation-next {
  right: 14% !important;
}

.VueCarousel-navigation-prev {
  right: 25% !important;
}

.VueCarousel-navigation-prev:hover,
.VueCarousel-navigation-next:hover {
  background: #fff !important;
  color: #b9d237 !important;
}

@media (max-width: 767px) {
  .header-sub-title {
    margin-left: 3px;
  }

  .header-title {
    font-size: 45px;
    margin-bottom: 5px;
  }
}

@media (max-width: 991px) and (min-width: 768px) {
  .header-title {
    font-size: 62px;
  }
}
</style>
