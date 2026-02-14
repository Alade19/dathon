<script setup>
import { reactive } from 'vue'
let yy = "year1"
 let name = "Exam"
 const state = reactive({
    data:"Joshua"
 })
</script>

<template>
    <div class="container md:container">
        <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul class="flex flex-wrap overflow-x-auto -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myYearsTab" role="tablist">
                <li class="mr-2" role="presentation">
                    <button class="inline-block p-4 data-[te-nav-active]:text-red-700  border-b-2 rounded-t-lg" id="" :data-tabs-target="'#'+yy" type="button" role="tab" aria-controls="year1" aria-selected="false">Year 1</button>
                </li>
                <li class="mr-2" role="presentation">
                    <button class="inline-block p-4 data-[te-nav-active] border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 focus:border-b-2 focus:border-blue-600" id="" data-tabs-target="#dash" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Year 2</button>
                </li>
              
            </ul>
        </div>

       <div id="myYearsTab">
            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="year1" role="tabpanel" aria-labelledby="year1">
            <!--  -->
               <ul class="flex md:flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400"  data-tabs-toggle="#myterms" role="tablist">
                    <li class="mr-2">
                        <button class="inline-block px-4 py-3 text-[#003399] rounded-lg active" aria-current="page" id="" data-tabs-target="#firstterm" type="button" role="tab" aria-controls="firstterm" aria-selected="false">
                            First Term
                        </button>
                    </li>
                    <li class="mr-2" role="presentation">
                        <button class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white active:bg[#003399]" id="" data-tabs-target="#secondterm" type="button" role="tab" aria-controls="firstterm" aria-selected="false">Second Term</button>
                    </li>
                    <li class="mr-2" role="presentation">
                        <button class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white" id="" data-tabs-target="#thirdterm" type="button" role="tab" aria-controls="thirdterm" aria-selected="false">Third Term</button>
                    </li>
                </ul>
                <div id="myterms">
                    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="firstterm" role="tabpanel" aria-labelledby="firstterm">
                        <div class=" border border-[#003399] rounded-md">
                            <h2 class="[font-size:13px] mt-2 ml-3">2021-2022 - First TERM MARKS</h2>
                            <div class="border-l-0 border-r-0 p-3 border-2 border-[#003399]  mt-2 mb-2">
                                <div class="relative overflow-x-auto">
                                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-6 py-3">
                                                    Subjects
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    CA (30)
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Exam (70)
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Total (100)
                                                </th>
                                                 <th scope="col" class="px-6 py-3">
                                                   	Grade
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    English Language
                                                </th>
                                                <td class="px-6 py-4">21</td>
                                                <td class="px-6 py-4">21</td>
                                                <td class="px-6 py-4">41</td>
                                                <td class="px-6 py-4">-</td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    Mathematics
                                                </th>
                                                <td class="px-6 py-4">21</td>
                                                <td class="px-6 py-4">21</td>
                                                <td class="px-6 py-4">41</td>
                                                <td class="px-6 py-4">-</td>
                                            </tr>
                                              
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!--  -->
                    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="secondterm" role="tabpanel" aria-labelledby="secondterm">
                         <div class=" border border-[#003399] rounded-md">
                            <h2 class="[font-size:13px] mt-2 ml-3">2021-2022 - SECOND TERM MARKS</h2>
                            <div class="border-l-0 border-r-0 p-3 border-2 border-[#003399]  mt-2 mb-2">
                                <div class="relative overflow-x-auto">
                                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-6 py-3">
                                                    Subjects
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    CA (30)
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Exam (70)
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Total (100)
                                                </th>
                                                 <th scope="col" class="px-6 py-3">
                                                   	Grade
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    English Language
                                                </th>
                                                <td class="px-6 py-4">21</td>
                                                <td class="px-6 py-4">21</td>
                                                <td class="px-6 py-4">41</td>
                                                <td class="px-6 py-4">-</td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    Mathematics
                                                </th>
                                                <td class="px-6 py-4">21</td>
                                                <td class="px-6 py-4">24</td>
                                                <td class="px-6 py-4">44</td>
                                                <td class="px-6 py-4">-</td>
                                            </tr>
                                              
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!--  -->
                    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="thirdterm" role="tabpanel" aria-labelledby="thirdterm">
                        <div class=" border border-[#003399] rounded-md">
                            <h2 class="[font-size:13px] mt-2 ml-3 uppercase">2021-2022 - Third TERM MARKS</h2>
                            <div class="border-l-0 border-r-0 p-3 border-2 border-[#003399]  mt-2 mb-2">
                                <div class="relative overflow-x-auto">
                                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-6 py-3">
                                                    Subjects
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    CA (30)
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Exam (70)
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Total (100)
                                                </th>
                                                 <th scope="col" class="px-6 py-3">
                                                   	Grade
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    English Language
                                                </th>
                                                <td class="px-6 py-4">11</td>
                                                <td class="px-6 py-4">67</td>
                                                <td class="px-6 py-4">72</td>
                                                <td class="px-6 py-4">-</td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    Mathematics
                                                </th>
                                                <td class="px-6 py-4">18</td>
                                                <td class="px-6 py-4">40</td>
                                                <td class="px-6 py-4">44</td>
                                                <td class="px-6 py-4">-</td>
                                            </tr>
                                              
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!--  -->
                </div>
            <!--  -->
            </div>
            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dash" role="tabpanel" aria-labelledby="dash-tab">
                <ul class="flex md:flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400"  data-tabs-toggle="#myterm" role="tablist">
                    <li class="mr-2">
                        <button class="inline-block px-4 py-3 text-[#003399] rounded-lg active focus:bg-[#003399] focus:text-white" aria-current="page" id="" data-tabs-target="#firstterm" type="button" role="tab" aria-controls="firstterm" aria-selected="false">
                            First Term
                        </button>
                    </li>
                    <li class="mr-2" role="presentation">
                        <button class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white active:bg[#003399] focus:bg-[#003399] focus:text-white" id="" data-tabs-target="#secondterm" type="button" role="tab" aria-controls="firstterm" aria-selected="false">Second Term</button>
                    </li>
                    <li class="mr-2" role="presentation">
                        <button class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white active:bg[#003399] focus:bg-[#003399] focus:text-white" id="" data-tabs-target="#firstterm" type="button" role="tab" aria-controls="firstterm" aria-selected="false">Third Term</button>
                    </li>
                </ul>
                <!--  -->
                <div id="myterm">
                    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="secondterm" role="tabpanel" aria-labelledby="secondterm">
                         <div class=" border border-[#003399] rounded-md">
                            <h2 class="[font-size:13px] mt-2 ml-3">2021-2022 - SECOND TERM MARKS</h2>
                            <div class="border-l-0 border-r-0 p-3 border-2 border-[#003399]  mt-2 mb-2">
                                <div class="relative overflow-x-auto">
                                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-6 py-3">
                                                    Subjects
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    CA (30)
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Exam (70)
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Total (100)
                                                </th>
                                                 <th scope="col" class="px-6 py-3">
                                                   	Grade
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    English Language
                                                </th>
                                                <td class="px-6 py-4">21</td>
                                                <td class="px-6 py-4">21</td>
                                                <td class="px-6 py-4">41</td>
                                                <td class="px-6 py-4">-</td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    Mathematics
                                                </th>
                                                <td class="px-6 py-4">21</td>
                                                <td class="px-6 py-4">24</td>
                                                <td class="px-6 py-4">44</td>
                                                <td class="px-6 py-4">-</td>
                                            </tr>
                                              
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
         
        </div>
    </div>
</template>