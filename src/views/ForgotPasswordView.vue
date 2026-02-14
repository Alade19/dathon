<script setup>
import {ref} from 'vue';
import InputWrapper from '../components/InputWrapper.vue'

// const state = reactive({showPass:false})

const email = ref("");
const handleLogin = () => {
  const data = {
    email:email.value,
  }
  console.log(data);
}

</script>

<template>
  <main class="flex font-serif">
	<nav class="flex flex-wrap fixed inset-x-0 top-0 z-10 app-x justify-between">
		<h3 class="flex space-x-2 mr-5 pt-5 items-center font-bold text-white text-3xl ">
			<img src="../assets/logo_text_white.png" className="w-40 rm-drag" />
		</h3>
    <div class="hidden md:flex space-x-5 items-center pt-5 sm:mt-0">
      <span class="text-sm text-white">Return to</span>
      <router-link to="/login"  class="text-ed-green py-2 px-6 bg-white font-semibold rounded text-sm whitespace-nowrap">Sign In</router-link>
    </div>
    <router-link to="/login" class="flex text-xs underline cursor-pointer md:hidden text-white space-x-5 sm:space-x-10 items-center pt-5 sm:mt-0">
      Sign in instead
    </router-link>
	</nav>

	<img class="absolute inset-0 h-full w-full object-cover" src="../assets/authbg.jpeg"/>
	<div class="absolute inset-0 bg-gradient-to-b from-[#00b95cd5] to-[#2D379Bd5] "></div>
    <div class="hidden relative items-center md:flex w-5/12 h-screen backdrop-blur-10">
      <div class="app-x font-bold text-left text-3xl lg:text-4xl relative">
        <h3 class="text-white">Having problem accessing your account</h3>
        <h3 class="text-blue-500 mt-5">We are here for you</h3>
      </div>
    </div>
    <div class="items-center justify-center flex w-full pt-20 min-h-screen overflow-y-auto app-x md:w-7/12 relative text-white">
      <div class="max-w-md text-center">
        <h3 class="text-2xl md:text-[2rem] font-bold">Get access to your account.</h3>
        <p class="text-xs md:text-sm my-6 max-w-xs mx-auto">Enter your email and we will send you a link to get back into your account</p>
        <form @submit.prevent="handleLogin" class="flex flex-col space-y-6">
          <InputWrapper>
            <template #icon><i class="bx bxs-envelope"></i></template>
            <template #input>
             <input 
              autocomplete="username" 
              v-model="email" 
			        autofocus
              name="email" 
              class="w-full bg-transparent text-sm autofill:bg-blue-400 outline-none px-3 mr-1 outline-transparent" 
              placeholder="Enter your work email or username"
            />
            </template>
          </InputWrapper>
          <button class="py-3 w-full rounded-lg text-white font-semibold bg-ed-green focused transition">Reset Password</button>
          <div class="flex items-center justify-between">
            <hr class="w-full border-gray-400"/>
            <span class=" text-sm font-medium w-full sm:w-fit mx-2 text-gray-400">OR</span>
            <hr class="w-full border-gray-400"/>
          </div>
		<button class="py-3 w-full rounded-lg bg-white font-semibold text-ed-green focused transition">Create New Account</button>
        </form>
      </div>
    </div>
  </main>
</template>
