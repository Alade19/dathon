<template>
<div class="p-5">
    <h4 class="text-ed-blue dark:text-white font-semibold text-md mb-8">Settings</h4>
    <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div class=" w-full space-y-6 md:px-1">
            <div @click="showbody1" :class="showbody == 1 ? 'bg-ed-blue text-white' : 'bg-white' " class="transition duration-600 ease-in w-full text-gray-600 text-center py-2.5 rounded-md shadow-md cursor-pointer">
                <p class=""><i class='bx bx-building-house text-2xl font-medium '></i></p>
                <p class="text-sm font-semibold ">Global Setting</p>
            </div>

            <div @click="showbody2" :class="showbody == 2 ? 'bg-ed-blue text-white' : 'bg-white' " class="transition duration-600 ease-in text-gray-600 w-full text-center py-2.5 rounded-md shadow-md cursor-pointer">
                <p class=""><i class='bx bx-git-branch text-2xl font-medium'></i></p>
                <p class="text-sm font-semibold ">Branch Setting</p>
            </div>

            <div @click="showbody3" :class="showbody == 3 ? 'bg-ed-blue text-white' : 'bg-white' " class="transition duration-600 ease-in text-gray-600 w-full text-center py-2.5 rounded-md shadow-md cursor-pointer">
                <p class=""><i class="fa-sharp fa-solid fa-images text-2xl font-medium "></i></p>
                <p class="text-sm font-semibold ">Logo & Favicon</p>
            </div>
            <div @click="showbody4" :class="showbody == 4 ? 'bg-ed-blue text-white' : 'bg-white' " class="transition duration-600 ease-in text-gray-600 w-full text-center py-2.5 rounded-md shadow-md cursor-pointer">
                <p class=""><i class='bx bx-calendar-event text-2xl font-medium '></i></p>
                <p class="text-sm font-semibold ">Session Setting</p>
            </div>
            <div @click="showbody5" :class="showbody == 5 ? 'bg-ed-blue text-white' : 'bg-white' " class="transition duration-600 ease-in text-gray-600 w-full text-center py-2.5 rounded-md shadow-md cursor-pointer">
                <p class=""><i class='bx bxs-envelope text-2xl font-medium'></i></p>
                <p class="text-sm font-semibold ">Email Setting</p>
            </div>
        </div>
        <!-- ... -->
        <div class="bg-white w-full h-fit shadow-md rounded-sm px-6 py-5 md:col-span-4 dark:bg-gray-800">
            <GlobalSetting v-if="showbody == 1" />
            <BranchSetting v-if="showbody == 2" />
            <LogoFav v-if="showbody == 3" />
            <SessionSetting v-if="showbody == 4" />
            <EmailSetting v-if="showbody == 5" />
        </div>
      </div>
</div>
</template>
<script setup>

import { ref } from 'vue'
import GlobalSetting from './GlobalSetting.vue'
import BranchSetting from './BranchSetting.vue'
import LogoFav from './LogoFav.vue'
import SessionSetting from './SessionSetting.vue'
import EmailSetting from './EmailSetting.vue'

const showbody = ref(1)

const showbody1 = () =>{
    showbody.value = 1
}
const showbody2 = () =>{
    showbody.value = 2
}
const showbody3 = () =>{
    showbody.value = 3
}
const showbody4 = () =>{
    showbody.value = 4
}
const showbody5 = () =>{
    showbody.value = 5
}
</script>
