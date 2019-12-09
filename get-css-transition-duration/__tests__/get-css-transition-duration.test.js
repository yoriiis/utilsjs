'use strict';

import getCSSTransitionDuration from '../get-css-transition-duration';

describe('getCSSTransitionDuration function with simple transition', () => {
	beforeEach(() => {
		Object.defineProperty(window, 'getComputedStyle', {
			value: () => {
				return {
					transitionDuration: '0.25s'
				};
			}
		});
		document.body.innerHTML = `
			<div class="element" style="transition: opacity 250ms ease-out;"></div>
		`;
	});

	it('should init the getCSSTransitionDuration function with simple transition and with seconds', () => {
		let result = getCSSTransitionDuration({
			target: document.querySelector('.element'),
			ms: false
		});
		expect(result).toBe(0.25);
	});

	it('should init the getCSSTransitionDuration function with simple transition and with milliseconds', () => {
		let result = getCSSTransitionDuration({
			target: document.querySelector('.element'),
			ms: true
		});
		expect(result).toBe(250);
	});
});

describe('getCSSTransitionDuration function with multiple transitions', () => {
	beforeEach(() => {
		Object.defineProperty(window, 'getComputedStyle', {
			value: () => {
				return {
					transitionDuration: '0.25s, 0.5s, 1s'
				};
			}
		});
		document.body.innerHTML = `
			<div class="element" style="transition: opacity 250ms ease-out;"></div>
		`;
	});

	it('should init the getCSSTransitionDuration function with multiple transitions and with seconds', () => {
		let result = getCSSTransitionDuration({
			target: document.querySelector('.element'),
			ms: false
		});
		expect(result).toEqual([0.25, 0.5, 1]);
	});

	it('should init the getCSSTransitionDuration function with multiple transitions and with milliseconds', () => {
		let result = getCSSTransitionDuration({
			target: document.querySelector('.element'),
			ms: true
		});
		expect(result).toEqual([250, 500, 1000]);
	});
});
