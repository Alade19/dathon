<template>
    <div class="font container p-2 mx-auto md:container md:p-7">
        <h3 class="font-medium mt-4">
            <span class="text-[#003399] text-lg ml-3">Students Mark Entries</span>  
        </h3>
        
        <div class="mt-4">
            <div class="shadow-md  p-5">
                <div class="flex justify-between">
                    <h4 class="text-gray-700 font-medium p-2">Filter Student</h4>
                    <button @click="displaybody" class="rounded-md px-6 md:text-xs bg-[#003399] font-normal text-white hover:bg-blue-600">Filter</button>
                </div>
                <div class="p-2  py-6 border border-l-0 border-r-0 border-[#003399] mt-5 md:flex justify-center gap-2">
                    <div class="w-full mb-3 md:mb-0">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Session <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <select  v-model="select44" id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option value="">Select Session</option>
                            <option value="2021-2022">2021-2022</option>
                            <option value="2022-2023" selected>2022-2023</option>
                        </select>
                    </div>
                     <div class="w-full mb-6 md:mb-0">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Branch <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <select id="small" v-model="select41" @change="getoptiontext1" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" selected>Select Branch</option>
                        <option value="FO">Delwathon Foundation</option>
                        <option value="CO">Delwathon College</option>
                        </select>
                    </div>
                    <!--  -->
                    <div class="w-full mb-6 md:mb-0">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Term <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <select  v-model="select45" id="small" @change="getoptiontext2" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option value="">Select Term</option>
                            <option value="ft">First Term</option>
                            <option value="st" selected>Second Term</option>
                            <option value="tt" selected>Third Term</option>

                        </select>
                    </div>
                    <div class="w-full mb-6 md:mb-0">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Class <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <select id="small" v-model="select42" @change="getoptiontext3" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" selected>Select Class</option>
                        <option v-if="select41 == '' " disabled class="text-red-500 text-md font font-medium">No results found</option>
                        <option v-if="select41 == 'FO' " value="NU1">Nusery 1</option>
                        <option v-if="select41 == 'FO' " value="NU2">Nusery 2</option>
                        <option v-if="select41 == 'FO' " value="PR1">Primary 1</option>
                        <option v-if="select41 == 'CO' " value="jss1">Jss1</option>
                        <option v-if="select41 == 'CO' " value="jss2">Jss2</option>
                        </select>
                    </div>
                    <!--  -->
                    <div class="w-full mb-6 md:mb-0">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Section <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <select id="small" v-model="select43" @change="getoptiontext4" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" selected>Select Section</option>
                        <option v-if="select42 == '' " disabled class="text-red-500 text-md font font-medium">No results found</option>
                        <option v-if="select42 == 'NU1' || select42 == 'NU2' || select42 == 'PR1' " value="SA">A</option>
                        <option v-if="select42 == 'PR1' " value="SB">B</option>
                        <option v-if="select42 == 'jss1' || select42 == 'jss2' " value="Sblue">Blue</option>
                        <option v-if="select42 == 'jss1' || select42 == 'jss2' " value="Sgreen">Green</option>
                        </select>
                    </div>
                    <div class="w-full mb-6 md:mb-0">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Subject <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <select  v-model="select46" id="small" @change="getoptiontext5" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option value="">Select Subject</option>
                            <option v-if="select42 == '' " disabled class="text-red-500 text-md font font-medium">No results found</option>
                            <option v-if="select42 == 'NU1' || select42 == 'NU2' || select42 == 'PR1' || select42 == 'jss1' || select42 == 'jss2' " value="eng">English Language</option>
                            <option v-if="select42 == 'NU1' || select42 == 'NU2' || select42 == 'PR1' || select42 == 'jss1' || select42 == 'jss2' " value="mat">Mathematics</option>
                            <option v-if="select42 == 'NU1' || select42 == 'NU2' || select42 == 'PR1' || select42 == 'jss1' || select42 == 'jss2' "  value="hnd" selected>Hand writing</option>
                            <option v-if="select42 == 'NU1' || select42 == 'NU2'"  value="hnd" selected>General Studies</option>
                            <option v-if="select42 == 'PR1' " value="hnd" selected>Quantitative Reasoning</option>
                            <option v-if="select42 == 'PR1'" value="eng">Verbal Reasoning</option>
                            <option v-if="select42 == 'jss1' || select42 == 'jss2' " value="mat" selected>Basic Science</option>
                            <option v-if="select42 == 'jss1' || select42 == 'jss2' " value="hnd" selected>Pre-vocational Studies</option>
                            <option v-if="select42 == 'jss1' || select42 == 'jss2' " value="hnd" selected>Religion and Nation Values</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <!--  -->

        <!-- table -->

        <div v-if="showbody1"  class="shadow-md p-2 py-2 px-3 mt-8 ">
            <h5 class="mt-3 font font-extralight text-black-300 text-xs"><i class="fa-solid fa-magnifying-glass text-xs text-gray-400"></i> Mark Entry for <span class="font font-bold text-black text-1xl dark:text-white">{{selecttext11}}</span> Students <span class="font font-bold text-black text-1xl dark:text-white">{{selecttext31}} - {{selecttext41}}</span> For <span class="font font-bold text-black text-1xl dark:text-white">{{selecttext21}} {{select44}}</span> For <span class="font font-bold text-black text-1xl dark:text-white">{{selecttext51}}</span></h5>
            <hr class="border-b-[3px] border-[#003399] my-4">
            <!-- buttons -->
            <!--  -->
            <div class=" mt-5 mb-4 relative overflow-x-auto">
                <table class="border-collapse border table-auto border-slate-400 w-full p-6 ">
                    <thead class="" style="font-size:13px">
                        <tr class="p-2">
                        
                            <th class="border border-slate-300 py-2 px-4">S/N</th>
                            <th class="border border-slate-300 py-2 px-[45px] md:px-12">Student Name</th>
                            <th class="border border-slate-300 py-2 px-[30px] md:px-4">Reg No</th>
                            <th class="border border-slate-300 py-2 px-4">Roll</th>
                            <th class="border border-slate-300 py-2 px-4">Attn(20)</th>
                            <th class="border border-slate-300 py-2 px-4">CA(20)</th>
                            <th class="border border-slate-300 py-2 px-4">Exam(60)</th>
                            <th class="border border-slate-300 py-2 px-4">Total(100)</th>
                            
                        </tr>
                    </thead>
                    <tbody style="font-size:12px;">
                        <tr class="hover:bg-gray-200 dark:hover:bg-gray-800" v-for="entry in entries" :key="entry.id">
                            <td class="border border-slate-300 px-2 py-3"> <div class="text-center">{{entry.id}}</div></td>
                            <td class="border border-slate-300 px-2 py-3"> <div class="text-center">{{entry.name}}</div></td>
                            <td class="border border-slate-300 px-2 py-3"> <div class="text-center">{{entry.reg}}</div></td>
                            <td class="border border-slate-300 px-2 py-3"> <div class="text-center">{{entry.roll}}</div></td>
                            <td class="border border-slate-300 px-2 py-3 md:px-3"><div class="text-center">
                                <input type="number" :value="entry.attn" id="first_name" class="bg-white text-center border border-blue-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 w-full px-3 py-1 dark:bg-gray-600 dark:border-blue-600 dark:placeholder-blue-400 placeholder-blue-400 placeholder-font-light placeholder-text-sm dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            </div></td>
                            <td class="border border-slate-300 px-2 py-3 md:px-3"><div class="text-center">
                                <input type="number" id="first_name" :value="entry.ca" class="bg-white text-center border border-blue-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 w-full px-3 py-1 dark:bg-gray-600 dark:border-blue-600 dark:placeholder-blue-400 placeholder-blue-400 placeholder-font-light placeholder-text-sm dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            </div></td>
                            <td class="border border-slate-300 px-2 py-3 md:px-3"><div class="text-center">
                                <input type="number" id="first_name" :value="entry.exam" class="bg-white text-center border border-blue-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 w-full px-3 py-1 dark:bg-gray-600 dark:border-blue-600 dark:placeholder-blue-400 placeholder-blue-400 placeholder-font-light placeholder-text-sm dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            </div></td>
                            <td class="border border-slate-300 px-2 py-3"> <div class="text-center font-bold">{{entry.attn + entry.ca + entry.exam}}</div></td>
                        </tr>
                        <!--  -->

                        
                    </tbody>
                </table>
                <!--  -->
                
            </div>
        </div>
    </div>
        
    <!-- </div> -->
