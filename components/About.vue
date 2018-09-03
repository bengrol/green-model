<template>
  <!--== 6. About us ==-->
  <section id="about" class="about">
    <img src="/images/icons/salad.svg" class="img-responsive section-icon hidden-sm hidden-xs">
    <div class="wrapper">
      <div class="container-fluid">
        <div class="row dis-table">
          <div class="hidden-xs col-sm-6 section-bg about-bg dis-table-cell"></div>
          <div class="col-xs-12 col-sm-6 dis-table-cell">
            <div class="section-content">
              <h2 class="section-content-title">About us</h2>
              <div v-html="$t('about.story')"></div>
            </div>
            <!-- /.section-content -->
          </div>
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </div>
    <!-- /.wrapper -->
  </section>
  <!-- /#about -->
</template>

<style>
#about {
  margin-top: -10px;
}

.about-bg {
  background: url(/images/green-store-inside-1.jpg);
  background-position-x: 15%;
  background-position-y: 80%;
  background-repeat: no-repeat;
  background-size: 85%;
}

@media (max-width: 991px) and (min-width: 768px) {
  .about-bg {
    background-position-x: 100%;
    background-position-y: 68%;
    background-size: 98%;
  }
}
</style>
