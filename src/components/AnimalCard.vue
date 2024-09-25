
<template>
    <div class="animal-card">
      <h2>{{ animal.nombre }}</h2>
      <p>Tipo: {{ animal.tipo }}</p>
      <p>Raza: {{ animal.raza }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      animal: Object
    }
  }
  </script>
  
  <style scoped>
  .animal-card {
    border: 1px solid #ccc;
    padding: 16px;
    margin: 8px;
  }
  </style>
  