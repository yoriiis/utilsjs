/**
 * Observer module with Intersection Observer
 * The module execute a function once when the element is intersecting
 */
export default class Observer {
	/**
	 * Instanciate the constructor
	 *
	 * @constructor
	 *
	 * @param {Object} options Configuration
	 */
	constructor (options) {
		// Merge options with default options
		this.options = Object.assign({
			element: null,
			onIntersection: null,
			rootMargin: `0px 0px 0px 0px`
		}, options || {});

		this.parsed = false;

		// Instanciate the Interection Observer
		this.observer = new IntersectionObserver(this.callbackIntersection.bind(this), {
			rootMargin: this.options.rootMargin,
			threshold: 0.0
		});
	}

	/**
	 * Observe the element
	 */
	observe () {
		this.observer.observe(this.options.element);
	}

	/**
	 * Callback function called when the element is intersecting
	 * and respected the rootMargin option
	 *
	 * @param {Array} entries List of element entries with observer parameters
	 * @param {Object} observer Observer instance
	 */
	callbackIntersection (entries, observer) {
		entries.forEach(entry => {
			// Check if the element is intersecting and is not parsed yet
			// Callback function is called only once
			if (entry.isIntersecting && !this.parsed) {
				this.parsed = true;

				// Check the validity of the callback function from options
				if (typeof this.options.onIntersection === 'function') {
					this.options.onIntersection();
				}
			}
		})
	}
}
