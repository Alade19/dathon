
<script setup>
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";

const showbody = ref(1)
const arr = [] 
const state = reactive({
    data:arr,
    open :  true
})
const router = useRouter()
const firstTerm = () =>{
    showbody.value = 1
}
const secondTerm = () =>{
    showbody.value = 2
}
const thirdTerm = () =>{
    showbody.value = 3
}
const createFine = () =>{
    router.push('/admin/accounting/setup-fine')
}
onMounted(()=>{
    if(arr.length == 0) state.open = false
    else state.open = true
    console.log("joshua")
})
</script>

<template>
    <div class="container md:p-4 md:container p-3">
        <div class="flex  justify-between items-center">
            <h2 class="font-medium text-sm uppercase mt-4 md:mt-0">Setup Fines for due fees</h2>
            <div class="[font-size:12px] mt-4 md:mt-0"> <span class="font-bold">Fee</span> Fine Setup</div>
        </div>
        <div class="shadow-md mt-3 p-4">
            <div class="flex justify-between">
                <div></div>
                <button @click="createFine" class="outline-none text-sm text-[#003399] dark:text-white border border-[#003399] p-2 hover:bg-[#003399] hover:text-white rounded-sm">
                    <i class='bx bxs-file-doc'></i> New Fine
                </button>
            </div>
            <div class="p-2  py-4 border-2 border-l-0 border-b-0 border-r-0 border-[#003399] mt-5">
                <div class="flex justify-between">
                    <div class="w-full hidden md:block"></div>
                    <div class="w-full">
                        <label for="" class="mb-2 text-[#4F4F4F] text-sm dark:text-inherit after:content-['*'] after:ml-0.5 after:text-red-500">
                        Session</label>
                        <select class="app-input w-full block [font-size:12px]">
                            <option value="" selected>Choose ...</option>
                            <option value="1">2022-2023</option>
                        </select>
                    </div>
                    <div class="w-full hidden md:block"></div>
                </div> 
                <div class="grid grid-cols-1 md:grid-cols-5 mt-5 gap-2">
                    <div class="w-full ">
                         <div @click="firstTerm" :class="showbody == 1 ? 'bg-ed-blue dark:bg-ed-blue text-white' : 'bg-white' " class="transition duration-600 ease-in w-full dark:bg-dark dark:text-white  text-gray-600 text-center py-2.5 rounded-md shadow-md cursor-pointer">
                            <p class="text-sm font-semibold ">First Term</p>
                        </div>
                        <div @click="secondTerm" :class="showbody == 2 ? 'bg-ed-blue dark:bg-ed-blue text-white' : 'bg-white' " class="transition duration-600 ease-in w-full text-gray-600 dark:bg-dark dark:text-white text-center py-2.5 mt-2 rounded-md shadow-md cursor-pointer">
                            <p class="text-sm font-semibold ">Second Term</p>
                        </div>
                        <!--  -->
                         <div @click="thirdTerm" :class="showbody == 3 ? 'bg-ed-blue dark:bg-ed-blue text-white' : 'bg-white' " class="transition duration-600 ease-in w-full text-gray-600 dark:bg-dark dark:text-white text-center py-2.5 mt-2 rounded-md shadow-md cursor-pointer">
                            <p class="text-sm font-semibold ">Third Term</p>
                        </div>
                    
                    </div>
                    
                    <div class=" border border-[#003399] rounded-md md:col-span-4">
                        <h2 class="[font-size:13px] mt-2 ml-3 uppercase">2021-2022 - Third TERM MARKS</h2>
                       
                            <div class="border-l-0 border-r-0 border-b-0 p-3 border-2 border-[#003399]  mt-2 mb-2">
                                <div class="flex justify-between">
                                    <div></div>
                                    <div class="rounded-md border-2 dark:border-[#A4A2A2] w-full md:w-[20rem] flex space-x-2 px-2 items-center mt-4">
                                        <i class='bx bx-search text-sm mt-1'></i>
                                        <input @input="$event=>search($event.target.value)" class="bg-transparent p-1 outline-none text-sm" placeholder="Search..." />
                                    </div>  
                                </div>
                                <div class="relative overflow-x-auto mt-2">
                                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-6 py-3">
                                                    S/N
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Branch
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Group Name
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Fee Name
                                                </th>
                                                 <th scope="col" class="px-6 py-3">
                                                   	Fine type
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                   	Amount
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                   	Interval
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <td colspan="7" class="text-center">
                                                    No data available in the table
                                                </td>
                                                <!-- <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    English Language
                                                </th>
                                                <td class="px-6 py-4">11</td>
                                                <td class="px-6 py-4">67</td>
                                                <td class="px-6 py-4">72</td>
                                                <td class="px-6 py-4">-</td> -->
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>        
                    </div>
                </div>
            </div>
        </div>
        <!--  -->
        <!-- <div class="shadow-md md:mt-12 mt-6 sm:mt-10 p-2" >
        </div> -->
    </div>
</template>