<script setup>
import {useForm} from 'vee-validate';
import VeeValInput from '../../../components/VeeValInput.vue';
import AcademicsIcon from '../../../components/icons/AcademicsIcon.vue'
import StudentsIcon from '../../../components/icons/StudentsIcon.vue'
import CredentialsIcon from '../../../components/icons/CredentialsIcon.vue'
import ImageIcon from '../../../components/icons/ImageIcon.vue'
import GuardiansIcon from '../../../components/icons/GuardiansIcon.vue'
import {enrollStudentSchema} from '../../../schemas'
import {nigeriaStatesList} from '../../../services'
import { reactive, ref } from 'vue';
import Swal from 'sweetalert2'
import { object } from 'zod';


const select91 = ref('2022-2023')
const select92 = ref('')
const select93 = ref('')
const select94 = ref('')
const select95 = ref('')
const displaybody = ref(false)
const displaybody2 = ref(true)

const displayarea = () =>{
	if(select92.value == ''){
		Swal.fire({
            position: 'top-end',
            html: '<span><i class="fa-solid fa-triangle-exclamation mr-3"></i> Please select a branch</span>',
            showConfirmButton: false,
            timer: 3000,
            customClass: 'custom-sweetalert-widthe1',
        })
	}else{
		displaybody.value = true
		displaybody2.value = false
	}
	
}
const academicInputs = [
	// {
	// 	name: "academicSession", label: "Academic Session", type: "select", required: true, w: 'w-full sm:w-1/2 lg:w-3/12', options: [
	// 		{text: "Choose...", value: undefined},
	// 		{text: "Choose...", value: '2'},
	// 		{text: "Choose...", value: '3'},
	// 	]
	// },
	{name: "registerNo", label: "Register No", type: "text", placeholder: "DEL/1001/2023", required: true, w: 'w-full sm:w-1/2 lg:w-3/12'},
	{name: "rollNo", label: "Roll No", type: "text", placeholder: "DEL/1001/2023", required: true, w: 'w-full sm:w-1/2 lg:w-3/12'},
	{name: "enrollDate", label: "Enroll Date", type: "date", required: true, w: 'w-full sm:w-1/2 lg:w-3/12'},
	// {
	// 	name: "department", label: "Department", type: "select", required: true, w: 'w-full sm:w-1/2 lg:w-4/12', options: [
	// 		{text: "Choose...", value: undefined},
	// 		{text: "Choose...", value: '2'},
	// 		{text: "Choose...", value: '3'},
	// 	]
	// },
	// {
	// 	name: "class", label: "Class", type: "select", required: true, w: 'w-full sm:w-1/2 lg:w-4/12', options: [
	// 		{text: "Choose...", value: undefined},
	// 		{text: "Choose...", value: '2'},
	// 		{text: "Choose...", value: '3'},
	// 	]
	// },
	// {
	// 	name: "selection", label: "Selection", type: "select", required: true, w: 'w-full sm:w-1/2 lg:w-4/12', options: [
	// 		{text: "Choose...", value: undefined},
	// 		{text: "Choose...", value: '2'},
	// 		{text: "Choose...", value: '3'},
	// 	]
	// },
]

const studentInputsA = [
	{name: "firstname", label: "First Name", type: "text", placeholder: "First name", required: true, w: 'w-full sm:w-1/2'},
	{name: "lastname", label: "Last Name", type: "text", placeholder: "Last name", required: true, w: 'w-full sm:w-1/2'},
	{name: "othername", label: "Other Name", type: "text", placeholder: "Other name", required: true, w: 'w-full sm:w-1/2'},
	{
		name: "gender", label: "Gender", type: "select", required: true, w: 'w-full sm:w-1/2', options: [
			{text: "Choose...", value: undefined},
			{text: "Male", value: '2'},
			{text: "Female", value: '3'},
		]
	},
	{name: "dob", label: "Date Of Birth", type: "date", required: true, w: 'w-full sm:w-1/2'},
	{
		name: "religion", label: "Religion", type: "select", required: true, w: 'w-full sm:w-1/2', options: [
			{text: "Choose...", value: undefined},
			{text: "Christian", value: '2'},
			{text: "Muslim", value: '3'},
		]
	},
	{
		name: "genotype", label: "Genotype", type: "select", required: true, w: 'w-full sm:w-1/2', options: [
			{text: "Choose...", value: undefined},
			{text: "AA", value: '2'},
			{text: "AS", value: '3'},
			{text: "SS", value: '3'},
		]
	},
	{
		name: "bloodGroup", label: "Blood Group", type: "select", required: true, w: 'w-full sm:w-1/2', options: [
			{text: "Choose...", value: undefined},
			{text: "A+", value: '1'},
			{text: "B+", value: '2'},
		]
	},
]

