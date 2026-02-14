<script setup>
import {ref, reactive} from 'vue'
import {Dialog, DialogPanel, TransitionChild, TransitionRoot} from '@headlessui/vue'
import VeeValInput from '../../../components/VeeValInput.vue';
import {assignSubjectSchema} from '../../../schemas'
import {useForm} from 'vee-validate';
import Multiselect from '@vueform/multiselect';


const open = ref(false)
const classes = [
	{
		branch: "Dathon Foundation", class: "Nursery 1", section: "A", subjects: [
			"English Language",
			"Mathematics",
			"Quantative Reasoning",
			"Handwriting",
		]
	},
	{
		branch: "Dathon Foundation", class: "Nursery 2", section: "A/B", subjects: [
			"English Language",
			"Mathematics",
			"Quantative Reasoning",
			"Handwriting",
		]
	},
	{
		branch: "Dathon Foundation", class: "Primary 1", section: "A/B", subjects: [
			"English Language",
			"Mathematics",
			"Quantative Reasoning",
			"Handwriting",
		]
	},
	{
		branch: "Dathon College", class: "Jss 1", section: "Blue/Green", subjects: [
			"English Language",
			"Mathematics",
			"Basic Science"
		]
	},
	{
		branch: "Dathon College", class: "Jss 2", section: "Blue/Green", subjects: [
			"English Language",
			"Mathematics",
			"Basic Science"
		]
	},

]
 
const state = reactive({
	data: classes,
	defaultAssignValues: {},
	// options
})
const branchModal = () => {
	open.value = true
}

const search = (searchText) => {
	const st = searchText.toLowerCase();
	const searched = classes.filter(each => (
		each.branch.toLowerCase().includes(st) ||
		each.class.toLowerCase().includes(st) ||
		each.section.toLowerCase().includes(st)
	))
	state.data = searched;
}

const newSubjectInputs = [
	{
		name: "branch", label: "Branch", type: "select", required: true, w: 'w-full', options: [
			{text: "Choose...", value: undefined},
			{text: "Dathon Limited", value: 'Dathon Limited'},
			{text: "Choose...", value: '3'},
		]
	},
	{
		name: "class", label: "Class", type: "tags", required: true, w: 'w-full', options: [
			'Nursery 1 - A', 
			'Nursery 2 - A',
			'Primary 1 - A', 
			'Primary 1 - B',
			'JSS 1 - Blue', 
			'JSS 1 - Green', 
			'JSS 2 - Blue', 
			'JSS 2 - Green'
		]
	},
	{
		name: "section", label: "Section", type: "select", required: true, w: 'w-full', options: [
			{text: "Choose...", value: undefined},
			{text: "Choose...", value: '2'},
			{text: "Choose...", value: '3'},
		]
	},
	{
		name: "subject", label: "Subject", type: "select", required: true, w: 'w-full', options: [
			{text: "Choose...", value: undefined},
			{text: "Computer Science", value: '2'},
			{text: "Information Technology", value: '3'},
		]
	},
]


const {handleSubmit, errors, setValues} = useForm({
	validationSchema: assignSubjectSchema,
	initialValues: state.defaultAssignValues
});

const submit = handleSubmit(values => {
	console.log(values);
})
</script>

