
<script setup>
import { onMounted, reactive } from "vue"
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
    const props = defineProps({
        open:Boolean,
    })
   
    onMounted(()=>{
    })
</script>
<template>
    <div>
         <!--slide Over for creating section -->
        <TransitionRoot :show="props?.open">
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
                        <DialogTitle class="text-base font-medium leading-6 text-gray-900 dark:text-white">Create New Section</DialogTitle>
                      </div>
                      <div class="relative mt-6 flex-1 px-4 sm:px-6">
                         <!-- The inputs is iniside sideoverInput -->
                        <div class="w-full">
                            <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Branch *</label>
                            <select id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Select Branch</option>
                                <option value="1">Delwathon Foundation and Delwathon College </option>
                                <option value="2">Delwathon Foundation and Delwathon College </option>
                            </select>
                        </div>
                        <!--  -->
                        <div class="w-full mt-4">
                            <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Section Name*</label>
                            <input type="" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Section name">
                        </div>
                        <!--  -->
                        <div class="w-full mt-4">
                            <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Student Capacity*</label>
                            <input type="number" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                        <!--  -->
                        <div class="w-full mt-4">
                            <button id="small-input" class="block w-full md:w-36 p-3 text-white border border-gray-300 rounded-lg bg-[#00A859] sm:text-xs focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"><i class="fas fa-save"></i>Submit </button>
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