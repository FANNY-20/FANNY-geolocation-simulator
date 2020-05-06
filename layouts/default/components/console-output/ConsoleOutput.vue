<script>
  import { mapState } from "vuex";

  export default {
    name: "ConsoleOutput",
    computed: {
      ...mapState("console", [
        "messages",
      ]),
    },
    watch: {
      messages() {
        this.$emit("new-message");
      },
    },
  };
</script>

<template src="./ConsoleOutput.tpl" />
<style lang="scss" src="./ConsoleOutput.scss" scoped></style>
