import { derived, writable } from 'svelte/store';

export function createToggle() {
	const pressed = writable(false);
	const triggerAttributes = derived(pressed, ($pressed: boolean) => {
		return {
			'data-pressed': $pressed ? '' : undefined
		};
	});
	const triggerAction = (node: HTMLElement) => {
		function handleClick() {
			pressed.update((p) => !p);
		}
		node.addEventListener('click', handleClick);
		return {
			destroy() {
				node.removeEventListener('click', handleClick);
			}
		};
	};
	return {
		triggerAction,
		triggerAttributes,
		pressed
	};
}
