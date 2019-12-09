/**
 * Get window scrollTop
 *
 * @return {Integer} Scroll position
 */
export default function scrollTop () {
	return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}
