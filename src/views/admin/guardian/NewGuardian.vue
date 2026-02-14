<script setup>
import { useForm } from "vee-validate";
import { reactive } from "vue";
import VeeValInput from '../../../components/VeeValInput.vue'
import { guardianSchema } from "../../../schemas";
import { nigeriaStatesList } from "../../../services";

const data = {
    name:"joshua"
}
const firstInputs = [
    {name: "firstname", label: "FirstName", value:data.name, type: "text", placeholder:"Firstname", required: true, w:'w-full sm:w-1/2 lg:w-4/12 [font-size:14px]'},
    {name: "lastname", label: "LastName", type: "text", placeholder:"Lastname", required: true, w: 'w-full sm:w-1/2 lg:w-4/12 [font-size:14px]'}, 
	{
		name: "relationship", label: "Relationship", type: "select", required: true, w: 'w-full sm:w-1/2 lg:w-4/12 [font-size:14px]', options: [
			{text: "Choose...", value: undefined},
			{text: "Father", value: '2'},
			{text: "Mother", value: '3'},
            {text: "Guardian", value: '3'},
		]
	},
    {name: "occupation", label: "Occupation", type: "text", placeholder:"Occupation", required: true, w: 'w-full sm:w-1/2 lg:w-4/12 [font-size:14px]'},
    {name: "phone", label: "Mobil No", type: "text", placeholder:"Mobile Number", required: true, w: 'w-full sm:w-1/2 lg:w-4/12 [font-size:14px]'},
    {name: "email", label: "Email", type: "text", placeholder:"Email", required: true, w:'w-full sm:w-1/2 lg:w-4/12 [font-size:14px]'},

    {name: "gender", label: "Gender", type: "select",  required: true, w:'w-full sm:w-1/2 lg:w-4/12 [font-size:14px]', options:[
        {text:"Choose...", value:undefined},
        {text:"Male", value:"male"},
        {text:"Female", value:"female"},
    ]},
    {name: "date", label: "Date of birth", type: "date", required: true, w: 'w-full sm:w-1/2 lg:w-4/12 [font-size:14px]'},

    {name: "religion", label: "Religion", type: "select", required: true, w: 'w-full sm:w-1/2 lg:w-4/12 [font-size:14px]', options:[
        {text:"Choose...", value:undefined},
        {text:"Chistianity", value:"christianity"},
        {text:"Islam", value:"islam"},
    ]},

    {name: "state", label: "State", type: "select",  required: true, w:'w-full sm:w-1/2 lg:w-4/12 [font-size:14px]', options:[
        {text:"Choose...", value:undefined},
        ...nigeriaStatesList.map(each =>({value:each, text:each}))
    ]},
    {name: "lga", label: "Local Government", type: "select", required: true, w: 'w-full sm:w-1/2 lg:w-4/12 [font-size:14px]', options:[
        {text:"Choose...", value:undefined},
        {text:"ogo oluwa", value:"1"},
        {text:"oriire", value:"2"},
        {text:"ibadan south", value:"3"},
        {text:"ibadab north", value:"4"},
    ]},
    {name: "city", label: "City", type: "text", placeholder:"City", required: true, w:'w-full sm:w-1/2 lg:w-4/12 [font-size:14px]'},
    {name: "address", label: "Permanent Address", type: "textarea", placeholder:"Permanent Address", required: true, w:'w-full  [font-size:14px]'},
]

const {handleSubmit, errors} = useForm({
    validationSchema:guardianSchema
})
const state =reactive({

})
</script>


<template>
    <div class="container mx-auto md:container p-3 md:p-5">
          <h4 class="text-sm">New Guardian</h4>
          
            <div class="border-[#003399] border-t-2 border-b-2 mt-3 p-3">
                <div class="text-sm font-medium text-[#00A859]"><i class='bx bxs-book-reader'></i>GUARDIAN DATA</div>
                  <div class="shadow-sm my-1 p-2 flex flex-wrap">
                        <div v-for="(input ) of firstInputs" v-bind:key="input.name" class="p-2" :class="input.w">
                              <VeeValInput class="w-full" :placeholder="input.placeholder" :error="errors[input.name]" :name="input.name"
                                    :type="input.type" :val="input.value"  :label="input.label" :required="input.required" :options="input.options" />
                        </div>
                  </div>
                  <div class="ed-shadow rounded-xl mt-5 mb-2 flex justify-center items-center py-10 px-5">
                  <div class="w-full max-w-md">
                  <label class="text-[#4F4F4F] dark:text-inherit after:content-['*'] after:ml-0.5 after:text-red-500">Guardian Credentials</label>
                        <input type="" value="toyibu.abidogun@delwathon.com" class=" mt-2 app-input block w-full p-2 text-sm placeholder:text-[#A4A2A2] dark:placeholder:text-[#4F4F4F]">
                  </div>
                  </div>
                  <div class="ed-shadow rounded-xl mt-5 mb-2 flex justify-center items-center py-10 px-5">
                  <VeeValInput class="w-full max-w-md" :error="errors.guardian" name="file" type="file" label="Guardian Profile Picture" required
                              />
                  </div>
                  <div class="flex justify-center mt-3 mb-5 w-full mx-auto">
                  <button class="bg-[#003399] py-2 px-6 rounded-md text-white text-sm"><i class="fa fa-save"></i> Submit</button>
                  </div>
            </div>
    </div>
</template>