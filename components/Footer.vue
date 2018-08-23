<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="copyright text-center">
            <p> <nuxt-link :to="$i18n.path('')">{{ $t('footer.copyright') }}</nuxt-link> </p>
            <p><a href="http://greenbusinessonly.com" target="_blank" >SITE INTERNATIONAL</a></p>
            <p><a href="http://www.greenisbetterorder.com/" target="_blank">LIVRAISON A DOMICILE</a></p>
          </div>

        </div>
        <div class="col-md-4">
          <div class="copyright text-center">
            <p><a href="http://www.greenbusinessonly.com/fr/greenisbetter-pack_expat/" target="_blank">OUVRIR UN GREEN AUX USA</a></p>
            <p><a href="https://www.slideshare.net/greensaladbars/fr-gib-brochure-jan2017" target="_blank">BROCHURE FRANCHISE</a>
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="copyright text-center">
            <div class="ytb"><a href="https://www.youtube.com/channel/UC79WouLYKZ2q_HKO42bEtcw" target="_blank"><img alt="chaine green is better" src="https://www.greenisbetter.fr/wp-content/uploads/2018/04/yt_logo_rgb_dark.png"> La chaine Green is better</a></div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
footer {
  background-color: #b9d237;
  color: #fff;
  padding: 30px 0;
}

footer a {
  color: #679a46;
  transition: all .3s ease-in-out;
}

footer a:hover {
  color: #00710a;
  text-decoration: none;
}


.ytb{
  margin-top: 40px;
  padding-top: 40px;
}

.ytb img{
  max-width:150px;display:block;
}

</style>
