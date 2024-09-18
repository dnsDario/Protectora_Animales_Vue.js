<script>

</script>

<template>
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-48 w-48" src="https://www.huellascallejeras.com/wp-content/uploads/2020/06/logoHuellas3.png"
      alt="Your Company" />
    <h2 class="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Accede a tu cuenta
    </h2>
  </div>
  <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-4" action="#" method="POST">
      <div>
        <div class="mt-1">
          <input id="email" name="email" type="email" autocomplete="email" required=""
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Email" />
        </div>
      </div>
      <div>
        <div class="mt-1">
          <input id="password" name="password" type="password" autocomplete="current-password" required=""
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Contraseña" />
        </div>
        <div class="flex items-center justify-between">
          <div class="text-sm mt-2">
            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Olvidaste la contraseña?</a>
          </div>
          <div class="text-sm mt-2">
            <router-link :to="{ name: 'Register' }" class="font-semibold text-indigo-600 hover:text-indigo-500">No tienes
              cuenta? Regístrate
            </router-link>
          </div>
        </div>

      </div>
      <div>
        <button type="submit"
          class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Entrar</button>
      </div>
    </form>
    <div class="flex items-center justify-center">

    </div>
  </div>

</template>