<template>
    <div>
        <button @click="openmodal" class="hover:bg-ed-blue hover:text-white border border-ed-blue text-ed-blue text-sm text-center px-3 py-2 rounded-md dark:text-blue-500 dark:border-blue-500"><i class="fa-solid fa-plus mr-4"></i>Add New Session</button>

        <div class="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4">
            <div class="w-full bg-white shadow-xl py-3 dark:bg-dark">
                <p class="text-sm text-ed-blue pl-3 mb-2 dark:text-blue-500">SESSIONS</p>
                <hr class="border-[1px] border-ed-blue">
                <div class=" mt-5 mb-4 relative overflow-x-auto">
                    <table class=" table-auto w-full p-6 ">
                        <thead class="" style="font-size:13px">
                            <tr class="p-2 border-slate-400 border-collapse border-b">
                                <th class="py-2 px-4 text-center">S/N</th>
                                <th class="py-2 px-4 text-center">Session</th>
                                <th class="py-2 px-4 text-center">Status</th>
                                <th class="py-2 px-4 text-center">Action</th> 
                            </tr>
                        </thead>
                        <tbody  style="font-size:12px;">
    
                            <tr  class="hover:bg-gray-100 dark:hover:bg-gray-700 border-slate-400 border-collapse border-b">
                                <td class=" px-2 py-3" > <div class="text-center">1</div></td>
                                <td class=" px-2 py-3" > <div class="text-center">{{input2}}</div></td>
                                <td class=" px-2 py-3" > <div class="text-center">
                                    <button class="bg-green-100 py-1 px-3 text-green-800 rounded-sm hover:text-white hover:bg-green-700 transition delay-100 ease-in">Active</button>
                                </div></td>
                                <td class=" px-2 py-3" > <div class="text-center space-x-1">
                                    <button @click="openmodal1" class="bg-blue-100 text-center py-1 px-2 text-blue-800 rounded-md hover:text-white hover:bg-blue-900 transition delay-100 ease-in"><i class='bx bxs-edit' ></i></button>
                                    <button @click="delete1" class="bg-red-100 text-center py-1 px-2 text-red-800 rounded-md hover:text-white hover:bg-red-700 transition delay-100 ease-in"><i class='bx bx-trash'></i></button>
                                </div></td>
                                
                            </tr>

                            <tr  class="hover:bg-gray-100 dark:hover:bg-gray-700 border-slate-400 border-collapse border-b">
                                <td class=" px-2 py-3" > <div class="text-center">2</div></td>
                                <td class=" px-2 py-3" > <div class="text-center">{{input3}}</div></td>
                                <td class=" px-2 py-3" > <div class="text-center">
                                    <button class="bg-red-100 py-1 px-3 text-red-800 rounded-sm hover:text-white hover:bg-red-700 transition delay-150 ease-in">Inactive</button>
                                </div></td>
                                <td class=" px-2 py-3" > <div class="text-center space-x-1">
                                    <button @click="openmodal2" class="bg-blue-100 text-center py-1 px-2 text-blue-800 rounded-md hover:text-white hover:bg-blue-900 transition delay-100 ease-in"><i class='bx bxs-edit' ></i></button>
                                    <button @click="delete1" class="bg-red-100 text-center py-1 px-2 text-red-800 rounded-md hover:text-white hover:bg-red-700 transition delay-100 ease-in"><i class='bx bx-trash'></i></button>
                                </div></td>
                                
                            </tr>
                                
                            <!-- </tr> -->
                        </tbody>
                    </table>
                    
                    <!--  -->
                </div>
            </div>


            <div class="w-full bg-white shadow-xl py-3 dark:bg-dark">
                <p class="text-sm text-ed-blue pl-3 mb-2 dark:text-blue-500">EXAM TERMS</p>
                <hr class="border-[1px] border-ed-blue">

                <div class=" mt-5 mb-4 relative overflow-x-auto">
                    <table class=" table-auto w-full p-6 ">
                        <thead class="" style="font-size:13px">
                            <tr class="p-2 border-slate-400 border-collapse border-b">
                                <th class="py-2 px-4 text-center">S/N</th>
                                <th class="py-2 px-4 text-center">Session</th>
                                <th class="py-2 px-4 text-center">Status</th> 
                            </tr>
                        </thead>
                        <tbody  style="font-size:12px;">
    
                            <tr  class="hover:bg-gray-100 dark:hover:bg-gray-700 border-slate-400 border-collapse border-b">
                                <td class=" px-2 py-3" > <div class="text-center">1</div></td>
                                <td class=" px-2 py-3" > <div class="text-center">First Term</div></td>
                                <td class=" px-2 py-3" > <div class="text-center">
                                    <button class="bg-green-100 py-1 px-3 text-green-800 rounded-sm hover:text-white hover:bg-green-700 transition delay-150 ease-in">Active</button>
                                </div></td>
                                
                            </tr>

                            <tr  class="hover:bg-gray-100 dark:hover:bg-gray-700 border-slate-400 border-collapse border-b">
                                <td class=" px-2 py-3" > <div class="text-center">2</div></td>
                                <td class=" px-2 py-3" > <div class="text-center">Second Term</div></td>
                                <td class=" px-2 py-3" > <div class="text-center">
                                    <button class="bg-red-100 py-1 px-3 text-red-800 rounded-sm hover:text-white hover:bg-red-700 transition delay-150 ease-in">Inactive</button>
                                </div></td>
                                
                            </tr>

                            <tr  class="hover:bg-gray-100 dark:hover:bg-gray-700 border-slate-400 border-collapse border-b">
                                <td class=" px-2 py-3" > <div class="text-center">3</div></td>
                                <td class=" px-2 py-3" > <div class="text-center">Third Term</div></td>
                                <td class=" px-2 py-3" > <div class="text-center">
                                    <button class="bg-red-100 py-1 px-3 text-red-800 rounded-sm hover:text-white hover:bg-red-700 transition delay-150 ease-in">Inactive</button>
                                </div></td>
                                
                            </tr>
                                
                            <!-- </tr> -->
                        </tbody>
                    </table>
                    
                    <!--  -->
                </div>
            </div>
        </div>


        
    </div>

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
                  class="w-full max-w-md transform overflow-hidden rounded-md bg-white px-0 py-4 text-left align-middle shadow-xl transition-all"
                >
                  <DialogTitle
                   class="flex text-gray-700 font-medium text-md px-4 justify-between mb-2" 
                  >
                    <h4>Add a New Session</h4>
                    <button @click="closemodal" class="text-2xl -mt-1"><i class="fa-solid fa-xmark"></i></button>
                  </DialogTitle>
                  <hr class="border-[1px] border-ed-blue">
                  <div class="px-4 mt-5 mb-5">
                    <div class="w-full">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Session <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <input id="small" v-model="input1" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                           
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

    
</template>
<script setup>
import {Dialog, DialogPanel, TransitionChild, TransitionRoot} from '@headlessui/vue'
import { ref } from "vue"
import Swal from 'sweetalert2'

