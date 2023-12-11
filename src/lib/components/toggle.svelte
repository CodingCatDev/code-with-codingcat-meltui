<script lang="ts">
	import { createToggle, melt } from '@melt-ui/svelte';
	const {
		elements: { root },
		states: { pressed }
	} = createToggle();
</script>

<button
	class="grid place-items-center items-center justify-center rounded-md
bg-white text-base leading-4 text-orange-800 shadow-lg hover:bg-orange-100
  data-[disabled]:cursor-not-allowed data-[state=on]:bg-orange-200
  data-[state=on]:text-orange-900 p-2"
	use:melt={$root}>{$pressed ? 'Melt Toggled' : 'Melt Toggle'}</button
>

<style>
	button[data-state='on'] {
		filter: invert(1);
	}
</style>
