<script setup>
import { ref } from "vue"
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
    const data =[
        {title:"profile picture", doc_type:"Image", filename:"dewathon234", file_ext:"jpg", date:"09 April 2023"},
        {title:"profile picture", doc_type:"Image", filename:"dewathon234", file_ext:"jpg", date:"09 April 2023"},
        {title:"profile picture", doc_type:"Image", filename:"dewathon234", file_ext:"jpg", date:"09 April 2023"},
        {title:"profile picture", doc_type:"Image", filename:"dewathon234", file_ext:"jpg", date:"09 April 2023"}
    ]

    const showModal = ref(false)
    const createDocument = () =>{
         showModal.value = true
    }
 </script>

<template>
        <div class="shadow-sm container-lg md:container md:p-2 md:py-2 md:px-3 mt-4">
            <div class=" text-sm text-green-600 font-medium"> 
                Documents
            </div>
             <div class="border border-t-1 w-full border-green-600"></div>
             <!-- group Buttons start here -->
             <div class="flex-wrap md:flex  justify-between mt-2">
                 <div class="inline-flex rounded-md shadow-sm mt-4" role="group">
                   
                 </div>
                 <!--  -->
                 <button @click="createDocument" class="outline-none text-sm text-[#00A859] border border-[#00A859] p-2 hover:bg-[#00A859] hover:text-white rounded-sm">
                    <i class='bx bxs-file-doc'></i> New document
                </button>
             </div>
             <!--table content start here  -->
             <div class="mt-5 mb-4 relative overflow-x-auto">
                 <table class="border-collapse   border table-auto border-slate-400 w-full p-6 ">
                     <thead class="" style="font-size:13px">
                         <tr class="p-2">
                             <th class="border px-6 py-4 border-slate-300 md:p-2">S/N</th>
                             <th class="border px-6 py-4 border-slate-300">Title</th>
                             <th class="border  px-6 py-4 border-slate-300">Doc Type</th>
                             <th class="border px-6 py-4 border-slate-300">Filename</th>
                             <th class="border px-6 py-4 border-slate-300">File Extention</th>
                             <th class="border px-6 py-4 border-slate-300">Upload date</th>
                             <th class="border px-6 py-4 border-slate-300">Action</th>
                         </tr>
                     </thead>
                     <tbody style="font-size:12px">
                         <tr v-for="(list, i) in data" :key="i">
                             <td class="border border-slate-300 p-3"> <div class="text-center">{{ i+1 }}</div></td>
                             <td class="border border-slate-300 p-3"><div class="text-center">{{ list.title }}</div></td>
                             <td class="border border-slate-300 p-3"><div class="text-center"> {{ list.doc_type }}</div></td>
                             <td class="border border-slate-300 p-2"><div class="text-center">{{ list.filename }}</div></td>
                             <td class="border border-slate-300 p-3"><div class="text-center">{{ list.file_ext }}</div></td>
                             <td class="border border-slate-300 p-3"><div class="text-center">{{ list.date }}</div></td>

                             <td class="border border-slate-300 ...">
                                 <div class="text-center space-x-1 flex justify-center">
                                     <button class="bg-[#00A8594D]  text-ed-green hover:bg-ed-green hover:text-white transition h-7 w-7  rounded-lg"><i class="bx bx-edit"></i></button>
                                     <button class="bg-red-200 rounded-lg h-7 w-7 text-red-700 hover:bg-red-700 hover:text-white"><i class="bx bx-trash"></i></button>
                                 </div>
                             </td>
                         </tr>
                        <!--  -->
                     </tbody>
                 </table>
                 <!--  -->
            </div>
            <!--  -->
            <TransitionRoot as="template" :show="showModal">
                <Dialog as="div" class="relative z-40" @close="showModal = false">
                    <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </TransitionChild>
                    <div class="fixed inset-0 z-40 overflow-y-auto font">
                        <form class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                                <DialogPanel class="relative transform overflow-hidden dark:bg-dark rounded-lg bg-white text-left shadow-xl transition-all  sm:my-8 w-full sm:w-full sm:max-w-xl">
                                <div class="md:p-6 p-4">
                                    <DialogTitle as="h3" class="text-base font-medium leading-6 text-gray-900"> Preview</DialogTitle>
                                    <h4>Loading ......</h4>
                                </div>

                                <div class="bg-gray-50 dark:bg-dark px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 mb-4 gap-3">
                                    <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" @click="showModal = false" ref="cancelButtonRef">Cancel</button>
                                </div>
                                </DialogPanel>
                            </TransitionChild>
                        </form>
                    </div>
                </Dialog>
            </TransitionRoot>
        </div>
 </template>
 