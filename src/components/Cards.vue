<template>
   <div class=" flex w-full bg-background-home flex-row">
    <div class="flex w-full">
      <div class="w-full pr-12">
          <div class="">
            <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('/img/card-left.jpg')" title="Woman holding a mug">
            </div>
            <div class=" mb-2 bg-white rounded-b lg:rounded-b-none lg:rounded-r  flex flex-col justify-between leading-normal">
              <div class="flex w-full">
                <div class="w-2/5">
                  <img src="../assets/home2.svg" alt="logo">
                </div>
                <div class="w-full ml-8 mt-4">
                  <div class="flex mb-2">
                      <h1 class="text-color-text-card font-bold text-xl">{{hotelName}}</h1>
                      <div class="flex items-center ml-3.5">
                        <svg v-for="n in starRating" :key="n" aria-hidden="true" class="w-5 h-5 text-color-card-text" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      </div>
                  </div>
                  <div>
                    <div class="flex mb-14">
                      <img src="../assets/location.svg" alt="">
                      <h1 class="ml-2">{{city}},{{region}},{{country}}</h1>
                    </div>
                    <div class="flex items-center justify-end mr-14">
                      <div class="mr-7">
                        <button type="button" class="text-lg w-40 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Check Hotel</button>
                      </div>
                      <div>
                        <span class="text-color-text-card font-bold text-4xl">€40</span>
                        <span class="text-color-text-card text-base">/Total</span>
                      </div>
                    </div>
                  </div>
                  </div> 
                </div>
            </div>
          </div>
      </div>
    </div>
   </div>
</template>
<script>
export default {
    props:{
        city: String,
        region:String,
        country:String,
        hotelName:String,
        starRating:Number
    },
}
</script>

<style>
.width-default {
  width: 1100px;
}
</style>