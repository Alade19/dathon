<template>
    <div class="p-5">
        <h4 class="text-ed-blue dark:text-white font-semibold text-sm">Office Accounting</h4>
        <button @click="openmodal" class="hover:bg-ed-blue hover:text-white mt-6 border border-ed-blue text-ed-blue text-sm text-center px-3 py-2 rounded-sm dark:text-blue-500 dark:border-blue-500"><i class="fa-solid fa-plus mr-4"></i>Add Vouchers Head</button>

        <div class="w-full my-8 shadow-2xl dark:bg-gray-900 rounded-sm py-10">
            <h4 class="text-ed-blue px-6 dark:text-white font-semibold text-sm">Voucher Heads</h4>
            <hr class="mt-2 mb-8 border-[2px] border-ed-blue w-full">
            <div class="relative overflow-x-auto px-6">
                <table class="table-auto w-full p-6 ">
                    <thead class="" style="font-size:13px">
                        <tr class="p-2">
                            <th class="border-b border-slate-300 py-3 px-4">S/N</th>
                            <th class="border-b border-slate-300 px-[35px] py-3 md:px-4">Branch</th>
                            <th class="border-b border-slate-300 py-3 px-[35px] md:px-4">Name</th>
                            <th class="border-b border-slate-300 py-3 px-10 md:px-4">Type</th>
                            <th class="border-b border-slate-300 py-3 px-[35px] md:px-4">Action</th>
                        </tr>
                    </thead>
                    <tbody style="font-size:12px;">
                        <tr class="hover:bg-gray-100 dark:hover:bg-gray-700" v-for="dist in voucher" :key="dist.id">
                            <td class="border-b border-slate-300 px-2 py-2"> <div class="text-center">{{dist.id}}</div></td>
                            <td class="border-b border-slate-300 px-2 py-2"> <div class="text-center">{{dist.branch}}</div></td>
                            <td class="border-b border-slate-300 px-2 py-2"> <div class="text-center">{{dist.name}}</div></td>
                            <td class="border-b border-slate-300 px-2 py-2"> <div class="text-center">{{dist.type}}</div></td>
                            <td class="border-b border-slate-300 px-2 py-2"> <div class="text-center">
                                <button @click="updatevoucher(dist)"  class="bg-green-200 rounded-md px-2 py-2 mr-2 text-center text-xs text-green-700 transition duration-200 ease-out hover:ease-in hover:bg-green-900 hover:text-white"><i class="fa-solid fa-pen-to-square"></i></button>
                                <button @click="delete1"  class="bg-red-200 rounded-md px-2 py-2 text-center text-xs text-red-700 hover:bg-red-800 hover:text-white transition duration-200 ease-out hover:ease-in">
                                    <i class="fa-solid fa-trash-can"></i></button>
                            </div></td>
                        </tr>
                        <!--  -->

                        
                    </tbody>
                </table>
            </div>
        </div>

    </div>

    <!-- modal1 -->
    <TransitionRoot appear :show="isopen" as="template">
        <Dialog as="div" class="relative z-40">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="fixed inset-0 bg-gray-400 bg-opacity-25" />
          </TransitionChild>
    
          <div class="fixed inset-0 overflow-y-auto">
            <div
              class="flex min-h-full items-center justify-center p-4 text-center"
            >
              <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
              >
                <DialogPanel
                  class="w-full max-w-md transform overflow-hidden rounded-md dark:bg-dark bg-white px-0 py-4 text-left align-middle shadow-xl transition-all"
                >
                  <DialogTitle
                   class="flex text-gray-700 font-medium text-md px-4 justify-between mb-2" 
                  >
                    <h4 class="dark:text-gray-300">Add a New Voucher Head</h4>
                    <button @click="closemodal" class="text-2xl -mt-1"><i class="fa-solid fa-xmark"></i></button>
                  </DialogTitle>
                  <hr class="border-[1px] border-ed-blue">
                  <div class="px-4 mt-5 mb-5">
                    <div class="w-full mb-6">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Branch <span class="text-red-600 font font-extrabold text-1xl">*</span></label>    
                        <select id="small" v-model="input1" class="block w-full  px-2 py-2.5 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option value="">Select branch</option>
                            <option value="fo">Delwathon Foundation</option>
                            <option value="co">Delwathon College</option>
                        </select>
                    </div>
                    <div class="w-full mb-6">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Name <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <input id="small" v-model="input2" placeholder="Enter voucher head name" class="block w-full  px-2 py-3.5 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>    
                    </div>
                    <div class="w-full">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Type <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <select id="small" v-model="input3" class="block w-full  px-2 py-2.5 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option value="in">Income</option>
                            <option value="ex">Expense</option>
                        </select>
                    </div>
                  </div>
                  <hr class="border-[1px] border-ed-blue">
                  <div class="mt-3 flex place-content-end px-4 space-x-2">
                    <button @click="closemodal" class="rounded-md px-4 py-2 text-xs bg-gray-600 font-normal text-white hover:bg-gray-700">close</button>
                    <button @click="savemodal" class="rounded-md px-3 py-2 text-xs bg-[#003399] font-normal text-white hover:bg-blue-800"><i class="fa-solid fa-floppy-disk mr-2"></i>Save</button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>


      <!-- modal1 -->
    <TransitionRoot appear :show="isopen2" as="template">
        <Dialog as="div" class="relative z-40">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="fixed inset-0 bg-gray-400 bg-opacity-25" />
          </TransitionChild>
    
          <div class="fixed inset-0 overflow-y-auto">
            <div
              class="flex min-h-full items-center justify-center p-4 text-center"
            >
              <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
              >
                <DialogPanel
                  class="w-full max-w-md transform overflow-hidden rounded-md dark:bg-dark bg-white px-0 py-4 text-left align-middle shadow-xl transition-all"
                >
                  <DialogTitle
                   class="flex text-gray-700 font-medium text-md px-4 justify-between mb-2" 
                  >
                    <h4 class="dark:text-gray-300">Update Voucher Head</h4>
                    <button @click="closemodal" class="text-2xl -mt-1"><i class="fa-solid fa-xmark"></i></button>
                  </DialogTitle>
                  <hr class="border-[1px] border-ed-blue">
                  <div class="px-4 mt-5 mb-5">
                    <div class="w-full mb-6">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Branch <span class="text-red-600 font font-extrabold text-1xl">*</span></label>    
                        <select id="small" :value="updatevouch.branch" class="block w-full  px-2 py-2.5 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option value="">Select branch</option>
                            <option value="Delwathon Foundation">Delwathon Foundation</option>
                            <option value="Delwathon College">Delwathon College</option>
                        </select>
                    </div>
                    <div class="w-full mb-6">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Name <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <input id="small" :value="updatevouch.name" placeholder="Enter voucher head name" class="block w-full  px-2 py-3.5 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>    
                    </div>
                    <div class="w-full">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Type <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <select id="small" :value="updatevouch.type" class="block w-full  px-2 py-2.5 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option value="Income">Income</option>
                            <option value="Expense">Expense</option>
                        </select>
                    </div>
                  </div>
                  <hr class="border-[1px] border-ed-blue">
                  <div class="mt-3 flex place-content-end px-4 space-x-2">
                    <button @click="closemodal" class="rounded-md px-4 py-2 text-xs bg-gray-600 font-normal text-white hover:bg-gray-700">close</button>
                    <button @click="update" class="rounded-md px-3 py-2 text-xs bg-[#003399] font-normal text-white hover:bg-blue-800"><i class="fa-solid fa-floppy-disk mr-2"></i>Update</button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
