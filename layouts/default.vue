<script>
  import ActionList from "./default/components/action-list";

  export default {
    components: {
      ActionList,
    },
    data() {
      return {
        drawer: false,
      };
    },
  };
</script>

<template>
  <v-app
    class="l-default"
  >
    <v-navigation-drawer
      app
      color="primary"
      v-model="drawer"
    >
      <action-list />
    </v-navigation-drawer>

    <v-app-bar
      app
      dense
      color="primary"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title>
        Location faker
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<style lang="scss" scoped>
  .l-default {
  }
</style>
