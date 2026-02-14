<script setup>
import {ref} from 'vue';

import {testimonials} from '../services'
let activeId = ref(2);
const testimonialRef = ref();
const testimonialArr = ref([testimonials[0], testimonials[1], testimonials[2]]);
const setactiveId = (id) => {
	const selected = testimonials.find(each => each.id == id);
	const index = testimonials.findIndex(each => each.id == id);
	console.log(selected, index);
	activeId.value = id;
	if (testimonials[index - 1] && testimonials[index + 1]) {
		testimonialArr.value = [
			testimonials[index - 1],
			testimonials[index],
			testimonials[index + 1],
		]
	} else if (!testimonials[index - 1]) {
		testimonialArr.value = [
			testimonials[index],
			testimonials[index + 1],
			testimonials[index + 2],
		]
	} else if (!testimonials[index + 1]) {
		testimonialArr.value = [
			testimonials[index - 2],
			testimonials[index - 1],
			testimonials[index],
		]
	}

	// testimonialRef.scrollLeft += 50;
}

</script>
<template>
	<div class="py-10">
		<h3 class="text-ed-green text-center uppercase pb-1 app-x">OUR CUSTOMERS </h3>
		<h3 class="text-4xl md:text-5xl font-semibold text-center my-3 leading-tight app-x">Why teams love Delwathon
		</h3>
		<div ref="testimonialRef" class="flex flex-1 overflow-hidden gap-x-4 md:gap-x-8 pb-12 text-[#1B1B1B] text-sm py-6">
			<div v-for="({ id, text, img, title, name }) of testimonialArr" v-bind:key="text"
				class="min-w-[33%] cursor-default transition-all duration-500 h-fit place-self-center rounded-lg flex flex-col space-y-3"
				@click="setactiveId(id)" :class="{
					// 'py-5 pl-5 app-r': activeId + 1 == id,
					// 'py-5 pr-5 app-l': activeId - 1 == id,
					'bg-[#E4F3EA] p-5 md:p-10': activeId != id,
					'bg-ed-green text-white p-10': activeId == id,
				}">
				<i :class="activeId == id ? 'text-white text-7xl' : 'text-[#333333C9] text-3xl'"
					class="bx bxs-quote-alt-left"></i>
				<p class="p-5" :class="{
					'line-clamp-4': activeId != id,
				}">{{ text }}</p>
				<div class="flex space-x-3 items-center">
					<img v-bind:src="img" class="h-12 w-12 rounded-full object-cover" />
					<div class="flex flex-col -space-y-1">
						<span>{{ name }}</span>
						<span class="font-semibold">{{ title }}</span>
					</div>
				</div>
			</div>
		</div>
		<div class="flex space-x-2 justify-center">
			<div class="cursor-pointer h-4 w-4 border border-black rounded-full" v-for="({ text, id }) of testimonials"
				@click="setactiveId(id)" :class="activeId == id ? 'bg-ed-green border-none' : ''" v-bind:key="text">
			</div>
		</div>
	</div>
</template>