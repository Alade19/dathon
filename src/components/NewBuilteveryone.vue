<template>
    <div class="bg-bu1-black w-full my-28 px-6 lg:px-20 py-24">
        <h4 class="text-[#C0EBD7] text-1xl text-center mb-4">Built for everyone</h4>
        <h4 class="text-white font-medium text-2xl text-center lg:text-4xl mb-6">Built for Teams from 100 to 1,000+</h4>
        <div class="text-gray-500 font-medium flex place-content-start sm:place-content-center space-x-10 lg:space-x-28 overflow-x-auto ">
            <button @click="isshow" :class="showbody == 1 ? 'border-b-[2.5px] border-[#C0EBD7]' : '' " class=" pb-[1px] px-1">Product</button>
            <button @click="isshow2" :class="showbody == 2 ? 'border-b-[2.5px] border-[#C0EBD7]' : '' " class=" pb-[1px] px-1">Designs</button>
            <button @click="isshow3" :class="showbody == 3 ? 'border-b-[2.5px] border-[#C0EBD7]' : '' " class=" pb-[1px] px-1">Applications</button>
            <button @click="isshow4" :class="showbody == 4 ? 'border-b-[2.5px] border-[#C0EBD7]' : '' " class=" pb-[1px] px-1">Software</button>
            <button @click="isshow5" :class="showbody == 5 ? 'border-b-[2.5px] border-[#C0EBD7]' : '' " class=" pb-[1px] px-1">Engineering</button>
        </div>



        <!-- body -->

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:ml-28 lg:px-0 sm:px-14 md:px-14 mt-10">
            <!-- 111 -->
            <div class="bg-bu2-black px-14 py-14 text-left  text-white rounded-3xl">
                <div class="text-center bg-bu1-blue w-fit p-4 rounded-full mb-4">
                    <img src="../assets/Vectoricon1.png" alt="" class="w-6 h-6">
                </div>
                <h4 class="text-2xl font-medium pb-6 mt-6">Business Management</h4>
                <p class="text-gray-300 leading-tighten my-3 text-sm w-68 pr-14">We create a Computer Program that performs different tasks required by your business
                    bringing a great efficiency to your business.
                    </p>
                <p class="text-gray-300 leading-tighten my-2 text-sm w-68 pr-14">Professionally architect unique process improvements via optimal.</p>
                <h4 class="text-2xl font-medium mt-8">Included with...</h4>
                <div class="mb-6">
                    <p class="flex text-gray-300 text-sm mt-3 mb-2"><i class='bx bx-check mr-6 text-bu2-blue border-2 border-bu2-blue my-auto rounded-full'></i> High-converting</p>
                    <p class="flex text-gray-300 text-sm mb-2"><i class='bx bx-check mr-6 text-bu2-blue border-2 border-bu2-blue my-auto rounded-full'></i> Personal branding</p>
                    <p class="flex text-gray-300 text-sm mb-2"><i class='bx bx-check mr-6 text-bu2-blue border-2 border-bu2-blue my-auto rounded-full'></i> Modernized prospecting</p>
                    <p class="flex text-gray-300 text-sm mb-2"><i class='bx bx-check mr-6 text-bu2-blue border-2 border-bu2-blue my-auto rounded-full'></i> Clean and modern</p>
                    <p class="flex text-gray-300 text-sm mb-2"><i class='bx bx-check mr-6 text-bu2-blue border-2 border-bu2-blue my-auto rounded-full'></i> Boostrap latest Version</p>
                </div>
                <button class="flex text-sm  hover:text-bu2-blue">View Details<i class='bx bx-right-arrow-alt ml-2 my-auto'></i></button>
            </div>

            <!-- 2222 -->
            <div class=" lg:col-span-2 grid grid-cols-2 gap-2 lg:mx-4 lg:gap-4 lg:mr-32">

                <div class="bg-bu2-black px-4 lg:px-10 py-8 h-fit rounded-3xl">
                    <div class="text-center bg-bu1-green w-fit p-4 rounded-full mb-4">
                        <img src="../assets/Vectoricon2.png" alt="" >
                    </div>
                    <h4 class="text-2xl text-white font-medium pb-4">Manage Financial 
                        Transactions</h4>
                    <p class="text-gray-300 leading-tighten my-3 text-sm lg:pr-8">Financial Transactions can be recorded and tracked easily with an application.</p>
                </div>

                <!-- 2 -->
                <div class="bg-bu2-black px-4 lg:px-10 py-8 h-full rounded-3xl">
                    <div class="text-center bg-bu1-red w-fit p-4 rounded-full mb-4">
                        <img src="../assets/Vectoricon3.png" alt="" >
                    </div>
                    <h4 class="text-2xl text-white font-medium pb-4">Online Visibility</h4>
                    <p class="text-gray-300 leading-tighten my-3 text-sm lg:pr-8">Go global and Reach more customers around the world and maintain a presence online
                        with just one click.</p>
                </div>

                <!-- 33 -->
                <div class="bg-bu2-black px-4 lg:px-10 py-8 h-full rounded-3xl mt-4">
                    <div class="text-center bg-bu1-white w-fit p-4 rounded-full mb-4">
                        <img src="../assets/Vectoricon4.png" alt="" >
                    </div>
                    <h4 class="text-2xl text-white font-medium pb-4">Accessibility</h4>
                    <p class="text-gray-300 leading-tighten my-3 text-sm lg:pr-8">Softwares and Applications that works on mobile devices (iOS and Android) and on
                        Computer/Laptops are created</p>
                </div>

                <!-- 444 -->
                <div class="bg-bu2-black px-4 lg:px-10 py-8 h-full rounded-3xl mt-4">
                    <div class="text-center bg-bu1-yellow w-fit p-4 rounded-full mb-4">
                        <img src="../assets/Vectoricon5.png" alt="" >
                    </div>
                    <h4 class="text-2xl text-white font-medium pb-4">Consultation Sessions</h4>
                    <p class="text-gray-300 leading-tighten my-3 text-sm lg:pr-8">Happy birthday to our amiable MD. We wish you a wonderful year filled with pleasant surprises and prosperity. Many happy returns!</p>
                </div>
            </div>
        </div>

        <!-- end f body -->




    </div>
</template>
<script setup>
import { ref } from "vue";

const showbody = ref(1)

const isshow = () =>{
    showbody.value = 1
}
const isshow2 = () =>{
    showbody.value = 2
}
const isshow3 = () =>{
    showbody.value = 3
}
const isshow4 = () =>{
    showbody.value = 4
}
const isshow5 = () =>{
    showbody.value = 5
}
</script>