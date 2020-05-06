<div class="lc-console-output">
  <v-list dense>
    <template v-for="message in messages">
      <v-list-item :key="'item' + message.id">
        <v-list-item-icon>
          <v-icon :color="message.color">mdi-map-marker</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            {{ message.value }}
          </v-list-item-title>

          <v-list-item-subtitle>
            {{ message.date.format("HH:mm:ss") }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider :key="'divider' + message.id" />
    </template>
  </v-list>
</div>
