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
        <nuxt-link :to="$i18n.path('')" class="navbar-brand">
          <img id="logo" src="/images/Logo_main.png" class="logo img-responsive">
        </nuxt-link>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div id="Food-fair-toggle" class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#about">{{ $t('nav.about') }}</a>
          </li>
          <li>
            <a href="#pricing">{{ $t('nav.pricing') }}</a>
          </li>
          <li>
            <a href="#great-place-to-enjoy">{{ $t('nav.beer') }}</a>
          </li>
          <li>
            <a href="#breakfast">{{ $t('nav.bread') }}</a>
          </li>
          <li>
            <a href="#featured-dish">{{ $t('nav.featured') }}</a>
          </li>
          <li>
            <a href="#reserve">{{ $t('nav.reservation') }}</a>
          </li>
          <li>
            <a href="#contact">{{ $t('nav.contact') }}</a>
          </li>
          <li>
            <nuxt-link v-if="$i18n.locale === 'fr'" :to="`/en` + $route.fullPath">
              <div class="english flag" :title="$t('common.english')" @click="onLangChange"></div>
            </nuxt-link>
            <nuxt-link v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')">
              <div class="french flag" :title="$t('common.french')" @click="onLangChange"></div>
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
import { eventBus } from '../store/index'

export default {
  data() {
    return {
      loading: true,
    }
  },
  methods: {
    onLangChange() {
      console.log('user changed lang')
      eventBus.$emit('lang-changed')
    },
  },
}
</script>

<style>
.flag {
  height: 11px;
  width: 16px;
  margin-top: 3px;
}
.flag.french {
  background-image: url('/images/flags/french-flag.jpg');
}
.flag.english {
  background-image: url('/images/flags/english-flag.jpg');
}
</style>
