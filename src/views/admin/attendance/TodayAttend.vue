<template>
    <div class="font container mx-auto p-3 md:container md:p-7">
        <h3 class="font-medium mt-4">
            <span class="text-[#003399] text-lg ml-3 capitalize">students daily attendance</span>  
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

                    

                </div>
                
            </div>
        </div>

        <!-- table -->

        <div v-if="showbody1" class="shadow-md p-2 py-2 px-3 mt-8 ">
            <h5 class="mt-3 font font-extralight text-black-300 text-xs"><i class="fa-solid fa-magnifying-glass text-xs text-gray-400"></i> Attendance for <span class="font font-bold text-black text-1xl dark:text-white"> {{ selecttext1 }}</span> students <span class="font font-bold text-black text-1xl dark:text-white">{{ selecttext2}}-</span><span class="font font-bold text-black text-1xl dark:text-white">{{ selecttext3}}</span> for <span class="font font-bold text-black text-1xl dark:text-white">{{ session}}</span></h5>
            <hr class="border-b-[3px] border-[#003399] my-4">
            <!-- buttons -->

            <div class="flex my-9 ml-2 md:text-right   md:block">
                <div class="md:mb-1 md:text-md md:mr-[48px] mt-1.5 mr-1 text-black-400 font-medium text-sm">Select For Everyone</div>
                <div class="">
                    <button @click="openModal" class=" shadow-lg text-green-800 rounded-l-[3px] font-medium text-sm border border-green-800 px-2 py-0.5  hover:text-white hover:bg-green-800 focus:outline focus:outline-offset-0 focus:outline-2 focus:outline-blue-700 transition ease-in-out duration-900">Present</button>
                    <button @click="openModal1" class="shadow-lg text-red-500 font-medium text-sm border border-red-500 px-2 py-0.5  hover:text-white hover:bg-red-500 focus:outline focus:outline-offset-0 focus:outline-2 focus:outline-red-500 transition ease-in-out duration-900">Absent</button>
                    <button @click="openModal2" class="shadow-lg text-yellow-400 font-medium rounded-r-[3px] text-sm border border-yellow-400 px-2 py-0.5  hover:text-white hover:bg-yellow-400 focus:outline focus:outline-offset-0 focus:outline-2 focus:outline-yellow-400 transition ease-in-out duration-900">Late</button>
                </div>
            </div>

            <!--  -->
            <div class=" mt-5 mb-4 relative overflow-x-auto">
                <table class="border-collapse border table-auto border-slate-400 w-full p-6 ">
                    <thead class="" style="font-size:13px">
                        <tr class="p-2">
                        
                            <th class="border border-slate-300 py-2 px-[80px] md:px-4">Name</th>
                            <th class="border border-slate-300 py-2 px-4">Roll</th>
                            <th class="border border-slate-300 py-2 px-[40px] md:px-4">Reg No</th>
                            <th class="border border-slate-300 py-2 px-4">Status</th>
                            <th class="border border-slate-300 py-2 px-7 md:px-4">Remarks</th>
                        </tr>
                    </thead>
                    <tbody style="font-size:12px;">
                        <tr class="hover:bg-gray-200 dark:hover:bg-gray-800" v-for="dist in monthattn" :key="dist.reg">
                            <td class="border border-slate-300 px-2 py-3"> <div class="text-center">{{dist.name}}</div></td>
                            <td class="border border-slate-300 px-1 py-3"><div class="text-center">{{dist.rollno}}</div></td>
                            <td class="border border-slate-300 px-2 py-3"><div class="text-center p-2">{{dist.reg}}</div></td>
                            <td class="border border-slate-300 px-2 py-3">
                                <div id="table" class="text-center flex justify-center">
                                    <button @click="presentb(dist)"  class=" text-green-800 rounded-l-[3px] font-medium text-sm border border-green-800 px-2 py-0.5 hover:text-white hover:bg-green-800 focus:outline focus:outline-offset-0 focus:outline-2 focus:outline-blue-700 transition ease-in-out duration-900">Present</button>
                                    <button @click="absentb(dist)" class=" text-red-500 font-medium text-sm border border-red-500 px-2 py-0.5  hover:text-white hover:bg-red-500 focus:outline focus:outline-offset-0 focus:outline-2 focus:outline-red-500 transition ease-in-out duration-900">Absent</button>
                                    <button @click="lateb(dist)" class=" text-yellow-400 font-medium rounded-r-[3px] text-sm border border-yellow-400 px-2 py-0.5  hover:text-white hover:bg-yellow-400 focus:outline focus:outline-offset-0 focus:outline-2 focus:outline-yellow-400 transition ease-in-out duration-900">Late</button>
                                </div>
                            </td>
                            <td class="border border-slate-300 px-2 py-3 md:px-3"><div class="text-center">
                                <input type="text" id="first_name" class="bg-white border border-blue-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 w-full px-3 py-1 dark:bg-white-700 dark:border-blue-600 dark:placeholder-blue-400 placeholder-blue-400 placeholder-font-light placeholder-text-sm dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Remarks" required>
                            </div></td>
                           
                        </tr>
                        <!--  -->

                        
                    </tbody>
                </table>
                <!--  -->
                  
            </div>
        </div>
        
    </div>
    

    <!-- modal -->

    
