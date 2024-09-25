<!-- src/components/AnimalFilter.vue -->
<template>
  <div class="animal-filter">
    <label for="tipo">Filtrar por tipo:</label>
    <select v-model="tipo" @change="updateQuery">
      <option value="">Seleccione un tipo</option>
      <option value="perro">Perro</option>
      <option value="gato">Gato</option>
      
    </select>
    <label for="raza">Filtrar por raza:</label>
    <select v-model="raza" @change="updateQuery">
      <option value="">Seleccione una raza</option>
      <option :value="raza" v-for="raza in razas" :key="raza" >{{ raza }}</option>
    </select>

    <label for="sexo">Filtrar por sexo:</label>
    <select v-model="sexo" @change="updateQuery">
      <option value="">Seleccione un sexo</option>
      <option value="macho">Macho</option>
      <option value="hembra">Hembra</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tipo: '',
      raza: '',
      sexo: '',
      razasPerro: ['labrador', 'pastor aleman', 'bulldog frances', 'carea leones', 'doberman', 'jorsay', 'rottweiler'],
      razasGato: ['comun europeo', 'siames', 'maine coon', 'persa'],
      razas: []
      
    }
  },
  watch: {
    tipo(newValue) {
      console.log('Nuevo valor de tipo:', newValue)
      switch (newValue) {
        case 'perro':
          this.razas = this.razasPerro
          console.log('Razas de perro:', this.razas)
          break
        case 'gato':
          this.razas = this.razasGato
          console.log('Razas de gato:', this.razas)
          break
        default:
          this.razas = []
          console.log('Razas vacías:', this.razas)
      }
    }
  },
  methods: {
    updateQuery() {
      const query = {}
      if (this.tipo) query.tipo = this.tipo
      if (this.raza) query.raza = this.raza
      if (this.sexo) query.sexo = this.sexo
      this.$emit('filter', query)
    }
  }
}
</script>

<style scoped>
.animal-filter {
  margin-bottom: 16px;
}
</style>