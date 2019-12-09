/**
 * Get index of HTML element
 *
 * @param {HTMLElement} target Target element
 */
export default function getIndex (target) {
	return [].slice.call(target.parentNode.children).indexOf(target);
}
