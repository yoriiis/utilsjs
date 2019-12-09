/**
 * Closest utils function
 *
 * @param {HTMLElement} element Target element
 * @param {String} className Class name to search
 */
export default function closest ({ element, className }) {
	while (!element.classList.contains(className)) {
		element = element.parentNode;
		if (!element) {
			return null;
		}
	}
	return element;
}
