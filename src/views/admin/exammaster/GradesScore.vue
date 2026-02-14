<template>
	<div class="px-3 md:px-10 py-5 text-sm mx-auto ">
		<h3 class="font-semibold">Grades</h3>
		<div class="mt-5">
			<button @click="openmodal"
				class="px-3 border transition border-[#00A859] hover:bg-[#00A859] hover:text-white py-2 rounded-sm text-green-700">
				<i class="bx bx-plus"></i> ADD NEW GRADE</button>
		</div>
		
        <div class=" px-4 mt-14 py-4 shadow-lg">
            <div class="  justify-between">
                <h3 class="font-light text-lg  pb-2">GRADES</h3>
                <hr class="border-b-1 border-[#003399] w-full block">
                <!--  -->
                <div class="md:mx-0 md:space-x-8 md:flex justify-between my-auto w-full mt-6 mx-auto px-14 md:px-0">
                    <div class="hidden md:block my-auto bg-white w-4"></div>
                    <div class="rounded-md ed-border md:my-auto w-full lg:w-[20rem] flex space-x-2 px-2  items-center mt-4">
                        <i class='bx bx-search text-sm mt-1'></i>
                        <input class="bg-transparent p-1 outline-none text-sm" placeholder="Search..."/>
                    </div>
                </div>

            </div>

		<!--  tables start here-->
            <div class=" mt-5 mb-4 relative overflow-x-auto">
                <table class=" table-auto w-full p-6 ">
                    <thead class="" style="font-size:13px">
                        <tr class="p-2 border-slate-400 border-collapse border-b">
                            <th class="py-2 px-4 text-center">S/N</th>
                            <th class="py-2 px-[55px] md:px-4 text-center">Branch</th>
                            <th class="py-2 px-4 text-center">Grade Name</th>
                            <th class="py-2 px-4 text-center">Mark Range</th>
                            <th class="py-2 px-4 text-center">Remark</th>
                            <th class="py-2 px-10 md:px-4 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody  style="font-size:12px;">

                        <tr v-for="dist in grades" :key="dist.id"  class="hover:bg-gray-100 dark:hover:bg-gray-700 border-slate-400 border-collapse border-b">
                            <td class=" px-2 py-3" > <div class="text-center">{{ dist.id }}</div></td>
                            <td class=" px-2 py-3"> <div class="text-center">{{ dist.branch }}</div></td>
                            <td class=" px-2 py-3"> <div class="text-center">{{ dist.gradename }}</div></td>
                            <td class=" px-2 py-3"> <div class="text-center">{{ dist.markfrom }} - {{dist.markto}}</div></td>
                            <td class=" px-2 py-3"> <div class="text-center">{{ dist.remark }}</div></td>
                            <td class=" px-2 py-3"> <div class="text-center">
                                <button @click="updategradee(dist)"  class="bg-green-200 rounded-md px-2 py-2 mr-2 text-center text-xs text-green-700 transition duration-200 ease-out hover:ease-in hover:bg-green-900 hover:text-white"><i class="fa-solid fa-pen-to-square"></i></button>
                                <button @click="deletegrade"  class="bg-red-200 rounded-md px-2 py-2 text-center text-xs text-red-700 hover:bg-red-800 hover:text-white transition duration-200 ease-out hover:ease-in">
                                    <i class="fa-solid fa-trash-can"></i></button>
                                
                            </div></td>
                        </tr>
                            
                        <!-- </tr> -->
                    </tbody>
                </table>
                
                <!--  -->
            </div>
        </div>
    </div>

    <!-- update -->

    <TransitionRoot appear :show="isOpenu" as="template" >
        <Dialog as="div" @close="closeModalu" class="relative z-50 ">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="fixed inset-0 bg-gray-200 bg-opacity-25" />
          </TransitionChild>
    
          <div class="fixed inset-0  md:top-[50px] top-[100px] mx-auto md:place-content-center">
            <div
              class="flex min-h-full items-center justify-center p-4 text-center"
            >
              <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
              >
                <DialogPanel
                  class="w-full max-w-md  transform overflow-hidden overflow-y-auto h-[80vh] md:h-fit rounded-md bg-white dark:bg-dark py-3 px-3 text-left align-middle shadow-xl transition-all"
                >
                  <DialogTitle
                    as="h3"
                    class="text-sm font-medium leading-6 text-black dark:text-white"
                  >
                  UPDATE GRADE <span class="ml-1 shadow-0 relative -top-[2px]"><i class="fa-solid fa-plus text-white bg-green-700 p-1 rounded-xl text-[10px] text-center "></i></span>
                  </DialogTitle>
                  <!-- <hr class="border-b-2 mt-2 border-[#003399] w-full"> -->
                  <!-- <p v-if="showerror1" class="text-[12px] font-bold text-red-500 tracking-wide pl-0 mt-4">Please fill all input field***</p> -->
                    <div class="w-full mt-3 mb-6 md:mt-6">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Branch <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <select   :value="updategrade.branch" id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option value="" selected>Select Branch</option>
                            <option value="Delwathon Foundation">Delwathon Foundation</option>
                            <option value="Delwathon College">Delwathon College</option>
                        </select>
                    </div>

                    <div class="w-full mb-6">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Session <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <select  :value="updategrade.session" id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option value="">Select Session</option>
                            <option value="2021-2022">2021-2022</option>
                            <option value="2022-2023" selected>2022-2023</option>
                        </select>
                    </div>

                    

                    <div class="w-full mb-3">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Grade Name: <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <input  :value="updategrade.gradename"  placeholder="Name" id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        
                    </div>
                    <div class="md:flex md:space-x-2 mb-6 mt-6">
                        <div class="w-full mb-4 md:mb-0">
                            <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Mark From: <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                            <div class="flex">
                                <span @click="updategrade.markfrom--" class="bg-green-700 text-white text-center my-auto py-2 px-3 rounded-l-lg cursor-pointer"><i class="fa-solid fa-minus text-center"></i></span>
                                <input  :value="updategrade.markfrom" id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                <span @click="updategrade.markfrom++" class="bg-green-700 text-white text-center my-auto py-2 px-3 rounded-r-lg cursor-pointer"><i class="fa-solid fa-plus text-center"></i></span>
                            </div>
                        </div>

                        <div class="w-full">
                            <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Mark To: <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                            <div class="flex">
                                <span @click="updategrade.markto--" class="bg-green-700 text-white text-center my-auto py-2 px-3 rounded-l-lg cursor-pointer"><i class="fa-solid fa-minus text-center"></i></span>
                                <input  :value="updategrade.markto" id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                <span @click="updategrade.markto++" class="bg-green-700 text-white text-center my-auto py-2 px-3 rounded-r-lg cursor-pointer"><i class="fa-solid fa-plus text-center"></i></span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="w-full mb-3">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Remark: <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <input   :value="updategrade.remark" placeholder="Remark" id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                    </div>

                    <div class="md:bg-gray-100 md:-mx-3 md:-mb-3 md:mt-10 md:py-5 sm:flex sm:flex-row-reverse sm:px-6 dark:bg-slate-800">
                        <button @click="savemodal" class="inline-flex w-full justify-center rounded-md bg-[#00A859] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto">
                            Update</button>
                        <button  @click="closeModalu" class="mt-3 md:mt-0 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                            Cancel</button>
                        
                    </div>
    
                  
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>

    <!-- modal -->


    <TransitionRoot appear :show="isOpen" as="template" >
        <Dialog as="div" @close="closeModal" class="relative z-50 ">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="fixed inset-0 bg-gray-200 bg-opacity-25" />
          </TransitionChild>
    
          <div class="fixed inset-0  md:top-[50px] top-[100px] mx-auto md:place-content-center">
            <div
              class="flex min-h-full items-center justify-center p-4 text-center"
            >
              <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
              >
                <DialogPanel
                  class="w-full max-w-md  transform overflow-hidden overflow-y-auto h-[80vh] md:h-fit rounded-md bg-white dark:bg-dark py-3 px-3 text-left align-middle shadow-xl transition-all"
                >
                  <DialogTitle
                    as="h3"
                    class="text-sm font-medium leading-6 text-black dark:text-white"
                  >
                  ADD NEW GRADE <span class="ml-1 shadow-0 relative -top-[2px]"><i class="fa-solid fa-plus text-white bg-green-700 p-1 rounded-xl text-[10px] text-center "></i></span>
                  </DialogTitle>
                  <!-- <hr class="border-b-2 mt-2 border-[#003399] w-full"> -->
                  <!-- <p v-if="showerror1" class="text-[12px] font-bold text-red-500 tracking-wide pl-0 mt-4">Please fill all input field***</p> -->
                    <div class="w-full mt-3 mb-6 md:mt-6">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Branch <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <select   v-model="select31" id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option value="" selected>Select Branch</option>
                            <option value="FO">Delwathon Foundation</option>
                            <option value="CO">Delwathon College </option>
                        </select>
                    </div>

                    <div class="w-full mb-6">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Session <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <select  v-model="select32" id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option value="">Select Session</option>
                            <option value="2021-2022">2021-2022</option>
                            <option value="2022-2023" selected>2022-2023</option>
                        </select>
                    </div>

                    

                    <div class="w-full mb-3">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Grade Name: <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <input  v-model="select33"  placeholder="Name" id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        
                    </div>
                    <div class="md:flex md:space-x-2 mb-6 mt-6">
                        <div class="w-full mb-4 md:mb-0">
                            <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Mark From: <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                            <div class="flex">
                                <span @click="subtract" class="bg-green-700 text-white text-center my-auto py-2 px-3 rounded-l-lg cursor-pointer"><i class="fa-solid fa-minus text-center"></i></span>
                                <input  v-model="select35" id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                <span @click="add" class="bg-green-700 text-white text-center my-auto py-2 px-3 rounded-r-lg cursor-pointer"><i class="fa-solid fa-plus text-center"></i></span>
                            </div>
                        </div>

                        <div class="w-full">
                            <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Mark To: <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                            <div class="flex">
                                <span @click="subtract2" class="bg-green-700 text-white text-center my-auto py-2 px-3 rounded-l-lg cursor-pointer"><i class="fa-solid fa-minus text-center"></i></span>
                                <input  v-model="select36" id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                <span @click="add2" class="bg-green-700 text-white text-center my-auto py-2 px-3 rounded-r-lg cursor-pointer"><i class="fa-solid fa-plus text-center"></i></span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="w-full mb-3">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Remark: <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <input   v-model="select34" placeholder="Remark" id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                    </div>

                    <div class="md:bg-gray-100 md:-mx-3 md:-mb-3 md:mt-10 md:py-5 sm:flex sm:flex-row-reverse sm:px-6 dark:bg-slate-800">
                        <button @click="savemodal" class="inline-flex w-full justify-center rounded-md bg-[#00A859] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto">
                            Save</button>
                        <button  @click="closeModal" class="mt-3 md:mt-0 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                            Cancel</button>
                        
                    </div>
    
                  
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>


      
      <div class="flex flex-wrap justify-between pt-10 gap-5 text-xs">
        <p>2023 &copy; Delwathon Group of School</p>
        <p>Designed and Developed by Delwathon IT Solution</p>
    </div>
