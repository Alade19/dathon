<template>
    <div class="font container mx-auto p-3 md:container md:p-7">
        <h3 class="font-medium mt-4">
            <span class="text-[#003399] text-lg ml-3 capitalize">students monthly attendance</span>  
        </h3>
        
        <div class="mt-4">
            <div class="shadow-md  p-5">
                <div class="flex justify-between">
                    <h4 class="text-gray-700 font-medium p-2">Filter Student</h4>
                    <button type="submit" @click="displaybody" class="rounded-md shadow-md py-2 px-6 bg-[#003399] font-medium text-white hover:bg-blue-800 focus:text-[#003399] focus:bg-white border focus:border-[#003399]">Filter</button>
                </div>
                <span v-if="showerror == 1" class="text-[12px] font-bold text-red-500 tracking-wide pl-2">Please fill all input field***</span>
                <div class="p-2 py-4 border border-l-0 border-r-0 border-[#003399] mt-5 md:flex justify-center gap-2">
                    <div class="w-full mb-6 md:mb-0">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Branch <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <select id="small" v-model="select1" @change="getoptiontext1" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" selected>Select Branch</option>
                        <option value="FO">Delwathon Foundation</option>
                        <option value="CO">Delwathon College</option>
                        </select>
                    </div>
                    <!--  -->
                    <div class="w-full mb-6 md:mb-0">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Class <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <select id="small" v-model="select2" @change="getoptiontext2" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" selected>Select Class</option>
                        <option v-if="select1 == '' " disabled class="text-red-500 text-md font font-medium">No results found</option>
                        <option v-if="select1 == 'FO' " value="NU1">Nusery 1</option>
                        <option v-if="select1 == 'FO' " value="NU2">Nusery 2</option>
                        <option v-if="select1 == 'FO' " value="PR1">Primary 1</option>
                        <option v-if="select1 == 'CO' " value="jss1">Jss1</option>
                        <option v-if="select1 == 'CO' " value="jss2">Jss2</option>
                        </select>
                    </div>
                    <!--  -->
                    <div class="w-full mb-6 md:mb-0">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Section <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <select id="small" v-model="select3" @change="getoptiontext3" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" selected>Select Section</option>
                        <option v-if="select2 == '' " disabled class="text-red-500 text-md font font-medium">No results found</option>
                        <option v-if="select2 == 'NU1' || select2 == 'NU2' || select2 == 'PR1' " value="SA">A</option>
                        <option v-if="select2 == 'PR1' " value="SB">B</option>
                        <option v-if="select2 == 'jss1' || select2 == 'jss2' " value="Sblue">Blue</option>
                        <option v-if="select2 == 'jss1' || select2 == 'jss2' " value="Sgreen">Green</option>
                        </select>
                    </div>

                    <!--  -->
                    <div class="w-full mb-3 md:mb-0">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Month <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <input  type="month" name="" @input="formatMonth" @change="getmonth" v-model="monthselect" id="month-input" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>

                </div>
            </div>
        </div>

        <!-- table -->

        <div v-if="showbody1" class="shadow-md p-2 py-2 px-3 mt-8 ">
            <h5 class="mt-3 font font-extralight text-black-300 text-xs"><i class="fa-solid fa-magnifying-glass text-xs text-gray-400"></i> Attendance for <span class="font font-bold text-black text-1xl dark:text-white"> {{ selecttext1 }}</span> students <span class="font font-bold text-black text-1xl dark:text-white">{{ selecttext2}}-</span><span class="font font-bold text-black text-1xl dark:text-white">{{ selecttext3}}</span> for the month of <span class="font font-bold text-black text-1xl dark:text-white">{{ formattedMonth }}</span></h5>
            <hr class="border-b-[3px] border-[#003399] my-4">
            <!-- buttons -->

            

            <!--  -->
            <div class=" mt-5 mb-4 relative overflow-x-auto">
                <table class="border-collapse border table-auto border-slate-400 w-full p-6 ">
                    <thead class="" style="font-size:13px">
                        <tr class="p-2">
                        
                            <th class="border border-slate-300 py-2 px-[60px]">Students</th>
                            <th v-for="i in count" :key="i" class="border border-slate-300 py-2 px-2">
                                {{ i }}
                            </th>
                            
                            <th class="border border-slate-300 py-2 px-2 flex place-content-center">
                                <div class="border-2 border-gray-300 mr-1 rounded-xl bg-green-500 px-2 py-2"></div>
                                <div class="border-2 border-gray-300 mr-1 rounded-xl bg-red-500 px-2 py-2"></div>
                                <div class="border-2 border-gray-300 rounded-xl bg-yellow-500 px-2 py-2"></div>
                            </th>
                        </tr>
                    </thead>
                    <tbody style="font-size:12px;">
                        <tr v-for="attends in attendlist" :key="attends"  class="hover:bg-gray-200 dark:hover:bg-gray-800">
                            <td class="border border-slate-300 px-2 py-3"> <div class="text-center font-medium">{{attends.name}}</div></td>
                            <td v-for="i in count" :key="i" class="border border-slate-300 px-1 py-3 text-center">
                                <!-- {{ i }} -->
                                <div v-for="ballgreen in attends.ballsgreen" :key="ballgreen">
                                    <div v-if="i == ballgreen " class="border-2 border-gray-300 mr-1 rounded-xl bg-green-500 px-2 py-2"></div>
                                </div>
                                <div v-for="ballred in attends.ballsred" :key="ballred">
                                    <div v-if="i == ballred " class="border-2 border-gray-300 mr-1 rounded-xl bg-red-500 px-2 py-2"></div>
                                </div>
                                <div v-for="ballyellow in attends.ballsyellow" :key="ballyellow">
                                    <div v-if="i == ballyellow " class="border-2 border-gray-300 rounded-xl bg-yellow-500 px-2 py-2"></div>
                                </div>
                            </td>
                            <td class="border border-slate-300 px-1 py-3"><div class="text-center text-black font-medium text-[15px] dark:text-white">
                                {{ attends.ballsgreen.length }} | {{ attends.ballsred.length }} | {{ attends.ballsyellow.length }}
                            </div></td>
                        </tr>
                        <!--  -->
                        <!-- <tr class="hover:bg-gray-200">
                            <td class="border border-slate-300 px-2 py-3"> <div class="text-center font-medium">Chinonso Obinna Nwosu</div></td>
                            <td v-for="i in count" :key="i" class="border border-slate-300 px-1 py-3 text-center">
                                {{ i }}
                            </td>
                            <td class="border border-slate-300 px-1 py-3"><div class="text-center text-black font-medium text-[15px]">
                                {{ 0 }} | {{ 1 }} | {{ 0 }}
                            </div></td>
                        </tr> -->
                        <!--  -->
                        <!-- <tr class="hover:bg-gray-200">
                            <td class="border border-slate-300 px-2 py-3"> <div class="text-center font-medium">Chinonso Obinna Nwosu</div></td>
                            <td v-for="i in count" :key="i" class="border border-slate-300 px-1 py-3 text-center">
                                {{ i }}
                            </td>
                            <td class="border border-slate-300 px-1 py-3"><div class="text-center text-black font-medium text-[15px]">
                                {{ 0 }} | {{ 1 }} | {{ 0 }}
                            </div></td>
                        </tr> -->
                    </tbody>
                </table>
                <!--  -->
                 
            </div>
        </div>
    </div>
