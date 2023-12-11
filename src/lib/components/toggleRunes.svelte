<script lang="ts">
	import { createToggleRunes } from '$lib/builders/toggle.svelte';
	const toggle = createToggleRunes();
</script>

<button {...toggle.trigger}>{toggle.pressed ? 'Rune Toggled' : 'Rune Toggle'}</button>

<style>
	button[data-pressed] {
		filter: invert(1);
	}
</style>
