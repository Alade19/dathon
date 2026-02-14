<template>
    <div>
        <NewnavBar />

        <main class="Lato">

            <!-- section 1 -->
            <div class="relative pb-16">
                <div class="flex text-[#181C17] relative">
                    <div class="w-100 md:w-1/2 pt-44 app-x">
                        <img src="../assets/vector1.png" alt="" class="mb-2 ml-8">
                        <h3 class="text-4xl lg:text-6xl text-ed3-dark font-medium max-w-lg leading-tight lg:leading-[75px]">Your Business in <br>One Platform
                        </h3>
                        <p class="my-8 text-ed3-dark">Business burdens solved with just one application:<br>Administration, Financial Transactions,
                            Customer relations, <br>Reviews, Management, Trackings etc.</p>
                        <input autofocus
                            class="border bg-transparent rounded-md py-3 px-4 w-full max-w-md outline-none focus:border-ed-green transition"
                            placeholder="Enter your work email" />
                        <div class="my-8 flex space-x-10">
                            <button
                                className="py-1 px-7 outline-none text-xs bg-ed-green text-white font-semibold rounded-md shadow-md">
                                Get Started
                            </button>
                            <p class="text-[#A4A2A2] leading-5 font-semibold">FREE FOREVER <br /> NO CREDIT CARD.</p>
                        </div>
                    </div>
                    <div class="hidden relative md:block my-auto  p-3 ">
                        <img src="../assets/vector2.png" alt="" class="absolute top-[250px] right-[650px] z-30">
                        <img src="../assets/vector3.png" alt="" class="absolute top-[120px] right-[400px] ">
                        <img src="../assets/vector4.png" alt="" class="absolute -right-1 top-[50px]">
                        <img src="../assets/macbook.png" class="w-[622px] h-[350px] brightness-125 rm-drag mt-44 rounded-3xl" />
                        <img src="../assets/vector5.png" alt="" class="absolute -bottom-8 right-[520px] -z-20">
                        <img src="../assets/vector6.png" alt="" class="absolute right-44 -bottom-14 -z-20">
                    <!-- <div class="hidden md:block my-auto  p-3 overflow-hidden">
                        <img src="../assets/macbook.png" class="w-[622px] h-[350px] brightness-125 rm-drag mt-44 rounded-3xl" />
                    </div> -->
                </div>

            </div>
                <p class="text-center text-gray-400 font-medium text-md  mt-10 md:pt-10">Join 800,000+ highly productive teams</p>
                <div class="flex flex-wrap place-content-center md:space-x-8 lg:space-x-24 sm:space-y-0 sm:space-x-6 md:space-y-0 space-y-6 mt-8 ">
                    <!-- <div> -->
                        <img src="../assets/Carthoncolorpic2.png" alt="carton" class="w-[304px] h-[62px] brightness-100">
                    <!-- </div> -->
                    <!-- <div> -->
                        <img src="../assets/eduthonpic.png" alt="" class="w-[304px] h-[62px] brightness-100">
                    <!-- </div> -->
                    <!-- <div> -->
                        <img src="../assets/resthonpic.png" alt="" class="w-[304px] h-[62px] brightness-100">
                    <!-- </div> -->
                </div>
            </div>

            <!-- project and task -->

            <ProjectTask />

            <!-- docdashbord -->
            <DocDashbord />

            <!-- the platform -->
            <ThePlatform />

            <!-- built for everyone -->
            <NewBuilteveryone />


            <!-- slide -->

            <SliderPart />






            <!-- real support -->
            <RealSupport />

            <!-- section before footer -->
            <div
			class="p-8 shadow-md my-28 mx-2 lg:mx-20 flex flex-wrap lg:[box-shadow:.1rem_-.1rem_.5rem_#ccc]  lg:h-[202px] bg-white lg:rounded-2xl  items-center relative overflow-hidden">
                <img src="../assets/logofilled.png" class="absolute hidden lg:block h-[202px] w-[219px] -left-10" />
                <div class="relative mx-auto lg:text-left lg:ml-72">
                    <h3 class="text-4xl text-[#1B1B1B] font-semibold lg:text-5xl lg:mb-3">Your Business in one Platform</h3>
                    <p class="text-[#4F4F4F] ">Business burdens solved with just one application.</p>
                </div>
                <button
                    className="mt-4 py-2 md:-mt-3 my-2 ml-auto px-6 outline-none text-sm bg-ed-green hover:bg-green-800 text-white font-semibold rounded-md shadow-md">
                    Free Forever
                </button> 
		    </div>



            <!-- fo0ter -->
             <BottomFoot />

        </main>
    </div>
</template>


<script setup>
import NewnavBar from '../components/NewnavBar.vue'
import ProjectTask from '../components/ProjectTask.vue'
import DocDashbord from '../components/DocDashbords.vue'
import BottomFoot from '../components/BottomFoot.vue'
import RealSupport from '../components/RealSupport.vue'
import ThePlatform from '../components/ThePlatform.vue'
import NewBuilteveryone from '../components/NewBuilteveryone.vue'
import SliderPart from '../components/SliderPart.vue'

</script>