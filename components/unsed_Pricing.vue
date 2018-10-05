<template>
  <section id="pricing" class="pricing">
    <div id="w">
      <div class="pricing-filter">
        <div class="pricing-filter-wrapper">
          <div class="container">
            <div class="row">
              <div class="col-md-10 col-md-offset-1">
                <div class="section-header">
                  <h2 class="pricing-title">Affordable Pricing</h2>
                  <ul id="filter-list" class="clearfix">
                    <li class="filter" @click="doFilter('all')">All</li>
                    <li class="filter" @click="doFilter('.breakfast')">Breakfast</li>
                    <li class="filter" @click="doFilter('.special')">Special</li>
                    <li class="filter" @click="doFilter('.desert')">Desert</li>
                    <li class="filter" @click="doFilter('.dinner')">Dinner</li>
                  </ul>
                  <!-- @end #filter-list -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-10 col-md-offset-1">
            <ul id="menu-pricing" class="menu-price">
              <li class="item dinner">

                <a href="#">
                  <img src="/images/food1.jpg" class="img-responsive" alt="Food">
                  <div class="menu-desc text-center">
                    <span>
                      <h3>Tomato Curry</h3>
                      Natalie &amp; Justin Cleaning by Justin Younger
                    </span>
                  </div>
                </a>

                <h2 class="white">$20</h2>
              </li>

              <li class="item breakfast">

                <a href="#">
                  <img src="/images/food2.jpg" class="img-responsive" alt="Food">
                  <div class="menu-desc">
                    <span>
                      <h3>Prawn Dish</h3>
                      Lorem ipsum dolor sit amet
                    </span>
                  </div>
                </a>

                <h2 class="white">$20</h2>
              </li>
              <li class="item desert">

                <a href="#">
                  <img src="/images/food3.jpg" class="img-responsive" alt="Food">
                  <div class="menu-desc">
                    <span>
                      <h3>Salad Dish</h3>
                      Consectetur adipisicing elit, sed do eiusmod
                    </span>
                  </div>
                </a>

                <h2 class="white">$18</h2>
              </li>
              <li class="item breakfast special">

                <a href="#">
                  <img src="/images/food4.jpg" class="img-responsive" alt="Food">
                  <div class="menu-desc">
                    <span>
                      <h3>Prawn Dish</h3>
                      Tempor incididunt ut labore et dolore
                    </span>
                  </div>
                </a>

                <h2 class="white">$15</h2>
              </li>
              <li class="item breakfast">

                <a href="#">
                  <img src="/images/food5.jpg" class="img-responsive" alt="Food">
                  <div class="menu-desc">
                    <span>
                      <h3>Vegetable Dish</h3>
                      Magna aliqua. Ut enim ad minim veniam
                    </span>
                  </div>
                </a>

                <h2 class="white">$20</h2>
              </li>
              <li class="item dinner special">

                <a href="#">
                  <img src="/images/food6.jpg" class="img-responsive" alt="Food">
                  <div class="menu-desc">
                    <span>
                      <h3>Chicken Dish</h3>
                      Quis nostrud exercitation ullamco laboris
                    </span>
                  </div>
                </a>

                <h2 class="white">$22</h2>
              </li>
              <li class="item desert">

                <a href="#">
                  <img src="/images/food7.jpg" class="img-responsive" alt="Food">
                  <div class="menu-desc">
                    <span>
                      <h3>Vegetable Noodles</h3>
                      Nisi ut aliquip ex ea commodo
                    </span>
                  </div>
                </a>

                <h2 class="white">$32</h2>
              </li>
              <li class="item dinner">

                <a href="#">
                  <img src="/images/food8.jpg" class="img-responsive" alt="Food">
                  <div class="menu-desc">
                    <span>
                      <h3>Special Salad</h3>
                      Duis aute irure dolor in reprehenderit
                    </span>
                  </div>
                </a>

                <h2 class="white">$38</h2>
              </li>
              <li class="item desert special">

                <a href="#">
                  <img src="/images/food9.jpg" class="img-responsive" alt="Food">
                  <div class="menu-desc">
                    <span>
                      <h3>Ice-cream</h3>
                      Excepteur sint occaecat cupidatat non
                    </span>
                  </div>
                </a>

                <h2 class="white">$38</h2>
              </li>
            </ul>

            <!-- <div class="text-center">
                                    <a id="loadPricingContent" class="btn btn-middle hidden-sm hidden-xs">Load More <span class="caret"></span></a>
                            </div> -->

          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
