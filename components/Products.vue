<template>
  <div class="products-wrapper">
    <!--== 8. fresh-salades ==-->
    <section id="fresh-salades" class="fresh-salades">
      <img class="img-responsive section-icon hidden-sm hidden-xs" src="/images/icons/salad-complet.svg">
      <div class="wrapper">
        <div class="container-fluid">
          <div class="row dis-table">
            <div class="col-xs-6 col-sm-6 dis-table-cell color-bg">
              <div class="section-content">
                <h2 class="section-content-title">{{ $t('product.salades.title') }}</h2>
                <div class="section-description">
                  <p class="section-content-para" v-html="$t('product.salades.description')"></p>
                </div>
              </div>
            </div>
            <div class="col-xs-6 col-sm-6 dis-table-cell section-bg">

            </div>
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
          <div class="hidden-xs col-sm-6 dis-table-cell section-bg">

          </div>

          <div class="col-xs-12 col-sm-6 dis-table-cell">
            <div class="section-content">
              <h2 class="section-content-title">{{ $t('product.dishes.title') }}</h2>
              <div class="section-description">
                <p class="section-content-para" v-html="$t('product.dishes.description')"></p>
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
            <div class="section-content">
              <h2 class="section-content-title">{{ $t('product.soups.title') }}</h2>
              <div class="section-description">
                <p class="section-content-para" v-html="$t('product.soups.description')"></p>
              </div>
            </div>
            <div class="col-xs-6 col-sm-6 dis-table-cell section-bg">

            </div>
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
          <div class="hidden-xs col-sm-6 dis-table-cell section-bg">

          </div>
          <div class="col-xs-12 col-sm-6 dis-table-cell">
            <div class="section-content">
              <h2 class="section-content-title">{{ $t('product.quiches.title') }}</h2>
              <div class="section-description">
                <p class="section-content-para" v-html="$t('product.soups.description')"></p>

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
                <p class="section-content-para" v-html="$t('product.wraps.description')"></p>
              </div>
            </div>
            <div class="col-xs-6 col-sm-6 dis-table-cell section-bg">

            </div>
          </div>
          <!-- /.dis-table -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.wrapper -->
    </section>
    <!-- /#wraps -->

    <!--== 13. Menu List ==-->
    <section id="menu-list" class="menu-list">
      <div class="container">
        <div class="row menu">
          <div class="col-md-10 col-md-offset-1 col-sm-9 col-sm-offset-2 col-xs-12">
            <div class="row">
              <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="row">
                  <div class="menu-catagory">
                    <h2>Bread</h2>
                  </div>
                </div>
                <div class="row">
                  <div class="menu-item">
                    <h3 class="menu-title">French Bread</h3>
                    <p class="menu-about">Astronomy compels the soul</p>

                    <div class="menu-system">
                      <div class="half">
                        <p class="per-head">
                          <span>
                            <i class="fa fa-user"></i>
                          </span>1:1
                        </p>
                      </div>
                      <div class="half">
                        <p class="price">$149.00</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="menu-item">
                    <h3 class="menu-title">Italian Bread</h3>
                    <p class="menu-about">Astronomy compels the soul</p>

                    <div class="menu-system">
                      <div class="half">
                        <p class="per-head">
                          <span>
                            <i class="fa fa-user"></i>
                          </span>1:1
                        </p>
                      </div>
                      <div class="half">
                        <p class="price">$149.00</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="menu-item">
                    <h3 class="menu-title">Regular Bread</h3>
                    <p class="menu-about">Astronomy compels the soul</p>

                    <div class="menu-system">
                      <div class="half">
                        <p class="per-head">
                          <span>
                            <i class="fa fa-user"></i>
                          </span>1:1
                        </p>
                      </div>
                      <div class="half">
                        <p class="price">$149.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="row">
                  <div class="menu-catagory">
                    <h2>Drinks</h2>
                  </div>
                </div>
                <div class="row">
                  <div class="menu-item">
                    <h3 class="menu-title">Regular Tea</h3>
                    <p class="menu-about">Astronomy compels the soul</p>

                    <div class="menu-system">
                      <div class="half">
                        <p class="per-head">
                          <span>
                            <i class="fa fa-user"></i>
                          </span>1:1
                        </p>
                      </div>
                      <div class="half">
                        <p class="price">$20.00</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="menu-item">
                    <h3 class="menu-title">Garlic Tea</h3>
                    <p class="menu-about">Astronomy compels the soul</p>

                    <div class="menu-system">
                      <div class="half">
                        <p class="per-head">
                          <span>
                            <i class="fa fa-user"></i>
                          </span>1:1
                        </p>
                      </div>
                      <div class="half">
                        <p class="price">$30.00</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="menu-item">
                    <h3 class="menu-title">Black Coffee</h3>
                    <p class="menu-about">Astronomy compels the soul</p>

                    <div class="menu-system">
                      <div class="half">
                        <p class="per-head">
                          <span>
                            <i class="fa fa-user"></i>
                          </span>1:1
                        </p>
                      </div>
                      <div class="half">
                        <p class="price">$40.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="row">
                  <div class="menu-catagory">
                    <h2>Meat</h2>
                  </div>
                </div>
                <div class="row">
                  <div class="menu-item">
                    <h3 class="menu-title">Bacon</h3>
                    <p class="menu-about">Astronomy compels the soul</p>

                    <div class="menu-system">
                      <div class="half">
                        <p class="per-head">
                          <span>
                            <i class="fa fa-user"></i>
                          </span>1:1
                        </p>
                      </div>
                      <div class="half">
                        <p class="price">$70.00</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="menu-item">
                    <h3 class="menu-title">Sausage</h3>
                    <p class="menu-about">Astronomy compels the soul</p>

                    <div class="menu-system">
                      <div class="half">
                        <p class="per-head">
                          <span>
                            <i class="fa fa-user"></i>
                          </span>1:1
                        </p>
                      </div>
                      <div class="half">
                        <p class="price">$50.00</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="menu-item">
                    <h3 class="menu-title">Chicken Balls</h3>
                    <p class="menu-about">Astronomy compels the soul</p>

                    <div class="menu-system">
                      <div class="half">
                        <p class="per-head">
                          <span>
                            <i class="fa fa-user"></i>
                          </span>1:1
                        </p>
                      </div>
                      <div class="half">
                        <p class="price">$90.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="row">
                  <div class="menu-catagory">
                    <h2>Special</h2>
                  </div>
                </div>
                <div class="row">
                  <div class="menu-item">
                    <h3 class="menu-title">Chicken Balls</h3>
                    <p class="menu-about">Astronomy compels the soul</p>

                    <div class="menu-system">
                      <div class="half">
                        <p class="per-head">
                          <span>
                            <i class="fa fa-user"></i>
                          </span>1:1
                        </p>
                      </div>
                      <div class="half">
                        <p class="price">$90.00</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="menu-item">
                    <h3 class="menu-title">Bacon</h3>
                    <p class="menu-about">Astronomy compels the soul</p>

                    <div class="menu-system">
                      <div class="half">
                        <p class="per-head">
                          <span>
                            <i class="fa fa-user"></i>
                          </span>1:1
                        </p>
                      </div>
                      <div class="half">
                        <p class="price">$70.00</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="menu-item">
                    <h3 class="menu-title">Sausage</h3>
                    <p class="menu-about">Astronomy compels the soul</p>

                    <div class="menu-system">
                      <div class="half">
                        <p class="per-head">
                          <span>
                            <i class="fa fa-user"></i>
                          </span>1:1
                        </p>
                      </div>
                      <div class="half">
                        <p class="price">$50.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="moreMenuContent"></div>
            <div class="text-center">
              <a id="loadMenuContent" class="btn btn-middle hidden-sm hidden-xs">Load More
                <span class="caret"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style>
  
.pies .section-bg {
  background: url(https://www.greenisbetter.fr/wp-content/uploads/2018/05/QUICHE-1-1-1.jpg);
}

.hot-dishes .section-bg {
  background: url(/images/plat-chaud.jpg);
}

.soups .section-bg {
  background-image: url(https://www.greenisbetter.fr/wp-content/uploads/2018/05/SOUPE-1-1.jpg);
}

.wraps .section-bg {
  background-image: url(https://www.greenisbetter.fr/wp-content/uploads/2018/05/green-roll-roll-1-1.jpg);
}

.fresh-salades .section-bg {
  background-image: url(/images/salad-bar.jpg);
}

.reserve .section-bg {
  background-image: url(/images/RaT-bg.jpg);
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

    .per-head, .price {
    float: none;
  }


}

@media (min-width: 1500px) {
  .bread .section-bg {
    background-position-x: 62%,80%;
    background-size: 330px,264px;
  }
}

</style>
