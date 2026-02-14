<template>
    <div class="container mx-auto">
        <div class="">
             <h4 class="text-sm">Basic Details</h4>
            <div class="border-[#003399] border-t-2 border-b-2 mt-3 p-3">
                <div class="text-sm font-medium text-[#00A859]"><i class='bx bxs-book-reader'></i> Accademic Details</div>

                <div class="lg:flex  justify-between md:space-x-1 mt-5">
                    <div class="w-full">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500">Enrolled Session</label>
                        <select  v-model="select91" id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option value="">Select Session</option>
                            <option value="2021-2022">2021-2022</option>
                            <option value="2022-2023" selected>2022-2023</option>
                        </select>
                    </div>
                    <!--  -->
                    <div class="w-full">
                        <label for="small-input" class="block mb-2 text-sm font-normal text-gray-900 dark:text-whiteafter:content-['*'] after:ml-0.5 after:text-red-500">Roll No</label>
                        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Roll number" required>
        
                    </div>
                    <!--  -->
                    <div class="w-full">
                        <label for="small-input" class="block mb-2 text-sm font-normal text-gray-900 dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500">Regiter No</label>
                        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Register number" required>
        
                    </div>
                    <!--  -->
                    <div class="w-full">
                        <label for="small-input" class="block mb-2 text-sm font-normal text-gray-900 after:content-['*'] after:ml-0.5 after:text-red-500 dark:text-white">Date</label>
                        <input type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required>
                    </div>
                     
                </div>
                <!-- first flex ends here -->
                <div class="lg:flex  justify-between mt-5 md:space-x-2">
                    <div class="w-full">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500">Branch</label>
                        <select id="small" v-model="select92"  class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="" selected>Select Branch</option>
                            <option value="FO">Delwathon Foundation</option>
                            <option value="CO">Delwathon College</option>
                            </select>
                    </div>
                    <!--  -->
                    <div class="w-full">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500">Section</label>
                        <select id="small" v-model="select94" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="" selected>Select Section</option>
                            <option v-if="select93 == '' " disabled class="text-red-500 text-md font font-medium">No results found</option>
                            <option v-if="select93 == 'NU1' || select93 == 'NU2' || select93 == 'PR1' " value="SA">A</option>
                            <option v-if="select93 == 'PR1' " value="SB">B</option>
                            <option v-if="select93 == 'jss1' || select93 == 'jss2' " value="Sblue">Blue</option>
                            <option v-if="select93 == 'jss1' || select93 == 'jss2' " value="Sgreen">Green</option>
                            </select>
                    </div>
                    <!--  -->
                    <!--  -->
                    <div class="w-full">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500">Class</label>
                        <select id="small" v-model="select93"  class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="" selected>Select Class</option>
                            <option v-if="select92 == '' " disabled class="text-red-500 text-md font font-medium">No results found</option>
                            <option v-if="select92 == 'FO' " value="NU1">Nusery 1</option>
                            <option v-if="select92 == 'FO' " value="NU2">Nusery 2</option>
                            <option v-if="select92 == 'FO' " value="PR1">Primary 1</option>
                            <option v-if="select92 == 'CO' " value="jss1">Jss1</option>
                            <option v-if="select92 == 'CO' " value="jss2">Jss2</option>
                            </select>
                    </div>
                    <!--  -->
                    <div class="w-full">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500">Department</label>
                        <select id="small" v-model="select95" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="" selected>Select Dept</option>
                            <option v-if="select93 == '' " disabled class="text-red-500 text-md font font-medium">No results found</option>
                            <option v-if="select93 == 'NU1' || select93 == 'NU2' || select93 == 'PR1' " value="gen">General</option>
                            <option v-if="select93 == 'jss1' || select93 == 'jss2' " value="sci">Science</option>
                            <option v-if="select93 == 'jss1' || select93 == 'jss2' " value="comm">Commercial</option>
                            <option v-if="select93 == 'jss1' || select93 == 'jss2' " value="art">Art</option>
                        </select>
                    </div>
                </div>
                <!-- flex 2 ends here -->
                <!-- Student Details -->
                <div class="grid gap-6 mb-6 grid-cols-1 md:grid-cols-3 mt-5">
                    <div class="text-sm font-medium text-[#00A859] col-span-3 mt-2"><i class='bx bxs-book-reader'></i> Student Details</div>
                    <div class="col-span-3 md:col-span-1">
                        <div class="flex items-center justify-center w-full">
                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or Drag and drop</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">PNG, JPG</p>
                                </div>
                                <input id="dropzone-file" type="file" class="hidden" />
                            </label>
                        </div> 
                    </div>
                    <!--  -->
                    <div class="col-span-3 md:col-span-2">
                        <div class="grid md:grid-cols-2 gap-2">
                            <div class="w-full">
                                <label for="small-input" class="block mb-2 text-sm font-normal text-gray-900 dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500">First Name</label>
                                <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name" required>
                            </div>
                            <!--  -->
                            <div class="w-full">
                                <label for="small-input" class="block mb-2 text-sm font-normal text-gray-900 dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500">Middle Name</label>
                                <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Middle name" required>
                            </div>
                            <!--  -->
                            <div class="w-full">
                                <label for="small-input" class="block mb-2 text-sm font-normal text-gray-900 dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500">Last Name</label>
                                <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name" required>
                            </div>
                            <!--  -->
                            <div class="w-full">
                                <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500">Gender</label>
                                <select id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <!-- <option selected>Select Dept</option> -->
                                <option value="male" selected>Male</option>
                                <option value="female">Female</option>
                                </select>
                            </div>
                            <!--  -->
                            <div class="w-full">
                                <label for="small-input" class="block mb-2 text-sm font-normal text-gray-900 dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500">Date</label>
                                <input type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required>
                            </div>
                             <!--  -->
                             <div class="w-full">
                                <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500">Religion</label>
                                <select id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <!-- <option selected>Select Dept</option> -->
                                <option value="christianity" selected>Christianity</option>
                                <option value="islam">Islam</option>
                                </select>
                            </div>
                        </div>
                        <!-- grid  inside col-span-2 ends here -->
                    </div>
                    <!-- col-span-2 end here -->
                    
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <div class="w-full">
                            <label for="small-input" class="block mb-2 text-sm font-normal text-gray-900 dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500">Genotype</label>
                            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Genotype" required>
                        </div>
                        <div class="w-full">
                            <label for="small-input" class="block mb-2 text-sm font-normal text-gray-900 dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500">Blood Group</label>
                            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Blood group" required>
                        </div>
                        <div class="w-full">
                            <label for="small-input" class="block mb-2 text-sm font-normal text-gray-900 dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500">Mother Tongue</label>
                            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mother tongue" required>
                        </div>
                        <!--  -->
                        <div class="w-full">
                            <label for="small-input" class="block mb-2 text-sm font-normal text-gray-900 dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500">Email</label>
                            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required>
                        </div>
                        <div class="w-full">
                            <label for="small-input" class="block mb-2 text-sm font-normal text-gray-900 dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500">Mobile Number</label>
                            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mobile number" required>
                        </div>
                        <div class="w-full">
                            <label for="small-input" class="block mb-2 text-sm font-normal text-gray-900 dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500">City</label>
                            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City" required>
                        </div>
                        <!--  -->
                        <div class="w-full">
                            <label for="small-input" class="block mb-2 text-sm font-normal text-gray-900 dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500">State</label>
                            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="State" required>
                        </div>
                        <div class="w-full">
                            <label for="small-input" class="block mb-2 text-sm font-normal text-gray-900 dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500">LGA</label>
                            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="LGA" required>
                        </div>
                        <div class="w-full">
                            <label for="small-input" class="block mb-2 text-sm font-normal text-gray-900 dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500">Address</label>
                            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address" required>
                        </div>
                        <!--  -->

                    </div>
                <!-- Guardian Detail -->
                <div class="text-sm font-medium text-[#00A859] col-span-3 mt-2"><i class='bx bxs-book-reader'></i>Guardian Details</div>
                <div class="grid md:grid-cols-4 mt-2 shadow-sm p-3 justify-items-center">
                    <div></div>
                    <div class="w-full col-span-2">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500">Guardian</label>
                        <select id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Select Branch</option>
                        <option value="1">Mr Awoniyi</option>
                        <option value="2">Mr Toyib</option>
                        <option value="3">Mr Samuel</option>
                        <option value="4">Ridwan Alaja</option>
                        </select>
                    </div>
                    <div></div>
                    <!-- <div class="max-w-md  justify-center">
                        <label for="small-input" class="block mb-2 text-sm font-normal text-gray-900 dark:text-white">Guardian*</label>
                        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address" required>
                    </div> -->
                </div>
                <!-- previous sch details -->
                <div class="text-sm font-medium text-[#00A859] col-span-3 mt-3"><i class='bx bxs-graduation'></i>Previous School Details</div>
                <div class="grid md:grid-cols-2 gap-2 mt-2">
                    <div class="max-w-md  justify-center">
                        <label for="small-input" class="block mb-2 text-sm font-normal text-gray-900 dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500">School Name</label>
                        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="School name" required>
                    </div>
                    <div class="max-w-md  justify-center">
                        <label for="small-input" class="block mb-2 text-sm font-normal text-gray-900 dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500">Qualification</label>
                        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="4.00" required>
                    </div>
                    <div class="w-full col-span-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                    </div>
                </div>
                <!--  -->
            </div>
            <div class="flex justify-center mt-2 mb-6">
                <button class=" px-4 p-2 text-white bg-[#00A859] rounded-md"> <i class="fa fa-edit"></i> Update</button>
            </div>
           
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";


const select91 = ref('2022-2023')
const select92 = ref('')
const select93 = ref('')
const select94 = ref('')
const select95 = ref('')

</script>