const studentInputsB = [
	{name: "email", label: "Email", type: "text", placeholder: "example@delwathon.com", required: true, w: 'w-full sm:w-1/2'},
	{name: "phone", label: "Mobile No", type: "text", placeholder: "+234", required: true, w: 'w-full sm:w-1/2'},
	{name: "motherTongue", label: "Mother Tongue", type: "text", placeholder: "Language", required: true, w: 'w-full sm:w-1/2 '},
	{
		name: "state", label: "State", type: "select", required: true, w: 'w-full sm:w-1/2', options: [
			{value: undefined, text: "Select State"},
			...nigeriaStatesList.map(each => ({...each, value: each, text: each}))
		]
	},
	{
		name: "Local Government", label: "Local government", type: "select", required: true, w: 'w-full sm:w-1/2 lg:w-1/3', options: [
			{text: "Choose", value: undefined},
			{text: "Ogbomoso North", value: '2'},
			{text: "Ogbomoso South", value: '3'},
		]
	},
	{name: "city", label: "City", type: "text", placeholder: "e.g Ibadan", required: true, w: 'w-full sm:w-1/2'},
	{name: "studentAddress", label: "Student Address", placeholder: "Address", type: "textarea", required: true, w: 'w-full'},
]

const guardianInputs = [
	{name: "guardianFirstname", label: "First Name", type: "text", placeholder: "First name", required: true, w: 'w-full sm:w-1/2 lg:w-1/3'},
	{name: "guardianLastname", label: "Last Name", type: "text", placeholder: "Last name", required: true, w: 'w-full sm:w-1/2 lg:w-1/3'},
	{name: "guardianOthername", label: "Other Name", type: "text", placeholder: "Other name", required: true, w: 'w-full sm:w-1/2 lg:w-1/3'},
	{
		name: "guardianRelationship", label: "Relationship", type: "select", required: true, w: 'w-full sm:w-1/2 lg:w-1/3', options: [
			{text: "Choose...", value: undefined},
			{text: "Father", value: '2'},
			{text: "Mother", value: '3'},
		]
	},
	{name: "guardianOccupation", label: "Occupation", type: "text", placeholder: "e.g Banker", required: true, w: 'w-full sm:w-1/2 lg:w-1/3'},
	{name: "guardianPhone", label: "Mobile No", type: "text", placeholder: "+234", required: true, w: 'w-full sm:w-1/2 lg:w-1/3'},
	{name: "guardianEmail", label: "Email", type: "text", placeholder: "example@delwathon.com", required: true, w: 'w-full sm:w-1/2 lg:w-1/3'},
	{
		name: "guardianGender", label: "Gender", type: "select", required: true, w: 'w-full sm:w-1/2 lg:w-1/3', options: [
			{text: "Choose...", value: undefined},
			{text: "Male", value: '2'},
			{text: "Female", value: '3'},
		]
	},
	{
		name: "guardianReligion", label: "Religion", type: "select", required: true, w: 'w-full sm:w-1/2 lg:w-1/3', options: [
			{text: "Choose...", value: undefined},
			{text: "Christian", value: '2'},
			{text: "Muslim", value: '3'},
		]
	},
	{
		name: "guardianState", label: "State", type: "select", required: true, w: 'w-full sm:w-1/2 lg:w-1/3', options: [
			{value: undefined, text: "Select State"},
			...nigeriaStatesList.map(each => ({...each, value: each, text: each}))
		]
	},
	{
		name: "Local Government", label: "Local government", type: "select", required: true, w: 'w-full sm:w-1/2 lg:w-1/3', options: [
			{text: "Choose", value: undefined},
			{text: "Ogbomoso North", value: '2'},
			{text: "Ogbomoso South", value: '3'},
		]
	},
	{name: "guardianCity", label: "City", type: "text", placeholder: "e.g Ibadan", required: true, w: 'w-full sm:w-1/2 lg:w-1/3'},
	{name: "guardianAddress", label: "Parmanent Address", placeholder: "Detailed Address", type: "textarea", required: true, w: 'w-full'},
]


