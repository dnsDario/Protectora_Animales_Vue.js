<!-- src/pages/AnimalDetail.vue -->
<template>
    <div v-if="animal">
      <h1>{{ animal.name }}</h1>
      <p>Tipo: {{ animal.type }}</p>
      <p>Edad: {{ animal.age }}</p>
      <!-- Agrega más detalles según sea necesario -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        animal: null
      }
    },
    created() {
      const animalId = this.$route.params.id;
      // Aquí deberías obtener los datos del animal desde una API o un estado global
      this.animal = { id: animalId, name: 'Rex', type: 'perro', age: 2 }; // Ejemplo estático
    }
  }
  </script>
  