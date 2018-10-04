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
      </div>
      <div class="social-media">
        <a href="#" class="fb-svg social-img-svg">
          <svg id="fb_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve">
            <g>
              <path d="M437.219,245.162c0-3.088-0.056-6.148-0.195-9.18c13.214-9.848,24.675-22.171,33.744-36.275    c-12.129,5.453-25.148,9.097-38.835,10.626c13.965-8.596,24.675-22.338,29.738-38.834c-13.075,7.928-27.54,13.603-42.924,16.552    c-12.323-14.021-29.904-22.95-49.35-23.284c-37.332-0.612-67.598,30.934-67.598,70.463c0,5.619,0.584,11.072,1.752,16.329    c-56.22-3.616-106.042-32.881-139.369-77c-5.814,10.571-9.152,22.922-9.152,36.164c0,25.037,11.934,47.291,30.071,60.421    c-11.099-0.5-21.503-3.866-30.627-9.375c0,0.306,0,0.612,0,0.918c0,34.996,23.312,64.316,54.245,71.159    c-5.675,1.613-11.656,2.448-17.804,2.421c-4.367-0.028-8.596-0.501-12.713-1.392c8.596,28.681,33.577,49.628,63.147,50.323    c-23.145,19.194-52.298,30.655-83.955,30.572c-5.453,0-10.849-0.361-16.135-1.029c29.933,20.53,65.456,32.491,103.65,32.491    C369.23,447.261,437.219,339.048,437.219,245.162z" />
              <path id="fb_svg_cicle" d="M612,306C612,137.004,474.995,0,306,0C137.004,0,0,137.004,0,306c0,168.995,137.004,306,306,306    C474.995,612,612,474.995,612,306z M27.818,306C27.818,152.36,152.36,27.818,306,27.818S584.182,152.36,584.182,306    S459.64,584.182,306,584.182S27.818,459.64,27.818,306z" />
            </g>
          </svg>
        </a>
        <a href="#" class="twit-svg social-img-svg">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="twitt_svg" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve">
            <g>
              <path d="M612,306C612,137.004,474.995,0,306,0C137.004,0,0,137.004,0,306c0,168.995,137.004,306,306,306    C474.995,612,612,474.995,612,306z M27.818,306C27.818,152.36,152.36,27.818,306,27.818S584.182,152.36,584.182,306    S459.64,584.182,306,584.182S27.818,459.64,27.818,306z" />
              <path d="M317.739,482.617V306h58.279l9.208-58.529h-67.487v-29.348c0-15.272,5.007-29.849,26.928-29.849h43.813v-58.418h-62.201    c-52.298,0-66.569,34.438-66.569,82.175v35.413h-35.885V306h35.885v176.617H317.739L317.739,482.617z" />
            </g>
          </svg>
        </a>
      </div>
    </section>

    <section class="contact-form">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1">
            <div class="row">
              <form class="contact-form" :action="formActionUrl" method="POST">

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

                <input type="hidden" name="_next" :value="($i18n.locale !== 'en' ? '/' + $i18n.locale : '') + '/message'" />

                <input type="hidden" name="_language" :value="$i18n.locale" />

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

<script>
import { formActionUrl } from '../store/index'

export default {
  data() {
    return {
      formActionUrl
    }
  },
}
</script>


<style>

  .social-img-svg svg {
    width: 110px;
    height: 110px;
    fill:#573678;
  }

  .social-img-svg:hover g{
    fill: #573677bf;
    transition: fill .3s ease-out;
  }

.social-media {
  margin: -58px auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  z-index: 999;
  max-width: 400px;
}

.social-media li {
  display: inline-block;
  margin-right: 10px;
}

@media (max-width: 767px) {
  .contact .section-content {
    padding: 70px 0;
  }

  .contact .section-title {
    padding: 10% 20% 20%;
  }
}

@media (max-width: 991px) and (min-width: 768px) {
  .contact .section-title {
    padding: 10% 20% 20%;
  }
}
</style>
