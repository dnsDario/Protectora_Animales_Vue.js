<template>
  <header class="bg-white shadow">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">{{ title }}</h1> <!--prop desde la página-->
    </div>
  </header>
  <main>
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <slot></slot> <!--Con slot, aparecen los datos que introduzcas desde la página que llamas al componente-->
      </div>
    </div>
  </main>
</template>

<script setup>
/* se necesita defineProps para poder acceder a las props que se le han añadido al componente en la página */
const props = defineProps({
  title: String,
})
</script>