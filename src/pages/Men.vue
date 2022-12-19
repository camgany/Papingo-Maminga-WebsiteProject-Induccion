<template>
  <Shop :product="getMen" :image="imageMen" :category="category" />
</template>

<script>
import { mapGetters } from "vuex";
import Shop from "@/components/Shop.vue";

export default {
  components: { Shop },
  data() {
    return {
      imageMen: "men/item22.jpg",
      category: "Men",
    };
  },
  computed: {
    ...mapGetters(["getMen"]),
  },
};
</script>

<style></style>
