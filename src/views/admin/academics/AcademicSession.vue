
<script setup>
    import {ref, onBeforeMount, reactive} from 'vue'
    import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
    const open = ref(false)
    const state=reactive({
        data:[
            {session:"Dathon Limited", status:"del@gmail.com"},
            {session:"Dathon Limited", status:"del@gmail.com"},
            {session:"Dathon Limited", status:"del@gmail.com"}
        ]
    })
    const branchModal= () =>{
        open.value = true
    }   
    onBeforeMount(()=>{
        console.log("am here before this route")
        console.log(state)
    })
</script>

<template>
    <div class="container md:container mx-auto p-3 md:p-7">
        <h2 class="font-semibold text-sm uppercase">Academic Session</h2>
        <div class="shadow-md p-2 py-2 px-3 mt-4 relative overflow-x-auto">
            <div class=""> 
                <button  @click="branchModal" style="font-size:13px" class="px-3 border border-[#00A859] hover:bg-[#00A859] hover:text-white py-2 rounded-sm text-green-700"> <i class="bx bx-home"></i> Add New Session</button>
            </div>
            <!-- group Buttons start here -->
            <div class=" md:flex  justify-between mt-2">
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
                <div class="rounded-md border-2 dark:border-[#A4A2A2] w-full lg:w-[20rem] flex space-x-2 px-2 items-center mt-4">
                    <i class='bx bx-search text-sm mt-1'></i>
                    <input class="bg-transparent p-1 outline-none text-sm" placeholder="Search..." />
                </div>
               
            </div>
            <!--  tables start here-->
            <div class="mt-5 mb-4">
                <table class="border-collapse border table-auto border-slate-400 w-full p-6 ">
                    <thead class="" style="font-size:13px">
                        <tr class="p-2">
                            <th class="border border-slate-300 py-2 px-2">S/N</th>
                            <th class="border border-slate-300 py-2 px-2">Session</th>
                            <th class="border border-slate-300 py-2 px-2">Status</th>
                            <th class="border border-slate-300 py-2 px-2">Action</th>
                        </tr>
                    </thead>
                    <tbody style="font-size:13px" class=" font-medium">
                        <tr v-for="(data, i) in state.data" :key="i">
                            <td class="border border-slate-300 p-3 py-1 px-3"> <div class="text-center">{{ i }}</div></td>
                            <td class="border border-slate-300 py-2 px-3"><div class="text-center">Delwathon limited</div></td>
                            <td class="border border-slate-300 py-2 px-3"><div class="text-center"> del@gamil.com</div></td>
                            <td class="border border-slate-300 py-2 px-3">
                                <div class="text-center space-x-1 flex justify-center">
                                    <button class="bg-green-500 p-2 rounded-lg h-8 text-white"><i class="bx bx-edit"></i></button>
                                    <button class="bg-red-500 p-2 rounded-lg h-8 text-white"><i class="bx bx-trash"></i></button>
                                </div>
                            </td>
                        </tr>
                       
                    </tbody>
                </table>
                <!--  -->
            </div>
            <!-- table ends here -->
        </div>

        <!--Modal-->
    </div>
        <TransitionRoot as="template" :show="open">
            <Dialog as="div" class="relative z-10 font" @close="open = false">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </TransitionChild>
                <div class="fixed inset-0 z-10 overflow-y-auto   dark:text-white">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                            <DialogPanel class="relative transform overflow-hidden rounded-lg  text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <!--ADD content here  -->
                            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 dark:bg-gray-800 dark:text-white">
                                <!-- grid grid-cols-1 md:grid-cols-1 -->
                                <h4 class="font-medium font">Add Session <i class="fa fa-plus-circle text-green-500"></i> </h4>
                                <div class="md:flex flex-col mt-3">
                                    <div class="w-full">
                                        <label for="small-input" class="block mb-2 text-sm font-normal text-gray-900 dark:text-white">Session*</label>
                                        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Session" required>
                                    </div>
                                    <!--  -->
                                    <div class="w-full mt-2">
                                        <label for="small-input" class="block mb-2 text-sm font-normal text-gray-900 dark:text-white">Status*</label>
                                        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Status" required>
                                    </div>
                                </div>
                            </div>
                            <!-- content here -->
                            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 dark:bg-slate-800">
                                <button type="button" class="inline-flex w-full justify-center rounded-md bg-[#00A859] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto" @click="open = false">Save</button>
                                <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" @click="open = false" ref="cancelButtonRef">Cancel</button>
                            </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
</template>