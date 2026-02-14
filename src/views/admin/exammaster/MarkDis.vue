<template>
	<div class="px-3 md:px-10 py-5 text-sm mx-auto ">
		<h3 class="font-semibold">MAark Distributions</h3>
		<div class="mt-5">
			<button @click="openmodal"
				class="px-3 border transition border-[#00A859] hover:bg-[#00A859] hover:text-white py-2 rounded-sm text-green-700">
				<i class="bx bx-plus"></i> ADD NEW DISTRIBUTION</button>
		</div>
		
        <div class=" px-4 mt-14 py-4 shadow-lg">
            <div class="  justify-between">
                <h3 class="font-light text-lg  pb-2">DISTRIBUTIONS</h3>
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
                            <th class="py-2 px-4 text-center">Session</th>
                            <th class="py-2 px-[25px] md:px-4 text-center">Class</th>
                            <th class="py-2 px-[40px] md:px-4 text-center">Long Name</th>
                            <th class="py-2 px-4 text-center">Short Name</th>
                            <th class="py-2 px-4 text-center">Value</th>
                            <th class="py-2 px-10 mb:px-4 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody  style="font-size:12px;">

                        <tr v-for="dist in distributions" :key="dist.id"  class="hover:bg-gray-100 dark:hover:bg-gray-700 border-slate-400 border-collapse border-b">
                            <td class=" px-2 py-3" > <div class="text-center">{{ dist.id }}</div></td>
                            <td class=" px-2 py-3"> <div class="text-center">{{ dist.branch }}</div></td>
                            <td class=" px-2 py-3"> <div class="text-center">{{ dist.session }}</div></td>
                            <td class=" px-2 py-3"> <div class="text-center">{{ dist.class }}</div></td>
                            <td class=" px-2 py-3"> <div class="text-center">{{ dist.longname }}</div></td>
                            <td class=" px-2 py-3"> <div class="text-center">{{ dist.shortname }}</div></td>
                            <td class=" px-2 py-3"> <div class="text-center">{{ dist.valuee }}</div></td>
                            <td class=" px-2 py-3"> <div class="text-center">
                                <button @click="openmodal3(dist)" class="bg-green-200 rounded-md px-2 py-2 mr-2 text-center text-xs text-green-700 transition duration-200 ease-out hover:ease-in hover:bg-green-900 hover:text-white"><i class="fa-solid fa-pen-to-square"></i></button>
                                <button @click="deletemodal(dist)" class="bg-red-200 rounded-md px-2 py-2 text-center text-xs text-red-700 hover:bg-red-800 hover:text-white transition duration-200 ease-out hover:ease-in">
                                    <i class="fa-solid fa-trash-can"></i></button>
                                
                            </div></td>
                        </tr>
                            <!-- update modal -->

                            <TransitionRoot appear :show="isOpen3" as="template">
                                <Dialog as="div" @close="closeModal3" class="relative z-50 ">
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
                            
                                  <div class="fixed inset-0  mx-auto md:place-content-center">
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
                                          class="w-full max-w-md  transform overflow-hidden overflow-y-auto h-full rounded-md bg-white dark:bg-dark py-3 px-3 text-left align-middle shadow-xl transition-all"
                                        >
                                          <DialogTitle
                                            as="h3"
                                            class="text-sm font-medium leading-6 text-black dark:text-white"
                                          >
                                          EDIT DISTRIBUTION <span class="ml-1 shadow-0 relative -top-[2px]"><i class="fa-solid fa-plus text-white bg-green-700 p-1 rounded-xl text-[10px] text-center "></i></span>
                                          </DialogTitle>
                                          <!-- <hr class="border-b-2 mt-2 border-[#003399] w-full"> -->
                                          <p v-if="showerror1" class="text-[12px] font-bold text-red-500 tracking-wide pl-0 mt-4">Please fill all input field***</p>
                                            <div class="w-full mt-2 mb-3">
                                                <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Branch <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                                                <select :v-model="select99 = updatedata.branch" :value="updatedata.branch" id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                                    <option value="" selected>Select Branch</option>
                                                    <option value="Delwathon Foundation">Delwathon Foundation</option>
                                                    <option value="Delwathon College">Delwathon College</option>
                                                </select>
                                            </div>
                        
                                            <div class="w-full mb-3">
                                                <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Session <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                                                <select  :value="updatedata.session" id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                                    <option value="">Select Session</option>
                                                    <option value="2021-2022">2021-2022</option>
                                                    <option value="2022-2023" selected>2022-2023</option>
                                                </select>
                                            </div>
                        
                                            <div class="w-full mb-3">
                                                <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Class <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                                                <select :value="updatedata.class"  id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                                    <option value="" selected>Select Class</option>
                                                    <option v-if="select99 == '' " disabled class="text-red-500 text-md font font-medium">No results found</option>
                                                    <option v-if="select99 == 'Delwathon Foundation' " value="Nursery 1">Nusery 1</option>
                                                    <option v-if="select99 == 'Delwathon Foundation' " value="Nursery 2">Nusery 2</option>
                                                    <option v-if="select99 == 'Delwathon Foundation' " value="Primary 1">Primary 1</option>
                                                    <option v-if="select99 == 'Delwathon college' " value="Jss 1">Jss1</option>
                                                    <option v-if="select99 == 'Delwathon College' " value="Jss 2">Jss2</option>
                                                </select>
                                            </div>
                        
                                            <div class="w-full mb-3">
                                                <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Distribution Name: <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                                                <input  :value="updatedata.longname"  placeholder="Name" id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                                
                                            </div>
                                            <div class="w-full mb-3">
                                                <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Short Code: <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                                                <input   :value="updatedata.shortname" placeholder="Short Code" id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                                
                                            </div>
                                            <div class="w-full mb-6">
                                                <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Value: <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                                                <div class="flex">
                                                    <span @click="updatedata.valuee --" class="bg-green-700 text-white text-center my-auto py-2 px-3 rounded-l-lg cursor-pointer"><i class="fa-solid fa-minus text-center"></i></span>
                                                    <input  :value="updatedata.valuee" id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                                    <span @click="updatedata.valuee++" class="bg-green-700 text-white text-center my-auto py-2 px-3 rounded-r-lg cursor-pointer"><i class="fa-solid fa-plus text-center"></i></span>
                                                </div>
                                            </div>
                        
                                            <div class="md:bg-gray-100 md:-mx-3 md:-mb-3 md:mt-11 md:py-[13px] sm:flex sm:flex-row-reverse sm:px-6 dark:bg-slate-800">
                                                <button @click="closeModal3" class="inline-flex w-full mb-2 md:mb-0 justify-center rounded-md bg-[#00A859] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto">
                                                    Update</button>
                                                <button  @click="closeModal3" class="mb-2 md:mb-0 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                                                    Cancel</button>
                                                
                                            </div>
                            
                                          
                                        </DialogPanel>
                                      </TransitionChild>
                                    </div>
                                  </div>
                                </Dialog>
                              </TransitionRoot>
                            <!-- update modal -->


                            <!-- delete -->
                            <TransitionRoot appear :show="isOpen2" as="template">
                                <Dialog as="div" class="relative z-50">
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

                                <div class="fixed inset-0   md:ml-12">
                                    <div class="flex min-h-full items-center justify-center p-4 text-center">
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
                                        class="w-full max-w-md transform overflow-hidden overflow-y-auto h-full rounded-md bg-white dark:bg-dark px-0 py-3 text-left align-middle shadow-xl transition-all"
                                        >
                                        <DialogTitle
                                            as="h3"
                                            class="text-lg font-medium leading-6 text-gray-500 px-6 dark:text-gray-200"
                                        >
                                            Confirm Delete 
                                            <span @click="closeModal2" class="relative top-1 ml-[240px] text-3xl font-extralight cursor-pointer"><i class="fa-solid fa-xmark"></i></span>
                                        </DialogTitle>
                                        <hr class="border-b-1 border-[#003399] w-full block mt-3">
                                        <div class="mt-3">
                                            <h4 class="text-center text-3xl font-medium text-gray-600 dark:text-gray-200">Are you sure?</h4>
                                            <p class="text-sm text-gray-500 text-center font-light mt-1 dark:text-gray-300">
                                            Do you want to delete this record <span class="text-black font-bold dark:text-gray-50">{{updatedata.longname}}</span>
                                            </p>
                                        </div>
                                        <hr class="border-b-1 border-[#003399] w-full block mt-4  ">

                                        <div class="flex space-x-2 mt-2 place-content-end mb-1 px-6">
                                            <button @click="closeModal2" class="px-2 py-2 bg-blue-300 rounded-md text-white font-bold text-md hover:bg-blue-600 transition duration-200 ease-out hover:ease-in">No</button>
                                            <button @click="confirmdelete" class="px-2 py-2 bg-red-300 text-white font-bold text-md rounded-md hover:bg-red-600 transition duration-200 ease-out hover:ease-in">Yes,Proceed</button>
                                        </div>

                                        
                                        </DialogPanel>
                                    </TransitionChild>
                                    </div>
                                </div>
                                </Dialog>
                            </TransitionRoot>
                            <!-- delete modal end -->
                        <!-- </tr> -->
                    </tbody>
                </table>
                <!--  -->
            </div>
        </div>
    </div>



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
    
          <div class="fixed inset-0   mx-auto md:place-content-center">
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
                  class="w-full max-w-md  transform overflow-hidden overflow-y-auto h-full rounded-md bg-white dark:bg-dark py-3 px-3 text-left align-middle shadow-xl transition-all"
                >
                  <DialogTitle
                    as="h3"
                    class="text-sm font-medium leading-6 text-black dark:text-white"
                  >
                  ADD NEW DISTRIBUTION <span class="ml-1 shadow-0 relative -top-[2px]"><i class="fa-solid fa-plus text-white bg-green-700 p-1 rounded-xl text-[10px] text-center "></i></span>
                  </DialogTitle>
                  <!-- <hr class="border-b-2 mt-2 border-[#003399] w-full"> -->
                  <!-- <p v-if="showerror1" class="text-[12px] font-bold text-red-500 tracking-wide pl-0 mt-4">Please fill all input field***</p> -->
                    <div class="w-full mt-2 mb-3">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Branch <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <select   v-model="select11" id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option value="" selected>Select Branch</option>
                            <option value="FO">Delwathon Foundation</option>
                            <option value="CO">Delwathon College </option>
                        </select>
                    </div>

                    <div class="w-full mb-3">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Session <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <select  v-model="select12" id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option value="">Select Session</option>
                            <option value="2021-2022">2021-2022</option>
                            <option value="2022-2023" selected>2022-2023</option>
                        </select>
                    </div>

                    <div class="w-full mb-3">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Class <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <select v-model="select13" id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option value="" selected>Select Class</option>
                            <option v-if="select11 == '' " disabled class="text-red-500 text-md font font-medium">No results found</option>
                            <option v-if="select11 == 'FO' " value="NU1">Nusery 1</option>
                            <option v-if="select11 == 'FO' " value="NU2">Nusery 2</option>
                            <option v-if="select11 == 'FO' " value="PR1">Primary 1</option>
                            <option v-if="select11 == 'CO' " value="jss1">Jss1</option>
                            <option v-if="select11 == 'CO' " value="jss2">Jss2</option>
                        </select>
                    </div>

                    <div class="w-full mb-3">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Distribution Name: <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <input  v-model="select51"  placeholder="Name" id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        
                    </div>
                    <div class="w-full mb-3">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Short Code: <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <input   v-model="select52" placeholder="Short Code" id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        
                    </div>
                    <div>
                        <div class="w-full mb-6">
                            <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Value: <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                            <div class="flex">
                                <span @click="subtract" class="bg-green-700 text-white text-center my-auto py-2 px-3 rounded-l-lg cursor-pointer"><i class="fa-solid fa-minus text-center"></i></span>
                                <input  v-model="select55" id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                <span @click="add" class="bg-green-700 text-white text-center my-auto py-2 px-3 rounded-r-lg cursor-pointer"><i class="fa-solid fa-plus text-center"></i></span>
                            </div>
                        </div>
                    </div>
                    

                    <div class="md:bg-gray-100 md:-mx-3 md:-mb-3 md:mt-10 md:py-3 sm:flex sm:flex-row-reverse sm:px-6 dark:bg-slate-800">
                        <button @click="savemodal" class="inline-flex w-full justify-center rounded-md bg-[#00A859] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto">
                            Save</button>
                        <button  @click="closeModal" class="mt-2 md:mt-0 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
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
const select11 = ref('')
const select12 = ref('2022-2023')
const select13 = ref('')
const select51 = ref('')
const select52 = ref('')
const select55 = ref(null)
const count55 = ref(50)
const isOpen = ref(false)
const isOpen2 = ref(false)
const isOpen3 = ref(false)
const updatedata = ref('')
// const showerror1 = ref(false)

