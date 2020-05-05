<script>
  import DeviceInfoCard from "./components/device-info-card/DeviceInfoCard";
  import { mapState, mapActions } from "vuex";

  export default {
    components: {
      DeviceInfoCard,
    },
    data() {
      return {
        map: {
          center: [49.174313, -0.367712],
          zoom: 16,
          tileLayerUrl: "https://{s}.forte.tiles.quaidorsay.fr/fr/{z}/{x}/{y}.png",
        },
        popupOptions: {
          maxWidth: null,
          closeButton: false,
          autoClose: false,
          closeOnClick: false,
          className: "popup",
        },
      };
    },
    computed: {
      ...mapState("devices", {
        getDeviceList: "list",
      }),
      getIndicativeCircleRadius() {
        return parseInt(process.env.INDICATIVE_CIRCLE_RADIUS_METERS);
      },
    },
    methods: {
      ...mapActions("devices", [
        "spawnDevice",
        "updateDeviceCoords",
      ]),
      async initMap() {
        await this.$nextTick();

        this.$refs.map.mapObject.doubleClickZoom.disable();
      },
      onMapDoubleClick(e) {
        const { lat, lng } = e.latlng;

        this.spawnDevice({
          coords: {
            lat,
            lng,
          },
        });
      },
      onUpdateMarkerLatLng({ lat, lng }, device) {
        this.updateDeviceCoords({
          uuid: device.uuid,
          coords: {
            lat,
            lng,
          },
        });
      },
    },
    mounted() {
      this.initMap();
    },
  };
</script>

<template>
  <div class="p-index">
    <l-map
      ref="map"
      class="map"
      :center="map.center"
      :zoom="map.zoom"
      @dblclick="onMapDoubleClick"
    >
      <l-tile-layer :url="map.tileLayerUrl" />

      <l-feature-group
        v-for="device in getDeviceList"
        :key="device.uuid"
      >
        <l-circle
          :lat-lng="device.coords"
          :color="device.color"
          :fill-color="device.color"
          :fill-opacity="0.3"
          :radius="getIndicativeCircleRadius"
        />

        <l-marker
          :lat-lng="device.coords"
          draggable
          @update:lat-lng="onUpdateMarkerLatLng($event, device)"
        >
          <l-popup
            :key="device.coords.lat + '-' + device.coords.lng"
            :options="popupOptions"
          >
            <device-info-card :device="device" />
          </l-popup>
        </l-marker>
      </l-feature-group>
    </l-map>
  </div>
</template>

<style lang="scss" scoped>
  .p-index {
    height: 100%;

    .map {
      height: 100%;
      isolation: isolate;
    }
  }

  ::v-deep {
    .popup {
      .leaflet-popup-content-wrapper {
        background-color: rgba(#fff, 0);
        box-shadow: none;

        .leaflet-popup-content {
          margin: 0;
        }
      }
    }
  }
</style>
