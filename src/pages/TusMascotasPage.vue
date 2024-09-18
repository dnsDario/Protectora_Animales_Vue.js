<template>
    <div class="divPage">
        <h1 class="tituloMascotasPage"> ¿Cuál será tu próximo compañero de viaje? <img class="mx-auto h-16 w-16" src="https://www.huellascallejeras.com/wp-content/uploads/2020/06/logoHuellas3.png" alt="Your Company" /></h1>
        <AnimalFilter class="selectFiltrado" @filter="filterAnimals" />
        <div class="animal-list">
            <AnimalCard v-for="animal in filteredAnimals" :key="animal.id" :animal="animal" />
        </div>
    </div>

</template>

<script>
import AnimalCard from '../components/AnimalCard.vue'
import AnimalFilter from '../components/AnimalFilter.vue'

export default {
    components: {
        AnimalCard,
        AnimalFilter
    },
    data() {
        return {
            animals: [
                { id: 1, name: 'Rex', type: 'perro', age: 2 },
                { id: 2, name: 'Miau', type: 'gato', age: 3 },
                { id: 2, name: 'Miau', type: 'gato', age: 3 },
                { id: 2, name: 'Miau', type: 'gato', age: 3 },
                // Agrega más animales según sea necesario
            ],
            filteredAnimals: []
        }
    },
    methods: {
        filterAnimals(type) {
            this.filteredAnimals = type ? this.animals.filter(animal => animal.type === type) : this.animals;
        }
    },
    created() {
        this.filteredAnimals = this.animals;
    }
}
</script>

<style scoped>
.divPage{
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    margin-top: 100px;
}
.tituloMascotasPage{
    display: flex;
    text-align: center;
    align-items: center;
    font-size: 34px;
    font-weight: 700;
}
.selectFiltrado{
    margin-top:50px;
}
.animal-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
}
</style>