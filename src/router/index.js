import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import About from "../pages/About.vue";
import Men from "../pages/Men.vue";
import Women from "../pages/Women.vue";
import Checkout from "../pages/Checkout.vue";
import ProductDetails from "../pages/ProductDetails.vue";
import Jewerly from "../pages/Jewerly.vue";
import Bags from "../pages/Bags.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/men",
    name: "Men",
    component: Men,
    props: true,
  },
  {
    path: "/jewerly",
    name: "Jewerly",
    component: Jewerly,
    props: true,
  },
  {
    path: "/bags",
    name: "Bags",
    component: Bags,
    props: true,
  },
  {
    path: "/women",
    name: "Women",
    component: Women,
    props: true,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
    props: true,
  },
  {
    path: "/shop/:gender/:id",
    name: "ProductDetails",
    component: ProductDetails,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: HomePage,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
