'use strict';

import validateTarget from '../validate-target';

describe('validateTarget function', () => {
	beforeEach(() => {
		document.body.innerHTML = `
			<nav class="nav">
				<ul class="list">
					<li class="list-item">
						<a href="" class="list-itemLink">Link</a>
					</li>
				</ul>
			</nav>
		`;
	});

	it('should init the validateTarget function with wrong click item', () => {
		let result = null;
		document.querySelector('.nav')
			.addEventListener('click', e => {
				result = validateTarget({
					target: e.target,
					className: 'list-itemLink',
					nodeName: ['a']
				});
			});
		document.querySelector('.nav').click();
		expect(result).toBe(false);
	});

	it('should init the validateTarget function with correct click item', () => {
		let result = null;
		document.querySelector('.nav')
			.addEventListener('click', e => {
				result = validateTarget({
					target: e.target,
					className: 'list-itemLink',
					nodeName: ['a']
				});
			});
		document.querySelector('.list-itemLink').click();
		expect(result).toBe(true);
	});
});
