<script setup>
import { initFlowbite } from 'flowbite'
import {onMounted} from 'vue'
import BasicDetails from './BasicDetails.vue'
import Childrens from './Childrens.vue'

onMounted(() => {
    initFlowbite();
})
</script>

<template>
    <div class="container md:container font p-4 md:p-4 mx-auto">
        <div class="flex justify-between items-center">
            <h4 class="font-medium mt-4">
                <span class="ml-3 dark:text-white uppercase font-medium text-sm">GUARDIAN PROFILE</span>  
            </h4>
            <div class="[font-size:12px]">
                <router-link to="/admin/guardian/guardian-list">Guardian </router-link> Profile View
            </div>
        </div>

        <!--  -->
        <div class=" grid grid-cols-1 md:grid-cols-3 gap-3 p-3 mt-2">
            <!--  -->
            <div class="  dark:text-white col-span-1 shadow-md py-3 px-3">
                <div class=" dark:bg-gray-900">
                    <div class="flex justify-center p-2">
                         <img src="../../../assets/stud.svg" class="block object-center  w-72 h-44" alt="">
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
                <div class="p-5 py-6 px-5 bg-gradient-to-b from-[#00b95c] to-[#2d369b] rounded-md text-white">
                    <div class="text-sm mt-4  grid grid-cols-2 md:grid-cols-2  gap-3 md:gap-0">
                        <div class="mt-2 font-medium uppercase"> <i class="fas fa-user"></i>&nbsp; 
                        <span class="[font-size:15px]">Toyibu Olaniyi</span>  
                        </div>
                        <div class="mt-3"> <i class="fas fa-phone"></i> &nbsp;09131688369</div>
                        <div class="mt-3"> <i class="fa fa-users"></i> &nbsp;1 Chidren</div>
                        <!--  -->
                        <div class="mt-3"><i class="far fa-calendar-alt"></i> Date</div>
                        <div class="mt-3 col-span-2"><i class="fa fa-location"></i> <span> Adejola No.12 Ibadan oyo state</span> </div>
                      
                    </div>
                    <div class="text-sm mt-3">
                        <span><i class="fa fa-envelope"></i>  toyibu.abidogun@delwathon.com</span>        
                    </div>
                   
                   
                </div>
                <!--  -->
                <div class="flex justify-between mt-3 p-1 gap-2">
                    <button  @click="openAuth"   class="bg-[#003399] hidden lg:block text-sm w-full text-white text-center p-2 rounded-sm">
                        <i class="fas fa-user-lock"></i>&nbsp; Authentication
                    </button>
                     <button  @click="openAuth"  class="bg-[#003399] mt-2 text-sm w-full lg:hidden text-white text-center p-2 rounded-sm">
                        <i class="fas fa-user-lock"></i>&nbsp; Auth
                    </button>
                    <button  @click="openAuth"  class="bg-[#FF9D0B] w-full mt-2 md:mt-0 text-sm text-center text-white p-2 rounded-sm">
                        <i class="	fas fa-user-lock"></i>&nbsp; Revoke
                    </button>
                </div>
                <!--  -->
            </div>
           
        </div>
        <!--  -->
        <div class="mb-4 border-b shadow-sm md:shadow-md  border-gray-200 dark:border-gray-700 md:mt-6 sm:mt-6 lg:mt-6">
            <ul class="flex space-x-7 relative justify-evenly overflow-x-auto md:gap-5 gap-1 text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                <li class="mr-2 " role="presentation">
                    <button class="inline-block p-4 px-7 border-b-2 active:bg-[#003399]  focus:bg-[#003399] focus:text-white" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                        <span class="fa fa-edit font-medium text-lg"></span> <br>
                            BasicDetails
                    </button>
                </li>

                <li class="mr-2" role="presentation">
                    <button class="inline-block p-4 px-9 focus:px-9 border-b-2  border-transparent focus:bg-[#003399] focus:text-white  hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#childrens" type="button" role="tab" aria-controls="childrens" aria-selected="false">
                        <i class='fa fa-user font-medium text-lg'></i> <br>
                        Childrens
                    </button>
                </li>
            </ul>
        </div>
        <div id="myTabContent">
            <div class="hidden p-1 md:p-4 rounded-lg  dark:bg-dark" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                 <Basic-Details/>
            </div>
            <div class="hidden p-1 md:p-4 rounded-lg  dark:dark:bg-dark" id="childrens" role="tabpanel" aria-labelledby="childrens-tab">
               <Childrens/>
            </div>
                
        </div>
    </div>
</template>