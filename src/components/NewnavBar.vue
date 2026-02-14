<template>
    <div class="mainnav">
        <!-- nav -->        
        <nav class="md:px-14 w-full z-50 fixed inset-x-0 transition-all duration-500
        border-gray-200 dark:bg-gray-900 
        dark:border-gray-700 "
        :class="!top ? 'bg-[#ffffffd8] shadow backdrop-blur-md py-2' : 'py-0'">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" class="flex items-center">
                <img src="../assets/delthon_solution.png" class="w-40 mr-7 md:-ml-14" alt="delthon Logo" />
            </a>
            <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div class="hidden w-full md:block md:w-auto " id="navbar-dropdown">
                <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:-mr-10 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-ed-dark rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-ed-green md:p-0 md:w-auto 
                    dark:text-white md:dark:hover:text-ed-green text-sm font-medium dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Products 
                    <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                    <!-- Dropdown menu -->
                    <div id="dropdownNavbar" class="z-10 hidden font-normal bg-green-200 divide-y divide-gray-100 rounded-lg shadow w-64 dark:bg-gray-700 dark:divide-gray-600">
                        <ul class="py-2 text-sm text-ed-dark dark:text-ed-dark md:text-base" aria-labelledby="dropdownLargeButton">
                            <li>
                                <router-link to="/" class="block text-center py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white md:text-left md:px-10">
                                    Carthon</router-link>
                            </li>
                            <li>
                            <router-link to="/admin" class="block text-center py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white md:text-left md:px-10">
                                Eduthon</router-link>
                            </li>
                            
                            <li>
                            <router-link to="/" class="block text-center py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white md:text-left md:px-10">
                                Resthon</router-link>
                            </li>
                        </ul>
                    </div>

                </li>

                <!-- 2222 -->

                <li>
                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar2" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-ed-dark rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-ed-green md:p-0 md:w-auto 
                    dark:text-white md:dark:hover:text-ed-green text-sm font-medium dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Why Delwathon 
                    <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                    <!-- Dropdown menu -->
                    <div id="dropdownNavbar2" class="z-10 hidden font-normal bg-green-200 divide-y divide-gray-100 rounded-lg shadow w-64 dark:bg-gray-700 dark:divide-gray-600">
                        <ul class="py-2 text-sm text-ed-dark dark:text-ed-dark md:text-base" aria-labelledby="dropdownLargeButton">
                            <li>
                            <router-link to="/admin" class="block text-center py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white md:text-left md:px-10">
                                Eduthon</router-link>
                            </li>
                            
                        </ul>
                    </div>
                    
                </li>

                <!-- 333 -->
                <li>
                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar3" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-ed-dark rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-ed-green md:p-0 md:w-auto 
                    dark:text-white md:dark:hover:text-ed-green text-sm font-medium dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Pricing 
                    <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                    <!-- Dropdown menu -->
                    <div id="dropdownNavbar3" class="z-10 hidden font-normal bg-green-200 divide-y divide-gray-100 rounded-lg shadow w-64 dark:bg-gray-700 dark:divide-gray-600">
                        <ul class="py-2 text-sm text-ed-dark dark:text-ed-dark md:text-base" aria-labelledby="dropdownLargeButton">
                            <li>
                            <router-link to="/admin" class="block text-center py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white md:text-left md:px-10">
                                Eduthon</router-link>
                            </li>
                            
                        </ul>
                    </div>
                    
                </li>
                <!-- 444 -->
                <li>
                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar4" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-ed-dark rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-ed-green md:p-0 md:w-auto 
                    dark:text-white md:dark:hover:text-ed-green text-sm font-medium dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Learn 
                    <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                    <!-- Dropdown menu -->
                    <div id="dropdownNavbar4" class="z-10 hidden font-normal bg-green-200 divide-y divide-gray-100 rounded-lg shadow w-64 dark:bg-gray-700 dark:divide-gray-600">
                        <ul class="py-2 text-sm text-ed-dark dark:text-ed-dark md:text-base" aria-labelledby="dropdownLargeButton">
                            <li>
                            <router-link to="/admin" class="block text-center py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white md:text-left md:px-10">
                                Eduthon</router-link>
                            </li>
                            
                        </ul>
                    </div>
                    
                </li>
                <li class="mt-1 md:mt-0">
                    <router-link to="/" class="block py-2 pl-3 pr-4 text-sm font-medium
                    text-ed-dark rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-ed-green md:p-0 dark:text-white md:dark:hover:text-ed-green dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Our Sales Force</router-link>
                </li>

                <li class="mt-1 md:mt-0">
                    <router-link to="/" class="block py-2 pl-3 pr-4 text-sm font-medium
                    text-ed-dark rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-ed-green md:p-0 dark:text-white md:dark:hover:text-ed-green dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Contact Us</router-link>
                </li>
                <div class="flex justify-between md:place-content-end">
                <li class="mt-5 ml-2 mb-2 md:mt-0 md:mb-0 md:-ml-3 xl:ml-2">
                    <router-link to="/signup"
					className="border-ed-green md:px-1.5 xl:px-8 border py-2.5 px-8 outline-none text-xs bg-gray-50 text-ed-green font-semibold rounded-md shadow-md hover:text-white hover:bg-ed-green">
					Sign up
				    </router-link>
                </li>
                <li class="mt-5 ml-2 mb-4 md:mt-0 md:mb-0 ">
                    <router-link to="/login"
					className="py-2.5 px-8 md:px-1.5 xl:px-8 outline-none text-xs border-ed-green border bg-ed-green text-white font-semibold rounded-md shadow-md hover:bg-gray-50 hover:text-ed-green">
					Sign In
				    </router-link>
                </li>
                </div>
                </ul>
            </div>
            </div>
        </nav>
        <!--  -->
        <!-- Scroll to top -->
        <button @click="scrollToTop" :class="showscroll ? 'opacity-1' : 'opacity-0' "
            class="h-9 w-9 flex z-50 transition delay-300 ease-in-out  justify-center items-center rounded-full outline-none bg-ed-green fixed bottom-14 sm:bottom-20 right-10 sm:right-14">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.07 9.57L12 3.5L5.92999 9.57" stroke="white" stroke-width="1.5" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 20.4999V3.66992" stroke="white" stroke-width="1.5" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
        
    </div>
</template>

<script setup>
import {onBeforeMount, onBeforeUnmount,  onUpdated, ref} from 'vue';

const showscroll = ref(false)

let top = ref(true);
const handleScroll = () => {
	if (window.pageYOffset > 10) {
		if (top.value) top.value = false
        // console.log(window.pageYOffset)
	} else {
		if (!top.value) top.value = true
	}
}
onBeforeMount(() => {
	window.addEventListener('scroll', handleScroll)
})

onUpdated(() => {
    if (window.pageYOffset > 12) {
		showscroll.value = true
	} else {
		showscroll.value =false
	}
}),

onBeforeUnmount(() => {
	window.removeEventListener('scroll', handleScroll)
})

const scrollToTop = () => {
	window.scrollTo({top: 0, behavior: 'smooth'});
}

</script>

