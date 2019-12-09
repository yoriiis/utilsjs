/**
 * Get cookie utils function
 *
 * @param {String} name Cookie name
 *
 * @return {String} Cookie value
 */
export default function getCookie (name) {
	let getCookieValues = function (cookie) {
		var cookieArray = cookie.split('=');
		return cookieArray[1].trim();
	};

	let getCookieNames = function (cookie) {
		var cookieArray = cookie.split('=');
		return cookieArray[0].trim();
	};

	let cookies = document.cookie.split(';');
	let cookieValue = cookies.map(getCookieValues)[cookies.map(getCookieNames).indexOf(name)];

	return (cookieValue === undefined) ? null : cookieValue;
}
