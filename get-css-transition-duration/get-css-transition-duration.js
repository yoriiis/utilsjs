/**
 * Get CSS transition duration utils function
 *
 * @param {HTMLElement} target Target element
 * @param {Boolean} ms Return duration in millisecond (default second)
 *
 * @return {Float|Array} Return unique duration or a list in seconds or milliseconds
 */
export default function getCSSTransitionDuration ({
	target,
	ms
}) {
	let transitionDuration = window.getComputedStyle(target).transitionDuration;
	let duration;
	let multiplier = ms ? 1000 : 1;

	// Check if property contains multiple transition
	if (transitionDuration.indexOf(',') > -1) {
		duration = transitionDuration.split(',').map(item => parseFloat(item) * multiplier);
	} else {
		duration = parseFloat(transitionDuration) * multiplier;
	}

	return duration;
}
