<script setup>

import {reactive} from 'vue'
import { useRouter } from 'vue-router';

const guardianList = [
    {name:"Toyibu Olaniyi Abidogun", occupation:"Teacher", mobile_no:"09131688369", email:"toyibu.abidogun@delwathon.com"},
    {name:"Alade Samuel", occupation:"Teacher", mobile_no:"09131688367", email:"alade.samuel@delwathon.com",},
   
]

const router = useRouter();
const state = reactive({
    data: guardianList
})
const search = (searchText)=>{
    const tolower = searchText.toLowerCase();
    const searched = guardianList.filter(a => (
        a.name.toLowerCase().includes(tolower) ||
        a.occupation.toLowerCase().includes(tolower) ||  
        a.mobile_no.toLowerCase().includes(tolower) ||
        a.email.toLowerCase().includes(tolower) 
    )) 
    state.data = searched; // data
    console.log(state.data) 
}
const routeToProfile = () =>{
    router.push('/admin/guardian/guardian-profile')
}

</script>

<template>
    <div class=" container-lg md:container p-3 md:p-5">
            <div class="flex  justify-between items-center">
                <h2 class="font-semibold text-sm uppercase mt-4 md:mt-0">Guardian List</h2>
                <div class="[font-size:12px]">Dashboard Guardians Table</div>
            </div>
         <div class="md:shadow-md shadow-sm md:p-2 py-2 px-3 mt-4">
            <!-- group Buttons start here -->
            <div class="flex-wrap  md:flex justify-between mt-2">
                <div class="inline-flex rounded-md shadow-sm mt-4" role="group">
                    <button style="font-size:12px" type="button" class="inline-flex text-white bg-[#00A859] items-center px-4 py-2 font-normal border-t border-b border-gray-200 hover:bg-green-400 hover:text-white focus:z-10 focus:ring-green-700 focus:text-green-700 rounded-l-md">
                     Copy
                    </button>
    
                    <button style="font-size:12px"  type="button" class="inline-flex text-white bg-[#00A859] items-center px-4 py-2 font-normal border-t border-b border-gray-200 hover:bg-green-400 hover:text-white focus:z-10 focus:ring-green-700 focus:text-green-700 ">
                    excel
                    </button>
                    <button style="font-size:12px"  type="button" class="inline-flex text-white bg-[#00A859] items-center px-4 py-2 font-normal border-t border-b border-gray-200 hover:bg-green-400 hover:text-white focus:z-10 focus:ring-green-700 focus:text-green-700 ">
                        Column Visibility
                    </button>
    
                    <button style="font-size:12px"  type="button" class="inline-flex text-white bg-[#00A859] items-center px-4 py-2 text-sm font-normal border-t border-b border-gray-200 hover:bg-green-400 hover:text-white focus:z-10 focus:ring-green-700 focus:text-green-700 rounded-r-md">
                        PDF
                    </button>
                </div>
                <!--  -->
                <div class="rounded-md border-2 dark:border-[#A4A2A2] w-full md:w-[20rem] flex space-x-2 px-2 items-center mt-4">
                    <i class='bx bx-search text-sm mt-1'></i>
                    <input @input="$event=>search($event.target.value)" class="bg-transparent p-1 outline-none text-sm" placeholder="Search..." />
                </div>
               
            </div>
            <!--  tables start here-->
            <div class="relative overflow-x-auto sm:rounded-sm mt-3 md:mt-5">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                S/N
                            </th>
                            <th scope="col" class="px-6 py-3">
                                name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                occupation
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Mobile No
                            </th>
                            <th scope="col" class="px-6 py-3">
                                email
                            </th>
                            <th scope="col" class="px-6 py-3">
                               Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" 
                        v-for="(data, i) of state.data" :key="i">
                             <td class="px-6 py-4">
                                {{ i+1}}
                            </td>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ data.name }}
                            </td>
                            <td class="px-6 py-4">
                                {{ data.occupation }}
                            </td>
                            <td class="px-6 py-4">
                                {{ data.mobile_no }}
                            </td>
                            <td class="px-6 py-4">
                                {{ data.email }}
                            </td>
                            <td class="px-6 py-4">
                                <div class=" space-x-1 flex">
								<button @click="routeToProfile"
									class="bg-[#00A8594D] text-ed-green hover:bg-ed-green hover:text-white transition rounded-lg h-7 w-7 flex items-center justify-center">
									<i class="bx bx-edit"></i></button>
								<button
									class="bg-[#FF00004D] text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition rounded-lg h-7 w-7 flex items-center justify-center">
									<i class="bx bx-trash"></i></button>
							</div>
                            </td>
                           
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- table ends here -->
        </div>
    </div>
</template>