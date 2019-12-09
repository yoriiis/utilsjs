'use strict';

import setCookie from '../set-cookie';

describe('setCookie function', () => {
	it('should init the setCookie function', () => {
		setCookie({
			name: 'cookie-name',
			value: true,
			days: 30,
			path: '/'
		});

		expect(document.cookie).toEqual(
			expect.stringContaining('cookie-name=true')
		);
	});
});
