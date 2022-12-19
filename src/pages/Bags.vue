<template>
    <Shop :product="getBags" :image="imageBags" :category="category" />
  </template>
  
  <script>
  import { mapGetters } from "vuex";
  import Shop from "@/components/Shop.vue";
  
  export default {
    components: { Shop },
    data() {
      return {
        imageBags: "bags/bag1.jpg",
        category: "Bags",
      };
    },
    computed: {
      ...mapGetters(["getBags"]),
    },
  };
  </script>
  
  <style></style>
  