const distributions = ref([
    {id:1, branch: "Delwathon Foundation", session: '2022-2023', class: 'Nursery 1', longname: 'Continuous Assessment', shortname: 'CA', valuee:30},
    {id:2, branch: "Delwathon Foundation", session: '2022-2023', class: 'Nursery 1', longname: 'Examination', shortname: 'Exam', valuee:60},
    {id:3, branch: "Delwathon Foundation", session: '2022-2023', class: 'Nursery 2', longname: 'Continuous Assessment', shortname: 'CA', valuee:30},
    {id:4, branch: "Delwathon Foundation", session: '2022-2023', class: 'Nursery 2', longname: 'Examination', shortname: 'Exam', valuee:60},
    {id:5, branch: "Delwathon Foundation", session: '2022-2023', class: 'Primary 1', longname: 'Attendance', shortname: 'Att', valuee:20},
    {id:6, branch: "Delwathon Foundation", session: '2022-2023', class: 'Primary 1', longname: 'Continuous Assessment', shortname: 'CA', valuee:30},
    {id:7, branch: "Delwathon Foundation", session: '2022-2023', class: 'Primary 1', longname: 'Examination', shortname: 'Exam', valuee:60},
    {id:8, branch: "Delwathon College", session: '2022-2023', class: 'Jss 1', longname: 'Attendance', shortname: 'Att', valuee:20},
    {id:9, branch: "Delwathon College", session: '2022-2023', class: 'Jss 1', longname: 'Continuous Assessment', shortname: 'CA', valuee:30},
    {id:10, branch: "Delwathon College", session: '2022-2023', class: 'Jss 1', longname: 'Examination', shortname: 'exam', valuee:60},
    {id:11, branch: "Delwathon College", session: '2022-2023', class: 'Jss 2', longname: 'Attendance', shortname: 'Att', valuee:20},
    {id:12, branch: "Delwathon College", session: '2022-2023', class: 'Jss 2', longname: 'Continuous Assessment', shortname: 'CA', valuee:30},
    {id:13, branch: "Delwathon College", session: '2022-2023', class: 'Jss 2', longname: 'Examination', shortname: 'exam', valuee:60},
])

