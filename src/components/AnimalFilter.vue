<!-- src/components/AnimalFilter.vue -->
<template>
    <div class="animal-filter">
      <label for="type">Filtrar por tipo:</label>
      <select id="type" v-model="selectedType" @change="filterAnimals">
        <option value="">Todos</option>
        <option value="perro">Perro</option>
        <option value="gato">Gato</option>
        <!-- Agrega más opciones según sea necesario -->
      </select>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedType: ''
      }
    },
    methods: {
      filterAnimals() {
        this.$emit('filter', this.selectedType);
      }
    }
  }
  </script>
  
  <style scoped>
  .animal-filter {
    margin-bottom: 16px;
  }
  </style>
  