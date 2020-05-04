<script>
  export default {
    name: "DeviceInfoCard",
    props: {
      device: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        refreshKey: 0,
      };
    },
    computed: {
      getHumanReadableLastDeclaredAt() {
        return this.device.lastDeclaredAt ? this.device.lastDeclaredAt.format("HH:mm:ss") : "-";
      },
    },
    methods: {
      computeHumanReadablePassedTimeSinceLastDeclaredAt() {
        const now = this.$moment();

        if (this.device.lastDeclaredAt) {
          const elapsedTime = this.$moment
            .duration(now.diff(this.device.lastDeclaredAt))
            .asSeconds();

          return `Il y a ${Math.ceil(elapsedTime)} seconde(s)`;
        }

        return "-";
      },
    },
    mounted() {
      this.interval = setInterval(() => {
        this.refreshKey = Math.random();
      }, 1000);
    },
    beforeDestroy() {
      clearInterval(this.interval);
    },
  };
</script>

<template src="./DeviceInfoCard.tpl" />
<style lang="scss" src="./DeviceInfoCard.scss" scoped></style>
