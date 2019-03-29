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
// 5.311006, -3.992008   5.311000, -3.992000
const markerLat = 5.311000
const markerLng = -3.992000

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
