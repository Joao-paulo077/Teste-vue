<template>
<div class="flex w-full">
   <div class="bg-background-home flex w-full flex-row">
    <div class="invisible xl:visible">
      <div class="bg-white mx-8 my-8">
        <h1 class="mb-2 pl-5 pt-5 font-bold text-gray-900 dark:text-white">Country</h1>
        <ul class="pl-2.5 pb-2.5 w-48 text-sm font-medium text-gray-900 bg-white rounded-lg  dark:text-white">
            <li class="flex-1 rounded-t-lg">
                <div class="flex items-center pl-3">
                    <input id="angular-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                    <label for="angular-checkbox" class="py-2 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Spain</label>
                </div>
            </li>
            <li class="w-full rounded-t-lg">
                <div class="flex items-center pl-3">
                    <input id="angular-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                    <label for="angular-checkbox" class="py-2 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Spain</label>
                </div>
            </li>
            <li class="w-full rounded-t-lg">
                <div class="flex items-center pl-3">
                    <input id="angular-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                    <label for="angular-checkbox" class="py-2 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Spain</label>
                </div>
            </li>
        </ul>
      </div>
    </div>
    <div class="w-4/5">
        <div class="w-1/3">
        <div>
          <h1 class="text-3xl font-semibold my-5 mb-1">Plaza Vilamoura</h1>
          <p class="mb-8">{{getList.total}} results</p>
        </div>
      </div>
        <Cards v-for="hotels in getList.data" :key="hotels" 
        :hotelName="hotels.hotelName" 
        :city="hotels.city.label"
        :region="hotels.region.label"
        :country="hotels.country.label"
        :starRating="parseInt(hotels.starRating)"

        />
    </div>
   </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Cards from './Cards.vue';
export default {
    components:{Cards},
    name: "Body",
    async created() {
        //this.fetchList([{name:'Medicina'}])
        await this.fetchList();
    },
    computed: {
        ...mapGetters("teste", ["getList"]),
    },
    methods: {
        ...mapActions("teste", ["fetchList"]),
        initialize() {
            this.hotels = [""];
        }
    }
}
</script>