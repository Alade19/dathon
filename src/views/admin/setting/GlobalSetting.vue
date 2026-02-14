<template>
    <div>
        <h4 class="text-ed-blue dark:text-white font-semibold text-sm">Global Settings</h4>
        <p class="text-blue-900 dark:text-gray-300 font-light text-xs mt-1 mb-8">Fill all information below</p>
        <div class="md:-ml-4">
            <div class="w-full md:flex mb-6">
                <label for="small" class="md:my-auto md:w-44 md:ml-0 md:text-right md:mr-4 block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Site / School Name</label>
                    <input id="small" v-model="input1"  class="block w-full  px-2 py-2 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>

            
            <div class="w-full md:flex mb-6">
                <label for="small" class="md:my-auto md:w-44 md:ml-0 md:text-right md:mr-4 block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Site Title</label>
                    <input id="small" v-model="input2"  class="block w-full  px-2 py-2 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>

            <div class="w-full md:flex mb-6">
                <label for="small" class="md:my-auto md:w-44 md:ml-0 md:text-right md:mr-4 block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Site Description</label>
                <textarea v-model="input31" cols="30" rows="5" class="block w-full  px-2 py-2 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
            </div>

            <div class="w-full md:flex mb-6">
                <label for="small" class="md:my-auto md:w-44 md:ml-0 md:text-right md:mr-4 block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Site Keywords</label>
                    <input id="small" v-model="input3"  class="block w-full  px-2 py-2 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>

            <div class="w-full md:flex mb-6">
                <label for="small" class="md:my-auto md:w-44 md:ml-0 md:text-right md:mr-4 block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Mobile No.</label>
                    <input id="small" v-model="input4"  class="block w-full  px-2 py-2 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>

            <div class="w-full md:flex mb-6">
                <label for="small" class="md:my-auto md:w-44 md:ml-0 md:text-right md:mr-4 block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Email</label>
                    <input id="small" v-model="input5"  class="block w-full  px-2 py-2 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>

            <div class="w-full md:flex mb-6">
                <label for="small" class="md:my-auto md:w-44 md:ml-0 md:text-right md:mr-4 block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Currency</label>
                <select name="" id="" v-model="input6"  class="block w-full  px-2 py-2 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="one">Naira - NGN - &#8358;</option>
                    <option value="two">U.S Dollar - USD - &#36;</option>
                    <option value="three">Euro - EUR - &#8364;</option>
                    <option value="four">Pounds - GBP - &#163;</option>
                </select>
            </div>

            <div class="w-full md:flex mb-6">
                <label for="small" class="md:my-auto md:w-44 md:ml-0 md:text-right md:mr-4 block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Facebook</label>
                    <input id="small" v-model="input7" placeholder="https://www.facebook.com/DelwathonEduSys/" class="block w-full  px-2 py-2 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>

            <div class="w-full md:flex mb-6">
                <label for="small" class="md:my-auto md:w-44 md:ml-0 md:text-right md:mr-4 block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Twitter</label>
                    <input id="small" v-model="input8" placeholder="https://www.twitter.com/DelwathonEduSys/" class="block w-full  px-2 py-2 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>

            <div class="w-full md:flex mb-6">
                <label for="small" class="md:my-auto md:w-44 md:ml-0 md:text-right md:mr-4 block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Linkedln</label>
                    <input id="small" v-model="input9" placeholder="https://www.linkedln.com/DelwathonEduSys/" class="block w-full  px-2 py-2 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>

            <div class="w-full md:flex mb-6">
                <label for="small" class="md:my-auto md:w-44 md:ml-0 md:text-right md:mr-4 block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Instagram</label>
                    <input id="small" v-model="input10" placeholder="https://www.instagram.com/DelwathonEduSys/" class="block w-full  px-2 py-2 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>

            <div class="w-full md:flex mb-6">
                <label for="small" class="md:my-auto md:w-44 md:ml-0 md:text-right md:mr-4 block mb-2 text-sm font-nomal text-gray-900 dark:text-white">WhatsApp</label>
                    <input id="small" v-model="input11" placeholder="https://wa.me/+2348123456789/" class="block w-full  px-2 py-2 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div class="w-full md:flex mb-6">
                <label for="small" class="md:my-auto md:w-44 md:ml-0 md:text-right md:mr-4 block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Database Dump Interval (Days)</label>
                <div class="flex w-full">
                    <input id="small"  v-model="input12"  class="block w-full  px-2 py-2 text-xs text-gray-900 border border-gray-300 rounded-l-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                    <div>
                        <div @click="input12++" class="bg-ed-blue text-white text-center text-xs px-5 py-0.5 cursor-pointer hover:bg-blue-900 rounded-tr-md"><i class="fa-solid fa-plus"></i></div>
                        <div @click="input12--" class="bg-ed-blue text-white text-center text-xs px-2 py-0.5 cursor-pointer hover:bg-blue-900 rounded-br-md"><i class="fa-solid fa-minus"></i></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex place-content-end mt-8">
            <button class="rounded-md px-4 py-3 md:text-xs bg-[#003399] font-normal text-white hover:bg-blue-600"><i class="fa-solid fa-floppy-disk mr-2"></i>Save</button>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue"

const input1 = ref('Delwathon Education Management System')
const input2 = ref('Delwathon EduSys')
const input31 = ref('Delwathon EduSys (Delwathon Education Management System) is a top-tier e-learning, automation, and school management solution. Delwathon EduSys has developed into a pioneer since its founding. The ease of use, affordability, and superior customer service, according to our clients, are the main reasons they prefer Delwathon EduSys. We have observed schools switch to Delwathon EduSys from other software.')
const input3 = ref('Eduthon, School Management System, EdTech, Delwathon, Delwathon IT Solutions')
const input4 = ref('08146482898')
const input5 = ref('support@delwathon.com')
const input6 = ref('one')
const input7 = ref('')
const input8 = ref('')
const input9 = ref('')
const input10 = ref('')
const input11 = ref('')
const input12 = ref(60)

</script>
