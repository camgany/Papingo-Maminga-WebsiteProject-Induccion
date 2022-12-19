<template>
    <Shop :product="getJewerly" :image="imageJewerly" :category="category" />
  </template>
  
  <script>
  import { mapGetters } from "vuex";
  import Shop from "@/components/Shop.vue";
  
  export default {
    components: { Shop },
    data() {
      return {
        imageJewerly: "jewerly/jewerly1.jpg",
        category: "Jewerly",
      };
    },
    computed: {
      ...mapGetters(["getJewerly"]),
    },
  };
  </script>
  
  <style></style>
  