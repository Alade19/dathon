
<template>
	<div class="p-7 font  md:container">
		<h3>Dashboard</h3>	

		<div class="grid  md:grid mt-6">
			<div class="grid grid-cols-1 sm:grid-cols-3">
				<div class="col-span-1">
					<!--  -->
					<div class="flex max-w-md rounded-xl bg-gradient-to-b from-[#57c994]  to-[#00A859] py-8 px-8 shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-2">
						<!-- <div style="border-radius:100%" class="rounded-full  mx-auto  bg-white p-1"> -->
							<img style="border-radius:100% ; border-width:5px" class=" border border-white block mx-auto h-20 rounded-full sm:mx-0 sm:shrink-0" src="../../assets/erin-lindford.jpeg" alt="Woman's Face">
						<!-- </div> -->
						<!--  -->
						<div class="space-y-1 sm:text-left py-1 px-2 -mt-3 w-full">
							<div class="text-white">
								<p class=" font-medium text-md "> Welcome Back! </p>
								<p class="font-semibold text-white"> Erin Lindford </p>
								<p style="font-size:13px">Principal Delwathon Schools</p>
							</div> 
							<div class="flex space-x-1 justify-between">
								<button style="font-size:12px" class="px-2 bg-[#00339980] py-1 h-10   text-white font-normal rounded-sm  outline-none  hover:bg-[#00339980] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-[#00339980] focus:ring-offset-2">User:Admin</button>

								<button style="font-size:12px" class="px-1  w-20 py-1 text-sm text-white  rounded-sm border border-[#00339980] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#00339980] focus:ring-offset-2">Profile <i class="fa fa-user"></i></button>
							</div>
						</div>
						<!--  -->
					</div>
					<!--card under welcome back card!  -->
					<div class="grid md:grid mt-6 mr-5">
						<div class="grid grid-cols-2  gap-8">
							<!--  -->
							<div class=" col-span-1 p-2 w-40 lg:w-40 md:w-40 sm:w-40 mx-auto  bg-gradient-to-b from-[#003399] to-[#073daa] rounded-xl shadow-lg flex items-center space-x-2">
								<div class="shrink-0">
									<i class='bx bx-file text-white text-xl font-bold block mx-auto'></i>
									<!-- <img src="../../assets/Vector.svg" class="text-white block mx-auto h-6" alt=""> -->
								</div>
								<div class="text-left">
								  <div class="text-sm  font-medium text-white ml-3">00011</div>
								  <p class="text-white ml-3 " style="font-size:13px">Total Teachers</p>
								</div>
							</div>
							<div class=" col-span-1 p-2 w-40 mx-auto  bg-gradient-to-b from-[#00A859] to-[#18c675] rounded-xl shadow-lg flex items-center space-x-2">
								<div class="shrink-0">
								  <img src="../../assets/Vectorcheck.svg" class="text-white h-6" alt="">
								</div>
								<div>
								  <div class="text-md font-medium text-white">0007</div>
								  <p class="text-white" style="font-size:13px">Total Teachers</p>
								</div>
							</div>
							<!--  -->
						</div>
						<!--  -->
						<div class="grid grid-cols-1 md:grid-cols-1 dark:bg-dark dark:text-white">
							<div class="rounded-xl p-6  bg-gray-50 mt-4 flex items-center  shadow-md shadow-gray-200">
								<div class="">
									<h6 class="font-medium md:[font-size:15px] text-gray-600">Attendance Today</h6>
									<p class="font-medium md:[font-size:13px] mt-2 text-gray-500"> <i class="fas fa-dot-circle text-[#00A859]"></i> Total Students</p>
									<p class="font-medium mt-3 md:[font-size:12px]"><i class="fas fa-dot-circle text-[#003399]"></i> Present</p>

									<div class="mt-4">
										<h3 class="font-medium text-[#00A859] text-sm">12% <span class="fas fa-arrow-up"></span></h3>
										<p class="text-gray-700">From Yesterday</p>
									</div>
								</div>
							</div>
						</div>
						<!--  -->
					</div>
					
					<!-- card under welcome ends here -->
				</div>
				<!-- col 1 end here -->

				<!-- all the small card at right hand  start here -->
				<div class="col-span-2 ">
					<!-- grid for cards -->
					<!-- <div class="grid md:grid"> -->
						<div class="grid grid-cols-2 sm:grid-cols-3 py-1 px-4 gap-1">
							<!--  -->
							<div class=" col-span-2 sm:col-span-1 w-full md:w-30 p-4 md:p-4 mx-auto  bg-gradient-to-b from-[#00A859] to-[#003399] rounded-xl shadow-lg flex items-center space-x-4">
								<div class="shrink-0">
								  <span class="fa fa-users text-md text-white"></span>
								</div>
								<div>
								  <div class="text-md font-medium text-white">2000</div>
								  <p class="text-white text-sm">Total Teachers</p>
								</div>
							</div>
							<!--  -->
							<div class=" col-span-1 p-4  mx-auto  bg-gradient-to-b from-[#00A859] to-[#18c675] rounded-xl shadow-lg flex items-center space-x-4">
								<div class="shrink-0">
									<img src="../../assets/cap.svg" class="text-white h-6" alt="">
								</div>
								<div>
								  <div class="text-md md:text-xl font-medium text-white">2000</div>
								  <p class="text-white text-xs md:text-sm">Total Teachers</p>
								</div>
							</div>
							<!--  -->
							<div class="col-span-1 p-4  mx-auto  bg-gradient-to-b from-[#032973] to-[#003399] rounded-xl shadow-lg flex items-center space-x-4">
								<div class="shrink-0">
									<img src="../../assets/teacher.svg" class="text-white h-6" alt="">
								</div>
								<div>
								  <div class="text-md md:text-xl font-medium text-white">2000</div>
								  <p class="text-white text-xs md:text-sm">Total Teachers</p>
								</div>
							</div>
							<!--  -->
						</div>

						<!-- for chart graph -->
						<div class="p-6 grid grid-cols-1 md:grid-cols-1 ">
							<div class="rounded-xl p-6  bg-slate-100 -mt-3  shadow-sm  shadow-gray-400">
								<Line :data="data" :options="options" />
							</div>
						</div>
					

					<!-- </div> -->
				</div>
				
			</div>
			
		</div>
	</div>
</template>

<script setup>
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement,Title,
  Tooltip, Legend } from 'chart.js'
import {Line} from 'vue-chartjs'
ChartJS.register(CategoryScale, LinearScale,PointElement,LineElement,Title,Tooltip,Legend)
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#00A859',
      data: [40, 39, 10, 40, 39, 80, 40]
    }
  ]
}
const options = {
  responsive: true,
  maintainAspectRatio: false
}


</script>