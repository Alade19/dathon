
<script setup>
import { onMounted, reactive } from "vue";

const arr = [] 
const state = reactive({
    data:arr,
    open :  true
})

onMounted(()=>{
    if(arr.length == 0) state.open = false
    else state.open = true
    console.log("joshua")
})
</script>

<template>
    <div class="container md:p-4 md:container p-3">
        <div class="flex  justify-between items-center">
            <h2 class="font-medium text-sm uppercase mt-4 md:mt-0">collect fee/ Generate invoice</h2>
            <div class="[font-size:12px] mt-4 md:mt-0">Darshboard Collect Payment</div>
        </div>
        <div class="shadow-md mt-3 p-4">
            <div class="p-2  py-4 border-2 border-l-0 border-r-0 border-[#003399] mt-5 md:flex justify-center gap-2">
                <div class="w-full">
                    <label for="" class="mb-2 text-[#4F4F4F] text-sm dark:text-inherit after:content-['*'] after:ml-0.5 after:text-red-500">
                        Branch</label>
                    <select name="" class="app-input block w-full text-sm">
                        <option value="" select>Select branch..</option>
                        <option value="1" >Delwathon Group</option>
                    </select>
                </div>
                <div class="w-full">
                      <label for="" class="mb-2 text-[#4F4F4F] text-sm dark:text-inherit after:content-['*'] after:ml-0.5 after:text-red-500">
                        Session</label>
                    <select name="" class="app-input block w-full text-sm">
                        <option value="" select>Select session...</option>
                         <option value="1" select>2022-2023</option>
                    </select>
                </div>
                <div class="w-full">
                      <label for="" class="mb-2 text-[#4F4F4F] text-sm dark:text-inherit after:content-['*'] after:ml-0.5 after:text-red-500">
                        Term</label>
                    <select name="" class="app-input block w-full text-sm">
                        <option value="" select>Select term...</option>
                    </select>
                </div>
                <div class="w-full">
                      <label for="" class="mb-2 text-[#4F4F4F] text-sm dark:text-inherit after:content-['*'] after:ml-0.5 after:text-red-500">
                        Class</label>
                    <select name="" class="app-input block w-full text-sm">
                        <option value="" select>Select term...</option>
                        <option value="1" select>primary 1</option>

                    </select>
                </div>
                <!--  -->
                <div class="w-full">
                      <label for="" class="mb-2 text-[#4F4F4F] text-sm dark:text-inherit after:content-['*'] after:ml-0.5 after:text-red-500">
                        Section</label>
                    <select name="" class="app-input block w-full text-sm">
                        <option value="" select>Select term...</option>
                    </select>
                </div>
                
            </div>
            <div class="flex justify-between">
                <div></div>
                <button class="bg-blue-800 py-2 px-4 text-white rounded-md mt-1">Filter</button>
            </div>
        </div>
        <!--  -->
        <!-- <div class="shadow-md md:mt-12 mt-6 sm:mt-10 p-2" >
        </div> -->
    </div>
</template>