// import { eventBus } from '../store/index'
/* global mixitup */

export default {
  data() {
    return {
      loading: true,
      mixInstance: null
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    console.log('destroying mix instance...')
    this.mixInstance.destroy()
  },
  methods: {
    init() {
      if (this.mixInstance) {
        console.log('mix instance found :)')
      } else if (mixitup) {
        this.mixInstance = mixitup('#menu-pricing', {
          selectors: {
            target: 'li'
          }
        })
        console.log('mix done :)')
      } else {
        console.error('mix not available')
      }
    },
    doFilter(str) {
      console.log('filtering on', str)
      this.mixInstance.filter(str)
    }
  }
}
</script>

<style>
section.pricing {
  padding-top: 45px;
}

#filter-list {
  display: block;
  margin: 0;
  padding-left: 0;
  width: 100%;
}

#filter-list li {
  border-bottom: 2px solid rgba(255, 255, 255, 0);
  color: #3d7024 !important;
  cursor: pointer;
  display: inline-block;
  font-size: 1.2em;
  margin-right: 15px;
  padding: 6px 10px;
  width: auto;
}

#filter-list li.active {
  border-bottom: 3px ridge #fff;
  color: #fff !important;
}

#filter-list li:hover {
  color: #fff !important;
  transition: all 0.3s ease-in-out;
}

#menu-pricing {
  display: block;
  margin-bottom: 0;
  padding: 50px 0 25px;
  text-align: center;
  width: 100%;
}

#menu-pricing .item {
  background: #b9d237;
  box-shadow: 0 2px 5px #948e8e;
  color: #fff;
  display: inline-block;
  margin-bottom: 25px;
  margin-right: 20px;
  text-align: center;
  vertical-align: top;
  width: 30%;
}

#menu-pricing .item a {
  background: #fff;
  display: inline-block;
  max-width: 100%;
  text-decoration: none;
}

#menu-pricing .item h2 {
  font-size: 32px;
  margin: 0;
  padding: 12px;
}

#menu-pricing .item img {
  max-width: 100%;
}

.menu-price li a {
  color: #fff;
  overflow: hidden;
}

.menu-price li a .menu-desc {
  background: rgba(185, 210, 55, 0.56);
  font-size: 14px;
  height: 100%;
  left: -100%;
  position: absolute;
  top: 0;
  transition: all 0.3s ease-in-out;
  width: 100%;
}

.menu-price li a .menu-desc span h3 {
  font-size: 30px;
  margin-bottom: 15px;
}

.menu-price li a,
.menu-price li a img {
  display: block;
  position: relative;
}

.menu-price li a:hover .menu-desc {
  left: 0;
}

.menu-price li a:hover .menu-desc span {
  color: rgba(255, 255, 255, 0.9);
  display: block;
  font-size: 14px;
  line-height: 23px;
  padding: 22% 20px;
}

.pricing-filter {
  background: url(/images/pricing_bg.jpg) (cover) center fixed;
}

.pricing-filter-wrapper {
  background: rgba(185, 210, 55, 0.74);
  position: relative;
}

.pricing-title {
  color: #fff;
  margin-bottom: 30px;
}

.section-header {
  padding-left: 10px;
  padding-top: 35px;
}

@media (max-width: 767px) {
  #filter-list li {
    font-size: 14px;
  }

  #menu-pricing .item {
    width: 40%;
  }

  #menu-pricing .item h2 {
    font-size: 27px;
    margin: 0;
    padding: 0;
  }


  .menu-price li a .menu-desc span h3 {
    font-size: 19px;
    margin-bottom: 12px;
  }

  .menu-price li a:hover .menu-desc span {
    font-size: 12px;
    line-height: 18px;
    padding: 0;
  }

  .pricing-title {
    font-size: 25px;
    margin-bottom: 15px;
  }
}

@media (min-width: 991px) {
  #menu-pricing .item:nth-child(7),
  #menu-pricing .item:nth-child(8),
  #menu-pricing .item:nth-child(9) {
    margin-bottom: 25px;
  }
}

@media (max-width: 991px) and (min-width: 768px) {
  #filter-list li {
    font-size: 14px;
  }


  .pricing-title {
    font-size: 25px;
    margin-bottom: 15px;
  }
}
</style>
