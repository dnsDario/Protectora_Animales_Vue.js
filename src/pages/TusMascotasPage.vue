<template>
    <div class="divPage">
        <h1 class="tituloMascotasPage"> ¿Cuál será tu próximo compañero de viaje? <img class="mx-auto h-16 w-16"
                src="https://www.huellascallejeras.com/wp-content/uploads/2020/06/logoHuellas3.png"
                alt="Your Company" /></h1>
        <AnimalFilter class="selectFiltrado" @filter="updateAnimals" />
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
                { id: 1, name: 'Rex', tipo: 'perro', edad: 2 },
                { id: 2, name: 'Miau', tipo: 'gato', edad: 3 },
                { id: 3, name: 'Miau', tipo: 'gato', edad: 3 },
                { id: 4, name: 'Miau', tipo: 'gato', edad: 3 },
                // Agrega más animales según sea necesario
            ],
            filteredAnimals: []
        }
    },
    mounted() {
        const query = {
            tipo: '',
            raza: '',
            sexo: ''
        }
        getAnimalsByQuery(query)
            .then(response => {
                this.animals = response.data
            })
            .catch(error => {
                console.error(error)
            })
    },
    methods: {
        updateAnimals(query) {
            getAnimalsByQuery(query)
                .then(response => {
                    this.animals = response.data
                })
                .catch(error => {
                    console.error(error)
                })
        }
    },
    created() {
        this.filteredAnimals = this.animals;
    }
}
</script>

<style scoped>
.divPage {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    margin-top: 100px;
}

.tituloMascotasPage {
    display: flex;
    text-align: center;
    align-items: center;
    font-size: 34px;
    font-weight: 700;
}

.selectFiltrado {
    margin-top: 50px;
}

.animal-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
}
</style>