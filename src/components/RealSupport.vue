<template>
    <div class="bg-ed-blue my-10  relative flex flex-col-reverse md:flex-row py-10 app-x md:items-center">
			<div class="w-full md:w-1/2 flex flex-col space-y-10">
				<div class="bg-ed-green flex items-center justify-center h-16 w-16 rounded-xl">
					<svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M27.5 0.125V5.175C37.375 6.4 45 14.8 45 25C45 33.025 40.2 40 33.2 43.2L27.5 37.5V50H40L36.95 46.95C44.775 42.675 50 34.4 50 25C50 12.05 40.125 1.375 27.5 0.125ZM22.5 0C17.625 0.5 13 2.4 9.2 5.525L12.75 9.075C15.5877 6.88745 18.9496 5.48238 22.5 5V0ZM5.5 9.2C2.4 13 0.5 17.625 0 22.5H5C5.475 18.95 6.875 15.575 9.075 12.75L5.5 9.2ZM10 15V20H17.5V22.5H15C12.25 22.5 10 24.75 10 27.5V35H22.5V30H15V27.5H17.5C20.275 27.5 22.5 25.275 22.5 22.5V20C22.5 18.6739 21.9732 17.4021 21.0355 16.4645C20.0978 15.5268 18.8261 15 17.5 15H10ZM25 15V27.5H32.5V35H37.5V27.5H40V22.5H37.5V15H32.5V22.5H30V15H25ZM0 27.5C0.5 32.375 2.425 37 5.55 40.8L9.1 37.25C6.90502 34.414 5.49142 31.0524 5 27.5H0ZM12.775 40.925L9.2 44.475C12.9984 47.5763 17.6221 49.4971 22.5 50V45C18.9542 44.5286 15.5977 43.1221 12.775 40.925Z"
							fill="white" />
					</svg>
				</div>
				<span class="text-gray-400 uppercase">#1 support in software</span>
				<h3 class="text-4xl md:text-5xl max-w-md text-white font-semibold">24/7 real-time support.</h3>
				<p class="text-gray-400 max-w-sm text-sm">
					Customize ClickUp to tackle any project or task with 35+ ClickApps. Break down work with subtasks,
					assign Sprint Points, link tasks to other items with Relationships, and more.
				</p>
				<div class="flex flex-wrap gap-5 items-center max-w-lg">
					<div class="flex first:max-w-[6rem] last:max-w-[6rem] space-x-3 max-w-[12rem] w-fit items-center"
						v-for="feat of features" v-bind:key="feat">
						<!-- <svg class="h-5 min-w-[1.25rem]" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M0 11C0 4.925 4.925 0 11 0C17.075 0 22 4.925 22 11C22 17.075 17.075 22 11 22C4.925 22 0 17.075 0 11ZM16.28 8.28C16.4124 8.13774 16.4845 7.94969 16.4812 7.75537C16.4778 7.56105 16.3992 7.3756 16.262 7.238C16.1244 7.10076 15.9389 7.0222 15.7446 7.01884C15.5503 7.01549 15.3623 7.08759 15.22 7.22L9.25 13.19L6.78 10.72C6.63774 10.5876 6.44969 10.5155 6.25537 10.5188C6.06105 10.5222 5.8756 10.6008 5.738 10.738C5.60076 10.8756 5.5222 11.0611 5.51884 11.2554C5.51549 11.4497 5.58759 11.6377 5.72 11.78L8.72 14.78C8.86063 14.9205 9.05125 14.9993 9.25 14.9993C9.44875 14.9993 9.63937 14.9205 9.78 14.78L16.28 8.28Z"
								fill="#003399" />
						</svg> -->
                        <i class='bx bx-check bg-ed-orange p-1 rounded-full text-black font-bold text-md'></i>
						<p class="text-gray-400 text-sm">{{ feat }}</p>
					</div>
				</div>
			</div>

			<div class="hidden md:block relative">
				<img src="../assets/svgpicone.png" alt="" class="absolute -top-10 right-0">
				<img src="../assets/platformpic.png" alt="" class="h-[536px] w-[545px]">
				<img src="../assets/svgpictwo.png" alt="" class="absolute -bottom-10 -right-10 xl:-right-36">
			</div>
		</div>
</template>
<script setup>
    const features = [
	'Email Support',
	'Live Chat for Unlimted Plan+ Workspaces',
	'Frequent Webinars'
]
</script>