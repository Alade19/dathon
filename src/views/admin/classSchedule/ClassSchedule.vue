<template>
    <div class="font container mx-auto p-3 md:container md:p-7">
        <h3 class="font-medium mt-4">
            <span class="text-[#003399] text-lg ml-3 capitalize">class schedule</span>  
        </h3>
        
        <div class="mt-4">
            <div class="shadow-md  p-5">
                <div class="flex justify-between">
                    <h4 class="text-gray-700 font-medium p-2">Action</h4>
                    <div class="my-auto">
                        <button type="submit" class="rounded-md mr-1 text-sm shadow-md py-1 px-5 bg-transparent font-medium text-[#003399] border border-[#003399] hover:bg-[#003399] hover:text-white ">Create Schedule</button>
                        <button type="submit" class="rounded-md mr-1 text-sm shadow-md py-1 px-5 bg-transparent font-medium text-yellow-500 border border-yellow-500 hover:bg-yellow-500 hover:text-white ">Edit Schedule</button>
                        <button type="submit" class="rounded-md text-sm shadow-md py-1 px-6 bg-[#003399] font-medium text-white border border-[#003399] hover:bg-blue-800 ">Filter</button>
                    </div>
                </div>
                
                <div class="p-2 py-4 border border-l-0 border-r-0 border-[#003399] mt-5 md:flex justify-center gap-2">
                    <!--  -->
                    <div class="w-full mt-3 md:mt-0 mb-6 md:mb-0">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Session <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <select  v-model="select11" id="small" class="block w-full  px-2 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option value="" selected>Select Session</option>
                            <option value="2021-2022">2021-2022</option>
                            <option value="2022-2023">2022-2023</option>
                        </select>
                    </div>
                    <!--  -->
                    <div class="w-full mt-3 md:mt-0 mb-6 md:mb-0">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Term <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <select @change="getoptiontext5" v-model="select12" id="small" class="block w-full  px-2 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option value="" selected>Select Term</option>
                            <option value="FT">First Term</option>
                            <option value="ST">Second Term</option>
                            <option value="TT">Third Term</option>
                        </select>
                    </div>
                    <!--  -->
                    <div class="w-full md:w-[1700px] mt-3 md:mt-0 mb-6 md:mb-0">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Branch <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <select  @change="getoptiontext" v-model="select1" id="small" class="block w-full  px-2 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option value="" selected>Select Branch</option>
                            <option value="PS">Delwathon Nursery & Primary School</option>
                            <option value="SS">Delwathon Secondary School</option>
                        </select>
                    </div>
                    <!--  -->
                    <div class="w-full mb-6 md:mb-0 ">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Class <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <select  v-if="select1 == '' " v-model="select2" id="small" class="block w-full  px-2 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " required>
                            <option value="" selected>Select Class</option>
                            <option  class="text-red-600" disabled>No results found</option>
                        </select>
                        <select   @change="getoptiontext2" v-if="select1 == 'PS' " v-model="select2" id="small" class="block w-full  px-2 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option value="" selected>Select Class</option>
                            <option value="NU1">Nusery 1</option>
                            <option value="NU2">Nusery 2</option>
                            <option value="PR1">Primary 1</option>
                            <option value="PR2">Primary 2</option>
                            <option value="PR3">Primary 3</option>
                            <option value="PR4">Primary 4</option>
                            <option value="PR5">Primary 5</option>
                        </select>
                        <select  @change="getoptiontext2" v-if="select1 == 'SS' " v-model="select2" id="small" class="block w-full  px-2 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option value="" selected>Select Class</option>
                            <option value="jss1">Jss1</option>
                            <option value="jss2">Jss2</option>
                            <option value="jss3">Jss3</option>
                            <option value="sss1">sss1</option>
                            <option value="sss2">sss2</option>
                            <option value="sss3">sss3</option>
                        </select>
                    </div>
                    <!--  -->
                    <div  class="w-full mb-3 md:mb-0">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Section <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <select  v-if="showsec == 0 " v-model="select3" id="small" class="block w-full  px-2 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option value="" selected>Select Section</option>
                            <option  class="text-red-600" disabled>No results found</option>
                        </select>
                        <select @change="getoptiontext4" id="small" v-if="showsec == 1 " v-model="select3" class="block w-full  px-2 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        <option value="" selected>Select Section</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        </select>
                        <select  @change="getoptiontext4" id="small" v-if="showsec == 2 " v-model="select3" class="block w-full  px-2 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option value="" selected>Select Section</option>
                            <option value="GS">Gansallo</option>
                            <option value="KT">kuti</option>
                            <option value="JS">Johnson</option>
                            <option value="school">School</option>
                            </select>
                    </div>

                    

                </div>
                
            </div>
        </div>


        <!-- tble -->


        <div v-if="showtable" class="shadow-md p-2 py-2 px-3 mt-8 ">
            <h5 class="mt-3 font font-extralight text-black-300 text-md">CREATE CLASS SCHEDULE FOR <span class="font font-bold text-black text-1xl"> {{ select11 }} - {{ selecttext5 }} </span><span class="font font-bold text-black text-1xl">- {{ selecttext2}} - </span><span class="font font-bold text-black text-1xl">{{ selecttext4}}</span><span class="font font-bold text-black text-1xl">{{ session}} - {{selecttext}}</span></h5>
            <hr class="border-b-[3px] border-[#003399] my-4">

            <!--  -->
            <div class=" mt-5 mb-4 relative overflow-x-auto">
                <table class="border-collapse border table-auto border-slate-400 w-full p-6 ">
                    <thead class="" style="font-size:13px">
                        <tr class="bg-blue-800 text-white font-medium p-2">
                            <th class="border border-slate-300 py-3 px-8 md:px-10">Time</th>
                            <th class="border border-slate-300 py-2 px-[80px] md:px-4">Monday</th>
                            <th class="border border-slate-300 py-2 px-[80px] md:px-4">Tuesday</th>
                            <th class="border border-slate-300 py-2 px-[80px] md:px-4">Wednesday</th>
                            <th class="border border-slate-300 py-2 px-[80px] md:px-4">Thursday</th>
                            <th class="border border-slate-300 py-2 px-[80px] md:px-4">Friday</th>
                        </tr>
                    </thead>
                    <tbody class="z-0" style="font-size:12px;" v-for="times in timetabledata" :key="times.name">
                        <tr class="hover:bg-gray-200">
                            <td class="border border-slate-300 px-1 py-3 bg-blue-800 text-white font-medium text-xs"> <div class="text-center">{{times.title}}<br><span class="text-[10px]">{{times.time}}</span></div></td>
                            <td class="border border-slate-300 px-3 py-3"><div class="text-center w-full">
                                    <select   id="small" class="block w-full mb-1 text-center  px-2 py-3 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                        <option value="" selected>Select subject</option>
                                        <option value="gns">English Language- (101)</option>
                                        <option value="mth">Mathematics- (102)</option>
                                        <option value="hnd">Handwriting- (103)</option>
                                    </select>
                                    <select   id="small" class="block w-full text-center  px-2 py-3 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                        <option value="" selected>Select teachers</option>
                                        <option value="teach1">Delwathon teacher</option>
                                        <option value="teach2">Delwathon teacher</option>
                                    </select>
                                </div>
                            </td>
                            <td class="border border-slate-300 px-3 py-3"><div class="text-center w-full">
                                <select   id="small" class="block w-full mb-1 text-center  px-2 py-3 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                    <option value="" selected>Select subject</option>
                                    <option value="gns">English Language- (101)</option>
                                    <option value="mth">Mathematics- (102)</option>
                                    <option value="hnd">Handwriting- (103)</option>
                                </select>
                                <select   id="small" class="block w-full text-center  px-2 py-3 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                    <option value="" selected>Select teachers</option>
                                    <option value="teach1">Delwathon teacher</option>
                                    <option value="teach2">Delwathon teacher</option>
                                </select>
                                </div>
                            </td>
                            <td class="border border-slate-300 px-3 py-3"><div class="text-center w-full">
                                <select   id="small" class="block w-full mb-1 text-center  px-2 py-3 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                    <option value="" selected>Select subject</option>
                                    <option value="gns">English Language- (101)</option>
                                    <option value="mth">Mathematics- (102)</option>
                                    <option value="hnd">Handwriting- (103)</option>
                                </select>
                                <select   id="small" class="block w-full text-center  px-2 py-3 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                    <option value="" selected>Select teachers</option>
                                    <option value="teach1">Delwathon teacher</option>
                                    <option value="teach2">Delwathon teacher</option>
                                </select>
                                </div>
                            </td>
                            <td class="border border-slate-300 px-3 py-3">
                                <div class="text-center w-full">
                                <select   id="small" class="block w-full mb-1 text-center  px-2 py-3 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                    <option value="" selected>Select subject</option>
                                    <option value="gns">English Language- (101)</option>
                                    <option value="mth">Mathematics- (102)</option>
                                    <option value="hnd">Handwriting- (103)</option>
                                </select>
                                <select   id="small" class="block w-full text-center  px-2 py-3 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                    <option value="" selected>Select teachers</option>
                                    <option value="teach1">Delwathon teacher</option>
                                    <option value="teach2">Delwathon teacher</option>
                                </select>
                                </div>
                            </td>
                            <td class="border border-slate-300 px-3 py-3"><div class="text-center w-full">
                                <select   id="small" class="block w-full mb-1 text-center  px-2 py-3 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                    <option value="" selected>Select subject</option>
                                    <option value="gns">English Language- (101)</option>
                                    <option value="mth">Mathematics- (102)</option>
                                    <option value="hnd">Handwriting- (103)</option>
                                </select>
                                <select   id="small" class="block w-full text-center  px-2 py-3 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                    <option value="" selected>Select teachers</option>
                                    <option value="teach1">Delwathon teacher</option>
                                    <option value="teach2">Delwathon teacher</option>
                                </select>
                                </div>
                            </td>
 
                           
                        </tr>
                        <!--  -->

                        
                    </tbody>
                </table>
                <!--  -->
                
            </div>
        </div>
    </div>
