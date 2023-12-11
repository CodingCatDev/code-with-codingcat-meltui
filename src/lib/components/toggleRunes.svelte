<script lang="ts">
	import { createToggleRunes } from '$lib/builders/toggle.svelte';
	const toggle = createToggleRunes();
</script>

<button
	class="grid place-items-center items-center justify-center rounded-md
bg-white text-base leading-4 text-orange-800 shadow-lg hover:bg-orange-100
  data-[disabled]:cursor-not-allowed data-[state=on]:bg-orange-200
  data-[state=on]:text-orange-900 p-2"
	{...toggle.trigger}>{toggle.pressed ? 'Rune Toggled' : 'Rune Toggle'}</button
>

<style>
	button[data-pressed] {
		filter: invert(1);
	}
</style>
