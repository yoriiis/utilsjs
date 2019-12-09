'use strict';

import getIndex from '../get-index';

describe('getIndex funtion', () => {
	beforeEach(() => {
		document.body.innerHTML = `
			<ul class="list">
				<li class="list-item"></li>
				<li class="list-item"></li>
				<li class="list-item active"></li>
				<li class="list-item"></li>
				<li class="list-item"></li>
			</ul>
		`;
	});

	it('should init the getIndex function', () => {
		let result = getIndex(document.querySelector('.list-item.active'));
		expect(result).toBe(2);
	});
});
