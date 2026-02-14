<script setup>
import {useField} from 'vee-validate';
import Multiselect from '@vueform/multiselect';

const props = defineProps({
	name: {
		type: String,
		required: true,
	},
	class: String,
	type: String,
	label: String,
	error: String,
	placeholder: String,
	required: Boolean,
	options: {
		default: []
	}
});

const {value} = useField(() => props.name);
console.log(value)
</script>
<template>
	<div class="flex flex-col h-[5.5rem]" :class="`${props.class} ${type == 'textarea' ? 'h-[10rem]' : ''}` ?? ''">
		<label class="mb-2 text-[#4F4F4F] dark:text-inherit" v-if="label"
			:class="required ? `after:content-['*'] after:ml-0.5 after:text-red-500` : ''">{{ label }}</label>
		<select v-if="type == 'select'" v-model="value" class="app-input w-full text-sm">
			<option v-for="(option, i) of options" v-bind:key="i" class="dark:text-gray-400" :value="option.value">
				{{ option.text }}
			</option>
		</select>
		<textarea v-else-if="type == 'textarea'" v-model="value" :type="type ?? 'text'" rows="10"
			class="app-input w-full text-sm placeholder:text-[#A4A2A2] dark:placeholder:text-[#4F4F4F] h-full"
			:placeholder="placeholder" :class="type == 'file' ? 'p-0 pr-2 file:bg-[#A4A2A2] file:' : ''">
		</textarea>
		<Multiselect v-else-if="type == 'tags'"
			class="text-sm rounded-lg"
			v-model="section"
			:options="options"
			ref="multiple"
			mode="tags"
		/>
		<div v-else>
			<input v-model="value" :type="type ?? 'text'"
				class="app-input w-full text-sm placeholder:text-[#A4A2A2] dark:placeholder:text-[#4F4F4F]"
				:placeholder="placeholder"   :class="type == 'file' ? 'p-0 pr-2 file:bg-[#A4A2A2] file:' : ''" />
		</div>
		<span class="text-xs text-red-600 mt-1">{{ error }}</span>
	</div>
</template>
<style src="@vueform/multiselect/themes/default.css"></style>