</template>

<script setup>
import Swal from 'sweetalert2'
import { ref } from "vue";

const select41 = ref('')
const select42 = ref('')
const select43 = ref('')
const select44 = ref('')
const select45 = ref('')
const select46 = ref('')
const selecttext11 = ref('')
const selecttext21 = ref('')
const selecttext31 = ref('')
const selecttext41 = ref('')
const selecttext51 = ref('')
const showbody1 = ref(false)

const entries = ref([
    {id: 1, name: 'Toyibu Olaniyi Abidogun', reg: 'DEFO 1001', roll:1, attn: 11, ca: 15, exam:45},
    {id: 2, name: 'Mujeeb Shina Abdullateef', reg: 'DECO 1023', roll:2, attn: 15, ca: 19, exam:35},
    {id: 3, name: 'Samuel Adeyemi Alade', reg: 'DECO 1056', roll:3, attn: 19, ca: 12, exam:55},
])

function getoptiontext1(event) {
    const selectedIndex = event.target.selectedIndex;
    selecttext11.value = event.target.options[selectedIndex].text;
}
function getoptiontext2(event) {
    const selectedIndex = event.target.selectedIndex;
    selecttext21.value = event.target.options[selectedIndex].text;
}
function getoptiontext3(event) {
    const selectedIndex = event.target.selectedIndex;
    selecttext31.value = event.target.options[selectedIndex].text;
}
function getoptiontext4(event) {
    const selectedIndex = event.target.selectedIndex;
    selecttext41.value = event.target.options[selectedIndex].text;
}
function getoptiontext5(event) {
    const selectedIndex = event.target.selectedIndex;
    selecttext51.value = event.target.options[selectedIndex].text;
}
const displaybody = () => {
    if(select41.value == '' || select42.value == '' || select43.value == '' || select44.value == '' || select45.value == '' || select46.value == ''){
        showbody1.value = false
        Swal.fire({
            position: 'top-end',
            html: '<span><i class="fa-solid fa-triangle-exclamation mr-3"></i> Please fill all input field</span>',
            showConfirmButton: false,
            timer: 3000,
            customClass: 'custom-sweetalert-widthe1',
        })
    }else{
        showbody1.value = true
    }
}
</script>
<style>
.custom-sweetalert-widthe1 {
  width: 320px !important;
  color: white !important;
  font-size: 14px !important;
  background: rgba(107, 9, 9, 0.914) !important;
  padding: 0 50px 10px 0 !important;

}

</style>