</template>


<script setup>
import Swal from 'sweetalert2'
import {Dialog, DialogPanel, TransitionChild, TransitionRoot} from '@headlessui/vue'
import { ref } from 'vue'

// const test = ref('')
const select31 = ref('')
const select32 = ref('2022-2023')
const select33 = ref('')
const select34 = ref('')
const select35 = ref(null)
const select36 = ref(null)
const count55 = ref(50)
const count66 = ref(50)
const isOpen = ref(false)
const isOpenu = ref(false)
const updategrade = ref('')

// const showerror1 = ref(false)

const grades = ref([
    {id:1, branch: "Delwathon Foundation", gradename: 'A' , markfrom:70 ,markto:100, remark: 'Excellent'},
    {id:2, branch: "Delwathon Foundation", gradename: 'B',markfrom:55 ,markto:59, remark: 'Good'},
    {id:3, branch: "Delwathon Foundation", gradename: 'C',markfrom:40 ,markto:54, remark: 'Fair'},
    {id:4, branch: "Delwathon Foundation", gradename: 'D',markfrom:0 ,markto:39,remark: 'Poor'},
    {id:5, branch: "Delwathon College", gradename: 'A',markfrom:70 ,markto:100, remark: 'Excellent'},
    {id:6, branch: "Delwathon College", gradename: 'B',markfrom:65 ,markto:69, remark: 'Very Good'},
    {id:7, branch: "Delwathon College", gradename: 'C',markfrom:60 ,markto:64, remark: 'Good'},
    {id:8, branch: "Delwathon College", gradename: 'D', markfrom:50 ,markto:59, remark: 'Fair'},
    {id:9, branch: "Delwathon College", gradename: 'E',markfrom:40 ,markto:49, remark: 'Poor'},
    {id:10, branch: "Delwathon College", gradename: 'F',markfrom:0 ,markto:39, remark: 'Very Poor'},
])



