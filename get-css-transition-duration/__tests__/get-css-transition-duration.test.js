'use strict';

import getCSSTransitionDuration from '../get-css-transition-duration';

describe('getCSSTransitionDuration function', () => {
	beforeEach(() => {
		Object.defineProperty(window, 'getComputedStyle', {
			value: () => {
				return {
					transitionDuration: '250ms'
				};
			}
		});
		document.body.innerHTML = `
			<div class="element" style="transition: opacity 250ms ease-out;"></div>
		`;
	});

	it('should init the getCSSTransitionDuration function', () => {
		let result = getCSSTransitionDuration({
			target: document.querySelector('.element'),
			ms: false
		});
		expect(result).toBe(250);
	});
});
