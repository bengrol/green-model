<template>
  <div class="container-fluid">
    <div class="row">
      <div class="map-canvas">
        <no-ssr>
          <l-map :zoom="zoom" :center="center">
            <l-tile-layer :url="layer"></l-tile-layer>
            <l-marker :lat-lng="center">
              <l-popup :content="popup" />
              <l-tooltip :content="tooltip" />
            </l-marker>
          </l-map>
        </no-ssr>
      </div>
    </div>
  </div>
</template>

<script>
// import { eventBus } from '../store/index'
const markerLat = 49.51186
const markerLng = 10.3281

export default {
  data() {
    return {
      loading: true,
      zoom: 13,
      popup: 'Green Salad Bar',
      tooltip: 'Here we are !',
      center: [markerLat, markerLng],
      layer: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    }
  }
}
</script>


<style>
.map-canvas {
  height: 350px;
  width: 100%;
}
</style>
