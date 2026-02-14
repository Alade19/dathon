<script setup>

import {reactive, ref} from 'vue'
import { useForm} from 'vee-validate'
import VeeValInput from '../../../components/VeeValInput.vue';
import { multipleEnrollSchema } from '../../../schemas';

// selects value
const select91 = ref('2022-2023')
const select92 = ref('')
const select93 = ref('')
const select94 = ref('')
const select95 = ref('')

const intruction = [
    {text:"Download the first sample file."},
    {text:"Open the downloaded 'csv' file and carefully fill the details of the student."},
    {text:'The date you are trying to enter the "Birthday" and "Admission Date" column make sure the date format is Y-m-d (month/day/year).'},
    {text:'Do not import the duplicate "Roll Number" And "Register No".'},
    {text:'For student "Gender" use Male, Female value.'},
    {text:'If enable Automatically Generate login details, leave the "username" and "password" columns blank.'},
    {text:'The Category name comes from another table, so for the "Category", enter Category ID (can be found on the Category page).'},
    {text:' If a parent is existing / if you want to use the same parent information for multiple students only enter the "GuardianUsername" and leave other columns blank.'},    
]
//this is responsible for the section 
const intselection =[
    // {
	// 	name:"session", label: "Session", type: "select", required: true, w:'w-full md:max-w-lg', options: [
	// 		{text: "Choose...", value: undefined},
	// 		{text: "2023-1-4", value: 'a'},
	// 		{text: "2023-1-4", value: 'b'},
	// 		{text: "2023-1-4", value: 'c'},
	// 		{text: "2023-1-4", value: 'd'},
	// 	]
        
	// },
    // {
	// 	name:"branch", label: "Branch", type: "select", required: true, w:'w-full md:max-w-lg', options: [
    //     {text: "Choose...", value: undefined},
	// 		{text: "2023-1-4", value: 'a'},
	// 		{text: "2023-1-4", value: 'b'},
	// 		{text: "2023-1-4", value: 'c'},
	// 		{text: "2023-1-4", value: 'd'},
	// 	]
        
	// },
    // {
	// 	name:"dept", label: "Department", type: "select", required: true, w:'w-full md:max-w-lg', options: [
    //     {text: "Choose...", value: undefined},
	// 		{text: "2023-1-4", value: 'a'},
	// 		{text: "2023-1-4", value: 'b'},
	// 		{text: "2023-1-4", value: 'c'},
	// 		{text: "2023-1-4", value: 'd'},
	// 	]
        
	// },
    // {
	// 	name: "class", label: "Class", type: "select", required: true, w:'w-full md:max-w-lg', options: [
    //     {text: "Choose...", value: undefined},
	// 		{text: "2023-1-4", value: 'a'},
	// 		{text: "2023-1-4", value: 'b'},
	// 		{text: "2023-1-4", value: 'c'},
	// 		{text: "2023-1-4", value: 'd'},
	// 	]
        
	// },
    // {
	// 	name: "section", label: "Section", type: "select", required: true, w:'w-full md:max-w-lg', options: [
    //     {text: "Choose...", value: undefined},
	// 		{text: "2023-1-4", value: 'a'},
	// 		{text: "2023-1-4", value: 'b'},
	// 		{text: "2023-1-4", value: 'c'},
	// 		{text: "2023-1-4", value: 'd'},
	// 	]
        
	// },
    {name: "csvfile", label: "Select csv file", type: "file", placeholder: "choose file", required: true, w: 'w-full sm:max-w-lg'},
    
]

const { handleSubmit, errors } = useForm({
        validationSchema:multipleEnrollSchema
})
const submit = handleSubmit( values => {
    // alert("joshua")
	console.log(values, "joshua");
})
// 
const state  = reactive({
    data:intruction
}) 
</script>

