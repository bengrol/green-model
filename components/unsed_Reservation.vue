<template>
  <div class="reservation-wrapper">
    <section id="reserve" class="reserve">
      <img class="img-responsive section-icon hidden-sm hidden-xs" src="/images/icons/reserve_black.png">
      <div class="wrapper">
        <div class="container-fluid">
          <div class="row dis-table">
            <div class="col-xs-6 col-sm-6 dis-table-cell color-bg">
              <h2 class="section-title">Reserve A Table !</h2>
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
    <section class="reservation">
      <img class="img-responsive section-icon hidden-sm hidden-xs" src="/images/icons/reserve_color.png">
      <div class="wrapper">
        <div class="container-fluid">
          <div class=" section-content">
            <div class="row">
              <div class="col-md-5 col-sm-6">
                <form class="reservation-form" :action="formActionUrl" method="POST">
                  <div class="row">
                    <div class="col-md-6 col-sm-6">
                      <div class="form-group">
                        <input id="name" type="text" class="form-control reserve-form empty iconified" name="name" required="required" placeholder="  &#xf007;  Name">
                      </div>
                      <div class="form-group">
                        <input id="email" type="email" name="email" class="form-control reserve-form empty iconified" required="required" placeholder="  &#xf1d8;  e-mail">
                      </div>
                    </div>

                    <div class="col-md-6 col-sm-6">
                      <div class="form-group">
                        <input id="phone" type="tel" class="form-control reserve-form empty iconified" name="phone" required="required" placeholder="  &#xf095;  Phone">
                      </div>
                      <div class="form-group">
                        <input id="datepicker" type="text" class="form-control reserve-form empty iconified" name="datepicker" required="required" placeholder="&#xf017;  Time">
                      </div>
                    </div>

                    <div class="col-md-12 col-sm-12">
                      <textarea id="message" type="text" name="message" class="form-control reserve-form empty iconified" rows="3" required="required" placeholder="  &#xf086;  We're listening"></textarea>
                    </div>

                    <input type="hidden" name="_next" :value="($i18n.locale !== 'en' ? '/' + $i18n.locale : '') + '/message'" />

                    <input type="hidden" name="_language" :value="$i18n.locale" />

                    <div class="col-md-12 col-sm-12">
                      <button id="submit" type="submit" name="submit" class="btn btn-reservation">
                        <span>
                          <i class="fa fa-check-circle-o"></i>
                        </span>
                        Make a reservation
                      </button>
                    </div>

                  </div>
                </form>
              </div>

              <div class="col-md-2 hidden-sm hidden-xs"></div>

              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="opening-time">
                  <h3 class="opening-time-title">Hours</h3>
                  <p>Mon to Fri: 7:30 AM - 11:30 AM</p>
                  <p>Sat & Sun: 8:00 AM - 9:00 AM</p>

                  <div class="launch">
                    <h4>Lunch</h4>
                    <p>Mon to Fri: 12:00 PM - 5:00 PM</p>
                  </div>

                  <div class="dinner">
                    <h4>Dinner</h4>
                    <p>Mon to Sat: 6:00 PM - 1:00 AM</p>
                    <p>Sun: 5:30 PM - 12:00 AM</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
import { formActionUrl } from '../store/index'

export default {
  data() {
    return {
      formActionUrl
    }
  }
}
</script>

<style>
.opening-time {
  background-color: #b9d237;
  border-radius: 4px;
  color: #fff;
  margin-top: -50px;
  padding: 20px 40px;
}

.opening-time h4 {
  font-weight: 600;
  margin-bottom: 6px;
  margin-top: 12px;
}

.opening-time p {
  margin-bottom: 2px;
}

.opening-time-title {
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 25px;
  margin-top: 0;
}

.reservation .section-content {
  padding: 15% 15% 10%;
}

.reservation-form {
  margin-top: -20px;
}

@media (max-width: 767px) {
  .opening-time {
    margin-top: 25px;
  }
}
</style>
