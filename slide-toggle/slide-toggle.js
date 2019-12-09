/**
 * Slide toggle utils function
 *
 * @param {HTMLElement} target Target element
 * @param {String} action Slide action (open, close)
 * @param {Boolean|Function} callback Callback function
 */
export default function slideToggle ({
	target,
	action = false,
	callback = false
}) {
	const computedStyles = window.getComputedStyle(target);
	const transitionDuration = parseFloat(computedStyles.transitionDuration);
	const transitionDurationMs = transitionDuration * 1000;
	const currentDisplay = computedStyles.display;
	let heightTarget = null;
	const delay = 100;

	if (transitionDuration === 0) {
		console.warn('slideToggle use only CSS Transition to animate the height, the target does not have');
	}

	target.style.overflow = 'hidden';

	if (currentDisplay === 'none' && (action === 'open' || action === false)) {
		open();
	} else if ((currentDisplay === '' || currentDisplay === 'block') && (action === 'close' || action === false)) {
		close();
	}

	function open () {
		target.style.height = 'auto';
		target.style.display = 'block';
		heightTarget = target.offsetHeight;
		target.style.height = 0;

		// Trigger CSS animation
		setTimeout(() => {
			target.style.height = `${heightTarget}px`;
		}, delay);

		// Callback CSS animation
		setTimeout(() => {
			if (callback && typeof callback === 'function') {
				callback();
			}
		}, transitionDurationMs + delay);
	}

	function close () {
		target.style.height = `${target.offsetHeight}px`;

		// Trigger CSS animation
		setTimeout(() => {
			target.style.height = 0;
		}, delay);

		// Callback CSS animation
		setTimeout(() => {
			target.style.height = 'auto';
			target.style.display = 'none';

			if (callback && typeof callback === 'function') {
				callback();
			}
		}, transitionDurationMs + delay);
	}
}
