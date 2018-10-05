<template>
  <div class="products-wrapper">

    <section id="have-a-look" class="have-a-look ">

      <div class="wrapper">
        <div class="container-fluid">

          <div class="row">
            <div class="section-content open-a-saladbar-content">
              <h1>{{ $t('open-a-green.title') }}</h1>
              <h2>{{ $t('open-a-green.sub-title') }}</h2>
              <div v-html="$t('open-a-green.story')"></div>
              <a href="https://form.jotformeu.com/50353799520358" class="btn btn-send open-a-saladbar">{{ $t('open-a-green.submit') }}</a>
            </div>

          </div><!-- /.row -->
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- /.wrapper -->
    </section>

  </div>
</template>

<style>
  .open-a-saladbar{
    margin: 0 30%;
    width: 40%;
  }

  .open-a-saladbar-content{
    padding-top: 10%;
  }
  .flexslider .slides img{
    width: auto;
  }

</style>
