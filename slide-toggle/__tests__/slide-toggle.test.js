'use strict';

import slideToggle from '../slide-toggle';

describe('slideToggle function', () => {
	beforeEach(() => {
		document.body.innerHTML = `
			<div class="element" style="display: none; height: auto; transition: height 250ms ease-out;">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
		`;
	});

	it('should init the slideToggle function with open action', () => {
		slideToggle({
			target: document.querySelector('.element'),
			action: 'open'
		});

		let display = document.querySelector('.element').style.display;
		expect(display).toBe('block');
	});

	it('should init the slideToggle function with close action', () => {
		slideToggle({
			target: document.querySelector('.element'),
			action: 'close'
		});

		let display = document.querySelector('.element').style.display;
		expect(display).toBe('none');
	});
});
