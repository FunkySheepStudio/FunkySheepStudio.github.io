<template>
  Distance : {{ Math.round(PathDistance) }}
  Temps total : {{ Math.round(PathDistance / 5) }}
  <div id='map'></div>
</template>  
<script>
module.exports = {
  components: {
  },
  data() {
    return {
      sensors,
      path: [],
      polyline: null
    }
  },
  mounted () {
    var map = new L.Map('map').fitWorld();
    var mb = L.tileLayer.mbTiles('./tiles/France1-12-SHOM.mbtiles', {
      minZoom: 0,
      maxZoom: 12
    }).addTo(map);

    mb.on('databaseloaded', (ev) => {
      let myLocation = L.marker([sensors.latitude, sensors.longitude]).addTo(map);
      this.path.push(myLocation.getLatLng())
      map.flyTo([sensors.latitude, sensors.longitude], 12);

      map.on('click', (e) => {
        let waypoint = L.marker(e.latlng).addTo(map);
        this.path.push(waypoint.getLatLng())

        this.polyline = new L.Polyline(this.path, {
            color: 'red',
            weight: 3,
            opacity: 0.5,
            smoothFactor: 1
        }).addTo(map)
      });

      console.info('MBTiles DB loaded', ev);
    });

    mb.on('databaseerror', function(ev) {
      console.info('MBTiles DB error', ev);
    });
  },
  methods: {
  },
  computed: {
    PathDistance()
    {
      if (this.path.length <= 1)
        return 0

      let distance = 0
      for (let index = 0; index < this.path.length - 1; index++) {
        const waypoint = this.path[index];
        const nextWaypoint = this.path[index + 1];
        distance += waypoint.distanceTo(nextWaypoint)
      }

      return distance / 1852
    }
  },
  watch: {
  }
}
</script>
<style>
  #map {
      width: 100vw;
      height: 100vh;
    }
</style>