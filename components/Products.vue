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

    <!--== 14. Have a look to our dishes ==-->

    <section id="have-a-look" class="have-a-look hidden-xs">
      <img class="img-responsive section-icon hidden-sm hidden-xs" src="/images/icons/food_color.png">
      <div class="wrapper">
        <div class="container-fluid">
          <div class="row">

            <div class="menu-gallery" style="width: 50%; float:left;">
              <div class="flexslider-container">
                <div class="flexslider">
                  <ul class="slides">
                    <li>
                      <img src="/images/menu-gallery/menu1.png" />
                    </li>
                    <li>
                      <img src="/images/menu-gallery/menu2.jpg" />
                    </li>
                    <li>
                      <img src="/images/menu-gallery/menu3.png" />
                    </li>
                    <li>
                      <img src="/images/menu-gallery/menu4.jpg" />
                    </li>
                    <li>
                      <img src="/images/menu-gallery/menu5.jpg" />
                    </li>
                    <li>
                      <img src="/images/menu-gallery/menu6.jpg" />
                    </li>
                    <li>
                      <img src="/images/menu-gallery/menu7.jpg" />
                    </li>
                    <li>
                      <img src="/images/menu-gallery/menu8.jpg" />
                    </li>
                    <li>
                      <img src="/images/menu-gallery/menu9.jpg" />
                    </li>
                    <li>
                      <img src="/images/menu-gallery/menu10.jpg" />
                    </li>
                    <li>
                      <img src="/images/menu-gallery/menu11.jpg" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="gallery-heading hidden-xs color-bg" style="width: 50%; float:right;">
              <h2 class="section-title">Have A Look To Our Dishes</h2>
            </div>

          </div>
          <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- /.wrapper -->
    </section>

  </div>
</template>
