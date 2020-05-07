<script>
  import ActionList from "./default/components/action-list";
  import ConsoleOutput from "./default/components/console-output";
  import { mapActions } from "vuex";

  export default {
    components: {
      ActionList,
      ConsoleOutput,
    },
    data() {
      return {
        isActionDrawerOpen: false,
        isConsoleDrawerOpen: false,
      };
    },
    methods: {
      ...mapActions("console", [
        "clearMessages",
      ]),
      onConsoleOutputNewMessage() {
        const container = this.$refs.consoleDrawer.$el.querySelector(".v-navigation-drawer__content");

        this.$vuetify.goTo(container.scrollHeight, {
          container,
        });
      },
      onClearConsoleButtonClick() {
        this.clearMessages();
      },
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
      v-model="isActionDrawerOpen"
    >
      <template v-slot:prepend>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Menu</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider />

      <action-list />
    </v-navigation-drawer>

    <v-navigation-drawer
      ref="consoleDrawer"
      app
      right
      v-model="isConsoleDrawerOpen"
      width="25vw"
    >
      <template v-slot:prepend>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Console</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn
              icon
              @click="onClearConsoleButtonClick"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </template>

      <v-divider />

      <console-output @new-message="onConsoleOutputNewMessage" />
    </v-navigation-drawer>

    <v-app-bar
      app
      dense
      color="primary"
    >
      <v-app-bar-nav-icon @click="isActionDrawerOpen = !isActionDrawerOpen" />

      <v-toolbar-title>
        Location faker
      </v-toolbar-title>

      <v-spacer />

      <v-btn
        icon
        @click="isConsoleDrawerOpen = !isConsoleDrawerOpen"
      >
        <v-icon>mdi-console</v-icon>
      </v-btn>
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
