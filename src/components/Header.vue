<template>
  <div>
      <div class="flex w-full bg-white-200 border-2 border-b-indigo-300" >
        <div class="mt-5 ml-32 mb-5">
          <img src="../assets/home.svg" alt="home-tui">
        </div>
      </div>
      <div class="flex w-full justify-center bg-white-200 border-2 border-b-indigo-300" >
        <div class="mt-5 w-1/3 justify-center mb-5">
          <form>   
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Pesquisar</label>
              <div class="relative">
                  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <input type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Find a hotel" required>
              </div>
          </form>
        </div>
      </div>
      <div>
        <List />
      </div>
  </div>
</template>

<script>
import List from './List.vue';


export default {
    components: { List }
}
      
</script>