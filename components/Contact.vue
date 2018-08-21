<template>
  <div class="contact-wrapper">
    <section id="contact" class="contact">
      <div class="container-fluid color-bg">
        <div class="row dis-table">
          <div class="hidden-xs col-sm-6 dis-table-cell">
            <h2 class="section-title">{{ $t('contact.title') }}</h2>
          </div>
          <div class="col-xs-6 col-sm-6 dis-table-cell">
            <div class="section-content">
              <p>16th Birn street Get Plaza (4th floar) USA</p>
              <p>+44 12 213584</p>
              <p>example@mail.com </p>
            </div>
          </div>
        </div>
        <div class="social-media">
          <div class="row">
            <div class="col-md-6 col-md-offset-3">
              <ul class="center-block">
                <li>
                  <a href="#" class="fb"></a>
                </li>
                <li>
                  <a href="#" class="twit"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-form">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1">
            <div class="row">
              <form class="contact-form" action="https://formspree.io/groleau.b@gmail.com" method="POST">

                <div class="col-md-6 col-sm-6">
                  <div class="form-group">
                    <input id="name" name="name" type="text" class="form-control" required="required" :placeholder="$t('common.name')">
                  </div>
                  <div class="form-group">
                    <input id="email" name="email" type="email" class="form-control" required="required" :placeholder="$t('common.email')">
                  </div>
                  <div class="form-group">
                    <input id="subject" name="subject" type="text" class="form-control" required="required" :placeholder="$t('common.subject')">
                  </div>
                </div>

                <div class="col-md-6 col-sm-6">
                  <textarea id="message" name="message" type="text" class="form-control" rows="7" required="required" :placeholder="$t('common.message')"></textarea>
                </div>

                <div class="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">
                  <div class="text-center">
                    <button id="submit" type="submit" name="submit" class="btn btn-send">{{ $t('common.send') }}</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
