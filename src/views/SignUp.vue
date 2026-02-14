
<template>
    <main class="flex font-serif">
        <nav class="flex flex-wrap fixed inset-x-0 top-0 z-10 app-x justify-between">
            <h3 class="flex space-x-2 mr-5 pt-5 items-center font-bold text-gray-700 md:text-white text-3xl ">
                <img src="../assets/logofilled.png" className="w-10 md:hidden" />
                <span className="text-ed-green md:hidden">Eduthon</span>
                <img src="../assets/logo_text_white.png" className="w-40 rm-drag hidden md:inline" />
            </h3>
            <div class="hidden md:flex space-x-5 sm:space-x-10 items-center pt-5 sm:mt-0">
                <span class="text-sm">Don't have an account with Eduthon?</span>
                <button @click="toLogin"
                    class="bg-ed-green py-2 px-6 text-white font-semibold rounded text-sm whitespace-nowrap">Sign
                    In</button>
            </div>
            <div
                class="flex text-xs underline cursor-pointer md:hidden text-blue-400 space-x-5 sm:space-x-10 items-center pt-5 sm:mt-0">
                <button @click="toLogin"
                    class="bg-ed-green py-2 px-6 text-white font-semibold rounded text-sm whitespace-nowrap">Sign up
                    instead</button>
            </div>
        </nav>
        <!--  -->
        <div class="hidden relative justify-center items-center md:flex w-5/12 h-screen">
            <img class="absolute inset-0 h-full object-cover" src="../assets/authbg.jpeg" />
            <div class="absolute inset-0 bg-gradient-to-b from-[#00b95cd5] to-[#2D379Bd5] "></div>
            <div class="app-x font-bold text-3xl lg:text-4xl relative">
                <h3 class="text-white">Special offers are waiting for you</h3>
                <h3 class="text-blue-500 mt-5">Register Now</h3>
            </div>
        </div>
        <!--  -->
        <div class="items-center justify-center flex w-full pt-20 min-h-screen overflow-y-auto app-x md:w-7/12">
            <div class="max-w-md text-center">
                <h3 class="text-2xl md:text-[2.5rem] font-bold">Welcome Onboard!</h3>
                <p class="text-xs md:text-sm mt-4 text-gray-700">Log in with your data that you entered during registration
                </p>
                <form @submit.prevent="handleLogin" class="pt-10 md:pt-16 flex flex-col space-y-6">
                    <InputWrapper>
                        <template #icon><i class="bx bxs-home-circle"></i></template>
                        <template #input>
                            <input autocomplete="username" v-model="schoolName" name="email"
                                class="w-full text-sm outline-none px-3 mr-1"
                                placeholder="Enter school name(Kings international college)" />
                        </template>
                    </InputWrapper>
                    <!--  -->
                    <InputWrapper>
                        <template #icon><i class="bx bxs-user-circle"></i></template>
                        <template #input>
                            <input autocomplete="username" v-model="email" name="email"
                                class="w-full text-sm outline-none px-3 mr-1 outline-nonet"
                                placeholder="Enter school working email or username" />
                        </template>
                    </InputWrapper>
                    <!--  -->
                    <InputWrapper>
                        <template #icon><i class="bx bxs-lock"></i></template>
                        <template #input>
                            <input autocomplete="current-password" v-model="password" name="password"
                                :type="state.showPass ? 'text' : 'password'"
                                class="w-full text-sm outline-none px-3 mr-1 border-none focus:ring-0"
                                placeholder="Enter your password" />
                        </template>
                        <template #after>
                            <button type="button" @click="state.showPass = !state.showPass"
                                class="text-gray-700 text-xl cursor-pointer rounded-full hover:bg-gray-50 h-8 w-8 min-w-[2rem] mr-1 flex justify-center items-center focused">
                                <i v-if="state.showPass" class='bx bx-show'></i>
                                <i v-else class='bx bx-hide'></i>
                            </button>
                        </template>
                    </InputWrapper>
                    <div class="flex justify-between">
                        <div class="flex space-x-2 items-center">
                            <input type="checkbox" class="focused rounded" />
                            <label class="text-sm">Remember me</label>
                        </div>
                        <div class="flex space-x-2">
                            <span class="text-sm text-blue-800">Forgot Password?</span>
                        </div>
                    </div>
                    <button class="py-3 w-full rounded-lg text-white font-semibold bg-ed-green focused transition">Sign
                        Up</button>
                    <div class="flex items-center justify-between">
                        <hr class="w-4/12 border-gray-400" />
                        <span class="text-gray-500 text-sm font-medium w-full sm:w-fit">OR sign in with</span>
                        <hr class="w-4/12 border-gray-400" />
                    </div>
                    <div class="flex justify-center space-x-3 items-center">
                        <i class="bx bxl-facebook-circle text-2xl text-blue-500 cursor-pointer"></i>
                        <GoogleIcon class="cursor-pointer" />
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>

<script setup>
import {reactive} from 'vue';
import GoogleIcon from '../components/icons/GoogleIcon.vue';
import InputWrapper from '../components/InputWrapper.vue'
import {useRouter} from 'vue-router'

const state = reactive({showPass: true})
const router = useRouter()
const toLogin = () => {
    router.push('/login')
}


</script>
