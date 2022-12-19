<template>
  <div class="home">
    <div class="gradient" />
    
    <video autoplay loop muted plays-inline class="hero">
      <source src="@/assets/videos/papingo5.mp4" type="video/mp4" />
    </video>
  <div class = "initial">
    <div class = "buttons">
      <router-link to="/jewerly">
      <button class="home-button" >JOYERIA</button>
      </router-link>
      <router-link to="/bags">
      <button class="home-button" >CARTERAS</button>
    </router-link>
      </div>
    <router-link class="video" to="/jewerly">
    <video autoplay loop muted>
      <source src="@/assets/videos/papingo3.mp4" type="video/mp4" />
    </video>
  </router-link>
    <router-link class="video" to="/shop/men/20" >
    <video autoplay loop muted >
      <source src="@/assets/videos/papingo4.mp4" type="video/mp4" />
    </video>
  </router-link>
  <router-link class="video" to="/shop/men/31" >
    <video autoplay loop muted >
      <source src="@/assets/videos/papingo2.mp4" type="video/mp4" />
    </video>
  </router-link>
  </div>
  <div class="footer">
    <p class="footer-text">© 2021 Papingo. All rights reserved.</p>
  </div>
  </div>
  
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home {
  display: flex;
  width: 100%;
  height: 100%;
 
  text-align: center;
  background-position: top;
  position: relative;
}
.footer {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, transparent, black 100%);
  z-index: -1;
  text-align: center;
  align-items: center;
  justify-content: top;
  left: 0;
}
.footer-text {
  color: white;
  font-size: 1.2rem;
  font-family: "Edge", sans-serif;
  position: absolute;
  bottom: 0;
  margin-bottom: 1rem;
}
.home-button {
  display: block;
  transition: 0.5s;
  border: none;
  margin-top: 5rem;
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0.5em 2em;
  
  font-size: 1.2rem;
  font-family: "Edge", sans-serif;
  width: 13em;
  position: relative;
  cursor: pointer;
  border-radius: 0.4em;
}
.video {
  padding-top: auto;
}
.home-button:hover {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  border-radius: 0.9em;
}
.buttons {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-left: 10rem;
}
.nav-button {
  display: flex;
  align-self: center;
  text-align: center;
  margin: 1em;
  position: relative;
  height: 2.9em;
  padding: 0;
  text-decoration: none;
  flex-direction: column;
}
.initial {
  padding-top: 10rem;
  padding-bottom: 2.5rem;
}
.gradient {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.2) 100%
  );
}
.hero {
  position: fixed;
  bottom: 0;
  z-index: -5;
  min-width: 100%;
  min-height: 100%;
  animation: fade-in 1.3s forwards;
  justify-content: center;
  align-content: center;
  object-position: top;

}

@media (min-aspect-ration: 16/9) {
  .hero {
    width: 100%;
    height: auto;
  }
}
@media (max-aspect-ration: 16/9) {
  .hero {
    width: auto;
    height: 100%;
  }
}
@media only screen and (max-width: 200px) {
  .buttons {
    flex-direction: column;
    transform: translateY(50%);
  }
}
</style>
