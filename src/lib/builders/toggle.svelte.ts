export function createToggleRunes() {
	let pressed = $state(false);

	return {
		get trigger() {
			return {
				'data-pressed': pressed ? '' : undefined,
				onclick: () => (pressed = !pressed)
			};
		},
		get pressed() {
			return pressed;
		}
	};
}
