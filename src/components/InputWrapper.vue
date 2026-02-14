<script setup>
defineProps({

})
</script>

<template>
	<div class="flex h-[3.2rem] items-center transition duration-500 group focus-within:border-ed-green rounded-lg border border-gray-400">
		<div class="bg-gray-400 text-white flex justify-center items-center text-xl transition duration-500 h-full w-14 min-w-[3.5rem] rounded-l-lg group-focus-within:bg-ed-green">
			<slot name="icon"></slot>
		</div>
		<slot name="input"></slot>
		<slot name="after"></slot>
	</div>
</template>