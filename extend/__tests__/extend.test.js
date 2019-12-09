'use strict';

import extend from '../extend';

describe('extend function', () => {
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

	it('should init the extend function with basic merge', () => {
		const object1 = {
			foo: 'bar'
		};
		const object2 = {
			test: true
		};

		let result = extend(false, {}, object1, object2);
		expect(result).toMatchObject({
			'foo': 'bar',
			'test': true
		});
	});

	it('should init the extend function with deep merge', () => {
		const object1 = {
			foo: 'bar',
			settings: {
				name: 'button'
			}
		};
		const object2 = {
			test: true
		};

		let result = extend(true, {}, object1, object2);
		expect(result).toMatchObject({
			'foo': 'bar',
			'test': true,
			settings: {
				name: 'button'
			}
		});
	});
});