const isopen = ref(false)
const input1 = ref('')
const input3 = ref('2021-2022')
const input2 = ref('2022-2023')

const openmodal = () =>{
    isopen.value = true
}

const openmodal1 = () =>{
    input1.value = input2.value
    isopen.value = true
}

const openmodal2 = () =>{
    input1.value = input3.value
    isopen.value = true
}
const closemodal = () =>{
    isopen.value = false
}
const delete1 = () =>{
    isopen.value = false
    Swal.fire({
        position: 'top-end',
        html: '<span><i class="fa-solid fa-triangle-exclamation mr-3"></i> Session deleted sucessfully</span>',
        showConfirmButton: false,
        timer: 1500,
        customClass: 'custom-sweetalert-width1',
    })
}

const savemodal = () =>{
    if(input1.value == ''){
        Swal.fire({
            position: 'top-end',
            html: '<span><i class="fa-solid fa-triangle-exclamation mr-3"></i> Please enter session</span>',
            showConfirmButton: false,
            timer: 3000,
            customClass: 'custom-sweetalert-widths11',
        })
    }else{
        isopen.value = false
    }
}
</script>
<style>
.custom-sweetalert-widths11 {
  width: 320px !important;
  color: white !important;
  font-size: 14px !important;
  text-align: left;
  background: rgba(107, 9, 9, 0.914) !important;
  padding: 0 50px 10px 0 !important;
  margin-left: -10px !important;

}

</style>