<template>
	<div class="px-5 md:px-10 py-5 text-sm mx-auto ">
		<h3 class="font-semibold">CLASS SUBJECTS</h3>
		<div class="mt-5">
			<button @click="branchModal"
				class="px-3 border transition border-[#00A859] hover:bg-[#00A859] hover:text-white py-2 rounded-sm text-green-700">
				<i class="bx bx-plus"></i> Assign Subject</button>
		</div>
		<!-- group Buttons start here -->
		<div class=" md:flex  justify-between py-4">
			<div class="inline-flex rounded-md shadow-sm mt-4" role="group">
				<button style="font-size:12px" type="button"
					class="inline-flex text-white bg-[#00A859] items-center px-4 py-2 font-normal hover:bg-[#008246] focus:z-10 focus:ring-green-700 focus:text-green-700 rounded-l-md">
					Copy
				</button>

				<button style="font-size:12px" type="button"
					class="inline-flex text-white bg-[#00A859] items-center px-4 py-2 font-normal hover:bg-[#008246] focus:z-10 focus:ring-green-700 focus:text-green-700 ">
					Excel
				</button>
				<button style="font-size:12px" type="button"
					class="inline-flex text-white bg-[#00A859] items-center px-4 py-2 font-normal hover:bg-[#008246] focus:z-10 focus:ring-green-700 focus:text-green-700 ">
					Column Visibility
				</button>

				<button style="font-size:12px" type="button"
					class="inline-flex text-white bg-[#00A859] items-center px-4 py-2 text-sm font-normal hover:bg-[#008246] focus:z-10 focus:ring-green-700 focus:text-green-700 rounded-r-md">
					PDF
				</button>
			</div>
			<!--  -->
			<div class="rounded-md ed-border w-full lg:w-[20rem] flex space-x-2 px-2 items-center mt-4">
				<i class='bx bx-search text-sm mt-1'></i>
				<input class="bg-transparent p-1 outline-none text-sm" placeholder="Search..."
					@input="e => search(e.target.value)" />
			</div>

		</div>

		<!--  tables start here-->
		<div class="mt-5 mb-4 max-w-full overflowed">
			<table class="w-full text-left text-[.82rem]">
				<thead class="">
					<tr class="">
						<th class="p-2">S/N</th>
						<th class="p-2">Branch</th>
						<th class="p-2">Class</th>
						<th class="p-2">Section</th>
						<th class="p-2">Subjects</th>
						<th class="p-2">Actions</th>
					</tr>
				</thead>
				<tbody class="align-top">
					<tr v-for="(classObj, i) in state.data" :key="i" >
						<td class="border-y border-x-0 border-[#ccc] ed-border p-2">
							{{ i+1 }}
						</td>
						<td class="border-y border-x-0 border-[#ccc] ed-border p-2">
							{{ classObj.branch }}
						</td>
						<td class="border-y border-x-0 border-[#ccc] ed-border p-2">
							{{ classObj.class }}
						</td>
						<td class="border-y border-x-0 border-[#ccc] ed-border p-2">
							{{ classObj.section }}
						</td>
						<td class="border-y text-xs border-x-0 border-[#ccc] ed-border p-2">
							<ul>
								<li v-for="(subject, i) in classObj.subjects" :key="i" class="flex space-x-2">
									<i class="bx bx-chevron-right text-ed-green"></i>
									<span>{{ subject }}</span>
								</li>
							</ul>
						</td>
						<td class="border-y border-x-0 border-[#ccc] ed-border p-2 ">
							<div class=" space-x-1 flex my-auto">
								<button @click="() => { setValues(classObj); branchModal() }"
									class="bg-[#00A8594D]  text-ed-green hover:bg-ed-green hover:text-white transition rounded-lg h-7 w-7 flex items-center justify-center"><i
										class="bx bx-edit"></i></button>
								<button
									class="bg-[#FF00004D]  text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition rounded-lg h-7 w-7 flex items-center justify-center"><i
										class="bx bx-trash"></i></button>
							</div>
						</td>
					</tr>

				</tbody>
			</table>
			<!--  -->
		</div>
		<!-- table ends here -->
	</div>



	<!-- modal here -->
	<TransitionRoot as="template" :show="open">
		<Dialog as="div" class="relative z-[1000] font" @close="open = false">
			<TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
				leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
				<div class="fixed inset-0 bg-dark bg-opacity-80 transition-opacity" />
			</TransitionChild>
			<div class="fixed inset-0 z-10 overflow-y-auto   dark:text-white">
				<form class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
					<TransitionChild as="template" enter="ease-out duration-300"
						enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
						leave-from="opacity-100 translate-y-0 sm:scale-100"
						leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
						<DialogPanel
							class="relative transform overflow-hidden rounded-lg  text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
							<!--ADD content here  -->
							<div class="bg-white px-4 pb-4 pt-5 sm:p-6 overflow-y-auto sm:pb-4 dark:bg-gray-800 dark:text-white">
								<!-- grid grid-cols-1 md:grid-cols-1 -->
								<h4 class="font-medium font">Add Subject <i class="fa fa-plus-circle text-green-500"></i>
								</h4>
								<div class="mt-4 flex text-sm flex-wrap">
									<div v-for="(input ) of newSubjectInputs" v-bind:key="input.name" class="p-1"
										:class="input.w">
										<VeeValInput class="w-full" :placeholder="input.placeholder"
											:error="errors[input.name]" :name="input.name" :type="input.type"
											:label="input.label" :required="input.required" :options="input.options" />
									</div>
								</div>
							</div>
							<!-- content here -->
							<div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 dark:bg-slate-800">
								<button type="button"
									class="inline-flex w-full justify-center rounded-md bg-[#00A859] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
									@click="submit">Save</button>
								<button type="button"
									class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
									@click="open = false" ref="cancelButtonRef">Cancel</button>
							</div>
						</DialogPanel>
					</TransitionChild>
				</form>
			</div>
		</Dialog>
	</TransitionRoot>
</template>
<style src="@vueform/multiselect/themes/default.css"></style>