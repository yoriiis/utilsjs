/**
 * Set cookie utils function
 *
 * @param {String} name Cookie name
 * @param {String|Boolean} value Cookie value
 * @param {Boolean} days Expiration in days
 * @param {String} path Cookie path
 */
export default function setCookie ({
	name,
	value,
	days = false,
	path = '/'
}) {
	let expires = '';

	// Add expiration date
	if (days) {
		let date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = `; expires=${date.toGMTString()}`;
	}

	document.cookie = `${name}=${value};${expires};path=${path}`;
}
