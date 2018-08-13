<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <div class="copyright text-center">
            <p>
              <nuxt-link :to="$i18n.path('')">{{ $t('footer.copyright') }}</nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
