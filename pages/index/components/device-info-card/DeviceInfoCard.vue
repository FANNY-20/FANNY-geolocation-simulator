<script>
  export default {
    name: "DeviceInfoCard",
    props: {
      device: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<template src="./DeviceInfoCard.tpl" />
<style lang="scss" src="./DeviceInfoCard.scss" scoped></style>
