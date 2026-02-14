<script setup>
import { reactive, onMounted, ref } from 'vue';
import {useRouter} from 'vue-router'
import { initFlowbite } from 'flowbite'
import Swal from 'sweetalert2'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

const select1 = ref('')
const select2 = ref('')
const select3 = ref('')
const showbody1 = ref(false)
const showModal = ref(false)

const state = reactive({
    modal:true,
    defaultModal:"defaultModal",
    data:""
})
const router = useRouter();

const routToStudentProfile = () =>{
    router.push('/admin/student/student-profile')
}
const showQuickProfile = (data) =>{
    console.log("me")
    showModal.value = true
    // state.modal = false     
    // state.defaultModal = "defaultModal"
    // state.data = data
    console.log(state.data)
}
onMounted(() => {
    initFlowbite();
})

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


<template>
    <div class="font container p-2 mx-auto md:container md:p-7">
        <h3 class="font-medium mt-4">
            <span class="bg-[#003399] py-2 px-3 rounded-l-md text-white"> <i class="bx bx-user"></i></span> 
            <span class="text-[#003399] ml-3">Students Table</span>  
        </h3>
        
        <div class="mt-4">
            <div class="shadow-md  p-5">
                <div class="flex justify-between">
                    <h4 class="text-gray-700 font-medium p-2">Filter Student</h4>
                    <button @click="displaybody" class="rounded-md px-6 md:text-xs bg-[#003399] font-normal text-white hover:bg-blue-600">Filter</button>
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

        <div v-if="showbody1" class="">
            <!-- group Buttons start here -->
            <div class="shadow-md p-2 py-2 px-3 mt-4">
                <div class="md:flex   justify-between mt-2">
                    <div class="inline-flex rounded-md shadow-sm mt-4 text-sm" role="group" >
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
                    <table class="border-collapse border table-auto border-slate-400 w-full p-6">
                        <thead class="" style="font-size:13px">
                            <tr class="p-2">
                                <th class="border border-slate-300 md:p-2 ">S/N</th>
                                <th class="border border-slate-300 py-4 px-6">Image</th>
                                <th class="border border-slate-300 py-4 px-6">Student Name</th>
                                
                                <th class="border border-slate-300 py-4 px-6">Email</th>
                                <th class="border border-slate-300 py-2 px-4">Mobile No</th>
                                <th class="border border-slate-300 py-4 px-6">Address</th>
                                <th class="border border-slate-300 py-4 px-6">Action</th>
                            </tr>
                        </thead>
                        <tbody class="" style="font-size:12px">
                            <tr>
                                <td class="border border-slate-300 p-3"> <div class="text-center">1</div></td>
                                <td class="border border-slate-300 p-3"> 
                                    <div class="text-center"> <img src="../../../../assets/image101.jfif" class="block mx-auto  h-14 w-14  rounded-full" alt="">  </div>
                                </td>
                                <td class="border border-slate-300 py-3 px-3"><div class="text-center">Toyibu Olaniyi Abidogun</div></td>
                            
                                <td class="border border-slate-300 py-3 px-3"><div class="text-center">toyibu.abidogun@delwathon.com</div></td>
                                <td class="border border-slate-300 py-3 px-3"><div class="text-center">09071841884</div></td>
                                <td class="border border-slate-300 py-3 px-3"><div class="text-center">Olubadan Avenue, Ibadan</div></td>
                                <td class="border border-slate-300 py-3 px-3">
                                    <div class="text-center space-x-1 flex justify-center items-center">
                                        <button @click="showQuickProfile({data:'joshua'})" class="bg-[#00A8594D] text-ed-green hover:bg-ed-green hover:text-white transition rounded-lg h-7 w-7"><i class='bx bxs-dashboard'></i></button>
                                        <button @click="routToStudentProfile" class="bg-[#00A8594D] text-ed-green hover:bg-ed-green hover:text-white transition rounded-lg h-7 w-7"><i class="bx bx-edit"></i></button>
                                        <button class="bg-[#FF00004D] text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition rounded-lg h-7 w-7"><i class="bx bx-trash"></i></button>
                                    </div>
                                </td>
                            </tr>

                            
                            <tr>
                                <td class="border border-slate-300 p-3"> <div class="text-center">2</div></td>
                                <td class="border border-slate-300 p-3"> 
                                    <div class="text-center"> <img src="../../../../assets/image102.jfif" class="block mx-auto h-14 w-14 rounded-full" alt="">  </div>
                                </td>
                                <td class="border border-slate-300 py-3 px-3"><div class="text-center">Mujeeb Shina Abdullateef</div></td>
                            
                                <td class="border border-slate-300 py-3 px-3"><div class="text-center">mujeeb.abdullateef@delwathon.com</div></td>
                                <td class="border border-slate-300 py-3 px-3"><div class="text-center">09071841884</div></td>
                                <td class="border border-slate-300 py-3 px-3"><div class="text-center">Olubadan Avenue, Ibadan</div></td>
                                <td class="border border-slate-300 py-3 px-3">
                                    <div class="text-center space-x-1 flex justify-center items-center">
                                        <button @click="showQuickProfile({data:'joshua'})" class="bg-[#00A8594D] text-ed-green hover:bg-ed-green hover:text-white transition rounded-lg h-7 w-7"><i class='bx bxs-dashboard'></i></button>
                                        <button @click="routToStudentProfile" class="bg-[#00A8594D] text-ed-green hover:bg-ed-green hover:text-white transition rounded-lg h-7 w-7"><i class="bx bx-edit"></i></button>
                                        <button class="bg-[#FF00004D] text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition rounded-lg h-7 w-7"><i class="bx bx-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="border border-slate-300 p-3"> <div class="text-center">3</div></td>
                                <td class="border border-slate-300 p-3"> 
                                    <div class="text-center"> <img src="../../../../assets/image103.jfif" class="block mx-auto h-14 w-14 rounded-full" alt="">  </div>
                                </td>
                                <td class="border border-slate-300 py-3 px-3"><div class="text-center">Samuel Adeyemi Alade</div></td>
                            
                                <td class="border border-slate-300 py-3 px-3"><div class="text-center">samuel.adeyemi@delwathon.com</div></td>
                                <td class="border border-slate-300 py-3 px-3"><div class="text-center">09071841884</div></td>
                                <td class="border border-slate-300 py-3 px-3"><div class="text-center">Olubadan Avenue, Ibadan</div></td>
                                <td class="border border-slate-300 py-3 px-3">
                                    <div class="text-center space-x-1 flex justify-center items-center">
                                        <button @click="showQuickProfile({data:'joshua'})" class="bg-[#00A8594D] text-ed-green hover:bg-ed-green hover:text-white transition rounded-lg h-7 w-7"><i class='bx bxs-dashboard'></i></button>
                                        <button @click="routToStudentProfile" class="bg-[#00A8594D] text-ed-green hover:bg-ed-green hover:text-white transition rounded-lg h-7 w-7"><i class="bx bx-edit"></i></button>
                                        <button class="bg-[#FF00004D] text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition rounded-lg h-7 w-7"><i class="bx bx-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                        
                        </tbody>
                    </table>
                    <!--  -->
                </div>
            </div>
        
             <!-- Timing Modal -->
            <TransitionRoot as="template" :show="showModal">
                <Dialog as="div" class="relative z-40" @close="showModal = false">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </TransitionChild>

                <div class="fixed inset-0 z-40 overflow-y-auto font">
                    <form class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                            <DialogPanel class="relative transform overflow-hidden dark:bg-dark dark:text-white rounded-lg bg-white text-left shadow-xl transition-all  sm:my-8 w-full sm:w-full sm:max-w-xl">
                            <div class="md:p-6 p-4">
                                 <DialogTitle as="h3" class="text-base font-medium leading-6 text-gray-900"> Profile Quick View</DialogTitle>
                                 <!-- <hr> -->
                                <div class="justify-start flex space-x-3 mt-2">
                                    <img style=" border-width:5px" src="../../../../assets/erin-lindford.jpeg" class=" h-36 block rounded-full boder border-[#00A859]" alt="">
                                    <div class="mt-6 py-2 px-3">
                                        <h3 class="uppercase text-[#00A859]">Olawale,</h3>
                                        <h4 class="capitalize"> modupeola</h4>
                                        <p class="text-sm">Student/Nursing 1 - Blue</p>

                                    </div>
                                </div>
                                <div class="p-4">
                                    <div class="flex  justify-between space-x-1 mt-2">
                                        <div class="text-sm font-medium">
                                           <strong>Registration Number:</strong>  <span>EERR6678</span>
                                        </div>
                                        <div class="text-sm font-medium">
                                           <strong>Department:</strong>  <span>EERR6678</span>
                                        </div>
                                    </div>
                                    <div class="flex  justify-between space-x-1 mt-2">
                                        <div class="text-sm font-medium">
                                           <strong>Admission Date:</strong>  <span>EERR6678</span>
                                        </div>
                                        <div class="text-sm font-medium">
                                           <strong>DateOFBirth:</strong>  <span>EERR6678</span>
                                        </div>
                                    </div>
                                    <!--  -->
                                    <div class="flex  justify-between  items-start space-x-1 mt-2">
                                        <div class="text-sm font-medium">
                                           <strong>Blood Group:</strong>  <span>A+</span>
                                        </div>
                                        <div class="text-sm font-medium">
                                           <strong>Genotype</strong>  <span>AA</span>
                                        </div>
                                    </div>
                                    <!--  -->
                                    <div class="font-medium text-sm mt-2">
                                        Email: olawale{{state.data.data}}@gmail.com
                                    </div>
                                    <div class="font-medium text-sm mt-2">
                                        Address: olawaleModupeola@gmail.com
                                    </div>
                                    <div class="font-medium text-sm mt-2">
                                        LGA: olawaleModupeola@gmail.com
                                    </div>
                                   
                                </div>
                              
                            </div>

                            <div class="bg-gray-50 dark:bg-dark px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 mb-4 gap-3">
                                <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" @click="showModal = false" ref="cancelButtonRef">Cancel</button>
                                <button @click="routToStudentProfile"  class="text-white bg-[#00A859] hover:bg-[#00A859] focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#00A859] dark:hover:bg-[rgb(64,180,126)] dark:focus:ring-blue-800"> <i class="fa fa-eye"></i> View Profile</button>
                            </div>
                            </DialogPanel>
                        </TransitionChild>
                    </form>
                </div>
                </Dialog>
            </TransitionRoot>
        </div>
          
    </div>
</template>