</template>
<script setup>
import {Dialog, DialogPanel, TransitionChild, TransitionRoot} from '@headlessui/vue'
import { ref } from "vue"
import Swal from 'sweetalert2'
const isopen = ref(false)
const isopen2 = ref(false)
const input1 = ref('')
const input2 = ref('')
const input3 = ref('in')
const updatevouch = ref('')
const voucher = ref([
    {id:1, branch: "Delwathon Foundation", name: 'Alade Samuel', type: 'Income'},
    {id:2, branch: "Delwathon Foundation", name: 'Bayo Salami', type: 'Income'},
    {id:3, branch: "Delwathon College", name: 'Alade Paul', type: 'Expense'},
])


const openmodal = () =>{
    isopen.value = true
}
const closemodal = () =>{
    isopen.value = false
    isopen2.value = false
}
const update = () =>{
    // isopen.value = false
    isopen2.value = false
}
const savemodal = () =>{
    if(input1.value == '' || input2.value == ''){
        Swal.fire({
            position: 'top-end',
            html: '<span><i class="fa-solid fa-triangle-exclamation mr-3"></i> Please enter all fields</span>',
            showConfirmButton: false,
            timer: 3000,
            customClass: 'custom-sweetalert-widths11',
        })
    }else{
        isopen.value = false
    }
}
const delete1 = () =>{
    isopen.value = false
    Swal.fire({
        position: 'top-end',
        html: '<span><i class="fa-solid fa-triangle-exclamation mr-3"></i> Voucher head deleted sucessfully</span>',
        showConfirmButton: false,
        timer: 1500,
        customClass: 'custom-sweetalert-width1',
    })
}
const updatevoucher = (dist) =>{
    isopen2.value = true
    updatevouch.value = {...dist}
}
</script>