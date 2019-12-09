'use strict';

import getCookie from '../get-cookie';

describe('getCookie function', () => {
	beforeEach(() => {
		Object.defineProperty(window.document, 'cookie', {
			writable: true,
			value: 'cookie-name=hello'
		});
	});

	it('should init the getCookie function', () => {
		let result = getCookie('cookie-name');
		expect(result).toBe('hello');
	});
});
