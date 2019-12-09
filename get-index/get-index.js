/**
 * Get index of HTML element
 *
 * @param {HTMLElement} target Target element
 *
 * @return {Integer} Element index in the list
 */
export default function getIndex (target) {
	return [].slice.call(target.parentNode.children).indexOf(target);
}
