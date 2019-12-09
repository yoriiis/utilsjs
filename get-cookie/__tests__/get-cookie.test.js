'use strict';

import getCookie from '../get-cookie';

describe('getCookie function', () => {
	beforeEach(() => {
		Object.defineProperty(window.document, 'cookie', {
			writable: true,
			value: 'myCookie=hello'
		});
	});

	it('should init the getCookie function', () => {
		let result = getCookie('myCookie');
		expect(result).toBe('hello');
	});
});
