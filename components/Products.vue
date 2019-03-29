<template>
  <div class="products-wrapper">
    <!--== 8. fresh-salades ==-->
    <section id="fresh-salades" class="fresh-salades">
      <img class="img-responsive section-icon hidden-sm hidden-xs" src="/images/icons/salad-complet.svg">
      <div class="wrapper">
        <div class="container-fluid">
          <div class="row dis-table">
            <div class="col-xs-12 col-sm-6 dis-table-cell color-bg">
              <div class="section-content">
                <h2 class="section-content-title">{{ $t('product.salades.title') }}</h2>
                <div class="section-description">
                  <no-ssr>
                    <p class="section-content-para" v-html="$t('product.salades.description')"></p>
                  </no-ssr>
                </div>
              </div>
            </div>
            <div class="hidden-xs col-sm-6 dis-table-cell section-bg"></div>
          </div>
          <!-- /.dis-table -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.wrapper -->
    </section>
    <!-- /#fresh-salades -->

    <!--==  9. hot dishesr  ==-->
    <section id="hot-dishes" class="hot-dishes">
      <img class="img-responsive section-icon hidden-sm hidden-xs" src="/images/icons/hot_dishes.svg">
      <div class="container-fluid">
        <div class="row dis-table">
          <div class="hidden-xs col-sm-6 dis-table-cell section-bg"></div>
          <div class="col-xs-12 col-sm-6 dis-table-cell">
            <div class="section-content">
              <h2 class="section-content-title">{{ $t('product.dishes.title') }}</h2>
              <div class="section-description">
                <no-ssr>
                  <p class="section-content-para" v-html="$t('product.dishes.description')"></p>
                </no-ssr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--== 10. Our soups ==-->
    <section id="soups" class="soups">
      <img class="img-responsive section-icon hidden-sm hidden-xs" src="/images/icons/soup.svg">
      <div class="wrapper">
        <div class="container-fluid">
          <div class="row dis-table color-bg">
            <div class="col-xs-12 col-sm-6 dis-table-cell color-bg">
              <div class="section-content">
                <h2 class="section-content-title">{{ $t('product.soups.title') }}</h2>
                <div class="section-description">
                  <no-ssr>
                    <p class="section-content-para" v-html="$t('product.soups.description')"></p>
                  </no-ssr>
                </div>
              </div>
            </div>
            <div class="hidden-xs col-sm-6 dis-table-cell section-bg"></div>
          </div>
          <!-- /.dis-table -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.wrapper -->
    </section>
    <!-- /#soups -->

    <!--== 11. Our Bread ==-->
    <section id="pies" class="pies">
      <img class="img-responsive section-icon hidden-sm hidden-xs" src="/images/icons/pies.svg">
      <div class="container-fluid">
        <div class="row dis-table">
          <div class="hidden-xs col-sm-6 dis-table-cell section-bg"></div>
          <div class="col-xs-12 col-sm-6 dis-table-cell">
            <div class="section-content">
              <h2 class="section-content-title">{{ $t('product.quiches.title') }}</h2>
              <div class="section-description">
                <no-ssr>
                  <p class="section-content-para" v-html="$t('product.quiches.description')"></p>
                </no-ssr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--== 12. wraps ==-->
    <section id="wraps" class="wraps">
      <img class="img-responsive section-icon hidden-sm hidden-xs" src="/images/icons/wraps.svg">
      <div class="wrapper">
        <div class="container-fluid">
          <div class="row dis-table color-bg">
            <div class="section-content">
              <h2 class="section-content-title">{{ $t('product.wraps.title') }}</h2>
              <div class="section-description">
                <no-ssr>
                  <p class="section-content-para" v-html="$t('product.wraps.description')"></p>
                </no-ssr>
              </div>
            </div>
            <div class="hidden-xs col-sm-6 dis-table-cell section-bg"></div>
          </div>
          <!-- /.dis-table -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.wrapper -->
    </section>
    <!-- /#wraps -->

    <!--== 11. Our Bread ==-->
    <section id="juice" class="juice">
      <img class="img-responsive section-icon hidden-sm hidden-xs" src="/images/icons/juice.svg">
      <div class="container-fluid">
        <div class="row dis-table">
          <div class="hidden-xs col-sm-6 dis-table-cell section-bg"></div>
          <div class="col-xs-12 col-sm-6 dis-table-cell">
            <div class="section-content">
              <h2 class="section-content-title">{{ $t('product.juice.title') }}</h2>
              <div class="section-description">
                <no-ssr>
                  <p class="section-content-para" v-html="$t('product.juice.description')"></p>
                </no-ssr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--== 12. wraps ==-->
    <section id="green-pass" class="green-pass">
      <img class="img-responsive section-icon hidden-sm hidden-xs" src="/images/icons/wraps.svg">
      <div class="wrapper">
        <div class="container-fluid">
          <div class="row dis-table">
            <div class="col-xs-12 col-sm-6 dis-table-cell color-bg">
              <div class="section-content">
                <h2 class="section-content-title">{{ $t('product.green-pass.title') }}</h2>
                <div class="section-description">
                  <no-ssr>
                    <p class="section-content-para" v-html="$t('product.green-pass.description')"></p>
                  </no-ssr>
                </div>
              </div>
            </div>
            <div class="hidden-xs col-sm-6 dis-table-cell section-bg"></div>
          </div>
          <!-- /.dis-table -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.wrapper -->
    </section>
    <!-- /#wraps -->
  </div>
</template>

<style>
.pies .section-bg {
  background: url('/images/quiche.jpg');
}

.hot-dishes .section-bg {
  background: url('/images/plat-chaud.jpg');
}

.soups .section-bg {
  background-image: url('/images/soupe.jpg');
}

.wraps .section-bg {
  background-image: url('/images/green-roll.jpg');
}
.green-pass .section-bg {
  background-image: url('/images/green-pass.png');
}

.fresh-salades .section-bg {
  background-image: url('/images/salad-bar.jpg');
}
.juice .section-bg {
  background-image: url('/images/pur.jpg');
}

.reserve .section-bg {
  background-image: url('/images/RaT-bg.jpg');
}

.half {
  position: relative;
  width: 50%;
}

.menu {
  padding: 50px 0;
}

.menu-catagory h2 {
  font-size: 51px;
  font-weight: 100;
  margin-bottom: 27px;
}

.menu-system {
  color: #b9d237;
  width: 100%;
}

.per-head {
  float: left;
}

.per-head span {
  margin-right: 5px;
}
.price {
  float: right;
  margin-bottom: 18px;
}

@media (max-width: 767px) {
  .half {
    width: 100%;
  }

  .menu {
    text-align: center;
  }

  .per-head,
  .price {
    float: none;
  }
}

@media (min-width: 1500px) {
  .bread .section-bg {
    background-position-x: 62%, 80%;
    background-size: 330px, 264px;
  }
}
</style>
