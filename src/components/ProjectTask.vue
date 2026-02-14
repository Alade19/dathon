<template>
    <div class="grid grid-cols-1 lg:grid-cols-3 mt-10">
        <div class="bg-blue-900 hidden lg:block w-ful px-6 py-14 ">
            <div class="w-[536px] h-[622px] relative xl:ml-40 lg:ml-10">
                <img src="../assets/projectask.png" alt="" class="brightness-100 z-20 top-5 absolute w-[536px] h-[622px] my-auto">
                <div class="absolute z-30 space-y-3 bottom-3 -right-20">
                    <div class="  bg-white  flex z-30 px-20 rounded-md">
                        <i class='bx bx-check mr-1 font-extrabold  text-3xl text-ed-blue'></i><span class="my-auto font-medium text-ed-blue text-1xl">Eduthon</span>
                    </div>
                    <div class="  bg-white  flex z-30 px-20 rounded-md">
                        <i class='bx bx-check mr-1 font-extrabold  text-3xl text-ed-blue'></i><span class="my-auto font-medium text-ed-blue text-1xl">Carthon</span>
                    </div>
                    <div class="  bg-white  flex z-30 px-20 rounded-md">
                        <i class='bx bx-check mr-1 font-extrabold  text-3xl text-ed-blue'></i><span class="my-auto font-medium text-ed-blue text-1xl">Resthon</span>
                    </div>
                </div>
                
            </div>
        </div>


        <!-- 2222 -->
        <div class="bg-[#0033990D] py-10 md:py-20 items-center w-full p-6 lg:col-span-2 ">
            <div class="w-full text-center md:mx-auto text-[#1B1B1B] md:text-left md:ml-5  lg:w-[600px] lg:px-14 lg:py-20 lg:float-right ">
                <div class="flex place-content-center lg:place-content-start space-x-4 md:space-x-8 pb-14 text-[#181C17] ">
                    <button class="border-b-4 border-ed-blue px-2 pb-1" @click="showbody = 1" :class="showbody == 1 ? 'border-b-4' : 'border-none'">Project & Tasks </button>
                    <button class="border-ed-blue px-2 pb-1" @click="showbody = 2" :class="showbody == 2 ? 'border-b-4' : 'border-none'">Chat</button>
                    <button class="border-ed-blue px-2 pb-1" @click="showbody = 3" :class="showbody == 3 ? 'border-b-4' : 'border-none'">Goals</button>
                    <button class="border-ed-blue px-2 pb-1" @click="showbody = 4" :class="showbody == 4 ? 'border-b-4' : 'border-none'">Views</button>
                </div>
                <div v-if="showbody == 1">
                    <h3 class="text-4xl md:text-4xl font-semibold text-center lg:text-left leading-tight ">Simplify work and get more done.
                    </h3>
                    <p class="my-8 md:px-28 md:mx-auto text-center lg:text-left lg:px-0">Plan, track, and manage any type of work with project management that flexes to your team's
                        needs.
                    </p>
                    <div class="my-8 mb-1 md:place-content-center lg:place-content-start flex space-x-10 ">
                        <button
                            className="drop-shadow-2xl md:mx-0 py-2 px-6 mx-auto hover:bg-white hover:text-ed-blue border border-ed-blue outline-none text-xs bg-ed-blue text-white font-semibold rounded-md shadow-md">
                            Get Started
                        </button>
                    </div>
                </div>

                <!-- 222222222  chat-->

                <div v-if="showbody == 2">
                    <h3 class="text-4xl md:text-4xl font-semibold text-center leading-tight lg:text-left">Bring everyone together in Chat.
                    </h3>
                    <p class="my-8 md:px-28 md:mx-auto text-center lg:text-left lg:px-0">Work smarter as a team with real-time chat. Tag individuals or groups, assign comments for action items, and link tasks to get more done together.
                    </p>
                    <div class="my-8 mb-1 md:place-content-center flex space-x-10 lg:place-content-start ">
                        <button
                        className="drop-shadow-2xl md:mx-0 py-2 px-6 mx-auto hover:bg-white hover:text-ed-blue border border-ed-blue outline-none text-xs bg-ed-blue text-white font-semibold rounded-md shadow-md">
                            Explore Chats
                        </button>
                    </div>
                </div>

                <!-- 3333333 goals -->

                <div v-if="showbody == 3">
                    <h3 class="text-4xl md:text-4xl font-semibold text-center leading-tight lg:text-left">Set goals and crush them faster.
                    </h3>
                    <p class="my-8 md:px-20 md:mx-auto text-center lg:text-left lg:px-0">Stay on track to hit your goals with targets for task completions, numbers, monetary values and more. Track progress in real-time connecting tasks to goals and keep your objectives organized with Goal Folders.
                    </p>
                    <div class="my-8 mb-1 md:place-content-center flex space-x-10 lg:place-content-start ">
                        <button
                        className="drop-shadow-2xl md:mx-0 py-2 px-6 mx-auto hover:bg-white hover:text-ed-blue border border-ed-blue outline-none text-xs bg-ed-blue text-white font-semibold rounded-md shadow-md">
                            Explor Goals
                        </button>
                    </div>
                </div>

                <!-- 4444444 views -->

                <div v-if="showbody == 4">
                    <h3 class="text-4xl md:text-4xl font-semibold text-center leading-tight lg:text-left ">See your work, your way.
                    </h3>
                    <p class="my-8 md:px-28 md:mx-auto text-center lg:text-left lg:px-0">Tackle work from any angle with 20+ real-time views that adapt to your needs. Track tasks on List, update workflows on a Board, drag-and-drop due dates on a Calendar, and so much more.
                    </p>
                    <div class="my-8 mb-1 md:place-content-center flex lg:place-content-start space-x-10 ">
                        <button
                        className="drop-shadow-2xl md:mx-0 py-2 px-6 mx-auto hover:bg-white hover:text-ed-blue border border-ed-blue outline-none text-xs bg-ed-blue text-white font-semibold rounded-md shadow-md">
                            See Views
                        </button>
                    </div>
                </div>

        </div>
        </div>
    </div>
    


</template>

<script lang="ts">
import { ref } from 'vue'
export default {
    setup() {
        let showbody = ref(1)

       

        return{
            showbody
        }
    },
}
</script>