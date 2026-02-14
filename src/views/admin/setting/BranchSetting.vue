<template>
    <div>
        <h4 class="text-ed-blue dark:text-white font-semibold text-sm">Branch Settings</h4>
        <p class="text-blue-900 dark:text-gray-300 font-light text-xs mt-1 mb-8">Fill all information below</p>

        <div class=" mt-8 ">
           
            <div class=" relative overflow-x-auto">
                <table class="border-collapse border table-auto border-slate-400 w-full p-6 ">
                    <thead class="" style="font-size:13px">
                        <tr class="p-2">
                        
                            <th class="border border-slate-300 py-3 px-4">S/N</th>
                            <th class="border border-slate-300 py-2 px-[60px] md:px-4">Branch Name</th>
                            <th class="border border-slate-300 py-2 px-[70px] md:px-4">Address</th>
                            <th class="border border-slate-300 py-2 px-8 md:px-4">Action</th>
                        </tr>
                    </thead>
                    <tbody style="font-size:12px;">
                        <tr class="hover:bg-gray-100 dark:hover:bg-gray-700" v-for="(bran, i) in branches" :key="i">
                            <td class="border border-slate-300 px-2 py-3"> <div class="text-center">{{i + 1}}</div></td>
                            <td class="border border-slate-300 px-2 py-3"> <div class="text-center">{{bran.branch}}</div></td>
                            <td class="border border-slate-300 px-2 py-3"> <div class="text-center">{{bran.address}}</div></td>
                            <td class="border border-slate-300 px-2 py-3"> <div class="text-center">
                                <router-link to="/admin/branchconfig/branch-config">
                                <button class="bg-blue-100 rounded-md px-2 py-1.5 text-blue-600 hover:text-white hover:bg-blue-600 transition delay-100 ease-in font-light text-xs "><i class='bx bx-cog mr-1'></i>Config</button>
                                </router-link>
                            </div></td>
                        </tr>
                        <!--  -->

                        
                    </tbody>
                </table>
                <!--  -->
                
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue"


const branches = ref([
    {branch: 'Delwathon Foundation' , address: '3, Osuntokun Avenue, Old-Bodija, Ibadan, Oyo State'},
    {branch: 'Delwathon College' , address: 'Blocak 10, Ajani Layout, GilGal, Bashorun, Ibadan, Oyo State'},
])
</script>
