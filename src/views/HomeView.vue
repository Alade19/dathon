
<script setup>
// import {teams, teamDetails} from '../services'
// import NavBar from '../components/NavBar.vue'
// import NewnavBar from '../components/NewnavBar.vue'
// import BottomFoot from '../components/BottomFoot.vue'
// // import TestimonialCarousel from '../components/TestimonialCarousel.vue'
// import NewTestimonial from '../components/NewTestimonial.vue'
// import FluidImg from '../components/FluidImg.vue'
// import ProjectTask from '../components/ProjectTask.vue'
// import DocDashbord from '../components/DocDashbords.vue'
// import BuiltEveryone from '../components/BuiltEveryone.vue'


const features = [
	'Email Support',
	'Live Chat for Unlimted Plan+ Workspaces',
	'Frequent Webinars'
]

</script>

<template>
	<div>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laborum rerum inventore. Vitae, quia autem nam nihil obcaecati necessitatibus perspiciatis delectus saepe, eum hic consectetur magni aspernatur. Illo, minus harum.
	</div>
	<!-- nav here -->
	<!-- <NewnavBar /> -->

	<!-- top here -->
	<!-- <main class="font-serif">
		<div class="relative pb-16">
			<svg class="absolute hidden md:block right-0 top-0 h-full" viewBox="0 0 626 917" fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M693.805 887.726C951.452 794.791 916.616 634.727 972.879 359.261C926.581 -81.7337 629.166 -431.05 333.937 -109.947C-41.8879 298.815 -41.3982 311.097 54.1993 576.125C149.797 841.152 436.158 980.661 693.805 887.726Z"
					fill="url(#paint0_linear_14_186)" />
				<defs>
					<linearGradient id="paint0_linear_14_186" x1="36.689" y1="455.355" x2="964.21" y2="120.791"
						gradientUnits="userSpaceOnUse">
						<stop stop-color="#00A859" />
						<stop offset="1" stop-color="#003399" />
					</linearGradient>
				</defs>
			</svg>
			<div class="flex text-[#181C17] relative">
				<div class="w-100 md:w-1/2 pt-44 app-x">
					<h3 class="text-4xl lg:text-6xl font-semibold max-w-md leading-tight">One app to replace them all.
					</h3>
					<p class="my-8">All of your work in one place: Tasks, Docs, Chat, Goals, & more.</p>
					<input autofocus
						class="border bg-transparent rounded-md py-3 px-4 w-full max-w-md outline-none focus:border-ed-green transition"
						placeholder="Enter your work email" />
					<div class="my-8 flex space-x-10">
						<button
							className="py-2 px-6 outline-none text-sm bg-ed-green text-white font-semibold rounded-md shadow-md">
							Get Started
						</button>
						<p class="text-[#A4A2A2] font-semibold">FREE FOREVER <br /> NO CREDIT CARD.</p>
					</div>
				</div>
				<div class="hidden md:block w-full md:w-1/2 h-full p-3 overflow-hidden">
					<img src="../assets/New Macbook Pro Mockup Front View (1) 1image1" class="min-w-[60rem] rm-drag mt-24 rounded-3xl" />
				</div>
			</div>
		</div> -->


		<!-- teams here -->
		<!-- <div class="flex items-center flex-col md:-mt-5 app-x">
			<p class="text-[#A4A2A2] font-semibold uppercase text-center">Join 800,000+ highly productive teams</p>
			<div class="flex justify-center items-center flex-wrap">
				<img src="../assets/ibm.png" class="h-5" />
				<img src="../assets/samsung.png" class="h-36 opacity-60 -my-10" />
				<img src="../assets/ibm.png" class="h-5 opacity-75" />
				<img src="../assets/samsung.png" class="h-36 opacity-40 -my-10" />
				<img src="../assets/ibm.png" class="h-5 opacity-70" />
				<img src="../assets/samsung.png" class="h-36 opacity-20 -my-10" />
			</div>
		</div> -->


		<!-- Project and tasks -->
		<!-- <ProjectTask /> -->


		<!-- Docdashbords -->
		<!-- <DocDashbord /> -->


		<!-- The platform -->
		<!-- <div class="bg-[#00A8590D] my-10 rounded-3xl relative flex py-10 md:py-28 app-x items-center">
			<div class="text-center md:text-left w-full md:w-1/2 lg:w-[40%] md:pr-16 text-[#1B1B1B] relative z-10">
				<div class="flex space-x-4 md:space-x-8 pb-14 text-[#181C17]">
					<span class="mx-auto md:mx-0 border-b-4 border-[#00A859] pb-1">THE PLATFORM </span>
				</div>
				<h3 class="text-4xl md:text-5xl font-semibold max-w-md leading-tight">Save time by automating your work.
				</h3>
				<p class="my-8 text-[#4F4F4F]">Customize ClickUp to tackle any project or task with 35+ ClickApps. Break
					down work
					with subtasks,
					assign Sprint Points, link tasks to other items with Relationships, and more.
				</p>
				<div class="my-8 mb-2 mt-1 flex space-x-10">
					<button
						className="drop-shadow-2xl mx-auto md:mx-0 hover:bg-green-200 transition duration-600 ease-in-out py-2 px-4 outline-none text-sm bg-white text-ed-green flex items-center space-x-2 font-semibold rounded-md border border-ed-green">
						<span>Get Started</span>
						<svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd"
								d="M0.5 7C0.5 6.80109 0.579018 6.61032 0.71967 6.46967C0.860322 6.32902 1.05109 6.25 1.25 6.25H18.9395L14.219 1.531C14.0782 1.39017 13.9991 1.19916 13.9991 1C13.9991 0.800838 14.0782 0.609831 14.219 0.469001C14.3598 0.328171 14.5508 0.249054 14.75 0.249054C14.9492 0.249054 15.1402 0.328171 15.281 0.469001L21.281 6.469C21.3508 6.53867 21.4063 6.62143 21.4441 6.71255C21.4819 6.80367 21.5013 6.90135 21.5013 7C21.5013 7.09865 21.4819 7.19633 21.4441 7.28745C21.4063 7.37857 21.3508 7.46133 21.281 7.531L15.281 13.531C15.1402 13.6718 14.9492 13.7509 14.75 13.7509C14.5508 13.7509 14.3598 13.6718 14.219 13.531C14.0782 13.3902 13.9991 13.1992 13.9991 13C13.9991 12.8008 14.0782 12.6098 14.219 12.469L18.9395 7.75H1.25C1.05109 7.75 0.860322 7.67098 0.71967 7.53033C0.579018 7.38968 0.5 7.19891 0.5 7Z"
								fill="#00A859" />
						</svg>
					</button>
				</div>
			</div>
			<svg class="absolute hidden md:block h-full right-0" viewBox="0 0 543 720" fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M619.201 222.159C619.201 489.205 717.426 557.268 569.201 700C303.334 803.429 -166.872 465.369 60.0904 246.982C235.836 77.8762 268.604 3.40732 442.585 3.40732C616.565 3.40732 619.201 -44.8868 619.201 222.159Z"
					fill="#00A859" />
			</svg>

			<div class="relative w-full md:w-1/2 lg:w-[60%] lg:pl-10 hidden md:block">
				<img src="../assets/delwaton2 1image4.png" class="h-[30rem] rotate-2 w-full object-cover rm-drag rounded-3xl" />
			</div>
		</div> -->



		<!-- Built for everyone -->
		<!-- <BuiltEveryone /> -->


		<!--  TESTIMONIALS-->
		<!-- <NewTestimonial /> -->


		<!--#1 support in software  -->
		<!-- <div
			class="bg-[#0033990D] my-10 rounded-3xl relative flex flex-col-reverse md:flex-row py-10 app-x md:items-center">
			<div class="w-full md:w-1/2 flex flex-col space-y-10">
				<div class="bg-ed-blue flex items-center justify-center h-16 w-16 rounded-xl">
					<svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M27.5 0.125V5.175C37.375 6.4 45 14.8 45 25C45 33.025 40.2 40 33.2 43.2L27.5 37.5V50H40L36.95 46.95C44.775 42.675 50 34.4 50 25C50 12.05 40.125 1.375 27.5 0.125ZM22.5 0C17.625 0.5 13 2.4 9.2 5.525L12.75 9.075C15.5877 6.88745 18.9496 5.48238 22.5 5V0ZM5.5 9.2C2.4 13 0.5 17.625 0 22.5H5C5.475 18.95 6.875 15.575 9.075 12.75L5.5 9.2ZM10 15V20H17.5V22.5H15C12.25 22.5 10 24.75 10 27.5V35H22.5V30H15V27.5H17.5C20.275 27.5 22.5 25.275 22.5 22.5V20C22.5 18.6739 21.9732 17.4021 21.0355 16.4645C20.0978 15.5268 18.8261 15 17.5 15H10ZM25 15V27.5H32.5V35H37.5V27.5H40V22.5H37.5V15H32.5V22.5H30V15H25ZM0 27.5C0.5 32.375 2.425 37 5.55 40.8L9.1 37.25C6.90502 34.414 5.49142 31.0524 5 27.5H0ZM12.775 40.925L9.2 44.475C12.9984 47.5763 17.6221 49.4971 22.5 50V45C18.9542 44.5286 15.5977 43.1221 12.775 40.925Z"
							fill="white" />
					</svg>
				</div>
				<span class="text-[#4F4F4F] uppercase">#1 support in software</span>
				<h3 class="text-4xl md:text-5xl max-w-md text-[#1B1B1B] font-semibold">24/7 real-time support.</h3>
				<p class="text-[#4F4F4F] max-w-sm text-sm">
					Customize ClickUp to tackle any project or task with 35+ ClickApps. Break down work with subtasks,
					assign Sprint Points, link tasks to other items with Relationships, and more.
				</p>
				<div class="flex flex-wrap gap-5 items-center max-w-lg">
					<div class="flex first:max-w-[6rem] last:max-w-[6rem] space-x-3 max-w-[12rem] w-fit items-center"
						v-for="feat of features" v-bind:key="feat">
						<svg class="h-5 min-w-[1.25rem]" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M0 11C0 4.925 4.925 0 11 0C17.075 0 22 4.925 22 11C22 17.075 17.075 22 11 22C4.925 22 0 17.075 0 11ZM16.28 8.28C16.4124 8.13774 16.4845 7.94969 16.4812 7.75537C16.4778 7.56105 16.3992 7.3756 16.262 7.238C16.1244 7.10076 15.9389 7.0222 15.7446 7.01884C15.5503 7.01549 15.3623 7.08759 15.22 7.22L9.25 13.19L6.78 10.72C6.63774 10.5876 6.44969 10.5155 6.25537 10.5188C6.06105 10.5222 5.8756 10.6008 5.738 10.738C5.60076 10.8756 5.5222 11.0611 5.51884 11.2554C5.51549 11.4497 5.58759 11.6377 5.72 11.78L8.72 14.78C8.86063 14.9205 9.05125 14.9993 9.25 14.9993C9.44875 14.9993 9.63937 14.9205 9.78 14.78L16.28 8.28Z"
								fill="#003399" />
						</svg>
						<p class="text-[#4F4F4F] text-sm">{{ feat }}</p>
					</div>
				</div>
			</div> -->

			<!-- <div class="w-full sm:w-1/2 relative h-full">
				<svg class="w-full h-full" viewBox="0 0 746 748" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M606.314 195.037C688.951 448.9 812.579 480.216 701.972 666.284C456.36 854.977 -139.239 693.431 30.1745 408.68C161.358 188.185 172.53 106.255 354.199 47.118C535.868 -12.019 523.677 -58.825 606.314 195.037Z"
						fill="#003399" fill-opacity="0.1" />
				</svg>
				<FluidImg />
			</div>
		</div> -->

		<!-- Footer -->
		<!-- <BottomFoot /> -->
	<!-- </main> -->
</template>
