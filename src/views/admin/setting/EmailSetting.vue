<template>
    <div>
        <div class="grid grid-cols-1 xl:grid-cols-4 gap-4">
            <div class="w-full bg-white shadow-xl py-3 dark:bg-dark xl:col-span-3">
                <p class="text-sm text-ed-blue pl-3 mb-2 dark:text-blue-500">EMAIL CONFIGURATION SETTINGS</p>
                <hr class="border-[1px] border-ed-blue">
                <div class="border border-gray-400 mx-4 rounded-md my-10 px-5 py-8">
                    <div class="flex space-x-2">
                        <h4 class="w-60 text-blue-500 font-semibold text-md"><i class="fa-solid fa-user-lock mr-1"></i>SMTP Settings</h4>
                        <hr class="border w-full my-auto border-gray-200">
                    </div>
                    <div class="w-full mt-4 xl:flex">
                        <label for="small" class="xl:w-44 xl:mb-2 xl:justify-start xl:my-auto block mb-2 text-sm font-nomal text-gray-900 dark:text-white">System Email <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <input id="small" v-model="input1" class="block w-full  px-2 py-2 text-xs text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>    
                    </div>
                    <div class="w-full mt-4 xl:flex">
                        <label for="small" class="xl:w-44 xl:mb-2 xl:justify-start xl:my-auto block mb-2 text-sm font-nomal text-gray-900 dark:text-white">SMTP Host <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <input id="small" v-model="input2" class="block w-full  px-2 py-2 text-xs text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>    
                    </div>
                    <div class="w-full mt-4 xl:flex">
                        <label for="small" class="xl:w-44 xl:mb-2 xl:justify-start xl:my-auto block mb-2 text-sm font-nomal text-gray-900 dark:text-white">SMTP Username <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <input id="small" v-model="input3" class="block w-full  px-2 py-2 text-xs text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>    
                    </div>
                    <div class="w-full mt-4 xl:flex">
                        <label for="small" class="xl:w-44 xl:mb-2 xl:justify-start xl:my-auto block mb-2 text-sm font-nomal text-gray-900 dark:text-white">SMTP Password <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <input id="small" v-model="input4" class="block w-full  px-2 py-2 text-xs text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>    
                    </div>
                    <div class="w-full mt-4 xl:flex">
                        <label for="small" class="xl:w-44 xl:mb-2 xl:justify-start xl:my-auto block mb-2 text-sm font-nomal text-gray-900 dark:text-white">SMTP Port <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <input id="small" v-model="input5" class="block w-full  px-2 py-2 text-xs text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>    
                    </div>
                    <div class="w-full mt-4 xl:flex">
                        <label for="small" class="xl:w-44 xl:mb-2 xl:justify-start xl:my-auto block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Encryption <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <!-- <input id="small" v-model="input6" class="block w-full  px-2 py-2 text-xs text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>     -->
                        <select id="small" v-model="input6" class="block w-full  px-2 py-2 text-xs text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option value="">--Choose--</option>
                            <option value="tls">TLS</option>
                            <option value="ssl">SSL</option>
                        </select>
                    </div>
                </div>
                <hr class="border-[1px] border-ed-blue">
                <div class="flex place-content-end">
                    <button @click="saveform" class="rounded-md mx-4 mt-4 px-4 py-2.5 text-sm bg-[#003399] font-normal text-white hover:bg-blue-800"><i class="fa-solid fa-floppy-disk mr-2"></i>Save</button>
                </div>
            </div>


            <div class="w-full h-fit bg-white shadow-xl py-3 dark:bg-dark">
                <p class="text-sm text-ed-blue pl-3 mb-2 dark:text-blue-500">EMAIL MODE</p>
                <hr class="border-[1px] border-ed-blue">

                <div class="my-6 mx-3 ">
                    <div class="flex space-x-1 place-content-center">
                        <p class="font-bold text-gray-700 mr-4">Live?</p>
                        <button @click="live" :class="yes == 1? 'bg-green-700 text-white' : '' " class=" bg-green-200 p-1 text-center text-green-800 rounded-md text-xs">Yes</button>
                        <!-- <button @click="test" :class="no == true? 'bg-red-700 text-white' : '' " class="bg-red-200 p-1 text-center text-red-800 rounded-md text-xs">No</button> -->
                    </div>

                    <div class="flex space-x-1 mt-3 place-content-center">
                        <p class="font-bold text-gray-700 mr-3 ">Test?</p>
                        <button @click="live2" :class="yes == 2? 'bg-green-700 text-white' : '' " class="bg-green-200 p-1 text-center text-green-800 rounded-md text-xs">Yes</button>
                        <!-- <button @click="test" :class="no == false? 'bg-red-700 text-white' : '' " class="bg-red-200 p-1 text-center text-red-800 rounded-md text-xs">No</button> -->
                    </div>
                </div>

                <hr class="border-[1px] border-ed-blue">
                <div class="flex place-content-end">
                    <button  class="rounded-md mx-4 mt-4 px-4 py-2.5 text-sm bg-[#003399] font-normal text-white hover:bg-blue-800"><i class="fa-solid fa-floppy-disk mr-2"></i>Save</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>


import Swal from 'sweetalert2'
import { ref } from 'vue'

const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const input4 = ref('')
const input5 = ref('')
const input6 = ref('')
const yes = ref(2)
// const no = ref(true)

const live = () =>{
    yes.value = 1
    
}
const live2 = () =>{
    yes.value = 2
    
}
// const test = () =>{
//     yes.value = !yes.value
//     no.value = !no.value
// }


const saveform = () =>{
    if(input1.value == ''  || input2.value == '' || input3.value == '' || input4.value == '' || input5.value == '' || input6.value == ''){
        Swal.fire({
            position: 'top-end',
            html: '<span><i class="fa-solid fa-triangle-exclamation mr-3"></i> Please enter all input fields</span>',
            showConfirmButton: false,
            timer: 3000,
            customClass: 'custom-sweetalert-widthemail1',
        })
    }else{
        Swal.fire({
              position: 'top-end',
              html: '<span><i class="fa-solid fa-check text-1xl font-bold mr-3"></i> Email set</span>',
              showConfirmButton: false,
              timer: 1000,
              customClass: 'custom-sweetalert-widthg1',
          })        
    }
}
</script>
<style>
.custom-sweetalert-widthemail1 {
  width: 350px !important;
  color: white !important;
  font-size: 14px !important;
  text-align: left;
  background: rgba(107, 9, 9, 0.914) !important;
  padding: 0 60px 10px 0 !important;

}

</style>