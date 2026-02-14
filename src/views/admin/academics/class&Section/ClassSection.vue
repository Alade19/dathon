<script setup>
import { initFlowbite } from "flowbite"
import {onMounted, reactive, nextTick, ref} from "vue"
import Section from "./Section.vue"
import Classes from "./Classes.vue"
import Department from "./Department.vue"
import ClassSideOver from "./ClassSIdeOver.vue"
import SectionSlideOver from './SectionSlideOver.vue'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
onMounted(() => {
    initFlowbite()
    // open.value = true
})
const state = reactive({
})

const open = ref(false) 
const openSection = ref(false) 
const openDept = ref(false)

const showSectionSide = async () =>{
    openSection.value = false
    await nextTick();
    openSection.value = true
}
const showClassSide = async () =>{
    open.value = false
    await nextTick();
    open.value = true
}
const showDeptSide = async () =>{
    openDept.value = false
    await nextTick();
    openDept.value = true
}

</script>

<template>
    <div class="container-lg font md:container mx-auto p-2 md:p-4">
        <h2 class="font-medium text-sm uppercase mt-4 md:mt-0">Class and Section</h2>
        <!-- The three tabs -->
        <div class="mt-2 md:mt-6">
            <div class="mb-4 border-b shadow-sm md:shadow-sm  border-gray-200 dark:border-gray-700 ">
                <ul class="flex space-x-7 justify-start relative overflow-x-auto md:gap-5 gap-1 text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                    <li class="mr-2 " role="presentation">
                        <button class="inline-block p-4 px-7 border-b-2 active:bg-[#00A859]  focus:bg-[#00A859] focus:text-white" id="section-tab" data-tabs-target="#section" type="button" role="tab" aria-controls="section" aria-selected="false">
                            <i class='bx bx-chevrons-down font-medium'></i> Section
                        </button>
                    </li>       
                    <li class="mr-2" role="presentation">
                        <button class="inline-block p-4 px-7 focus:px-7  border-b-2 focus:bg-[#00A859] focus:text-white  border-transparenthover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="class-tab" data-tabs-target="#class" type="button" role="tab" aria-controls="class" aria-selected="false">
                            <i class='bx bx-chevrons-down font-medium'></i> Class
                        </button>
                    </li>
                    <li role="presentation">
                        <button class="inline-block p-4 border-b-2 border-transparent focus:bg-[#00A859] focus:text-white hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dept-tab" data-tabs-target="#dept" type="button" role="tab" aria-controls="dept" aria-selected="false">
                            <i class='bx bx-chevrons-down font-medium'></i>
                            Department
                        </button>
                    </li>
                    
                  
                </ul>
            </div>
        </div>
        <div class="p-3"> 
           <div class="">
                <Menu as="div" class="relative inline-block text-right">
                <div>
                    <MenuButton class="inline-flex gap-2 items-center w-full border shadow-sm border-[#00A859] [font-size:13px] hover:bg-[#00A859] hover:text-white py-2 rounded-sm justify-center  px-4  text-sm font-medium text-green-500 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <i class="bx bx-plus-circle text-sm"></i>Create new
                    </MenuButton>
                </div>

                <transition enter-active-class="transition duration-100 ease-out"  enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
                    <MenuItems
                        class="absolute mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div class="px-1 py-1">
                            <MenuItem v-slot="{ active }">
                            <button @click="showSectionSide" :class="[ active ? 'bg-[#00A859] text-white' : 'text-gray-900', 'group flex w-full items-center rounded-md px-2 py-2 text-sm',]">
                                Section
                            </button>
                            </MenuItem>
                        </div>
                        <!--  -->
                         <div class="px-1 py-1">
                            <MenuItem v-slot="{ active }">
                            <button @click="showClassSide" :class="[ active ? 'bg-[#00A859] text-white' : 'text-gray-900', 'group flex w-full items-center rounded-md px-2 py-2 text-sm',]">
                                Class
                            </button>
                            </MenuItem>
                        </div>
                         <div class="px-1 py-1">
                            <MenuItem v-slot="{ active }">
                            <button @click="showDeptSide" :class="[ active ? 'bg-[#00A859] text-white' : 'text-gray-900', 'group flex w-full items-center rounded-md px-2 py-2 text-sm',]">
                                Department
                            </button>
                            </MenuItem>
                        </div>
                    </MenuItems>
                </transition>
                </Menu>
            </div>
        </div>
        <ClassSideOver :openClass="open" :openDept="openDept"/>
        <SectionSlideOver :open="openSection"/>
        <!--  -->
        <div id="myTabContent">
            <div class="hidden p-1 md:p-4 rounded-lg  dark:bg-dark" id="section" role="tabpanel" aria-labelledby="section-tap">
              <Section/>
            </div>
            <div class="hidden p-1 md:p-4 rounded-lg  dark:bg-dark" id="class" role="tabpanel" aria-labelledby="class-tap">
                <Classes/>
            </div>
            <div class="hidden p-1 md:p-4 rounded-lg  dark:bg-dark" id="dept" role="tabpanel" aria-labelledby="dept-tap">
                <Department/>
            </div>
        </div>
    </div>
</template>