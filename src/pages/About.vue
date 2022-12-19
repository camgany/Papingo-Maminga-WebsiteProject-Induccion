<template>
  <div class="aboutPage">
    <div class="gradient-section">
      <h1 class="title">¿Quienes somos?</h1>
      <p class="text">
        Papingo Maminga es una firma de diseño de autor creada en el año 2012 por Marco Gutiérrez y Daniel Ghetti en 
        la ciudad de Santa Cruz de la Sierra en la zona oriental de Bolivia.
Los diseños se caracterizan por poseer una fuerte carga conceptual, la principal fuente de inspiración es la 
vida cotidiana de los ciudadanos.
De línea vanguardista, Papingo Maminga se apega al deconstructivismo, a la morfología orgánica, a la cultura pop, al folklorismo kitsch de las ciudades latinoamericanas, a la nostalgia de los ochentas y noventas de la clase media, a la contraposición de colores y texturas, a la disonancia armónica, al eclecticismo, a la historia sea cual fuese la época, a inclusión y a la comunicación.
      </p>
    </div>
    <img class="about" src="@/assets/img/Nosotros.jpg" />
  </div>
</template>

<script>

</script>

<style scoped>
.gradient-section {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(transparent, rgb(0, 0, 0));
  z-index: -1;
  text-align: center;
  align-items: center;
  justify-content: top;
  overflow: hidden;
}
.gradient-section .title {
  position: absolute;
  align-self: center;
  text-align: center;
  letter-spacing: 0.3em;
  font-weight: 100;
  text-indent: 0.3em;
  font-size: 3rem;
  color: #fff;
  text-transform: uppercase;
  font-family: "Magisho", sans-serif;
  margin-top: 6em;
  text-shadow: 1px 1px 2px black;
}
.gradient-section .text {
  position: absolute;
  align-self: center;
  text-align: center;
  font-family: "Magisho", sans-serif;
  font-size: 1.3rem;
  font-weight: 100;
  letter-spacing: 0.1em;
  margin-top: 18em;
  padding: 0em 20em;
  text-shadow: 1px 1px 2px black;
  color: #fff;
}

.about {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: -5;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  z-index: -2;
  object-position: top;
  animation: fade-in 0.5s forwards;
  overflow: hidden;
}

@media only screen and (max-width: 600px) {
  .gradient-section .title {
    font-size: 2rem;
  }
  .gradient-section .text {
    font-size: 1rem;
    width: 40vh;
  }
}
</style>
