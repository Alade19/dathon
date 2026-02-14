<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()
// const state = reactive()
const open = ref(false)
const check = ref(false)
const routeback = () =>{
    router.push("/admin/accounting/pricing")
}
const selectGroup = () =>{
    open.value = true
}
const checkBox = (a) =>{
    check.value = a
} 
</script>

<template>
    <div class="container md:container p-4">
        <div class="flex  justify-between items-center">
            <h2 class="font-medium text-sm uppercase mt-4 md:mt-0">Create Pricing</h2>
            <div class="[font-size:12px] mt-4 md:mt-0">Fee Pricing</div>
        </div>
        <div class="shadow-md md:p-7 mt-6">
            <div class="[font-size:13px]">
                PRICING CREATE
            </div>  
            
            <div class="md:p-7  p-4 py-4 border-2 border-l-0 border-r-0 border-[#003399] mt-5 ">
                <div class="md:flex justify-center gap-2">
                    <div class="w-full">
                        <label for="" class="mb-2 text-[#4F4F4F] text-sm dark:text-inherit after:content-['*'] after:ml-0.5 after:text-red-500">
                            Branch</label>
                        <select name="" class="app-input block w-full text-sm">
                            <option value="" select>Select branch..</option>
                            <option value="1" select>Delwathon Foundation</option>
                        </select>
                    </div>
                    <div class="w-full">
                        <label for="" class="mb-2 text-[#4F4F4F] text-sm dark:text-inherit after:content-['*'] after:ml-0.5 after:text-red-500">
                            Group</label>
                        <select name="" @change="selectGroup" class="app-input block w-full text-sm">
                            <option value="" select>Select session...</option>
                            <option value="1" select>Academic Fees</option>
                            <option value="2" select>Administrative Fees</option>
                            <option value="3" select>Material Fees</option>
                            <option value="4" select>Activity Fees</option>
                        </select>
                    </div>
                </div>
                <!-- table here#### -->
                <div class="relative overflow-x-auto mt-6">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3"><input @change="e=>checkBox(e.target.checked)" type="checkbox" class="appearance-none indeterminate:bg-gray-300 ..." /></th>
                                <th scope="col" class="px-6 py-3">Fee Breakdown</th>
                                <th scope="col" class="px-6 py-3">Deadline</th>
                                <th scope="col" class="px-6 py-3">Amount</th>
                            </tr>
                        </thead>
                        <tbody v-show="open">
                            <tr>
                                <td class="px-6 py-3"><input type="checkbox" :checked="check = check ? check : false" class="appearance-none indeterminate:bg-gray-300 ..." /></td>
                                <td class="px-6 py-3">Tuition fees</td>
                                <td class="px-6 py-3">
                                    <input type="date" class="app-input w-full block [font-size:12px]">
                                </td>
                                 <td class="px-6 py-3">
                                    <input type="number" class="app-input w-full block [font-size:12px]">
                                </td>

                            </tr>
                            <tr>
                                <td class="px-6 py-3"><input type="checkbox" :checked="check = check ? check : false" class="appearance-none indeterminate:bg-gray-300 ..." /></td>
                                <td class="px-6 py-3">Examination fees</td>
                                <td class="px-6 py-3">
                                    <input type="date" class="app-input w-full block [font-size:12px]">
                                </td>
                                 <td class="px-6 py-3">
                                    <input type="number" class="app-input w-full block [font-size:12px]">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!--save button & cancel buttons -->
            <div class="flex justify-end mt-2 gap-3">
                <button @click="routeback" class=" bg-red-600 text-white py-1 px-4 rounded-md"><i class='bx bx-left-arrow-alt'></i> Back</button>
                <button class=" bg-ed-blue text-white py-2 px-4 rounded-md"><i class='bx bxs-file-plus'></i> Save</button>
            </div>
        </div>
    </div>
</template>