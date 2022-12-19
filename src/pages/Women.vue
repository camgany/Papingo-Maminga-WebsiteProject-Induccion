<template>
  <Shop :product="getWomen" :image="imageWomen" :category="category" />
</template>

<script>
import { mapGetters } from "vuex";
import Shop from "@/components/Shop.vue";

export default {
  components: { Shop },
  data() {
    return {
      imageWomen: "women/item12.jpg",
      category: "Women",
    };
  },
  computed: {
    ...mapGetters(["getWomen"]),
  },
};
</script>

<style></style>
