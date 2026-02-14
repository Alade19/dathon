<script setup>
//   import { reactive } from 'vue'
//   import Multiselect from 'vue-multiselect'
// const options = [
//         { value: 'option1', text: 'Option 1' },
//         { value: 'option2', text: 'Option 2' },
//         { value: 'option3', text: 'Option 3' }
//     ]
// const state = reactive({})
import Swal from 'sweetalert2'
import { ref } from 'vue'

const select1 = ref('')
const select2 = ref('')
const select3 = ref('')
const showbody1 = ref(false)


const displaybody = () => {
    if(select1.value == '' || select2.value == '' || select3.value == ''){
        showbody1.value = false
        Swal.fire({
            position: 'top-end',
            html: '<span><i class="fa-solid fa-triangle-exclamation mr-3"></i> Please fill all input field</span>',
            showConfirmButton: false,
            timer: 3000,
            customClass: 'custom-sweetalert-widtht1',
        })
    }else{
        showbody1.value = true
    }
}
</script>
<style>


</style>
<template>
    <div class="font container mx-auto p-3 md:container md:p-7">
        <h3 class="font-medium mt-4">
            <span class="bg-[#003399] py-2 px-3 rounded-l-md text-white"> <i class="bx bx-user"></i></span> 
            <span class="text-[#003399] ml-3">Students Table</span>  
        </h3>
        
        <div class="mt-4">
            <div class="shadow-md  p-5">
                <div class="flex justify-between">
                    <h4 class="text-gray-700 font-medium p-2">Filter Student</h4>
                    <button @click="displaybody" class="rounded-md py-2 px-6 bg-[#003399] font-medium text-white">Filter</button>
                </div>
                <div class="p-2  py-4 border border-l-0 border-r-0 border-[#003399] mt-5 md:flex justify-center gap-2">
                     <div class="w-full mb-6 md:mb-0">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Branch <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <select id="small" v-model="select1" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" selected>Select Branch</option>
                        <option value="FO">Delwathon Foundation</option>
                        <option value="CO">Delwathon College</option>
                        </select>
                    </div>
                    <!--  -->
                    <div class="w-full mb-6 md:mb-0">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Class <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <select id="small" v-model="select2" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" selected>Select Class</option>
                        <option v-if="select1 == '' " disabled class="text-red-500 text-md font font-medium">No results found</option>
                        <option v-if="select1 == 'FO' " value="NU1">Nusery 1</option>
                        <option v-if="select1 == 'FO' " value="NU2">Nusery 2</option>
                        <option v-if="select1 == 'FO' " value="PR1">Primary 1</option>
                        <option v-if="select1 == 'CO' " value="jss1">Jss1</option>
                        <option v-if="select1 == 'CO' " value="jss2">Jss2</option>
                        </select>
                    </div>
                    <!--  -->
                    <div class="w-full mb-3 md:mb-0">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Section <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <select id="small" v-model="select3" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" selected>Select Section</option>
                        <option v-if="select2 == '' " disabled class="text-red-500 text-md font font-medium">No results found</option>
                        <option v-if="select2 == 'NU1' || select2 == 'NU2' || select2 == 'PR1' " value="SA">A</option>
                        <option v-if="select2 == 'PR1' " value="SB">B</option>
                        <option v-if="select2 == 'jss1' || select2 == 'jss2' " value="Sblue">Blue</option>
                        <option v-if="select2 == 'jss1' || select2 == 'jss2' " value="Sgreen">Green</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <!--  -->

        <div v-if="showbody1" class="shadow-md p-2 py-2 px-3 mt-4 ">
            <!-- group Buttons start here -->
            <div class="md:flex  justify-between mt-2" >
                <div class="inline-flex rounded-md shadow-sm mt-4" role="group" >
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
                    <input class="bg-transparent p-1 outline-none" placeholder="Search..." />
                </div>
               
            </div>
            <!--  -->
            <div class="mt-5 mb-4 relative overflow-x-auto">
                <table class="border-collapse border table-auto border-slate-400 w-full p-6 ">
                    <thead class="" style="font-size:13px">
                        <tr class="p-2">
                            <th class="border border-slate-300 py-2 px-4 md:p-2">S/N</th>
                            <th class="border border-slate-300 py-2 px-4">Image</th>
                            <th class="border border-slate-300 py-2 px-[50px] md:px-4">Student Name</th>
                            
                            <th class="border border-slate-300 py-2 px-4">Email</th>
                            <th class="border border-slate-300 py-2 px-4">Mobile No</th>
                            <th class="border border-slate-300 py-2 px-4">Address</th>
                            <th class="border border-slate-300 py-2 px-4">Status</th>
                            <th class="border border-slate-300 py-2 px-4">Action</th>
                        </tr>
                    </thead>
                    <tbody style="font-size:12px">
                        <tr>
                            <td class="border border-slate-300 md:p-3"> <div class="text-center">1</div></td>
                            <td class="border border-slate-300 p-3"> 
                                <div class="text-center"> <img src="../../../assets/erin-lindford.jpeg" class="block rounded-full mx-auto h-10" alt="">  </div>
                            </td>
                            <td class="border border-slate-300 md:p-2"><div class="text-center">Edurance Grand Adele</div></td>
                            
                            <td class="border border-slate-300 px-2 py-3"><div class="text-center p-2"> edurance.grand@gamil.com</div></td>
                            <td class="border border-slate-300 px-2 py-3"><div class="text-center">09071841884</div></td>
                            <td class="border border-slate-300 px-2 py-3"><div class="text-center">Ring Road, Ibadan</div></td>
                            <td class="border border-slate-300 px-2 py-3"><div class="text-center bg-red-600 text-white px-1 py-1 rounded-md">Suspended</div></td>
                            <td class="border border-slate-300 px-2 py-3">
                                <div class="text-center space-x-1 flex justify-center">
                                    <button class="bg-green-300 p-2 hover:bg-green-600 rounded-lg h-9 text-white"><i class="bx bx-edit"></i></button>
                                    <button class="bg-red-300 hover:bg-red-600 p-2 rounded-lg h-9 text-white"><i class="bx bx-trash"></i></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!--  -->
              
            </div>
        </div>
    </div>
    <!-- <div class="bg-black absolute w-full top-0 h-full opacity-5">dkmdkmkkaslmasmvasklkmkl</div>
    <div class="w-full bg-black absolute bottom-0 transition">sdovsdovjiosdjio</div> -->
   
    
</template>