const openmodal = () =>{
    isOpen.value = true
}
const closeModal = () =>{
    isOpen.value = false
    select35.value = null
    count55.value = 50
    select36.value = null
    count66.value = 50
}

const updategradee = (dist) =>{
    isOpenu.value = true
    updategrade.value = {...dist}
}
const closeModalu = () =>{
    isOpenu.value = false
    select35.value = null
    count55.value = 50
    select36.value = null
    count66.value = 50
}


const add = () => {
    count55.value += 1
    select35.value = count55.value
}
const subtract = () => {
    count55.value -= 1
    select35.value = count55.value
}
const add2 = () => {
    count66.value += 1
    select36.value = count66.value
}
const subtract2 = () => {
    count66.value -= 1
    select36.value = count66.value
}
const savemodal = () => {
    if(select31.value == '' || select32.value == '' || select33.value == '' || select34.value == '' || select35.value == null || select36.value == null){
        Swal.fire({
            position: 'top-end',
            html: '<span><i class="fa-solid fa-triangle-exclamation mr-3"></i> Please fill all input field</span>',
            showConfirmButton: false,
            timer: 3000,
            customClass: 'custom-sweetalert-width1',
        })
    }else{
        isOpen.value = false
        select35.value = null
        count55.value = 50
        select36.value = null
        count66.value = 50
    }
}
const deletegrade = () =>{
    Swal.fire({
        position: 'top-end',
        html: '<span><i class="fa-solid fa-triangle-exclamation mr-3"></i> Grade deleted sucessfully</span>',
        showConfirmButton: false,
        timer: 1500,
        customClass: 'custom-sweetalert-width1',
    })
}
</script>
<style>
.custom-sweetalert-width1 {
  width: fit-content !important;
  color: white !important;
  font-size: 14px !important;
  background: rgba(107, 9, 9, 0.914) !important;
  padding: 0 50px 10px 0 !important;

}

</style>
