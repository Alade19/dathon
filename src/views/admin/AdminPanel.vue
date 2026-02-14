<script setup>
import {reactive} from 'vue';
import {menuLinks, administrationLinks} from '../../services'
import SVGIcon from '../../components/SVGIcon.vue'

const state = reactive({
  showNav: false,
  dark: localStorage.theme === 'dark',
  activeChildren: null,
  activeChildren2: null,
});

const updateActiveChildren = (index) => {
  console.log(index, state.activeChildren)
  if (state.activeChildren == index) {
    state.activeChildren = null;
    return;
  }
  state.activeChildren = index;
}

const updateActiveChildren2 = (index) => {
  if (state.activeChildren2 == index) {
    state.activeChildren2 = null;
    return;
  }
  state.activeChildren2 = index;
}

const changeTheme = () => {
  if (localStorage.theme === 'light') {
    state.dark = true;
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
  } else {
    state.dark = false;
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light';
  }
}

</script>
<template>
  <div class="flex font  max-h-screen bg-slate-400">

    <!-- sidenav here -->
    <div class="flex fixed md:static h-screen z-50 transition-all duration-500"
      :class="state.showNav ? 'bg-[#00000093] w-screen md:w-fit' : 'bg-transparent w-fit pointer-events-none md:pointer-events-auto'">
      <div :class="state.showNav ? '' : '-translate-x-full md:translate-x-0'"
        class="transition-all duration-500  h-full min-w-[16rem]  w-64 overflowed bg-gradient-to-b from-[#00b95c] to-[#2d369b]">
        <div>
          <div class="mx-auto ml-4">
            <router-link to="/" class="flex  space-x-1 pt-7 items-center font-bold  md:text-white text-2xl">
              <img src="../../assets/eduthonwhitelogo.png" className="w-40 rm-drag" />
            </router-link>
          </div>
          <div class="mt-7">
            <div class="flex justify-center">
              <img src="../../assets/erin-lindford.jpeg" class="w-24 h-24 rounded-full border-2 border-gray-50">
              <!-- <div class=" ">

              </div> -->
            </div>
            <div class="py-3 px-6">
              <h2 class="text-white font-bold">MENU</h2>
            </div>
            <ul>
              <li :class="{ 'h-fit': state.activeChildren == i }" v-for="(link, i) of menuLinks"
                class=" py-2 px-6 h-12 transition-[height] overflow-hidden duration-500" v-bind:key="link.text">
                <router-link :to="link.link ?? ''" @click="updateActiveChildren(i)"
                  class="inline-flex text-gray-200 transition delay-700 ease-out duration-700  items-center w-full hover:text-white text-sm font-medium">
                  <SVGIcon :name="link.icon" />
                  <span class="ml-4 ">{{ link.text }}</span>
                  <i v-if="link.children" class='ml-auto bx text-xl'
                    :class="state.activeChildren == i ? 'bx-chevron-up' : 'bx-chevron-down'"></i>
                </router-link>
                <ul v-if="link.children">
                  <li class=" py-2 px-6" v-for="sub of link.children" v-bind:key="sub.text">
                    <router-link :to="sub.link ?? ''" @click="state.showNav = false"
                      class="inline-flex text-gray-200  transition delay-700 duration-300  items-center w-full hover:text-white text-sm font-medium">
                      <i class="bx" :class="link.icon"></i>
                      <span class="ml-4 "><i class='bx bx-label mt-2'></i> {{ sub.text }}</span>
                    </router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="mt-7">
            <div class="py-3 px-6">
              <h2 class="text-white font-bold">ADMINISTARTION</h2>
            </div>
            <ul>
              <li :class="{ 'h-fit': state.activeChildren2 == i }" v-for="(link, i) of administrationLinks"
                class=" py-3 px-6 h-12 transition-[height] overflow-hidden duration-500" v-bind:key="link.text">
                <router-link :to="link.link ?? ''" @click="updateActiveChildren2(i)"
                  class="inline-flex text-gray-200 transition duration-150 items-center w-full hover:text-white text-sm font-semibold">
                  <!-- <i class="bx" :class="link.icon"></i> -->
                  <SVGIcon :name="link.icon" />
                  <span class="ml-4 ">{{ link.text }}</span>
                  <i v-if="link.children" class='ml-auto bx text-xl'
                    :class="state.activeChildren == i ? 'bx-chevron-up' : 'bx-chevron-down'"></i>
                </router-link>
                <ul v-if="link.children">
                  <li class=" py-2 px-6" v-for="sub of link.children" v-bind:key="sub.text">
                    <router-link :to="sub.link ?? ''" @click="state.showNav = false"
                      class="inline-flex text-gray-200 transition duration-150 items-center w-full hover:text-white text-sm font-medium">
                      <i class="bx" :class="link.icon"></i>
                      <span class="ml-4 "><i class='bx bx-label mt-2'></i> {{ sub.text }}</span>
                    </router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div v-show="state.showNav" class="h-full w-full md:hidden" @click="state.showNav = false">
      </div>
    </div>

    <div class="h-screen w-full bg-gray-50 overflowed text-[#4F4F4F] dark:bg-dark dark:text-gray-300"
      :class="state.showNav ? '' : ''">
      <!-- appbar here -->
      <nav
        class="shadow z-40 py-5 flex items-center px-3 md:px-10 sticky top-0 bg-inherit justify-between flex-wrap sm:flex-nowrap">
        <div class="flex items-center w-full">
          <button @click="state.showNav = !state.showNav"
            class="rounded-full hover:bg-gray-200 transition duration-300 h-8 w-8 inline-flex justify-center items-center text-xl md:hidden">
            <i class="bx bx-menu"></i>
          </button>
          <div class="rounded-md border dark:border-[#898989] w-full hidden md:max-w-md md:flex space-x-2 px-2 items-center">
            <i class='bx bx-search text-lg mt-1'></i>
            <input class="bg-transparent p-2 outline-none w-full" placeholder="Search..." />
          </div>
        </div>
        <div class="flex space-x-5 text-xl pl-3 mx-auto mt-2">
          <button class="transition flex items-center justify-center rounded-full">
            <img src="../../assets/nig.svg" alt="">
          </button>
          <button
            class="h-7 w-7 dark:text-gray-300 text-gray-600 hover:bg-gray-300 dark:hover:bg-[#fbfbfb4b] transition flex items-center justify-center rounded-full">
            <i class='bx bx-fullscreen'></i>
          </button>
          <button @click="changeTheme"
            class="h-7 w-7 dark:text-gray-300 text-gray-600 hover:bg-gray-300 dark:hover:bg-[#fbfbfb4b] transition flex items-center justify-center rounded-full">
            <i class="bx" :class="state.dark ? 'bx-sun' : 'bx-moon'"></i>
          </button>
          <button
            class="h-7 w-7 relative dark:text-gray-300 text-gray-600 hover:bg-gray-300 dark:hover:bg-[#fbfbfb4b] transition flex items-center justify-center rounded-full">
            <i class='bx bx-bell'></i>
            <span
              class="bg-[#FF0000] flex items-center justify-center rounded-full h-3 w-3 text-[.6rem] text-white absolute top-0 right-1">3</span>
          </button>
          <button
            class="dark:text-gray-300 text-gray-600 transition flex items-center justify-center rounded-full space-x-1">
            <div class="h-6 w-6 rounded-full bg-gray-500"></div>
            <i class='bx bx-chevron-down'></i>
          </button>
        </div>
      </nav>

      <!-- children component here -->
      <div class="w-full ">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
