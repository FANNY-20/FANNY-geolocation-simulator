<div class="pc-help-card">
  <v-card>
    <v-card-title>
      Aide
    </v-card-title>

    <v-divider />

    <v-expansion-panels accordion>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <span>
            <v-icon left>mdi-map-marker-plus</v-icon>
            Ajouter un point
          </span>
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          Il suffit de double-cliquer n'importe où sur la carte. Le point sera
          ajouté à la coordonnée de l'emplacement cliqué.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
          <span>
            <v-icon left>mdi-map-marker-right</v-icon>
            Déplacer un point
          </span>
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          Vous pouvez glisser-déposer un point n'importe où sur la zone
          cartographique.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
          <span>
            <v-icon left>mdi-map-marker-question</v-icon>
            Obtenir des informations sur un point
          </span>
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          En cliquant sur un point, vous ouvrez une popup avec diverses
          informations le concernant:

          <v-list>
            <v-list-item>
              Son UUID
            </v-list-item>

            <v-list-item>
              Sa latitude
            </v-list-item>

            <v-list-item>
              Sa longitude
            </v-list-item>

            <v-list-item>
              Sa date de dernière mise à jour de position géographique auprès du
              serveur
            </v-list-item>
          </v-list>

          En cliquant à nouveau sur le point, vous fermez la popup.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</div>
