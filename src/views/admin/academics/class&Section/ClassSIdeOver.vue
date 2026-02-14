
<script setup>
import { onMounted, reactive } from "vue"
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import Multiselect from '@vueform/multiselect';
    const props = defineProps({
        openClass:Boolean,
        openDept:Boolean
    })
   
    onMounted(()=>{
        console.log(props.openClass)
    })
    const options = [
        'Green',  
        'Yellow',
        'Red',
        'Blue',
        'Purple',
        'violet'
    ]

    const state = reactive({
        options:options
    })
</script>

<template>
    <div>
     <!-- Slide over for creating class -->
    <TransitionRoot :show="props?.openClass">
        <Dialog as="div" class="relative z-40 dark:bg-gray-700" @close="openClass = false">
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
                        <button type="button" class="rounded-full h-6 w-6 bg-green-600 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" @click="openClass = false">
                          <span class="sr-only">Close panel</span>
                          <span class="fa fa-close "></span>
                          <!-- <XMarkIcon class="h-6 w-6" aria-hidden="true" /> -->
                        </button>
                      </div>
                    </TransitionChild>
                    <div class="font flex h-full flex-col overflow-y-scroll dark:bg-gray-700  bg-white py-6 shadow-xl">
                      <div class="px-4 sm:px-6">
                        <DialogTitle class="text-base font-medium leading-6 text-gray-900 dark:text-white">Create</DialogTitle>
                      </div>
                      <div class="relative mt-6 flex-1 px-4 sm:px-6">
                         <!-- The inputs is iniside sideoverInput -->
                        <div class="w-full">
                            <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Branch *</label>
                            <select v-model="branch" id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Select Branch</option>
                                <option value="US">Delwathon Group of School</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                        <!--  -->
                        <div class="w-full mt-4">
                            <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Class name *</label>
                            <input type="text" v-model="classname"  class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="class name">
                        </div>
                        <!--  -->
                        <div class="w-full mt-3">
                            <label for="" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Sections(s)</label>
                            <Multiselect
                            :value="state.options"
                            class="text-sm rounded-lg"
                            v-model="section"
                            :options="state.options"
                            ref="multiple"
                            mode="tags"
                            />
                        </div>

                        <div class="w-full mt-4">
                            <button @click="updateClass" id="small-input" class="block w-full md:w-36 p-3 text-white border border-gray-300 rounded-lg bg-[#00A859] sm:text-xs focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"><i class="fas fa-save"></i> Add New Row </button>
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

      <!-- department slide over -->
       <TransitionRoot :show="props?.openDept">
        <Dialog as="div" class="relative z-40 dark:bg-gray-700" @close="openDept= false">
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
                        <button type="button" class="rounded-full h-6 w-6 bg-green-600 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" @click="openDept = false">
                          <span class="sr-only">Close panel</span>
                          <span class="fa fa-close "></span>
                          <!-- <XMarkIcon class="h-6 w-6" aria-hidden="true" /> -->
                        </button>
                      </div>
                    </TransitionChild>
                    <div class="font flex h-full flex-col overflow-y-scroll dark:bg-gray-700  bg-white py-6 shadow-xl">
                      <div class="px-4 sm:px-6">
                        <DialogTitle class="text-base font-medium leading-6 text-gray-900 dark:text-white">Create New Department</DialogTitle>
                      </div>
                      <div class="relative mt-6 flex-1 px-4 sm:px-6">
                         <!-- The inputs is iniside sideoverInput -->
                        <div class="w-full">
                            <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Branch *</label>
                            <select id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Select Branch</option>
                                <option value="US">Delwathon Group of School</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                        <!--  -->
                        <div class="w-full mt-4">
                            <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Department name *</label>
                            <input type="" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="department name">
                        </div>
                        <!--  -->
                        <div class="w-full mt-4">
                            <button id="small-input" class="block w-full md:w-36 p-3 text-white border border-gray-300 rounded-lg bg-[#00A859] sm:text-xs focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"><i class="fas fa-save"></i> Add New Row </button>
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
    </div>
</template>
<style src="@vueform/multiselect/themes/default.css"></style>