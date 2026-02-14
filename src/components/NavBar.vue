<script setup>
import {onBeforeMount, onBeforeUnmount, ref} from 'vue';

const links = [
	{link: "/product", text: "Product"},
	{link: "/solution", text: "Solution"},
];

let top = ref(true);
const handleScroll = () => {
	if (window.pageYOffset > 10) {
		if (top.value) top.value = false
	} else {
		if (!top.value) top.value = true
	}
}
onBeforeMount(() => {
	window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
	window.removeEventListener('scroll', handleScroll)
})

const scrollToTop = () => {
	window.scrollTo({top: 0, behavior: 'smooth'});
}

</script>
<template>
	<nav class="flex justify-between app-x z-20 fixed inset-x-0 transition-all duration-500"
	:class="!top ? 'bg-[#ffffffd8] shadow backdrop-blur-md py-4' : 'py-7'">
	<div>
		<img src="../assets/delthon_solution.png" className="w-40" />
	</div>
		<div class="flex items-center">
			<div class="flex space-x-7 mr-14">
				<router-link className="text-sm drop-shadow-xl" v-for="link of links" v-bind:key="link.text"
					v-bind:to="link.link">
					{{ link.text }}
				</router-link>
			</div>
			<div class="flex space-x-7">
				<router-link to="/signup"
					className="border-ed-green border py-2 px-5 outline-none text-xs bg-white text-ed-green font-semibold rounded shadow-md">
					Sign up
				</router-link>
				<router-link to="/login"
					className="py-2 px-5 outline-none text-xs bg-ed-green text-white font-semibold rounded shadow-md">
					Sign In
				</router-link>
			</div>
		</div>
	</nav>
	<!-- Scroll to top -->
	<button @click="scrollToTop"
				class="h-9 w-9 flex justify-center items-center rounded-full outline-none bg-ed-green fixed bottom-16 sm:bottom-32 right-10 sm:right-24">
				<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M18.07 9.57L12 3.5L5.92999 9.57" stroke="white" stroke-width="1.5" stroke-miterlimit="10"
						stroke-linecap="round" stroke-linejoin="round" />
					<path d="M12 20.4999V3.66992" stroke="white" stroke-width="1.5" stroke-miterlimit="10"
						stroke-linecap="round" stroke-linejoin="round" />
				</svg>
	</button>
</template>