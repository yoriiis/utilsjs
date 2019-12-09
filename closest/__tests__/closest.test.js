'use strict';

import closest from '../closest';

describe('closest funtion', () => {
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

	it('should init the closest function', () => {
		let result = closest({
			element: document.querySelector('.list-itemLink'),
			className: 'nav'
		});

		expect(result).toBe(document.querySelector('.nav'));
	});
});
