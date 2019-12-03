<template>
  <div>
    <router-view></router-view>
    <FooterGuide />
  </div>
</template>

<script>
import FooterGuide from "./views/FooterGuide";
export default {
  components: {
    FooterGuide
  }
};
</script>

<style>
</style>