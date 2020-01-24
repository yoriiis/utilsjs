'use strict';

import closest from '../closest';

describe('closest function', () => {
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

	// it('should init the closest function', () => {
	// 	let result = closest({
	// 		element: document.querySelector('.list-itemLink'),
	// 		className: 'nav'
	// 	});

	// 	expect(result).toBe(document.querySelector('.nav'));
	// });

	it('should init the closest function with unknown element', () => {
		let result = closest({
			element: document.querySelector('.lista'),
			className: 'nav'
		});

		console.log(result);

		// expect(result).toBe(null);
	});
});
