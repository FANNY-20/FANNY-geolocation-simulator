<script>
  import DeviceInfoCard from "./components/device-info-card";
  import HelpCard from "./components/help-card";
  import { mapState, mapActions } from "vuex";

  export default {
    components: {
      DeviceInfoCard,
      HelpCard,
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
        isHelpDialogOpen: false,
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
        "removeAllDevices",
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
      onHelpButtonClick() {
        this.isHelpDialogOpen = true;
      },
      onRemoveAllButtonClick() {
        this.removeAllDevices();
      },
    },
    mounted() {
      this.initMap();
    },
  };
</script>

<template>
  <div class="p-index">
    <portal to="drawer-list-items">
      <v-list-item
        link
        @click="onHelpButtonClick"
      >
        <v-list-item-action>
          <v-icon>mdi-help</v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>
            Aide
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item
        link
        @click="onRemoveAllButtonClick"
      >
        <v-list-item-action>
          <v-icon>mdi-delete</v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>
            Supprimer tout
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </portal>

    <v-dialog
      v-model="isHelpDialogOpen"
      eager
      :max-width="600"
    >
      <help-card />
    </v-dialog>

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
