<template>
  <section class="thanks">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <div class="section-content text-center">
            <h2 class="section-content-title">{{ $t('thanks.title') }}</h2>
            <p class="section-content-para">{{ $t('thanks.message') }}</p>
            <p class="section-content-para">
              <nuxt-link :to="$i18n.path('')">{{ $t('thanks.back') }}</nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>

</style>