// const branches = [
// 	{text: "Choose...", value: undefined},
// 	{text: "Branch 1", value: '1'},
// 	{text: "Branch 2", value: '2'},
// 	{text: "Branch 2", value: '3'},
// ]

const guardian = [
	{text: "Choose...", value: undefined},
	{text: "ridwanadelaja@yahoo.com", value: '1'},
	{text: "Niyi@delwathon.com", value: '2'},
	{text: "Samuel@delwathon.com", value: '3'},
	{text: "Shina@delwathon.com", value: '4'}
]


const {handleSubmit, errors} = useForm({
	validationSchema: enrollStudentSchema,
	initialValues:{firstname:"joshua"}
});

const submit = handleSubmit(values => {
	console.log(values);
})

const state = reactive({
	data:true,
	guardianList: false
})
const showGuardian = ()=>{
	state.data = false
	state.guardianList = true
}
const noshowGuardian = () =>{
	state.data = true
	state.guardianList = false
}

</script>
<template>
	<div class="px-5 md:px-10 py-5 text-sm">
		<div v-if="displaybody2">
		<h3 class="text-ed-blue dark:text-white font-semibold text-sm">Enroll New Student</h3>
		<div class="ed-shadow rounded-xl mt-5 mb-4 block  py-10 px-5">
			<div class="w-full max-w-md mx-auto">
                <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Branch <span class="text-red-400 font font-bold text-1xl">*</span></label>
                    <select id="small" v-model="select92"  class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" selected>Select Branch</option>
                        <option value="FO">Delwathon Foundation</option>
                        <option value="CO">Delwathon College</option>
                    </select>
            </div>
			<div class="mt-4 flex justify-end">
				<button @click="displayarea" class="rounded-md px-7 py-2 md:text-xs bg-[#003399] font-normal text-white hover:bg-blue-600">Proceed <i class="fas fa-right-long ml-3"></i></button>
			</div>
			
		</div>
		</div>

		<div v-if="displaybody">

		<div class="flex items-center">
			<div class="bg-ed-blue h-10 w-10 text-white rounded-l-md flex justify-center items-center">
				<AcademicsIcon />
			</div>
			<h3 class="text-ed-blue dark:text-white font-semibold ml-3">Academic Details</h3>
		</div>
		<div class="ed-shadow rounded-xl my-3 flex flex-wrap p-5">
			<div class="w-full sm:w-1/2 lg:w-3/12 p-2">
                <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Accademic Session <span class="text-red-400 font font-bold text-1xl">*</span></label>
                    <select  v-model="select91" id="small" class="block w-full  px-2 py-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        <option value="">Select Session</option>
                        <option value="2021-2022">2021-2022</option>
                        <option value="2022-2023" selected>2022-2023</option>
                    </select>
            </div>
			<div v-for="(input ) of academicInputs" v-bind:key="input.name" class="p-2" :class="input.w">
				<VeeValInput class="w-full " :placeholder="input.placeholder" :error="errors[input.name]" :name="input.name"
					:type="input.type" :label="input.label" :required="input.required" :options="input.options" />
			</div>
			<div class="w-full sm:w-1/2 lg:w-4/12 p-2">
				<label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Class <span class="text-red-400 font font-bold text-1xl">*</span></label>
				<select id="small" v-model="select93"  class="block w-full  px-2 py-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
					<option value="" selected>Select Class</option>
					<option v-if="select92 == '' " disabled class="text-red-500 text-md font font-medium">No results found</option>
					<option v-if="select92 == 'FO' " value="NU1">Nusery 1</option>
					<option v-if="select92 == 'FO' " value="NU2">Nusery 2</option>
					<option v-if="select92 == 'FO' " value="PR1">Primary 1</option>
					<option v-if="select92 == 'CO' " value="jss1">Jss1</option>
					<option v-if="select92 == 'CO' " value="jss2">Jss2</option>
					</select>
			</div>
			<div class="w-full sm:w-1/2 lg:w-4/12 p-2">
				<label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Section<span class="text-red-400 font font-bold text-1xl"> *</span></label>
				<select id="small" v-model="select94" class="block w-full  px-2 py-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
					<option value="" selected>Select Section</option>
					<option v-if="select93 == '' " disabled class="text-red-500 text-md font font-medium">No results found</option>
					<option v-if="select93 == 'NU1' || select93 == 'NU2' || select93 == 'PR1' " value="SA">A</option>
					<option v-if="select93 == 'PR1' " value="SB">B</option>
					<option v-if="select93 == 'jss1' || select93 == 'jss2' " value="Sblue">Blue</option>
					<option v-if="select93 == 'jss1' || select93 == 'jss2' " value="Sgreen">Green</option>
					</select>
			</div>
			<div class="w-full sm:w-1/2 lg:w-4/12 p-2">
				<label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Department<span class="text-red-400 font font-bold text-1xl"> *</span></label>
				<select id="small" v-model="select95" class="block w-full  px-2 py-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
					<option value="" selected>Select Dept</option>
					<option v-if="select93 == '' " disabled class="text-red-500 text-md font font-medium">No results found</option>
					<option v-if="select93 == 'NU1' || select93 == 'NU2' || select93 == 'PR1' " value="gen">General</option>
					<option v-if="select93 == 'jss1' || select93 == 'jss2' " value="sci">Science</option>
					<option v-if="select93 == 'jss1' || select93 == 'jss2' " value="comm">Commercial</option>
					<option v-if="select93 == 'jss1' || select93 == 'jss2' " value="art">Art</option>
				</select>
			</div>
			
			
		</div>


		<div class="flex items-center">
			<div class="bg-ed-blue h-10 w-10 text-white rounded-l-md flex justify-center items-center">
				<StudentsIcon />
			</div>
			<h3 class="text-ed-blue dark:text-white font-semibold ml-3">Student Details</h3>
		</div>
		<div class="ed-shadow rounded-xl my-2 p-5">
			<div class=" flex flex-wrap lg:flex-nowrap ">
				<div class="p-2">
					<div class="ed-border w-56 min-w-[14rem] h-56 flex justify-center items-center rounded">
						<ImageIcon />
					</div>
					<VeeValInput class="w-56 min-w-[14rem] mt-5" :error="errors['picture']" name="picture" type="file"
						:required="true" />
				</div>
				<div class="w-full flex flex-wrap">
					<div v-for="(input ) of studentInputsA" v-bind:key="input.name" class="px-2 py-0.5" :class="input.w">
						<VeeValInput class="w-full" :placeholder="input.placeholder" :error="errors[input.name]"
							:name="input.name" :type="input.type" :label="input.label" :required="input.required"
							:options="input.options" />
					</div>
				</div>
			</div>
			<div class="w-full flex flex-wrap">
				<div v-for="(input ) of studentInputsB" v-bind:key="input.name" class="px-2 py-0.5" :class="input.w">
					<VeeValInput class="w-full" :placeholder="input.placeholder" :error="errors[input.name]"
						:name="input.name" :type="input.type" :label="input.label" :required="input.required"
						:options="input.options" />
				</div>       
			</div>
		</div>

 
		<div class="flex items-center mt-5">
			<div class="bg-ed-blue h-10 w-10 text-white rounded-l-md flex justify-center items-center">
				<CredentialsIcon />
			</div>
			<h3 class="text-ed-blue dark:text-white font-semibold ml-3">Student Login Credentials</h3>
		</div>
		<div class="ed-shadow rounded-xl my-2 flex flex-wrap p-5">
			<div class="p-2 w-full lg:w-[40%]">
				<VeeValInput class="w-full" placeholder="emaple@gmail.com" :error="errors['guardianEmail']"
					name="guardianEmail" type="email" label="Email" :required="true" />
			</div>
			<div class="p-2 w-full lg:w-[30%]">
				<VeeValInput class="w-full" :error="errors['guardianPassword']" name="guardianPassword" type="password"
					label="Password" :required="true" />
			</div>
			<div class="p-2 w-full lg:w-[30%]">
				<VeeValInput class="w-full" :error="errors['guardianConfirmPassword']" name="guardianConfirmPassword"
					type="password" label="Confirm Password" :required="true" />
			</div>
		</div>

		<!-- guardian details start here -->
		<div class="flex items-center my-5 justify-between">
			<div class="flex items-center">
				<div class="bg-ed-blue h-10 w-10 text-white rounded-l-md flex justify-center items-center">
					<GuardiansIcon />
				</div>
				<h3 class="text-ed-blue dark:text-white font-semibold ml-3">Guardian Details</h3>
			</div>
			<div class="">
				<div class="flex gap-2 items-center">
				<div>Guardian Already Exist:</div>
					<button @click="showGuardian" class="bg-[#00A8594D] text-ed-green hover:bg-ed-green hover:text-white p-2 rounded-md">Yes</button>
					<button @click="noshowGuardian" type="button" class="bg-red-100 text-red-600 hover:bg-red-600 hover:text-white p-2 rounded-md">No</button>
				</div>
			</div>
		</div>
		<!-- details divs -->
		<div v-if="state.data">
			<div class="ed-shadow rounded-xl my-2 flex flex-wrap p-5">
				<div v-for="(input ) of guardianInputs" v-bind:key="input.name" class="p-2" :class="input.w">
					<VeeValInput class="w-full" :placeholder="input.placeholder" :error="errors[input.name]" :name="input.name"
						:type="input.type" :label="input.label" :required="input.required" :options="input.options" />
				</div>
			</div>


			<div class="flex items-center mt-5">
				<div class="bg-ed-blue h-10 w-10 text-white rounded-l-md flex justify-center items-center">
					<CredentialsIcon />
				</div>
				<h3 class="text-ed-blue dark:text-white font-semibold ml-3">Guardian Login Credentials</h3>
			</div>
			<div class="ed-shadow rounded-xl my-2 flex flex-wrap p-5">
				<div class="p-2 w-full lg:w-[40%]">
					<VeeValInput class="w-full" placeholder="emaple@gmail.com" :error="errors['email']" name="email"
						type="email" label="Email" :required="true" />
				</div>
				<div class="p-2 w-full lg:w-[30%]">
					<VeeValInput class="w-full" :error="errors['password']" name="password" type="password" label="Password"
						:required="true" />
				</div>
				<div class="p-2 w-full lg:w-[30%]">
					<VeeValInput class="w-full" :error="errors['confirmPassword']" name="confirmPassword" type="password"
						label="Confirm Password" :required="true" />
				</div>
			</div>
			<!--  -->
			<div class="flex items-center my-5">
				<div class="bg-ed-blue h-10 w-10 text-white rounded-l-md flex justify-center items-center">
					<GuardiansIcon />
				</div>
				<h3 class="text-ed-blue dark:text-white font-semibold ml-3">Guardian Profile Picture</h3>
			</div>
			<div class="ed-shadow rounded-xl my-2 flex gap-3  p-7 justify-center items-center">
				<div>
					
				</div>
				<div class="flex items-center justify-center w-10/12">
                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> oDrag and drop</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">PNG, JPG</p>
                        </div>
                        <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                </div> 
				<div>
					
				</div>
				<!-- <div class="ed-border border-gray-300 w-48 min-w-[12rem] h-48 flex justify-center items-center rounded">
					<ImageIcon />
				</div>
				<VeeValInput class="w-56 min-w-[14rem] mt-5" :error="errors['guardianPicture']" name="guardianPicture"
				type="file" :required="true" /> -->
			</div>
		</div>

		<div v-if="state.guardianList">
			<h3 class="text-ed-blue dark:text-white font-semibold text-sm"></h3>
			<div class="ed-shadow rounded-xl mt-5 mb-2 flex justify-center items-center py-10 px-5">
				<VeeValInput class="w-full max-w-md" :error="errors.guardian" name="guardian" type="select" label="Guardian" required
					:options="guardian" />
			</div>
		</div>
		<!-- ends here -->




		<div class="flex items-center mt-5">
			<div class="bg-ed-blue h-10 w-10 text-white rounded-l-md flex justify-center items-center">
				<AcademicsIcon />
			</div>
			<h3 class="text-ed-blue dark:text-white font-semibold ml-3">Previous School Details</h3>
		</div>
		<div class="ed-shadow rounded-xl my-2 flex flex-wrap p-5">
			<div class="p-2 w-full lg:w-1/2">
				<VeeValInput class="w-full" placeholder="Delwathon Group of School" :error="errors['schoolname']" name="schoolname"
					label="School Name" :required="true" />
			</div>
			<div class="p-2 w-full lg:w-1/2">
				<VeeValInput class="w-full" :error="errors['qualification']" name="qualification" label="Qualification"
					:required="true" />
			</div>
			<div class="p-2 w-full">
				<VeeValInput class="w-full" :error="errors['remark']" name="remark" type="textarea" label="Remark"
					:required="true" />
			</div>
		</div>


		<div class="flex justify-center py-2">
			<button class="bg-ed-blue text-white py-2 px-4 rounded" @click="submit">Enroll Now</button>
		</div>
		<div class="flex flex-wrap justify-between pt-10 gap-5">
			<p>2023 &copy; Delwathon Group of School</p>
			<p>Designed and Developed by Delwathon IT Solution</p>
		</div>
		</div>
	</div>
</template>