<template>
    <div class="container font md:container mx-auto font p-3 md:p-7">
        <h2 class="font-medium text-sm uppercase mt-4 md:mt-0">Multiple Enroll</h2>
        <div class="shadow-md p-3 md:p-3 mt-4">
            <div class="flex justify-between">
                <div class=" text-sm text-green-600 font-medium mt-2"> 
                    Multiple Import
                 </div>
                 <div class="text-sm text-green-600 font-medium"> 
                    <button class="outline-none text-sm text-[#00A859] border border-[#00A859] p-2 hover:bg-[#00A859] hover:text-white rounded-sm">
                    <i class='bx bxs-download'></i> Download Multiple
                    </button>
                 </div>
            </div>
             <div class="border border-t-1 w-full border-green-600 mt-2"></div>
            <!--  -->
            <div class="p-3  bg-gray-100 opacity-0.2 mt-2 rounded-md">
                <h2 class="font-bold text-sm  mt-4 md:mt-0 text-green-800">Instruction</h2>
                <div class="text-xs m-2 text-green-800">
                    <p class="" v-for="(data,i) of state.data" :key="i">
                        <i class='bx bx-chevron-right mt-1'></i> 
                        {{ data.text }}
                    </p>
                   
                </div>
            </div>
            <!-- inputs -->
            <div class="md:flex md:flex-wrap  justify-center mb-2 mt-8 md:p-0 p-4 lg:gap-1 gap-2">
                <div class="w-full md:max-w-lg md:mr-2 mb-6">
                    <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Accademic Session <span class="text-red-400 font font-bold text-1xl">*</span></label>
                        <select  v-model="select91" id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option value="">Select Session</option>
                            <option value="2021-2022">2021-2022</option>
                            <option value="2022-2023" selected>2022-2023</option>
                        </select>
                </div>
                <div class="w-full md:max-w-lg mb-6">
                <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Branch <span class="text-red-400 font font-bold text-1xl">*</span></label>
                    <select id="small" v-model="select92"  class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" selected>Select Branch</option>
                        <option value="FO">Delwathon Foundation</option>
                        <option value="CO">Delwathon College</option>
                    </select>
            </div>
            <div class="w-full md:max-w-lg md:mr-2 mb-6 ">
				<label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Class <span class="text-red-400 font font-bold text-1xl">*</span></label>
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
			<div class="w-full md:max-w-lg mb-6">
				<label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Section <span class="text-red-400 font font-bold text-1xl">*</span></label>
				<select id="small" v-model="select94" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
					<option value="" selected>Select Section</option>
					<option v-if="select93 == '' " disabled class="text-red-500 text-md font font-medium">No results found</option>
					<option v-if="select93 == 'NU1' || select93 == 'NU2' || select93 == 'PR1' " value="SA">A</option>
					<option v-if="select93 == 'PR1' " value="SB">B</option>
					<option v-if="select93 == 'jss1' || select93 == 'jss2' " value="Sblue">Blue</option>
					<option v-if="select93 == 'jss1' || select93 == 'jss2' " value="Sgreen">Green</option>
					</select>
			</div>
            <div class="w-full md:max-w-lg md:mr-2 mb-6">
				<label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Department <span class="text-red-400 font font-bold text-1xl">*</span></label>
				<select id="small" v-model="select95" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
					<option value="" selected>Select Dept</option>
					<option v-if="select93 == '' " disabled class="text-red-500 text-md font font-medium">No results found</option>
					<option v-if="select93 == 'NU1' || select93 == 'NU2' || select93 == 'PR1' " value="gen">General</option>
					<option v-if="select93 == 'jss1' || select93 == 'jss2' " value="sci">Science</option>
					<option v-if="select93 == 'jss1' || select93 == 'jss2' " value="comm">Commercial</option>
					<option v-if="select93 == 'jss1' || select93 == 'jss2' " value="art">Art</option>
				</select>
			</div>
			
			
                <div v-for="(input, i ) of intselection" v-bind:key="i" class="mb-6" :class="input.w">
				    <VeeValInput class="w-full [font-size:13px] mb-2 text-md font-nomal text-gray-900 dark:text-white block" :placeholder="input.placeholder" :error="errors[input.name]" :name="input.name"
					:type="input.type" :label="input.label" :required="input.required" :options="input.options" />
			    </div>
            </div>
            <div class="flex justify-center py-2">
			<button class=" bg-[#00A859] text-white py-2 px-4 rounded" @click="submit">Import Now</button>
		</div>
        </div>
    </div>
</template>