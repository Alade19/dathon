<script setup>
import {reactive, ref } from "vue"
// import { } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import Swal from 'sweetalert2'
const timetable = [
    {title:"First period", start:"08:20", end:"06:30"},
    {title:"Second period", start:"08:20", end:"06:30"},
    {title:"Last period", start:"08:20", end:"07:30"},
     {title:"Lunch Break", start:"08:20", end:"06:30"},
    {title:"Short Break", start:"08:20", end:"06:30"},
    
 
]

const open = ref(false)

const state = reactive({
    data: timetable,
    btn1:true,//
    btn2:false,
    updateData:""
})

const openModal = ()=>{
    open.value = true
    state.btn1 = true
    state.btn2 = false
}
const editModal = (data)=>{
    open.value = true
    state.updateData = {...data}
    console.log(state.updateData)
    state.btn2 = true
    state.btn1 = false
}
//remove btn
const removeBranch = ()=>{
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
    <div class="container md:container mx-auto font  p-3 md:p-7">
        <h2 class="font-semibold text-sm uppercase mt-4 md:mt-0">CLASS SCHEDULE TIMING</h2>
        <div class="shadow-sm p-2 md:mt-5 sm:mt-5 lg:mt-5">
            <div></div>
            <div class="p-2 py-4 border border-t-2 border-b-2 border-l-0 border-r-0 border-[#003399] mt-5 md:flex justify-center gap-2">
                <div class="w-full">
                   
                </div>
                <div class="w-full">
                    <select name="" id="" class="block w-full border dark:bg-dark border-gray-400 outline-none dark:border-gray-600 focus:border-[#003399] transition-all rounded-md">
                        <option value="time 1">Select</option>
                        <option value="time 1">Delwathon Primary School</option>
                        <option value="time 1">Delwathon Secondary School</option>
                    </select>
                </div>
                <div class="w-full">
                   
                </div>
            </div>
        </div>
        <!--  -->
        <div class="shadow-sm  mt-10 p-2 md:p-4 mb-20">
            <div class="md:flex justify-between ">
                <div class="md:[font-size:12.5px] mt-4">CLASS SCHEDULE TIMING FOR <b>DEWALTHON NURSERY & PRIMARY SCHOOL</b></div>
                 <button  @click="openModal" class="text-white [font-size:13px] bg-yellow-400 p-2 rounded-md mt-2 md:mt-0 mb-3"> <i class="fa fa-plus-circle"></i> Add New Row</button>
            </div>
             <div class="border  border-t-2 border-[#003399] mt-2 md:mt-0 sm:mt-0"></div>
             <!-- tables start here -->
             <div class="relative overflow-x-auto sm:rounded-sm mt-6 md:mt-5">
                <table class="w-full text-sm text-left text-gray-500 ">
                    <thead class="text-xs text-gray-700 uppercase dark:text-white bg-gray-100  dark:bg-dark">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Start
                            </th>
                            <th scope="col" class="px-6 py-3">
                                End
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
                                {{ data.title }}
                            </td>
                            <td class="px-6 py-4">
                                {{ data.start }}
                            </td>
                            <td class="px-6 py-4">
                                {{ data.end }}
                            </td>
                            <td class="px-6 py-4">
                                <div class="space-x-2 flex">
                                    <button @click="editModal(data)" class="bg-[#00A8594D] text-ed-green hover:bg-ed-green hover:text-white transition p-2 rounded-lg">
                                        <i class="bx bx-edit"></i></button>
                                    <button  @click="removeBranch(data)" class="bg-red-300 hover:bg-red-600 hover:text-white transition p-2 rounded-lg text-red-700"><i class="bx bx-trash"></i></button>
                                </div>
                            </td>
                           
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- Timing Modal -->
        <TransitionRoot as="template" :show="open">
            <Dialog as="div" class="relative z-10" @close="open = false">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 overflow-y-auto">
                <form class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel class="relative transform overflow-hidden dark:bg-dark rounded-lg bg-white text-left shadow-xl transition-all  sm:my-8 w-full sm:w-full sm:max-w-xl">
                        <div class=" md:-p4 p-4">
                             <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">Add New Schedule</DialogTitle>
                            <div class="grid grid-col-1 md:grid-cols-1 mx-auto mt-2 md:p-3 p-2">
                                <div class="w-full">
                                    <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title*</label>
                                    <input type="text" :value="state.updateData.title" class="block dark:text-white dark:bg-dark w-full text-sm rounded-md outline-none border   border-gray-300 focus:ring-green-500 focus:border-green-700" placeholder="Title">
                                </div>
                                 <div class="w-full mt-3">
                                       <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start*</label>
                                    <input type="time" :value="state.updateData.start" class="block dark:text-white dark:bg-dark w-full text-sm outline-none rounded-md outline border  border-gray-300 focus:ring-green-500 focus:border-green-700" placeholder="Title">
                                </div>
                                <div class="w-full mt-3">
                                    <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End*</label>
                                    <input type="time" :value="state.updateData.end" class="block dark:text-white dark:bg-dark w-full text-sm outline-none rounded-md outline border  border-gray-300 focus:ring-green-500 focus:border-green-700" placeholder="Title">
                                </div>

                            </div>
                          
                        </div>
                     
                        <div class="bg-gray-50 dark:bg-dark px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 mb-4">
                            <button v-if="state.btn1" type="button" class="inline-flex w-full justify-center rounded-md bg-green-600 text-sm [font-size:12px] font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto p-2" @click="open = false"> 
                                Add New Row
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
    </div>
</template>