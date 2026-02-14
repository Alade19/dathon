<script setup>
import Swal from "sweetalert2"
import { reactive, ref } from "vue"
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

//Decomision
// const removeFee = (data)=>{
//   Swal.fire({
//   title: 'Are you sure?',
//   text: "You won't be able to revert this!",
//   icon: 'warning',
//   showCancelButton: true,
//   confirmButtonColor: '#00A859',
//   cancelButtonColor: '#d33',
//   confirmButtonText: 'Yes, delete it!',
//   preConfirm:()=>{
//     console.log("yes")
//     // alert("yes")
//   }
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire({
//        title: 'Deleted!',
//        text: 'Your file has been deleted.',
//        icon: 'success',
//        confirmButtonColor:'#00A859'
//     })
//     }
//   })
// }

const fee = [
    {transaction_id:"#Tud123", session:"2023-02-30", date:"08 April, 2023", type:"Income", desc:"Tuition fee", amount:"₦1000", status:"Paid" },
    {transaction_id:"#Tud133", session:"2023-02-20", date:"08 May, 2023", type:"Income", desc:"Tuition fee", amount:"₦1000", status:"Patial"},
    {transaction_id:"#Tud133", session:"2023-02-20", date:"08 May, 2023", type:"Income", desc:"Tuition fee", amount:"₦5000", status:"Unpaid" }
]
const showModal = ref(false)
const state = reactive({
    data:fee
})
const preview = (data) =>{
    console.log(data)
    showModal.value = true
}
// @click="preview(each)"

//search methods#############
const search = (searchText)=>{
    const tolower = searchText.toLowerCase();
    const searched = fee.filter(a => (
        a.transaction_id.toLowerCase().includes(tolower) ||
        a.session.toLowerCase().includes(tolower) ||  
        a.date.toLowerCase().includes(tolower) ||
        a.type.toLowerCase().includes(tolower) ||  
        a.desc.toLowerCase().includes(tolower)||
        a.status.toLowerCase().includes(tolower)
    )) 
    state.data = searched; // data
    console.log(state.data)
}


</script>

<template>
   <div class="shadow-sm container-lg md:container md:p-2 md:py-2 md:px-3 mt-4">
            <div class=" text-sm text-green-600 font-medium"> 
               All Time Fees
            </div>
            <div class="border border-t-1 w-full border-green-600"></div>
            <!-- group Buttons start here -->
            <div class="md:flex justify-between mt-2">
                <div class="inline-flex rounded-md shadow-sm mt-4" role="group">
                    <button style="font-size:12px" type="button" class="inline-flex text-white bg-[#00A859] items-center px-4 py-2 font-normal border-t border-b border-gray-200 hover:bg-green-400 hover:text-white focus:z-10 focus:ring-green-700 focus:text-green-700 rounded-l-md">
                     Copy
                    </button>
    
                    <button style="font-size:12px"  type="button" class="inline-flex text-white bg-[#00A859] items-center px-4 py-2 font-normal border-t border-b border-gray-200 hover:bg-green-400 hover:text-white focus:z-10 focus:ring-green-700 focus:text-green-700 ">
                    excel
                    </button>
                    <button style="font-size:12px"  type="button" class="inline-flex text-white bg-[#00A859] items-center px-4 py-2 font-normal border-t border-b border-gray-200 hover:bg-green-400 hover:text-white focus:z-10 focus:ring-green-700 focus:text-green-700 ">
                        Column Visibility
                    </button>
    
                    <button style="font-size:12px"  type="button" class="inline-flex text-white bg-[#00A859] items-center px-4 py-2 text-sm font-normal border-t border-b border-gray-200 hover:bg-green-400 hover:text-white focus:z-10 focus:ring-green-700 focus:text-green-700 rounded-r-md">
                        PDF
                    </button>
                </div>
                <!--  -->
                <div class="rounded-md border-2 dark:border-[#A4A2A2] w-full md:w-[20rem] flex space-x-2 px-2 items-center mt-4">
                    <i class='bx bx-search text-sm mt-1'></i>
                    <input @input="$event=>search($event.target.value)" class="bg-transparent p-1 outline-none text-sm" placeholder="Search..." />
                </div>  
               
            </div>
            <!--  -->
            <div class="mt-5 mb-4 relative overflow-x-auto">
                <table class="border-collapse   border table-auto border-slate-400 w-full p-6 ">
                    <thead class="" style="font-size:13px">
                        <tr class="p-2">
                            <th class="border px-6 py-4 border-slate-300 md:p-2">S/N</th>
                            <th class="border px-6 py-4 border-slate-300">Transaction Id</th>
                            <th class="border  px-6 py-4 border-slate-300">Session</th>
                            <th class="border px-6 py-4 border-slate-300">Date</th>
                            <th class="border px-6 py-4 border-slate-300">Type</th>
                            <th class="border px-6 py-4 border-slate-300">Description</th>
                            <th class="border px-6 py-4 border-slate-300">Amount</th>
                            <th class="border px-6 py-4 border-slate-300">Status</th>
                            <th class="border px-6 py-4 border-slate-300">Action</th>
                        </tr>
                    </thead>
                    <tbody style="font-size:12px">
                        <tr v-for="(each, i) of state.data" :key="i">
                            <td class="border border-slate-300 p-3"> <div class="text-center">{{i+1}}</div></td>
                            <td class="border border-slate-300 p-3"><div class="text-center">{{each.transaction_id}}</div></td>
                            <td class="border border-slate-300 p-3"><div class="text-center"> {{each.session}} </div></td>
                            <td class="border border-slate-300 p-2"><div class="text-center">{{each.date}}</div></td>
                            <td class="border border-slate-300 p-3"><div class="text-center">{{each.type}}</div></td>
                            <td class="border border-slate-300 p-3"><div class="text-center">{{each.desc}}</div></td>
                            <td class="border border-slate-300 p-3"><div class="text-center">{{each.amount}}</div></td>
                            <td class="border border-slate-300 p-3">
                                <div class="text-center" :class="[each.status=='Paid' ? 'bg-ed-green p-1  text-white rounded-md': each.status == 'Patial' ? ' bg-yellow-400 p-1  text-white rounded-md' :'bg-red-600 p-1 text-white rounded-md [font-size:12px]']">
                                    {{each.status}}
                                </div>
                            </td>
                            <td class="border border-slate-300 ...">
                                <div class="text-center space-x-1 flex justify-center">
                                    <button  class="bg-[#00A8594D]  hover:bg-ed-green hover:text-white rounded-lg  h-7 w-7 text-ed-green"><i class="bx bx-show"></i></button>
                                </div>
                            </td>
                        </tr>
                       <!--  -->
                    </tbody>
                </table>
                <!--  -->
                <!-- Timing Modal -->
                <TransitionRoot as="template" :show="showModal">
                    <Dialog as="div" class="relative z-40" @close="showModal = false">
                    <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </TransitionChild>

                    <div class="fixed inset-0 z-40 overflow-y-auto font">
                        <form class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                                <DialogPanel class="relative transform overflow-hidden dark:bg-dark rounded-lg bg-white text-left shadow-xl transition-all  sm:my-8 w-full sm:w-full sm:max-w-xl">
                                <div class="md:p-6 p-4">
                                    <DialogTitle as="h3" class="text-base font-medium leading-6 text-gray-900"> Preview</DialogTitle>
                                    <h4>Loading ......</h4>
                                </div>

                                <div class="bg-gray-50 dark:bg-dark px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 mb-4 gap-3">
                                    <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" @click="showModal = false" ref="cancelButtonRef">Cancel</button>
                                </div>
                                </DialogPanel>
                            </TransitionChild>
                        </form>
                    </div>
                    </Dialog>
                </TransitionRoot>
            </div>
        </div>
</template>

