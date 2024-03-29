/**
 * Closest utils function
 *
 * @param {HTMLElement} element Target element
 * @param {String} className Class name to search
 *
 * @return {HTMLElement} Element which match the class name
 */
export default function closest ({ element = null, className }) {
	if (typeof element !== 'undefined') {
		while (!element.classList.contains(className)) {
			element = element.parentNode;
			if (!element) {
				return null;
			}
		}
	}
	return element;
}
