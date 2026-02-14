<script setup>
import {useRouter} from "vue-router"
const router = useRouter()
const routeToEdit = () =>{
    router.push('/admin/employee/employee-list/edit-profile')
}
</script>

<template>
    <div class="container-lg md:container mx-auto p-3 lg:p-4">
        <div class="flex  justify-between items-center">
            <h2 class="font-medium text-sm uppercase mt-4 md:mt-0">Employee List</h2>
            <div class="[font-size:12px]">Dashboard Employee List</div>
        </div>
        <!--  -->
        <div class="md:mt-6 mt-4">
            <div class=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-1 gap-1">
                <div class="shadow-md p-4">
                    <div class="p-4 justify-center mx-auto flex items-center">
                        <img src="../../../assets/avarter.png" class=" object-center h-24 w-24  md:h-32 md:w-32 block rounded-full" alt="">
                    </div>
                    <div class=" border-t-2 border-blue-800 p-3">
                    <h4 class="text-sm font-medium space-x-1 flex justify-center">
                            <span class=" text-[#003399] uppercase text-sm">Toyibu Olaniyi</span>
                        </h4>
                        <p class="text-xs capitalize space-x-1 mt-0 text-center"> 
                            <span class="capitalize font-bold">role:</span>
                           <span class="font-medium">Developer</span> 
                        </p>

                        <div class="flex justify-center mt-4  space-x-2">
                            <button class="h-7 w-7 bg-green-100 text-ed-green hover:bg-ed-green hover:text-white rounded-md">
                              <i class="bx bx-show"></i>
                            </button>
                            <button  @click="routeToEdit" class="h-7 w-7 bg-blue-200 text-blue-700 hover:bg-blue-800 hover:text-white rounded-md font-medium">
                               <i class="bx bx-edit"></i>
                            </button>
                            <button class="h-7 w-7 bg-red-100 text-red-700 hover:bg-red-800 hover:text-white rounded-md font-medium"><i class='bx bxs-user-pin'></i></button>
                        </div>
                    </div>
                </div>
                <div class="shadow-md p-4">
                    <div class="p-4 justify-center mx-auto flex items-center">
                        <img src="../../../assets/avarter.png" class=" object-center h-24 w-24  md:h-32 md:w-32 block rounded-full" alt="">
                    </div>
                    <div class=" border-t-2 border-blue-800 p-3">
                    <h4 class="text-sm font-medium space-x-1 flex justify-center">
                            <span class=" text-[#003399] uppercase text-sm">Toyibu Olaniyi</span>
                        </h4>
                        <p class="text-xs capitalize space-x-1 mt-0 text-center"> 
                            <span class="capitalize font-bold">role:</span>
                           <span class="font-medium">Teacher</span> 
                        </p>

                        <div class="flex justify-center mt-4  space-x-2">
                            <button class="h-7 w-7 bg-green-100 text-ed-green hover:bg-ed-green hover:text-white rounded-md">
                                <i class="bx bx-show"></i>
                            </button>
                            <button class="h-7 w-7 bg-blue-200 text-blue-700 hover:bg-blue-800 hover:text-white rounded-md font-medium">
                               <i class="bx bx-edit"></i>
                            </button>
                            <button title="revoke user" class="h-7 w-7 bg-red-100 text-red-700 hover:bg-red-800 hover:text-white rounded-md font-medium"><i class='bx bxs-user-pin'></i></button>
                        </div>
                    </div>
                </div>
               
                <!--  -->
            </div>
        </div>
    </div>
</template>