<script setup>
import { reactive } from "vue";

const role = [
    {role:'Developer', user:'1'},
    {role:'Teacher', user:'1'},
    {role:'School Owner', user:'1'},
    {role:'Head of School', user:'1'},
    {role:'Accountant', user:'1'},
    {role:'Guardian', user:'1'}
]
const state = reactive({
    data:role
})
</script>

<template>
    <div class="container md:container p-4">
        <div class="flex  justify-between items-center">
            <h2 class="font-medium text-sm uppercase mt-4 md:mt-0">ROLES & PERMISSIONS</h2>
            <div class="[font-size:12px] mt-4 md:mt-0"> <span class="font-bold">Dashboard</span> Role & Permition</div>
        </div>

        <div class="shadow-sm p-3 mt-4">
            <div class="rounded-md border-2 dark:border-[#A4A2A2] w-full md:w-[20rem] flex space-x-2 px-2 items-center mt-4">
                <i class='bx bx-search text-sm mt-1'></i>
                <input @input="$event=>search($event.target.value)" class="bg-transparent p-1 outline-none text-sm" placeholder="Search..." />
            </div> 
            <div class="relative overflow-x-auto mt-2">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                S/N
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Role
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Users
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Actions
                            </th>
                                               
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(data, i) in state.data" :key="i" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td class="px-6 py-4">{{i+1}}</td>
                            <td class="px-6 py-4">
                                {{data.role}}
                            </td>
                            <td class="px-6 py-4">
                                {{data.user}}
                            </td>
                            <td class="px-6 py-4">
                                <div class="space-x-2 flex">
                                    <button @click="editModal(data)" class="bg-[#00A8594D] text-ed-green hover:bg-ed-green hover:text-white transition h-7 w-7 rounded-lg">
                                        <i class="bx bx-edit"></i></button>
                                    <button  @click="removeBranch({data:'Joshua'})" class="bg-red-300 hover:bg-red-600 hover:text-white transition h-7 w-7 rounded-lg text-red-700"><i class="bx bx-trash"></i></button>
                                </div>
                            </td>
                                              
                        </tr>
                    </tbody>
                </table>
            </div> 
        </div>
    </div>
</template>