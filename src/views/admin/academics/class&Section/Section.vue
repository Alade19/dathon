<script setup>
import {reactive, ref} from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import Swal from 'sweetalert2'
const sections = [
    {branch:"Delwathon Foundation", section_name:"A", capacity:"50"},
    {branch:"Delwathon Foundation", section_name:"B", capacity:"60"},
    {branch:"Delwathon College", section_name:"Blue", capacity:"55"},
    {branch:"Delwathon College", section_name:"Green", capacity:"70"},
]
const state = reactive({
    data:sections
})
const open = ref(false)
const search = (searchText)=>{
    const tolower = searchText.toLowerCase();
    const searched = sections.filter(a => (
        a.branch.toLowerCase().includes(tolower) ||
        a.section_name.toLowerCase().includes(tolower) ||
        a.capacity.toLowerCase().includes(tolower)
    )) 
    state.data = searched;
    console.log(state.data)
}
const editHandler = (data)=>{
    console.log(data)
    open.value = true
}

const removeSection = ()=>{
  Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#00A859',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!',
  preConfirm:()=>{
    console.log("yes")
    // alert("yes")
  }
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
       title: 'Deleted!',
       text: 'Your file has been deleted.',
       icon: 'success',
       confirmButtonColor:'#00A859'
    })
    }
  })
}

</script>

<template>
    <div>
        <div class="shadow-md md:p-4">
          
            <div class="border border-t-1 w-full border-green-600 mt-3"></div>
            <!-- group Buttons start here -->
            <div class="flex-wrap  md:flex justify-between mt-2 md:p-0 p-2">
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
                <div class="mt-2 md:p-0 p-2">
                    <div class="rounded-md border-2 dark:border-[#A4A2A2] w-full md:w-[20rem] flex space-x-2 px-2 items-center mt-4">
                        <i class='bx bx-search text-sm mt-1'></i>
                        <input class="bg-transparent p-1 outline-none text-sm" placeholder="Search..."  @keyup="$event=>search($event.target.value)" />
                    </div>
                </div>
               
            </div>
            <!--  tables start here-->
            <div class="mt-5 md:mt-6 mb-4  relative overflow-x-auto">
                <table class="border-collapse border table-auto border-slate-400 w-full p-6 ">
                    <thead class="" style="font-size:13px">
                        <tr class="p-2">
                            <th class="border border-slate-300 md:p-2">S/N</th>
                            <th class="border border-slate-300 px-6 py-3 md:p-2">Branch Name</th>
                            <th class="border border-slate-300 px-6 py-4 md:p-2">Section Name</th>
                            <th class="border border-slate-300 px-6 py-4 md:p-2">Capacity</th>
                            <th class="border border-slate-300 px-6 py-4 md:p-2">Action</th>
                        </tr>
                    </thead>
                    <tbody style="font-size:12px">
                        <tr v-for="(data, i) of state.data" :key="i">
                            <td class="border border-slate-300 p-1 md:p-0"> <div class="text-center">{{ i+1 }}</div></td>
                            <td class="border border-slate-300 p-1 md:p-0"><div class="text-center">{{ data.branch }}</div></td>
                            <td class="border border-slate-300 p-1  md:p-1"><div class="text-center"> {{ data.section_name }}</div></td>
                            <td class="border border-slate-300 p-1  md:p-1"><div class="text-center">{{ data.capacity }}</div></td>
                            <td class="border border-slate-300 p-1  md:p-1">
                                <div class="text-center space-x-1 flex justify-center my-2">
                                    <button @click="editHandler(data)" class="bg-[#00A8594D] text-ed-green hover:bg-ed-green hover:text-white transition h-7 w-7 rounded-lg">
                                        <i class="bx bx-edit"></i></button>
                                    <button @click="removeSection(data)" class="bg-red-300 hover:bg-red-600 hover:text-white transition-all h-7 w-7 rounded-lg text-red-700"><i class="bx bx-trash"></i></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!--  -->
            </div>
            <!-- table ends here -->
        </div>

        <!-- side over here right hand side-->
       <TransitionRoot :show="open">
        <Dialog as="div" class="relative z-40 dark:bg-gray-700" @close="open= false">
          <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </TransitionChild>
          <!--  -->
          <div class="fixed inset-0 overflow-hidden ">
            <div class="absolute inset-0 overflow-hidden">
              <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
                  <DialogPanel class="pointer-events-auto relative w-screen max-w-md dark:bg-gray-700">
                    <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
                      <div class="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                        <button type="button" class="rounded-full h-6 w-6 bg-green-600 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" @click="open = false">
                          <span class="sr-only">Close panel</span>
                          <span class="fa fa-close "></span>
                          <!-- <XMarkIcon class="h-6 w-6" aria-hidden="true" /> -->
                        </button>
                      </div>
                    </TransitionChild>
                    <div class="font flex h-full flex-col overflow-y-scroll dark:bg-gray-700  bg-white py-6 shadow-xl">
                      <div class="px-4 sm:px-6">
                        <DialogTitle class="text-base font-medium leading-6 text-gray-900 dark:text-white">Edit Bue</DialogTitle>
                      </div>
                      <div class="relative mt-6 flex-1 px-4 sm:px-6">
                         <!-- The inputs is iniside sideoverInput -->
                        <div class="w-full">
                            <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Branch <span class="text-red-400 font font-bold text-1xl">*</span></label>
                            <select id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Select Branch</option>
                                <option value="US">Delwathon Foundation</option>
                                <option value="DE">Delwathon College</option>
                            </select>
                        </div>
                        <!--  -->
                        <div class="w-full mt-4">
                            <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Section Name <span class="text-red-400 font font-bold text-1xl">*</span></label>
                            <input type="" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Section name">
                        </div>
                        <!--  -->
                        <div class="w-full mt-4">
                            <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Student Capacity <span class="text-red-400 font font-bold text-1xl">*</span></label>
                            <input type="number" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                        <!--  -->
                        <div class="w-full mt-4">
                            <button id="small-input" class="block w-full md:w-36 p-3 text-white border border-gray-300 rounded-lg bg-[#00A859] sm:text-xs focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"><i class="fas fa-user-edit"></i> Update Details </button>
                        </div>
                      </div>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
      <!-- side over right hand side-->
    </div>
</template>