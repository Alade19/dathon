<script setup>
import {ref} from 'vue';

import {testimonials} from '../services'
import image11 from '../assets/Vectorblack.svg'
import image22 from '../assets/Vectorwhite.svg'
// let active = ref(2);
let greenbtn = ref(2);
// let bluebtn =ref(true)

// const vecimglist = ref(image11);






</script>
<template>
	<div class="py-10">
		<h3 class="text-ed-green text-center uppercase pb-1 app-x">OUR CUSTOMERS </h3>
		<h3 class="text-4xl md:text-5xl font-semibold text-center my-3 leading-tight app-x">Why teams love Delwathon
		</h3>
       
		<div class="flex mt-10 px-10 md:px-0 overflow-hidden place-content-center md:place-content-center   py-2">
            <div @click="greenbtn = test.id" :class="greenbtn == test.id ? 'md:place-content-center transition duration-700 ease-in-out bg-ed-green h-[465px] md:w-[610px] md:h-[536px] drop-shadow-[0_35px_35px_rgba(0,400,0,0.2)] brightness-100' : 'hidden md:block bg-ed2-green md:my-auto blur-sm md:place-content-start' " class="transition duration-700 ease-in-out cursor-pointer overflow-hidden px-6 md:h-[384px] md:w-[395px] h-[340px] w-full flex-none rounded-3xl mx-7 md:mx-3" v-for="test of testimonials" :key="test.id">
                <div :class="greenbtn == test.id ? 'ml-2 md:ml-8' : '' " class=" my-9 ml-10 md:mt-14 md:my-10">
                    <img :src="greenbtn == test.id ? image22 : image11 " alt="logo">
                    <div :class="greenbtn == test.id ? 'text-gray-200 w-full px-1 h-[220px] text-md leading-1 md:text-lg md:w-[498px] md:h-[250px]' : '' " class=" my-6 text-left text-1xl w-[220px] h-[120px] text-ed1-dark overflow-hidden">
                        {{ test.text}}    
                    </div>
                    <div class="flex">
                        <img :src="test.img" class="w-[80px] h-[80px] rounded-full" alt="">
                        <div class="my-auto ml-5">
                            <span :class="greenbtn == test.id ? 'text-gray-200 md:text-lg' : '' "  class="block text-ed1-dark text-1xl">{{test.name}}</span>
                            <span :class="greenbtn == test.id ? 'text-white md:text-2xl' : '' " class="block text-black text-1xl font-semibold">{{test.title}}</span>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
        <!-- buttons -->

        <div class="flex place-content-center mt-5 drop-shadow-2xl">
            <div class="m-1 " v-for="test of testimonials" :key="test.id">
                <button  @click="greenbtn = test.id" :class="greenbtn == test.id ? 'bg-ed-green' : 'bg-white' " class="w-[15px] h-[15px] border border-black rounded-md drop-shadow-2xl transition duration-700 ease-in-out"></button>
                    <!-- <button v-if="greenbtn == !test.id" @click="bluebtn = true ; greenbtn = false" class="w-[15px] h-[15px] border border-black bg-ed-green rounded-sm"></button> -->
            </div>
        </div>

	</div>
</template>