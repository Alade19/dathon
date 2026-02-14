<script setup>
import { useForm, useField} from 'vee-validate'
import { promotionSchema } from '../../../schemas'
import {reactive} from "vue"
import Swal from 'sweetalert2'
import { ref } from 'vue'

const select1 = ref('')
const select2 = ref('')
const select3 = ref('')
const selecttext1 = ref('')
const selecttext2 = ref('')
const selecttext3 = ref('')
const passmark = ref('50%')
const showbody1 = ref(false)

const displaybody = () => {
    if(select1.value == '' || select2.value == '' || select3.value == ''){
        showbody1.value = false
        Swal.fire({
            position: 'top-end',
            html: '<span><i class="fa-solid fa-triangle-exclamation mr-3"></i> Please fill all input field</span>',
            showConfirmButton: false,
            timer: 3000,
            customClass: 'custom-sweetalert-widtht1',
        })
    }else{
        showbody1.value = true
    }
}
const {handleSubmit, errors} = useForm({
    validationSchema:promotionSchema
})
const { value: branch } = useField('branch');
const { value: classs } = useField('classs');
const { value: section } = useField('section');
const { value: passmarks } = useField('passmark');

const submit = handleSubmit(values =>{
    console.log(values,"joshau")
})

const studPromotionDetails = [
    {regNo:"DNPs-1002", name:"Joseph Nwaso", class:"Nursery 2", section:"B", percentage:"60.33%", promote_Section:"A"},
    {regNo:"DNPs-1003", name:"Stephen Obina Nwaso", class:"Nursery 2", section:"A", percentage:"60.33%", promote_Section:"A"},
    {regNo:"DNPs-1004", name:"Alawo  Nwaso", class:"Nursery 2", section:"A", percentage:"60.33%", promote_Section:"A"},
    {regNo:"DNPs-1005", name:"Chinaso Obina Amarachi", class:"Jss 2", section:"Blue", percentage:"60.33%", promote_Section:"A"}
]
// const pass = [
//     "5%","10%","15%","20%","25%","30%","35%","40%","45%", "50%",
//     "55%","60%", "65%", "70%", "75%","80%","85%","90%","95%","100%"
// ]
const pass = [
    "5%","10%","15%","20%","25%","30%","35%","40%","45%", "50%",
    "55%","60%", "65%", "70%", "75%","80%","85%","90%","95%","100%"
]

const state = reactive({
    data: studPromotionDetails,
    passScore: pass
})

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


</script>

<template>
    <div class="container md:container mx-auto font p-3 md:p-5">
        <h2 class="font-semibold text-sm uppercase mt-4 md:mt-0">Student Promotion</h2>
        <div class="mt-4">
            <div class="shadow-md  p-5">
                <div class="flex justify-between">
                    <h4 class="text-gray-700 font-medium p-2">Filter Student</h4>
                    <button @click="displaybody" class="rounded-md px-6 md:text-xs bg-[#003399] font-normal text-white">Filter</button>
                </div>
                <div class="p-2 py-4 border border-l-0 border-r-0 border-[#003399] mt-5 md:flex justify-center gap-2">
                    <div class="w-full mb-6 md:mb-0">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Branch <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <select id="small" v-model="select1" @change="getoptiontext1" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" selected>Select Branch</option>
                        <option value="FO">Delwathon Foundation</option>
                        <option value="CO">Delwathon College</option>
                        </select>
                        <!-- <span v-if="errors" class="text-red-600 text-sm">{{ errors.classs }}</span> -->
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
                        <span v-if="errors" class="text-red-600 text-sm">{{ errors.section }}</span>
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
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">PassMark (%) *</label>
                        <select  :error="errors.passmark"  id="small" v-model="passmark" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                         <option selected>Select Passmark</option>
                        <option :value="i" v-for="(data, i) of state.passScore" :key="i">{{data}}</option>
                        </select>
                        <!-- <span v-if="errors" class="text-red-600 text-sm">{{ errors.passmark }}</span> -->
                    </div>
                </div>
            </div>
        </div>
        <!--  -->

        <div v-if="showbody1" class="shadow-sm mt-10 p-2 md:p-4">
            <div class="[font-size:12px]">STUDENT PROMOTION <b>{{selecttext1}}</b>  STUDENTS <b> {{selecttext2}} - {{selecttext3}}</b></div>
            <div class="border  border-t-2 border-[#003399] mt-1"></div>
            <div class="md:flex justify-center gap-1 mt-4">
                <div class="w-full">
                </div>
                <div class="w-full">
                    <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Promote To Session *</label>
                    <select id="small" required :error="errors.section" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option >Select Sesion</option>
                        <option value="2022-2023" selected>2022-2023</option>
                        <option value="2021-2022" >2021-2022</option>
                    </select>
                </div>
                <!--  -->
                <div class="w-full">
                    <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Promote To Class *</label>
                    <select id="small" required class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Select Section</option>
                        <option value="nursery1">Nursery 1</option>
                        <option value="nursery2">Nursery 2</option>
                        <option value="primary1">Primary 1</option>
                        <option value="jss11">Jss 1</option>
                        <option value="jss2">Jss 2</option>
                        
                    </select>
                </div>
                <div class="w-full">
                </div>
            </div>
            <!-- tables -->
            <div class="relative overflow-x-auto sm:rounded-sm md:mt-5">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="p-4">
                                <div class="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Reg No
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Student Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Class
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Section
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Percentage
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Promote to Section
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" 
                        v-for="(data, i) of state.data" :key="i">
                            <td class="w-4 p-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ data.regNo }}
                            </th>
                            <td class="px-6 py-4">
                                {{ data.name }}
                            </td>
                            <td class="px-6 py-4">
                                {{ data.class }}
                            </td>
                            <td class="px-6 py-4">
                                {{ data.section }}
                            </td>
                            <td class="px-6 py-4">
                                {{ data.percentage }}
                            </td>
                            <td class="px-6 py-4">
                                <select id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option :value="data.promote_Section" selected>{{ data.promote_Section }}</option>
                                    <option value="B">B</option>
                                </select>
                            </td>
                           
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>