</template>
<script setup>


import { ref } from 'vue'



    const select1 = ref('')
    const select2 = ref('')
    const select3 = ref('')
    const select11 = ref('')
    const select12 = ref('')
    const selecttext = ref('');
    const selecttext2 = ref('');
    const selecttext4 = ref('');
    const selecttext5 = ref('');
    const showsec = ref(0)
    const showtable = ref(true)
    // const showerror = ref(null)
    
    const timetabledata = ref([
        {title:'First Period', time:'8:00 AM - 8:40 AM'},
        {title:'Second Period', time:'8:40 AM - 9:20 AM'},
        {title:'Third Period', time:'9:20 AM - 10:00 AM'},
        {title:'Short Break', time:'10:00 AM - 10:10 AM'},
        {title:'Fourth Period', time:'10:10 AM - 10:50 AM'},
        {title:'Fifth Period', time:'10:50 AM - 11:30 AM'},
        {title:'Sixth Period', time:'11:30 AM - 12:10 PM'},
        {title:'Long Break', time:'12:10 PM - 12:40 AM'},
        {title:'Seventh Period', time:'12:40 PM - 1:20 PM'},
        {title:'Last Period', time:'1:20 PM - 2:00 PM'}
    ])
    
    

    function getoptiontext(event) {
      const selectedIndex = event.target.selectedIndex;
      selecttext.value = event.target.options[selectedIndex].text;
    }
    function getoptiontext5(event) {
      const selectedIndex = event.target.selectedIndex;
      selecttext5.value = event.target.options[selectedIndex].text;
    }
    function getoptiontext2(event) {
      const selectedIndex = event.target.selectedIndex;
      selecttext2.value = event.target.options[selectedIndex].text;
      if(select2.value == 'NU1' || select2.value == 'NU2' || select2.value == 'PR1' || select2.value == 'PR2' || select2.value == 'PR3' || select2.value == 'PR4' || select2.value == 'PR5'){
        showsec.value = 1
        // console.log(showsec.value)
      }else if(select2.value == 'jss1' || select2.value == 'jss2' || select2.value == 'jss3' || select2.value == 'sss1' || select2.value == 'sss2' || select2.value == 'sss3'){
        showsec.value = 2
      }else{
        showsec.value = 0
      }
    }
    function getoptiontext4(event) {
      const selectedIndex = event.target.selectedIndex;
      selecttext4.value = event.target.options[selectedIndex].text;
    }
    
    
    
//    function showfills(){
//     if(select1.value == '' || select2.value == '' || select3.value == ''){
//         showbody.value = null
//         showerror.value = 1
//     }else if(select1.value !== '' && select2.value !== '' && select3.value !== ''){
//         showbody.value = 1
//         showerror.value = null
//     }
//    }


</script>
