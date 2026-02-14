<script setup>
import { reactive } from "vue";
import VeeValInput from "../../../components/VeeValInput.vue"
import { useForm } from "vee-validate";
import { employeeEditSchema } from "../../../schemas";
import { nigeriaStatesList } from "../../../services";
// employeeEditSchema
const name = "joshua"
const inputs = [
    
    {name: "firstname",  label: "Firstname", type: "text", placeholder:"Firstname", required: true, w:'w-full sm:w-1/2 lg:w-4/12 [font-size:14px]'},
    {name: "lastname", label: "Lastname", type: "text", placeholder:"Lastname", required: true, w: 'w-full sm:w-1/2 lg:w-4/12 [font-size:14px]'}, 
	{
		name: "role", label: "Role", type: "select", required: true, w: 'w-full sm:w-1/2 lg:w-4/12 [font-size:14px]', options: [
			{text: "Choose...", value: undefined},
			{text: "Developer", value: '2'},
			{text: "Teacher", value: '3'},
            {text: "Tester", value: '3'},
		]
	},
    //
    {
		name: "gender", label: "Gender", type: "select", required: true, w: 'w-full sm:w-1/2 lg:w-4/12 [font-size:14px]', options: [
			{text: "Choose...", value: undefined},
			{text: "Male", value: '2'},
			{text: "Female", value: '3'},
            // {text: "Tester", value: '3'},
		]
	},
    {name: "dob", label: "Date of Birth", type: "date",  required: true, w: 'w-full sm:w-1/2 lg:w-4/12 [font-size:14px]'}, 
    {
		name: "religion", label: "religion", type: "select", required: true, w: 'w-full sm:w-1/2 lg:w-4/12 [font-size:14px]', options: [
			{text: "Choose...", value: undefined},
			{text: "Christianity", value: '2'},
			{text: "Islam", value: '3'},
            // {text: "Tester", value: '3'},
		]
	},
    //mobile, email, dept
    {name: "phone", label: "Mobile No", type: "text", placeholder:"Phone", required: true, w:'w-full sm:w-1/2 lg:w-4/12 [font-size:14px]'},
    {name: "email", label: "Email", type: "text", placeholder:"Email", required: true, w: 'w-full sm:w-1/2 lg:w-4/12 [font-size:14px]'}, 
    {
		name: "department", label: "Department", type: "select", required: true, w: 'w-full sm:w-1/2 lg:w-4/12 [font-size:14px]', options: [
			{text: "Choose...", value: undefined},
			{text: "Developer", value: '2'},
			{text: "Teacher", value: '3'},
            // {text: "Tester", value: '3'},
		]
	},

    //
    {
		name: "designation", label: "Designation", type: "select", required: true, w: 'w-full  lg:w-1/2 [font-size:14px]', options: [
			{text: "Choose...", value: undefined},
			{text: "Developer", value: '2'},
			{text: "Teacher", value: '3'},
            // {text: "Tester", value: '3'},
		]
	},
    {name: "file", label: "Upload Image", type: "file", required: true, w: 'w-full sm:w-1/2 lg:1/2 [font-size:14px]'}, 
    //
    {
		name: "state", label: "State", type: "select", required: true, w: 'w-full  sm:w-1/2 lg:w-4/12 [font-size:14px]', options: [
			{text: "Choose...", value: undefined},
			...nigeriaStatesList.map(each => ({value:each, text:each}))
		]
	},
    {
		name: "lga", label: "LGA", type: "select", required: true, w: 'w-full  sm:w-1/2 lg:w-4/12 [font-size:14px]', options: [
			{text: "Choose...", value: undefined},
			{text: "Oriire", value: '2'},
			{text: "Ibadan North", value: '3'},
            {text: "Ibadan South", value: '3'},
		]
	},
    {name: "city", label: "City", type: "text", placeholder:"City", required: true, w: 'w-full sm:w-1/2 lg:w-4/12 [font-size:14px]'}, 
    {name: "address", label: "Address", type: "textarea", placeholder:"No 12 Nigeria.....", required: true, w: 'w-full  [font-size:14px]'}, 
   
]
const {handleSubmit, errors} = useForm({
    validationSchema:employeeEditSchema
})

const state = reactive({})
</script>

<template>
    <div class="container font md:container mx-auto p-3 md:p-4">
        <div class="flex  justify-between items-center">
            <h2 class="font-medium text-sm uppercase mt-4 md:mt-0">Edit Profile</h2>
            <div class="[font-size:12px] mt-4 md:mt-0">Dashboard Employee Edit Details</div>
        </div>
         <div class="shadow-sm my-1 p-2 flex flex-wrap mt-6">
            <div v-for="(input) of inputs" v-bind:key="input.name" class="p-2" :class="input.w">
                <VeeValInput class="w-full" :placeholder="input.placeholder" :error="errors[input.name]" :name="input.name"
                    :type="input.type" :val="input.value"  :label="input.label" :required="input.required" :options="input.options" />
            </div>
            <div class="flex justify-center mt-3 mb-5 w-full mx-auto">
                  <button class="bg-[#003399] py-2 px-6 rounded-md text-white text-sm"><i class="fa fa-save"></i> Update</button>
            </div>
        </div>
        <!-- <div class="mt-4">
           
        </div> -->
    </div>
</template>