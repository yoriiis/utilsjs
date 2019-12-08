/**
 * Get CSS transition duration utils function
 *
 * @param {HTMLElement} target Target element
 * @param {Boolean} ms Return duration in millisecond (default second)
 */
export default function getCSSTransitionDuration({
	target,
	ms
}) {
	return (parseFloat(window.getComputedStyle(target).transitionDuration)) * (ms ? 1000 : 1)
}
