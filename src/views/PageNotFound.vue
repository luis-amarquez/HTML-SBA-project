<template>
  <div class="flex w-full justify-center pt-5">
    <div
      class="flex flex-col text-gray-700 lg:flex-row lg:space-x-16 lg:space-x-reverse"
    >
      <div class="order-1 max-w-md px-2 text-sm md:text-base lg:px-0">
        <header class="mb-6">
          <h2
            class="select-none text-4xl font-bold leading-none text-gray-400 lg:text-6xl"
          >
            404.
          </h2>
          <h3 class="text-xl font-light leading-normal md:text-3xl lg:text-3xl">
            Sorry, we couldn't find this page.
          </h3>
        </header>
        <RouterLink class="btn btn-primary" to="/">Back Home</RouterLink>
      </div>
    </div>
  </div>
</template>