const deletemodal = (dist) =>{
    isOpen2.value = true
    updatedata.value = {...dist}
}
const closeModal2 = () =>{
    isOpen2.value = false
}
const openmodal = () =>{
    isOpen.value = true
}
const openmodal3 = (dist) =>{
    isOpen3.value = true
    updatedata.value = {...dist}
}
const closeModal3 = () =>{
    isOpen3.value = false
}
const closeModal = () =>{
    isOpen.value = false
    select55.value = null
    count55.value = 50
}
const confirmdelete = () =>{
    isOpen2.value = false
    Swal.fire({
        position: 'top-end',
        html: '<span><i class="fa-solid fa-triangle-exclamation mr-3"></i> Distribution deleted sucessfully</span>',
        showConfirmButton: false,
        timer: 1500,
        customClass: 'custom-sweetalert-width0',
    })
}

const add = () => {
    count55.value += 1
    select55.value = count55.value
}
const subtract = () => {
    count55.value -= 1
    select55.value = count55.value
}
const savemodal = () => {
    if(select11.value == '' || select12.value == '' || select13.value == '' || select51.value == '' || select52.value == '' || select55.value == null){
        Swal.fire({
            position: 'top-end',
            html: '<span><i class="fa-solid fa-triangle-exclamation mr-3"></i> Please fill all input field</span>',
            showConfirmButton: false,
            timer: 3000,
            customClass: 'custom-sweetalert-width0',
        })
    }else{
        isOpen.value = false
        select55.value = null
        count55.value = 50
    }
}
</script>
<style >
.custom-sweetalert-width0 {
  width: fit-content !important;
  color: white !important;
  font-size: 14px !important;
  background: rgba(107, 9, 9, 0.914) !important;
  text-align: left;
  padding: 0 50px 10px 0 !important;

}

</style>