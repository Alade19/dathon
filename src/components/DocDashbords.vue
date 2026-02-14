<template>
    <div class="py-14 md:py-24 app-x">
        <div class="flex w-fit mx-auto space-x-4 md:space-x-8 pb-8 text-[#181C17]">
            <button class="border-ed-blue px-2 pb-1" @click="showbody1 = 1" :class="showbody1 == 1 ? 'border-b-4' : 'border-none'">Docs</button>
            <button class="border-ed-blue px-2 pb-1" @click="showbody1 = 2" :class="showbody1 == 2 ? 'border-b-4' : 'border-none'">Whiteboards</button>
            <button class="border-b-4 border-ed-blue px-2 pb-1" @click="showbody1 = 3" :class="showbody1 == 3 ? 'border-b-4' : 'border-none'">Dashboards </button>
        </div>
        <div v-if="showbody1 == 1">
            <h3 class="text-4xl md:text-4xl md:w-full text-center font-semibold mx-auto max-w-lg leading-tight">The world's most powerful (and fun) Docs.</h3>
            <img src="../assets/docdashpic.png" class="rm-drag mt-10  drop-shadow-md rounded-3xl brightness-100" />
        </div>

        <!-- 222222 -->
        <div v-if="showbody1 == 2">
            <h3 class="text-4xl md:text-4xl text-center font-semibold mx-auto max-w-lg leading-tight">Bring your ideas to
                life with Whiteboards.</h3>
            <img src="../assets/docdashpic.png" class="rm-drag mt-10  drop-shadow-md rounded-3xl brightness-100" />
        </div>

        <!-- 333 -->
        <div v-if="showbody1 == 3">
            <h3 class="text-4xl md:text-4xl text-center font-semibold mx-auto max-w-lg leading-tight">See how you're doing in real-time with Dashboards.</h3>
            <img src="../assets/docdashpic.png" class="rm-drag mt-10  drop-shadow-md rounded-3xl brightness-100" />
        </div>
    </div>
</template>
<script lang="ts">
import { ref } from 'vue'
export default {
    setup(){
        let showbody1 = ref(1)

        return{
            showbody1
        }
    }
}
</script>
