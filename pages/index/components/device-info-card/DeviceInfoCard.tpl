<div class="pc-device-popup-info">
  <v-card :color="device.color">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>UUID</v-list-item-title>
        <v-list-item-subtitle>
          {{device.uuid}}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Latitude</v-list-item-title>
        <v-list-item-subtitle>
          {{ device.coords.lat }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Longitude</v-list-item-title>
        <v-list-item-subtitle>
          {{ device.coords.lng }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</div>
