<template>
  <div class="container-fluid">
    <div class="row">
      <div id="map-canvas"></div>
    </div>
  </div>
</template>

<script>
// import { eventBus } from '../store/index'
/* global google */

export default {
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      console.log('init map...')
      var mapCanvas = document.getElementById('map-canvas')
      var mapOptions = {
        center: new google.maps.LatLng(24.909439, 91.8338),
        zoom: 16,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      }
      var map = new google.maps.Map(mapCanvas, mapOptions)

      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(24.909439, 91.8338),
        title: 'Green Restaurant',
      })

      // To add the marker to the map, call setMap();
      marker.setMap(map)
    },
  },
}
</script>


<style>
#map-canvas {
  height: 350px;
  width: 100%;
}

</style>
