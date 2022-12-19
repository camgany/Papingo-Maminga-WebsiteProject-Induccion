import { createStore } from "vuex";

const removerAcentos = (string) => {
  const mapaAcentosHex = {
    a: /[\xE0-\xE6]/g,
    e: /[\xE8-\xEB]/g,
    i: /[\xEC-\xEF]/g,
    o: /[\xF2-\xF6]/g,
    u: /[\xF9-\xFC]/g,
    c: /\xE7/g,
  };
  for (let letra in mapaAcentosHex) {
    var expressaoRegular = mapaAcentosHex[letra];
    string = string.replace(expressaoRegular, letra);
  }
  return string;
};

export default createStore({
  state: {
    women: [
      {
        title: "Champagne Holiday Blouse",
        src: require("@/assets/img/women/item02.jpg"),
        price: 50,
        description:
          "Holiday Capsule Collection.",
        type: "Blouse",
        color: "Champagne",
        gender: "women",
        id: 1,
        code: "SKU: CHB",
      },
      {
        title: "CUtout Top Gray",
        src: require("@/assets/img/women/item04.jpg"),
        price: 40,
        description:
          "Orange and white striped top with a cutout detail on the back.",
        type: "Top",
        color: "Orange",
        gender: "women",
        id: 2,
        code: "SKU: POTPO",
      },
      {
        title: "EDM Tulle Blouse",
        src: require("@/assets/img/women/item06.jpg"),
        price: 65,
        description:
          "Tulle blouse with a cutout detail on the back.",
        type: "Blouse",
        color: "Black",
        gender: "women",
        id: 3,
        code: "SKU: EDMTB",
      },
      {
        title: "Elegant Dress Basura",
        src: require("@/assets/img/women/item07.jpg"),
        price: 93,
        description:
          "Elegant dress with a cutout detail on the back.",
        type: "Blouse",
        color: "Black",
        gender: "women",
        id: 4,
        code: "SKU: EDBA",
      },
      {
        title: "Greenery Skirt",
        src: require("@/assets/img/women/item08.jpg"),
        price: 64,
        description:
          "Elegant skirt with details on the bottom.",
        type: "Skirt",
        color: "Green",
        gender: "women",
        id: 5,
        code: "SKU: GREES",
      },
      {
        title: "Mini Top Rosa Teddy",
        src: require("@/assets/img/women/item09.jpg"),
        price: 26,
        description:
          "Top de peluche rosa.",
        type: "Top",
        color: "Pink",
        gender: "women",
        id: 6,
        code: "SKU: MINITRT",
      },
      {
        title: "Mini Top Tiros Menta",
        src: require("@/assets/img/women/item11.jpg"),
        price: 22,
        description:
          "Top with removable straps.",
        type: "Top",
        color: "Mint",
        gender: "women",
        id: 7,
        code: "SKU: MTTM",
      },
      {
        title: "Top sickening sock Pm black",
        src: require("@/assets/img/women/item12.jpg"),
        price: 40,
        description:
          "Black top made of socks.",
        type: "Top",
        color: "Black",
        gender: "women",
        id: 8,
        code: "SKU: TSSPB",
      },
      {
        title: "Ximzal Shirt Fucsia",
        src: require("@/assets/img/women/item13.jpg"),
        price: 55,
        description:
          "Camisa asimétrica Fucsia.",
        type: "Shirt",
        color: "Pink",
        gender: "women",
        id: 9,
        code: "SKU: XSF",
      },
      {
        title: "Tennis Skirt",
        src: require("@/assets/img/women/item14.jpg"),
        price: 50,
        description:
          "Falda con tablas en color blanco.",
        type: "Shirt",
        color: "White",
        gender: "women",
        id: 10,
        code: "SKU: TNS",
      },
      {
        title: "Lucky Tule Tshirt",
        src: require("@/assets/img/women/item15.jpg"),
        price: 36,
        description:
          "Tshirt de tul con estampa de símbolos de la buena suerte.",
        type: "TShirt",
        color: "Transparent",
        gender: "women",
        id: 11,
        code: "SKU: LTT",
      },
      {
        title: "Lucky Tule Tshirt",
        src: require("@/assets/img/women/item16.jpg"),
        price: 43,
        description:
          "Tshirt de tul negro con diseño.",
        type: "TShirt",
        color: "Black",
        gender: "women",
        id: 12,
        code: "SKU: thb",
      },
      {
        title: "Corsé Denim Mosquetón",
        src: require("@/assets/img/women/item17.jpg"),
        price: 69,
        description:
          "Corsé con detalle de mosquetón.",
        type: "Top",
        color: "Black",
        gender: "women",
        id: 13,
        code: "SKU: CORSEDM",
      },
      {
        title: "White Corsé 2021",
        src: require("@/assets/img/women/item18.jpg"),
        price: 50,
        description:
        "Corsé blanco con cierre.",
        type: "Top",
        color: "Black",
        gender: "women",
        id: 14,
        code: "SKU: WCR",
      },
      {
        title: "Top Upcycling Demin Bra",
        src: require("@/assets/img/women/item19.jpg"),
        price: 40,
        description:
        "Top trabajado con denim reciclado.",
        type: "Bra",
        color: "Blue Denim",
        gender: "women",
        id: 14,
        code: "SKU: TUDB",
      },
      {
        title: "Cyber Short Black",
        src: require("@/assets/img/women/item20.jpg"),
        price: 57,
        description:
        "Black Short",
        type: "Black",
        color: "Blue Denim",
        gender: "women",
        id: 15,
        code: "SKU: CSBLACK",
      },
    ],
    men: [
      {
        title: "Púas Shirt",
        src: require("@/assets/img/men/item21.jpg"),
        price: 72,
        description:
          "Camisa estampada con púas.",
        type: "Shirt",
        color: "Black",
        gender: "men",
        id: 19,
        code: "SKU: PUASS",
      },
      {
        title: "Bolivia Worldcup Tshirt",
        src: require("@/assets/img/men/item22.jpg"),
        price: 50,
        description:
          "Polera estampada World cup deportiva color plomo.",
        type: "Shirt",
        color: "Black",
        gender: "men",
        id: 20,
        code: "SKU: BWCTSH01",
      },
      {
        title: "Mocasines Tshirt",
        src: require("@/assets/img/men/item23.jpg"),
        price: 40,
        description:
          "Polera con estampa.",
        type: "Shirt",
        color: "White",
        gender: "men",
        id: 21,
        code: "SKU: MocaTshirt",
      },
      {
        title: "PM Cyber Tshirt",
        src: require("@/assets/img/men/item24.jpg"),
        price: 40,
        description:
          "Polera con eatampa PM.",
        type: "Shirt",
        color: "Cyan",
        gender: "men",
        id: 22,
        code: "SKU: PMCT",
      },
      {
        title: "Sweater Volcó Sur Negro",
        src: require("@/assets/img/men/item25.jpg"),
        price: 39,
        description:
          "Sweater negro con estampa.",
        type: "Sweater",
        color: "Black",
        gender: "men",
        id: 23,
        code: "SKU: SWEATERVSN",
      },
      {
        title: "Roar Shirt",
        src: require("@/assets/img/men/item26.jpg"),
        price: 69,
        description:
          "Camisa patchwork bixolor.",
        type: "Shirt",
        color: "Blue and beige",
        gender: "men",
        id: 24,
        code: "SKU: ROAR",
      },
      {
        title: "Mocasinero Tshirt",
        src: require("@/assets/img/men/item27.jpg"),
        price: 40,
        description:
          "Mocasinero Tshirt.",
        type: "Tshirt",
        color: "Black",
        gender: "men",
        id: 25,
        code: "SKU: MCSNRT",
      },
      {
        title: "Scz Tolerant Tshirt",
        src: require("@/assets/img/men/item28.jpg"),
        price: 40,
        description:
          "Tshirt Oversize.",
        type: "Tshirt",
        color: "White",
        gender: "men",
        id: 26,
        code: "SKU: SCZTT",
      },
      {
        title: "Tailoring Jogger Grey",
        src: require("@/assets/img/men/item29.jpg"),
        price: 58,
        description:
          "Tailoring Jogger Grey.",
        type: "Jogger",
        color: "Grey",
        gender: "men",
        id: 27,
        code: "SKU: TLRJG",
      },
      {
        title: "Elephant Pants Men Nude",
        src: require("@/assets/img/men/item30.jpg"),
        price: 57,
        description:
          "Pantalón de elefante para hombre color nude.",
        type: "Pants",
        color: "Nude",
        gender: "men",
        id: 28,
        code: "SKU: EPMN",
      },
      {
        title: "Chaleco puffer Cyber",
        src: require("@/assets/img/men/item31.jpg"),
        price: 65,
        description:
          "Chaleco acolchado con cierre.",
        type: "Vest",
        color: "Black",
        gender: "men",
        id: 29,
        code: "SKU: CHALECOPC",
      },
      {
        title: "Bolivia Socks",
        src: require("@/assets/img/men/item32.jpg"),
        price: 8,
        description:
          "Medias con diseño.",
        type: "Socks",
        color: "White",
        gender: "men",
        id: 30,
        code: "SKU: BLVS",
      },
      {
        title: "Anti Cambasic Club",
        src: require("@/assets/img/men/item33.jpg"),
        price: 40,
        description:
          "Polera con estampado de algodón.",
        type: "Tshirt",
        color: "Black",
        gender: "men",
        id: 31,
        code: "SKU: ACC",
      },
    ],
    jewerly:[
      {
        title: "Manilla Púa",
        src: require("@/assets/img/jewerly/jewerly1.jpg"),
        price: 38,
        description:
          "Collar púa de plata y cadena de acero.",
        type: "Bracelet",
        color: "Silver",
        gender: "jewerly",
        id: 32,
        code: "SKU: MNLLP",
      },
      {
        title: "Aro de Presión Púa",
        src: require("@/assets/img/jewerly/jewerly2.jpg"),
        price: 45,
        description:
          "Aro de plata.",
        type: "Earing",
        color: "Silver",
        gender: "jewerly",
        id: 33,
        code: "SKU: ADPP",
      },
      {
        title: "Collar Púa Bolivianita",
        src: require("@/assets/img/jewerly/jewerly4.jpg"),
        price: 125,
        description:
          "Collar púas de plata, piedra bolivianita y cadena de acero.",
        type: "Necklace",
        color: "Silver",
        gender: "jewerly",
        id: 34,
        code: "SKU: CPB",
      },
      {
        title: "Aro Púa",
        src: require("@/assets/img/jewerly/jewerly3.jpg"),
        price: 15,
        description:
          "Aro de plata.",
        type: "Earing",
        color: "Silver",
        gender: "jewerly",
        id: 35,
        code: "SKU: AP",
      },
      {
        title: "Anillo Púa",
        src: require("@/assets/img/jewerly/jewerly5.jpg"),
        price: 30,
        description:
          "Púa de plata y anillo de acero.",
        type: "Ring",
        color: "Silver",
        gender: "jewerly",
        id: 36,
        code: "SKU: ANP",
      },
    ],
    bags: [
      {
        title: "Bolso de mano",
        src: require("@/assets/img/bags/bag1.jpg"),
        price: 50,
        description: "Bolso bandolera mini acolchado tachas.",
        type: "Bags",
        color: "Black",
        gender: "bags",
        id: 37,
        code: "SKU: BDM",
      },
      {
        title: "Bolso de mano satinado",
        src: require("@/assets/img/bags/bag2.jpg"),
        price: 36,
        description: "Bolso satinado cadena.",
        type: "Bags",
        color: "Black",
        gender: "bags",
        id: 38,
        code: "SKU: BDMSA",
      },
      {
        title: "Bolso de mano strass",
        src: require("@/assets/img/bags/bag3.jpg"),
        price: 30,
        description: "Bolso asa strass.",
        type: "Bags",
        color: "Silver",
        gender: "bags",
        id: 39,
        code: "SKU: BDMS",
      },
      {
        title: "Bolso de mano acolchado",
        src: require("@/assets/img/bags/bag4.jpg"),
        price: 23,
        description: "Bolso de mano acolchado con asa de cadena.",
        type: "Bags",
        color: "White",
        gender: "bags",
        id: 40,
        code: "SKU: BDMA",
      },
    ],
    cart: [],
    product: {},
    searchWord: null,
    filteredProducts: null,
    tax: 5,
    shipping: 15,
  },
  getters: { //para que se puedan usar en otros componentes, se exportan
    allProducts: (state) => state.women.concat(state.men).concat(state.jewerly).concat(state.bags),
    getWomen: (state) => state.women,
    getMen: (state) => state.men,
    getJewerly: (state) => state.jewerly,
    getBags: (state) => state.bags,

    getCart: (state) => state.cart,
    cartItemCount: (state) => state.cart.length,

    getSearchWord: (state) => state.searchWord,

    getFilteredProduct: (state) => state.filteredProducts,

    getProductByIdWomen: (state) => (id) =>
      state.women.find((women) => women.id === parseInt(id)),

    getProductByIdMen: (state) => (id) =>
      state.men.find((men) => men.id === parseInt(id)),

    getProductByIdJewerly: (state) => (id) =>
      state.jewerly.find((jewerly) => jewerly.id === parseInt(id)),

    getProductByIdBags: (state) => (id) =>
      state.bags.find((bags) => bags.id === parseInt(id)),

    cartTotalPrice: (state) => {
      let total = 0;
      state.cart.forEach((item) => {
        total += item.quantityPrice;
      });
      return total.toFixed(2);
    },

    getTax: (state) => state.tax,
    getShipping: (state) => state.shipping,

    cartCheckoutPrice: (state) => {
      let total = 0;

      state.cart.forEach((item) => {
        total = item.quantityPrice + state.shipping;
        total = total + (total * state.tax) / 100;
      });
      return total.toFixed(2);
    },
  },
  mutations: {
    ADD_TO_CART: (state, { product, quantity, size, quantityPrice }) => {
      let productInCart = state.cart.find((item) => {
        return item.product.id === product.id;
      });
      if (productInCart) {
        productInCart.quantity += quantity;
        productInCart.quantityPrice += productInCart.product.price;
        productInCart.quantityPrice =
          Math.round(productInCart.quantityPrice * 100) / 100;
        return;
      }
      state.cart.push({ product, quantity, size, quantityPrice });
    },

    REMOVE_FROM_CART: (state, product) => {
      state.cart = state.cart.filter((item) => {
        return item.product.id !== product.id;
      });
    },

    GET_PRODUCT_DETAILS: (state, product) => {
      state.productDetails.push(product);
    },

    FILTERED_PRODUCTS(state, word) {
      if (!word || word === "{}") {
        state.searchWord = null;
        state.filteredProducts = null;
      } else {
        state.searchWord = word;
        word = removerAcentos(word.trim().toLowerCase());
        state.filteredProducts = state.women
          .concat(state.men)
          .filter((product) => {
            return (
              product.title.toLowerCase().includes(word) ||
              product.brand.toLowerCase().includes(word) ||
              product.color.toLowerCase().includes(word) ||
              product.type.toLowerCase().includes(word)
            );
          });
      }
    },

    ORDER_SUCCESSFUL(state) {
      state.cart = [];
    },
  },
  actions: {
    addProductToCart: (
      { commit },
      { product, quantity, size, quantityPrice }
    ) => {
      commit("ADD_TO_CART", { product, quantity, size, quantityPrice });
    },
    removeProductFromCart: ({ commit }, product) => {
      commit("REMOVE_FROM_CART", product);
    },
    filterProducts({ commit }, word) {
      commit("FILTERED_PRODUCTS", word);
    },
    orderSuccess({ commit }) {
      commit("ORDER_SUCCESSFUL");
    },
  },
  modules: {},
});
