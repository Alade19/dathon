<template>
    <div class="p-5">
        <h4 class="text-ed-blue dark:text-white font-semibold text-sm">Office Accounting</h4>

        <div class="w-full my-8 shadow-2xl dark:bg-gray-900 rounded-sm py-8">
            <h4 class="text-ed-blue px-6 dark:text-white font-semibold text-sm">All Transactions</h4>
            <hr class="mt-2 mb-8 border-[2px] border-ed-blue w-full">
            <div class="relative overflow-x-auto px-6">
                <table class="border-collapse border table-auto border-slate-400 w-full p-6 ">
                    <thead class="" style="font-size:13px">
                        <tr class="p-2">
                            <th class="border border-slate-300 py-3 px-4">S/N</th>
                            <th class="border border-slate-300 py-3 px-4">Branch</th>
                            <th class="border border-slate-300 py-3 px-4">Type</th>
                            <th class="border border-slate-300 py-3 px-4">Bank Name</th>
                            <th class="border border-slate-300 py-3 px-4">Account Name</th>
                            <th class="border border-slate-300 py-3 px-4">Voucher Head</th>
                            <th class="border border-slate-300 py-3 px-4">Ref No</th>
                            <th class="border border-slate-300 py-3 px-4">Description</th>
                            <th class="border border-slate-300 py-3 px-4">Dr</th>
                            <th class="border border-slate-300 py-3 px-4">Cr</th>
                            <th class="border border-slate-300 py-3 px-4">Payment Method</th>
                            <th class="border border-slate-300 py-3 px-4">Date</th>
                            <th class="border border-slate-300 py-3 px-4">Action</th>
                        </tr>
                    </thead>
                    <tbody style="font-size:12px;">
                        <tr class="hover:bg-gray-100 dark:hover:bg-gray-700" v-for="dist in trans" :key="dist.id">
                            <td class="border border-slate-300 px-2 py-2"> <div class="text-center">{{dist.id}}</div></td>
                            <td class="border border-slate-300 px-2 py-2"> <div class="text-center">{{dist.branch}}</div></td>
                            <td class="border border-slate-300 px-2 py-2"> <div class="text-center">{{dist.type}}</div></td>
                            <td class="border border-slate-300 px-2 py-2"> <div class="text-center">{{dist.bankname}}</div></td>
                            <td class="border border-slate-300 px-2 py-2"> <div class="text-center">{{dist.accname}}</div></td>
                            <td class="border border-slate-300 px-2 py-2"> <div class="text-center">{{dist.vouch}}</div></td>
                            <td class="border border-slate-300 px-2 py-2"> <div class="text-center">{{dist.refno}}</div></td>
                            <td class="border border-slate-300 px-2 py-2"> <div class="text-center">{{dist.des}}</div></td>
                            <td class="border border-slate-300 px-2 py-2"> <div class="text-center">{{dist.dr}}</div></td>
                            <td class="border border-slate-300 px-2 py-2"> <div class="text-center">{{dist.cr}}</div></td>
                            <td class="border border-slate-300 px-2 py-2"> <div class="text-center">{{dist.paymethod}}</div></td>
                            <td class="border border-slate-300 px-2 py-2"> <div class="text-center">{{dist.date}}</div></td>
                            <td class="border border-slate-300 px-2 py-2"> <div class="text-center">
                                <button @click="delete1"  class="bg-red-200 rounded-md h-7 w-7 text-center text-xs  text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition duration-200 ease-out hover:ease-in">
                                    <i class="bx bx-trash"></i>
                                    </button>
                            </div>
                            </td>
                        </tr>
                        <!--  -->
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
import Swal from 'sweetalert2'



const trans = ref([
    {id:1, branch:'Delwathon Foundation', type:'Income', bankname:'UBA', accname:'Samuel Alade', vouch: 'Voucher', refno:'DEFO202', des:'DEFO Income', dr:"DR", cr:'CR', paymethod:'Bank Card', date:'20/9/2023'},
    {id:2, branch:'Delwathon College', type:'Expense', bankname:'UBA', accname:'Samuel Alade', vouch: 'Voucher', refno:'DEFO202', des:'DEFO Income', dr:"DR", cr:'CR', paymethod:'Bank Card', date:'20/9/2023'},
])

const delete1 = () =>{
    Swal.fire({
        position: 'top-end',
        html: '<span><i class="fa-solid fa-triangle-exclamation mr-3"></i> Transaction deleted sucessfully</span>',
        showConfirmButton: false,
        timer: 1500,
        customClass: 'custom-sweetalert-width1',
    })
}
</script>