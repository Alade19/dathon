<template>


    <div class="py-10  bg-blue-100 rounded-sm md:bg-transparent md:rounded-none">
        <h3 class="text-ed-green font-semibold text-center uppercase pb-1">Built for everyone </h3>
        <h3 class="text-4xl md:text-5xl font-semibold text-center my-3 leading-tight">Built for teams from
            1 to 1,000+ </h3>
        <!--  -->
        <div class="md:w-full">
            <div class="flex  overflow-auto scrollbar-x-hidden space-x-5 md:space-x-8 pb-1 mb-8 text-[#181C17] md:place-content-center py-6">
                <button v-for="team of teams" v-bind:key="team.name" @click="showbody3 = team.id"
                    class="first:border-b-4 border-[#00A859] mb-2 pb-1 text-[#4F4F4F] whitespace-nowrap" :class="showbody3 == team.id  ? 'border-b-4' : 'border-none'">{{ team.name }}</button>
            </div>
        </div>
        <div class="flex flex-row-reverse">
            <div class="w-full text-[#4F4F4F] md:w-1/2 lg:w-[40%] md:pr-16" >
                <div v-for="detail of teamDetails" v-bind:key="detail.id">
                    <div v-if="showbody3 == detail.id">
                        <div  v-for="subdetail of detail.subdetails" :key="subdetail.title" class="flex space-x-3 mb-5">
                            <i class='bx mt-1' :class="subdetail.icon"></i>
                            <div>
                                <h4 class="font-semibold mb-3">{{ subdetail.title }}</h4>
                                <p>{{ subdetail.details }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            <div class="relative w-full md:w-1/2 lg:w-[60%] md:h-[674px] pl-0 ml-0  lg:pl-0 hidden md:block">
                <img src="../assets/New Macbook Pro Mockup Front View 1image5.png" class="h-full w-full object-cover rm-drag rounded-3xl" />
            </div>
        </div>
        <div class="my-8 flex space-x-10">
            <button
                className="drop-shadow-xl hover:bg-green-200 transition duration-600 ease-in-out py-2 px-4 outline-none text-sm bg-white text-ed-green flex items-center space-x-2 font-semibold rounded-md border border-ed-green">
                <span>Get Started</span>
                <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M0.5 7C0.5 6.80109 0.579018 6.61032 0.71967 6.46967C0.860322 6.32902 1.05109 6.25 1.25 6.25H18.9395L14.219 1.531C14.0782 1.39017 13.9991 1.19916 13.9991 1C13.9991 0.800838 14.0782 0.609831 14.219 0.469001C14.3598 0.328171 14.5508 0.249054 14.75 0.249054C14.9492 0.249054 15.1402 0.328171 15.281 0.469001L21.281 6.469C21.3508 6.53867 21.4063 6.62143 21.4441 6.71255C21.4819 6.80367 21.5013 6.90135 21.5013 7C21.5013 7.09865 21.4819 7.19633 21.4441 7.28745C21.4063 7.37857 21.3508 7.46133 21.281 7.531L15.281 13.531C15.1402 13.6718 14.9492 13.7509 14.75 13.7509C14.5508 13.7509 14.3598 13.6718 14.219 13.531C14.0782 13.3902 13.9991 13.1992 13.9991 13C13.9991 12.8008 14.0782 12.6098 14.219 12.469L18.9395 7.75H1.25C1.05109 7.75 0.860322 7.67098 0.71967 7.53033C0.579018 7.38968 0.5 7.19891 0.5 7Z"
                        fill="#00A859" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {  ref } from 'vue'
import {teams, teamDetails} from '../services'

let showbody3 = ref(1)
// let count = ref(team
// console.log(1)





</script>