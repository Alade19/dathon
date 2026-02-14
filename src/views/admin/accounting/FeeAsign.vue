
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
            <h2 class="font-medium text-sm uppercase mt-4 md:mt-0">Student fee assignment</h2>
            <div class="[font-size:12px] mt-4 md:mt-0">Darshboard Assign</div>
        </div>
        <div class="shadow-md mt-3 p-4">
            <div class="p-2  py-4 border-2 border-l-0 border-r-0 border-[#003399] mt-5 md:flex justify-center gap-2">
                <div class="w-full">
                    <label for="" class="mb-2 text-[#4F4F4F] text-sm dark:text-inherit after:content-['*'] after:ml-0.5 after:text-red-500">
                        Session</label>
                    <select name="" class="app-input block w-full text-sm">
                        <option value="" select>Select branch..</option>
                    </select>
                </div>
                <div class="w-full">
                      <label for="" class="mb-2 text-[#4F4F4F] text-sm dark:text-inherit after:content-['*'] after:ml-0.5 after:text-red-500">
                        Terms</label>
                    <select name="" class="app-input block w-full text-sm">
                        <option value="" select>Select session...</option>
                    </select>
                </div>
                <div class="w-full">
                      <label for="" class="mb-2 text-[#4F4F4F] text-sm dark:text-inherit after:content-['*'] after:ml-0.5 after:text-red-500">
                        Branch</label>
                    <select name="" class="app-input block w-full text-sm">
                        <option value="" select>Select term...</option>
                    </select>
                </div>
                <div class="w-full">
                      <label for="" class="mb-2 text-[#4F4F4F] text-sm dark:text-inherit after:content-['*'] after:ml-0.5 after:text-red-500">
                        Class</label>
                    <select name="" class="app-input block w-full text-sm">
                        <option value="" select>Select term...</option>
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
                <div class="w-full">
                      <label for="" class="mb-2 text-[#4F4F4F] text-sm dark:text-inherit after:content-['*'] after:ml-0.5 after:text-red-500">
                        Group name</label>
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
            <div class="flex justify-between">
                <div></div>
                <button @click="createDocument" class="outline-none text-sm text-[#00A859] border border-[#00A859] p-2 hover:bg-[#00A859] hover:text-white rounded-sm">
                    <i class='bx bxs-file-doc'></i> New Pricing
                </button>
            </div>
            <div class="border-2 mt-2"></div>
            <div class="relative overflow-x-auto sm:rounded-sm mt-6 md:mt-5">
                <table class="w-full text-sm text-left text-gray-500 ">
                    <thead class="text-xs text-gray-700 uppercase dark:text-white bg-gray-100  dark:bg-dark">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                S/N
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Branch Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Session
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Group
                            </th>
                             <th scope="col" class="px-6 py-3">
                                Breakdown
                            </th>
                             <th scope="col" class="px-6 py-3">
                                Total
                            </th>
                            <th scope="col" class="px-6 py-3">
                               Actions
                            </th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        <tr :show="state.open" class="bg-white border-b dark:text-white dark:bg-dark dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" 
                        v-for="(data, i) of state.data" :key="i">
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                               
                            </td>
                            <td class="px-6 py-4">
                               
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                <div class="space-x-2 flex">
                                    <button @click="editModal(data)" class="bg-[#00A8594D] text-ed-green hover:bg-ed-green hover:text-white transition h-7 w-7 rounded-lg">
                                        <i class="bx bx-edit"></i></button>
                                    <button  @click="removeBranch({data:'Joshua'})" class="bg-red-300 hover:bg-red-600 hover:text-white transition h-7 w-7 rounded-lg text-red-700"><i class="bx bx-trash"></i></button>
                                </div>
                            </td>
                           
                        </tr>
                        <tr :show="state.open">
                            <td>Nothing is available</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div> -->
    </div>
</template>