</template>

<script setup>

import Swal from 'sweetalert2'
import { ref } from 'vue'


// export default {
    // setup(){
   

    const select1 = ref('')
    const select2 = ref('')
    const select3 = ref('')
    const selecttext1 = ref('')
    const selecttext2 = ref('')
    const selecttext3 = ref('')
    const showbody1 = ref(false)
    // const showsec = ref(0)
    const session = ref('2021-2022 SESSION')
    // const showbody = ref(null)
    const showerror = ref(null)
    const regnum = ref('')
    
    const monthattn = ref([
        {name:'Toyibu Olaniyi Abidogun',reg: 'DEFO 1023', rollno:1},
        {name:'Mujeeb Shina Abdullateef ',reg: 'DECO 1576', rollno:2},
        {name:'Samuel Adeyemi Alade ',reg: 'DEFO 1433', rollno:3},
    ])
    
    const presentb = (dist) =>{
        regnum.value = {...dist}
        Swal.fire({
              position: 'top-end',
              html: '<span><i class="fa-solid fa-check text-1xl font-bold mr-3"></i> ' + regnum.value.reg + ' marked present</span>',
              showConfirmButton: false,
              timer: 1000,
              customClass: 'custom-sweetalert-widthg1',
        })
    }

    const absentb = (dist) =>{
        regnum.value = {...dist}
        Swal.fire({
              position: 'top-end',
              html: '<span><i class="fa-solid fa-check text-1xl font-bold mr-3"></i> ' + regnum.value.reg + ' marked absent</span>',
              showConfirmButton: false,
              timer: 1000,
              customClass: 'custom-sweetalert-widthg1',
        })
    }

    const lateb = (dist) =>{
        regnum.value = {...dist}
        Swal.fire({
              position: 'top-end',
              html: '<span><i class="fa-solid fa-check text-1xl font-bold mr-3"></i> ' + regnum.value.reg + ' marked late</span>',
              showConfirmButton: false,
              timer: 1000,
              customClass: 'custom-sweetalert-widthg1',
        })
    }
    
    function openModal() {
      Swal.fire({
              position: 'top-end',
              html: '<span><i class="fa-solid fa-check text-1xl font-bold"></i> All students marked present</span>',
              showConfirmButton: false,
              timer: 1000,
              customClass: 'custom-sweetalert-widthg1',
        })
    }
    function openModal1() {
      Swal.fire({
              position: 'top-end',
              html: '<span><i class="fa-solid fa-check text-1xl font-bold"></i> All students marked absent</span>',
              showConfirmButton: false,
              timer: 1000,
              customClass: 'custom-sweetalert-widthg1',
          })
    }
    function openModal2() {
      Swal.fire({
              position: 'top-end',
              html: '<span><i class="fa-solid fa-check text-1xl font-bold"></i> All students marked late</span>',
              showConfirmButton: false,
              timer: 1000,
              customClass: 'custom-sweetalert-widthg1',
          })
    }

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
<style>

.custom-sweetalert-widthg1 {
  width: fit-content !important;
  color: white !important;
  font-size: 14px !important;
  background: green !important;
  padding: 0 50px 10px 0 !important;
  text-align: left;

}

.custom-sweetalert-widtht1 {
  width: fit-content !important;
  color: white !important;
  font-size: 14px !important;
  background: rgba(107, 9, 9, 0.914) !important;
  text-align: left;
  padding: 0 50px 10px 0 !important;

}



</style>