</template>
<script setup>

import Swal from 'sweetalert2'
import { ref } from 'vue'

// export default {
//     setup(){

    const count = ref(null)
    
    const select1 = ref('')
    const select2 = ref('')
    const select3 = ref('')
    const selecttext1 = ref('')
    const selecttext2 = ref('')
    const selecttext3 = ref('')
    const showbody1 = ref(false)
    
    
    const monthselect = ref('')
    
    const formattedMonth = ref('');
    // const showbody = ref(null)
    const showerror = ref(null)

    // const ballsgreen = ref([1,2,3])
    // const ballsred = ref([5,7,8])
    // const ballsyellow = ref([20,22,16])

    const attendlist = ref([
        {name:'Toyibu Olaniyi Abidogun ', ballsgreen:[1,2,3,5,6,9,10],ballsred:[8],ballsyellow:[23,24] },
        {name:'Mujeeb Shina Abdullateef', ballsgreen:[3],ballsred:[6,7,8,9,10,24],ballsyellow:[12,23] },
        {name:'Samuel Adeyemi Alade ', ballsgreen:[2,3,5,6,7,8,9],ballsred:[],ballsyellow:[20,12,23] },
    ])


    function formatMonth() {
        const [year, month] = monthselect.value.split('-');
      const date = new Date(Number(year), Number(month) - 1);
      const monthName = date.toLocaleString('default', { month: 'long' });
      formattedMonth.value = `${monthName} ${year}`;
      const lastDay = new Date(year, month, 0).getDate();
      count.value = lastDay;
    };

   
    
   function getoptiontext1(event) {
        const selectedIndex = event.target.selectedIndex;
        selecttext1.value = event.target.options[selectedIndex].text;
    }
    function getoptiontext2(event) {
        const selectedIndex = event.target.selectedIndex;
        selecttext2.value = event.target.options[selectedIndex].text;
    }
    function getoptiontext3(event) {
        const selectedIndex = event.target.selectedIndex;
        selecttext3.value = event.target.options[selectedIndex].text;
    }

    const displaybody = () => {
      if(select1.value == '' || select2.value == '' || select3.value == ''){
          showbody1.value = false
          Swal.fire({
              position: 'top-end',
              html: '<span class="px-0"><i class="fa-solid fa-triangle-exclamation mr-3"></i> Please fill all input field</span>',
              showConfirmButton: false,
              timer: 3000,
              customClass: 'custom-sweetalert-widtht1',
          })
      }else{
          showbody1.value = true
      }
    }
    
    



</script>
