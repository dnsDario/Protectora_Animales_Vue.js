
<template>
    <div class="animal-card">
      <h2>{{ animal.name }}</h2>
      <p>Tipo: {{ animal.type }}</p>
      <p>Edad: {{ animal.age }}</p>
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
  