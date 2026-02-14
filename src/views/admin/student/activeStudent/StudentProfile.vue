<script setup>
// import StudentDetails from './StudentDetails.vue'
import StudentDetails from './StudentDetails.vue'
import Fees from './Fees.vue'
import Documents from './Document.vue'
import Guardian from './Guardian.vue';
import Modals from './Modals.vue'
import PromotionStud from './PromotionStud.vue'
import ExamMark from './ExamMark.vue'
import { initFlowbite } from 'flowbite'
import { onMounted, reactive} from 'vue'
onMounted(() => {  
    // sicscm
    initFlowbite();
})
let state = reactive({data:false})
const openAuth = () =>{
    state.data = true
}
</script>
<template>
    <div class="container font md:container mx-auto p p-2 md:p-5  px-3">
        <div class="">
            <h4 class="font-medium mt-4">
                <span class="bg-[#003399] py-1 px-2 rounded-l-md text-white"> <i class="bx bx-user"></i></span> 
                <span class="text-[#003399] ml-3 dark:text-white">Student Profile</span>  
            </h4>
        <!--  -->

        </div>
        <!-- the students profile card -->
        <div class=" grid grid-cols-1 md:grid-cols-3 gap-3 p-3 mt-2">
            <!--  -->
            <div class="  dark:text-white col-span-1 shadow-md py-3 px-3">
                <div class=" dark:bg-gray-900">
                    <div class="flex justify-center p-2">
                         <img src="../../../../assets/stud.svg" class="block object-center  w-72 h-44" alt="">
                    </div>
                    <div class="text-center mb-3">
                        <h4 class="text-sm font-medium space-x-1">
                            <span class=" text-[#003399] uppercase">Toyibu Olaniyi </span>,
                            <span class="capitalize">Abidogun</span>
                        </h4>
                        <p class="text-xs capitalize space-x-1 mt-0">Student/Nursery 1 - A</p>
                    </div>

                </div>
            </div>
            <!--  -->
            <div class="col-span-2">
                <!--  -->
                <div class="p-5 py-6 px-5 bg-gradient-to-b from-[#00b95c] to-[#2d369b]  rounded-md text-white">
                    <div class="text-sm mt-4  grid grid-cols-2 md:grid-cols-2  gap-3 md:gap-0">
                        <div> <i class="fas fa-tools"></i>&nbsp;Dev Test </div>
                        <div class="mt-1"> <i class="fas fa-graduation-cap"></i> &nbsp;General</div>
                        <div class="mt-3"> <i class="far fa-calendar-alt"></i> &nbsp; 23, july 2030</div>
                        <!--  -->
                        <div class="mt-3"><i class="far fa-calendar-alt"></i> Date</div>
                        <div class="mt-3"><i class="fa fa-location"></i> <span> Adejola No.12</span> </div>
                        <div class="mt-3"><i class="fa fa-location"></i> <span> Adejola</span> </div>
                    </div>
                    <div class="text-sm mt-3">
                        <span><i class="fa fa-envelope"></i>  toyibu.abidogun@delwathon.com</span>        
                    </div>
                   
                   
                </div>
                <!--  -->
                <div class="flex justify-between mt-3 p-1 gap-2">
                    <button  @click="openAuth" data-modal-target="authentication-modal" data-modal-toggle="authentication-modal"  class="bg-[#003399] hidden lg:block text-sm w-full text-white text-center p-2 rounded-sm">
                        <i class="fas fa-user-lock"></i>&nbsp; Authentication
                    </button>
                     <button  @click="openAuth" data-modal-target="authentication-modal" data-modal-toggle="authentication-modal"  class="bg-[#003399] mt-2 text-sm w-full lg:hidden text-white text-center p-2 rounded-sm">
                        <i class="fas fa-user-lock"></i>&nbsp; Auth
                    </button>
                    <button  data-modal-target="rusticate-modal" data-modal-toggle="rusticate-modal" class="bg-[#5EA3FD] w-full mt-2 md:mt-0  text-sm text-center text-white p-2 rounded-sm">
                        <i class="	fas fa-user-lock"></i>&nbsp; Rusticate
                    </button>
                    <button  @click="openAuth" data-modal-target="suspend-modal" data-modal-toggle="suspend-modal" class="bg-[#FF9D0B] w-full mt-2 md:mt-0 text-sm text-center text-white p-2 rounded-sm">
                        <i class="	fas fa-user-lock"></i>&nbsp; Suspend
                    </button>
                </div>
            </div>
           
        </div>
        <!-- end of grid -->
        <!-- modals component for authentication, rusticate and suspend -->
        <Modals :showModal="state.data"></Modals>
        <div class="mt-5 p-2 md:p-3">
           
            <div class="mb-4 border-b shadow-sm md:shadow-md  border-gray-200 dark:border-gray-700 ">
                <ul class="flex space-x-7 relative justify-between overflow-x-auto md:gap-5 gap-1 text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                    <li class="mr-2 " role="presentation">
                        <button class="inline-block p-4 px-7 border-b-2 active:bg-[#003399]  focus:bg-[#003399] focus:text-white" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                           <span class="fa fa-edit font-medium text-lg"></span> <br>
                            BasicDetails
                        </button>
                    </li>

                    <li class="mr-2" role="presentation">
                        <button class="inline-block p-4 px-9 focus:px-9 border-b-2  border-transparent focus:bg-[#003399] focus:text-white  hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">
                             <i class='bx bx-money font-medium text-lg'></i> <br>
                            Fees
                        </button>
                    </li>

                    <li class="mr-2" role="presentation">
                        <button class="inline-block p-4 px-7 focus:px-7  border-b-2 focus:bg-[#003399] focus:text-white  border-transparenthover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#promotion-tab" type="button" role="tab" aria-controls="promotion-tab" aria-selected="false">
                            <i class='bx bxl-graphql font-medium text-lg'></i> <br>
                            Promotion
                        </button>
                    </li>
                    <li role="presentation">
                        <button class="inline-block p-4 border-b-2 border-transparent focus:bg-[#003399] focus:text-white hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#exammark" type="button" role="tab" aria-controls="exammark" aria-selected="false">
                           <span class="bx bxs-graduation font-medium text-lg"></span> <br>
                            <span class="hidden lg:block">Exam Marks</span> 
                            <span class="lg:hidden">ExamMarks</span> 
                        </button>
                    </li>
                    <li role="presentation">
                        <button class="inline-block p-4 border-b-2 border-transparent focus:bg-[#003399] focus:text-white   hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#guardian" type="button" role="tab" aria-controls="guardian" aria-selected="false">
                            <i class='bx bxs-group font-medium text-lg'></i> <br>
                            Guardian
                        </button>
                    </li>
                    <li class="ml-5" role="presentation">
                        <button class="inline-block p-4 border-b-2 border-transparent focus:bg-[#003399] focus:text-white   hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#docs" type="button" role="tab" aria-controls="docs" aria-selected="false">
                            <i class='bx bx-file font-medium text-lg'></i> <br>
                            Documents
                        </button>
                    </li>
                </ul>
            </div>
            <!--  -->
            <div id="myTabContent">
                <div class="hidden p-1 md:p-4 rounded-lg  dark:bg-dark" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <!-- Student details is inisde the (StudentDetails) child component for active student -->
                   <StudentDetails/>
                </div>
                <div class="hidden p-1 md:p-4 rounded-lg  dark:dark:bg-dark" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                    <Fees/>
                </div>
                <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-dark" id="promotion-tab" role="tabpanel" aria-labelledby="promotion-tab">
                   <PromotionStud/>
                </div>
                <div class="hidden p-1 md:p-4 rounded-lg dark:bg-dark" id="guardian" role="tabpanel" aria-labelledby="contacts-tab">
                   <Guardian></Guardian>
                </div>
                <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="exammark" role="tabpanel" aria-labelledby="exammark">
                    <ExamMark/>
                </div>
                <div class="hidden p-0 md:p-4 rounded-lg bg-gray-50 dark:bg-dark" id="docs" role="tabpanel" aria-labelledby="docs-tab">
                    <Documents/>
                </div>
            </div>

        </div>
        <!--  -->

    </div>
</template>

