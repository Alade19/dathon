<template>
    <div class="mt-1">
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Branch Full Name (Full):</label>
        <input  v-model="branchShortname" type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Enter Branch Full Name">
    </div>
    <!--  -->
    <div class="mt-3">
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Branch Short Name (Short):</label>
        <input  v-model="branchShortname" type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Enter Branch Short Name">
    </div>
    <!--  -->
    <div class="mt-3">
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email:</label>
        <input  v-model="b" type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Email">
    </div>
    <!--  -->
    <div class="mt-3">
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile Number:</label>
        <input  v-model="b" type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Mobile Number">
    </div>
        <!--  -->
    <div class="mt-3">
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State:</label>
        <input  v-model="b" type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="State">
    </div>
    <!--  -->
    <div class="mt-3">
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">LGA:</label>
        <input  v-model="b" type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="LGA">
    </div>
        <!--  -->
    <div class="mt-3">
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
        <input  v-model="b" type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="City*">
    </div>
    <!--  -->
    <div class="mt-4">
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
        <textarea name="" id="" cols="30" rows="6" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"></textarea>
    </div>
    <!--  -->
    <div class="mt-3">
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input  v-model="b" type="password" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Password">
    </div>
    <!--  -->
     <div class="mt-4">
       
        <button id="small-input" class="block w-full md:w-36 p-3 text-white border border-gray-300 rounded-lg bg-[#00A859] sm:text-xs focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"><i class="fas fa-user-edit"></i> Update Details </button>
    </div>
    
</template>

<script setup>

import { computed } from 'vue'
 const {open}= defineProps(['open'])
 console.log('open',open)
</script>