<script setup>
import { reactive, ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

// export default {
    // setup(){
const state = reactive({
    data:[
        {branch:"Delwathon group", fee_name:"Schoo fee"}
    ],
    btn1:true,//
    btn2:false,
})
    const open = ref(false)

    const  removeBranch = (a) => {
        console.log(a,"jos")
    }
    const openModal = () =>{
        open.value = true
        console.log(open.value)
        state.btn1 = true
        state.btn2 = false
    }
    const editModal= (data) =>{
        open.value = true
        state.btn1 = false
        state.btn2 = true
    } 

</script>

<template>
    <div class="container md:container md:p-4">
         <div class="flex  justify-between items-center">
            <h2 class="font-medium text-sm uppercase mt-4 md:mt-0">FEE BREAKDOWN</h2>
            <div class="[font-size:12px] mt-4 md:mt-0">Fee Breakdown</div>
        </div>
        <!--  -->

        <div class="shadow-sm  mt-10 p-2 md:p-4 mb-20">
            <div class="md:flex justify-between ">
                <div class="md:[font-size:12.5px] mt-4">EMPLOYEE DESIGNATIONS</div>
                 <button  @click="openModal" class="text-white [font-size:13px] bg-blue-800 p-2 rounded-md mt-2 md:mt-0 mb-3"> <i class="fa fa-plus-circle"></i> Add New</button>
            </div>
             <div class="border  border-t-2 border-[#003399] mt-2 md:mt-0 sm:mt-0"></div>
            <div class="flex justify-between">
                <div></div>
                <div class="rounded-md border-2 dark:border-[#A4A2A2] w-full md:w-[20rem] flex space-x-2 px-2 py-1 items-center mt-4">
                    <i class='bx bx-search text-sm mt-1'></i>
                    <input @input="$event=>search($event.target.value)" class="bg-transparent p-1 outline-none text-sm" placeholder="Search..." />
                </div>  
            </div>
          
             <!-- tables start here -->
             <div class="relative overflow-x-auto sm:rounded-sm mt-6 md:mt-5">
                <table class="w-full text-sm text-left text-gray-500 ">
                    <thead class="text-xs text-gray-700 uppercase dark:text-white bg-gray-100  dark:bg-dark">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                S/N
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Branch
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Fee Name
                            </th>
                           <th scope="col" class="px-6 py-3">
                               Actions
                           </th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:text-white dark:bg-dark dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" 
                        v-for="(data, i) of state.data" :key="i">
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ i+1 }}
                            </td>
                            <td class="px-6 py-4">
                                {{ data.branch }}
                            </td>
                            <td class="px-6 py-4">
                                {{ data.fee_name }}
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
        <!-- MODAL  -->
        <TransitionRoot as="template" :show="open">
            <Dialog as="div" class="relative z-40" @close="open = false">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 overflow-y-auto">
                <form class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel class="relative transform overflow-hidden dark:bg-dark rounded-lg bg-white text-left shadow-xl transition-all  sm:my-8 w-full sm:w-full sm:max-w-xl">
                        <div class=" md:-p4 p-4">
                             <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">Add Designation</DialogTitle>
                            <div class="grid grid-col-1 md:grid-cols-1 mx-auto mt-2 md:p-3 p-2">
                               <div class="w-full">
                                    <label for="" class="mb-2 text-[#4F4F4F] dark:text-inherit after:content-['*'] after:ml-0.5 after:text-red-500">Branch</label>
                                    <select name="" class="app-input w-full" id="">
                                        <option value="" selected>Choose...</option>
                                        <option value="1">Delwathon Group</option>
                                    </select>
                               </div>
                               <div class="w-full mt-4">
                                    <label for="" class="mb-4 text-[#4F4F4F] dark:text-inherit after:content-['*'] after:ml-0.5 after:text-red-500">Fee name</label>
                                    <input type="text" class="app-input w-full mt-1" placeholder="Fee name">
                               </div>
                            </div>
                          
                        </div>
                     
                        <div class="bg-gray-50 dark:bg-dark px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 mb-4">
                            <button v-if="state.btn1" type="button" class="inline-flex w-full justify-center rounded-md bg-green-600 text-sm [font-size:12px] font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto py-2 px-5" @click="open = false"> 
                                Save
                            </button>
                            <button v-if="state.btn2" type="button" class="inline-flex w-full justify-center rounded-md bg-green-600 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto p-2" @click="open = false"> 
                                Update Row
                            </button>
                            <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" @click="open = false" ref="cancelButtonRef">Cancel</button>
                        </div>
                        </DialogPanel>
                    </TransitionChild>
                </form>
            </div>
            </Dialog>
        </TransitionRoot>
        <!-- MMODAL END HERE  -->
    </div>
</template>