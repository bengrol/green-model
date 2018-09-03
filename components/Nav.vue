<template>
  <!--== 4. Navigation ==-->
  <nav id="template-navbar" class="navbar navbar-default custom-navbar-default navbar-fixed-top">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#Food-fair-toggle">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <nuxt-link :to="$i18n.path('')" class="navbar-brand"></nuxt-link>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div id="Food-fair-toggle" class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <nuxt-link :to="$i18n.path('#about')">{{ $t('nav.about') }}</nuxt-link>
          </li>

          <li>
            <nuxt-link :to="$i18n.path('#fresh-salades')">{{ $t('nav.salades') }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="$i18n.path('#wraps')">{{ $t('nav.wraps') }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="$i18n.path('#green-pass')">{{ $t('nav.green-pass') }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="$i18n.path('open-a-green-saladbar')">{{ $t('nav.open-a-green-saladbar') }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="$i18n.path('#contact')">{{ $t('nav.contact') }}</nuxt-link>
          </li>
          <li>
            <nuxt-link v-if="$i18n.locale === 'en'" :to="`/fr` + $route.fullPath">
              <div class="french flag" :title="$t('common.french')" @click="onLangChange"></div>
            </nuxt-link>
            <nuxt-link v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')">
              <div class="english flag" :title="$t('common.english')" @click="onLangChange"></div>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.row -->
  </nav>
</template>

<script>
import throttle from 'lodash/throttle'
import { eventBus } from '../store/index'

export default {
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    const updateNavbarThrottled = throttle(this.updateNavbar, 300)
    $(window).scroll(updateNavbarThrottled)
    this.updateNavbar()
    this.handleSmoothScroll()
  },
  methods: {
    onLangChange() {
      console.log('user changed lang')
      eventBus.$emit('lang-changed')
    },
    updateNavbar() {
      // console.log('updating navbar...')
      if ($(document).scrollTop() > 50) {
        // console.log('shrinking navbar...')
        $('nav').addClass('shrink')
      } else {
        $('nav').removeClass('shrink')
      }
    },
    handleSmoothScroll() {
      // Select all links with hashes
      $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
          // On-page links
          if (
            location.pathname.replace(/^\//, '') ==
              this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
          ) {
            // Figure out element to scroll to
            var target = $(this.hash)
            target = target.length
              ? target
              : $('[name=' + this.hash.slice(1) + ']')
            // Does a scroll target exist?
            if (target.length) {
              // Only prevent default if animation is actually gonna happen
              event.preventDefault()
              $('html, body').animate(
                {
                  scrollTop: target.offset().top
                },
                1000,
                function() {
                  // Callback after animation
                  // Must change focus!
                  var $target = $(target)
                  $target.focus()
                  if ($target.is(':focus')) {
                    // Checking if the target was focused
                    return false
                  } else {
                    $target.attr('tabindex', '-1') // Adding tabindex for elements not focusable
                    $target.focus() // Set focus again
                  }
                  document.location.hash = target[0].id
                }
              )
            }
          }
        })
    }
  }
}
</script>

<style>
.flag {
  height: 11px;
  width: 16px;
  margin-top: 3px;
}
.flag.french {
  background-image: url("/images/flags/french-flag.jpg");
}
.flag.english {
  background-image: url("/images/flags/english-flag.jpg");
}

.custom-navbar-default {
  background-color: #fff;
  border: 0;
  border-radius: 0;
  box-shadow: 0 2px 7px #000;
  color: #679a46;
  height: 110px;
  margin: 0;
  padding: 15px 0;
  transition: all 0.3s ease-in-out;
}

.custom-navbar-default > .container {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
}

.custom-navbar-default > .container > .navbar-header {
  display: flex;
  height: 100%;
  justify-content: center;
}

.navbar-brand {
  background-image: url(/images/logo.jpg);
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  margin-left: 15px;
  width: 205px;
}

.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:focus,
.navbar-default .navbar-nav > .active > a:hover {
  background-color: transparent;
  color: #111010;
}

.navbar-default .navbar-nav > li > a {
  color: #111010;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  margin: 0 18px;
  padding: 18px 0;
  text-align: center;
  text-transform: uppercase;
}

.navbar-default .navbar-nav > li > a:focus,
.navbar-default .navbar-nav > li > a:hover,
.navbar-default .navbar-brand:focus,
.navbar-default .navbar-brand:hover {
  color: #679a46;
}

.navbar-default .navbar-toggle {
  border-color: #111010;
}

.navbar-default .navbar-toggle .icon-bar {
  background-color: #111010;
}

.navbar-default .navbar-toggle:focus,
.navbar-default .navbar-toggle:hover {
  background-color: transparent;
}

.navbar-default.shrink .navbar-collapse {
  border-color: transparent;
}

.navbar-toggle {
  border-radius: 0;
  color: #111010;
  left: 20px;
  position: absolute;
  top: calc(50% - 20px);
}

nav.navbar.custom-navbar-default.shrink {
  height: 62px;
  padding: 5px 0;
}

nav.shrink .navbar-toggle {
  margin: 8px 15px 8px 0;
  padding: 4px 5px;
}

@media (max-width: 767px) {
  .custom-navbar-default {
    padding: 15px 0;
  }

  .navbar-default .navbar-brand {
    font-size: 30px;
  }
}

@media (max-width: 991px) and (min-width: 768px) {
  .custom-navbar-default {
    padding: 15px 0;
  }

  .navbar-default .navbar-nav > li > a {
    font-size: 12px;
    margin: 0 10px;
  }

  nav.shrink .navbar-brand {
    font-size: 22px;
    height: 50px;
    margin-top: -9px;
  }
}

@media (min-width: 1366px) {
  .custom-navbar-default {
    padding: 18px 0;
  }
}
</style>
