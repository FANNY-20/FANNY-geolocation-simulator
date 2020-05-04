import Vue from "vue";
import { Icon } from "leaflet";
import {
  LMap,
  LTileLayer,
  LMarker,
  LCircle,
  LFeatureGroup,
} from "vue2-leaflet";

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);
Vue.component("l-circle", LCircle);
Vue.component("l-feature-group", LFeatureGroup);
