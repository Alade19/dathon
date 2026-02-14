<script setup>
import { useRouter } from "vue-router"


const router = useRouter()
const routeback = () =>{
    router.push("/admin/accounting/fines")
}
</script>

<template>
    <div class="container md:container p-4">
        <div class="shadow-md mt-7 p-4 rounded-lg">
            <div class="border border-blue-800 p-3 rounded-md mb-8">
                <div> Setup New Fine <div class="border border-blue-800"></div> </div>
                <div class="grid grid-cols-1 md:grid-cols-4 justify-items-center items-center mb-5">
                    <div></div>
                    <div class="col-span-2 w-full ">
                        <label for="" class="mb-2 text-[#4F4F4F] text-sm dark:text-inherit after:content-['*'] after:ml-0.5 after:text-red-500">
                        Branch</label>
                        <select class="mb-2 app-input w-full block [font-size:12px]">
                            <option value="" selected>Choose ...</option>
                            <option value="1">Delwathon Foundation</option>
                        </select>
                        <!--  -->
                        <label for="" class="mb-2 mt-3 text-[#4F4F4F] text-sm dark:text-inherit after:content-['*'] after:ml-0.5 after:text-red-500">
                        Group</label>
                        <select class="app-input w-full block [font-size:12px] mb-2">
                            <option value="" selected>Choose ...</option>
                            <option value="1">Academic fee</option>
                            <option value="2" select>Administrative Fees</option>
                            <option value="3" select>Material Fees</option>
                            <option value="4" select>Activity Fees</option>
                        </select>
                        <label for="" class="text-[#4F4F4F] text-sm dark:text-inherit after:content-['*'] after:ml-0.5 after:text-red-500">
                        Interval</label>
                        <select class="app-input w-full block [font-size:12px]">
                            <option value="" selected>Choose ...</option>
                            <option value="1">Daily</option>
                            <option value="1">Monthly</option>
                            <option value="1">Quarterly</option>
                             <option value="1">Annually</option>
                        </select>
                    </div>
                    <div></div>
                </div>
            </div>
             <div class="flex justify-end mt-2 gap-3">
                <button @click="routeback" class=" bg-red-600 text-white py-1 px-4 rounded-md"><i class='bx bx-left-arrow-alt'></i> Back</button>
                <button class=" bg-ed-blue text-white py-2 px-4 rounded-md"><i class='bx bxs-file-plus'></i> Save</button>
            </div>
        </div>
    </div>
</template>