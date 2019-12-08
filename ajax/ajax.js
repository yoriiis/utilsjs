/**
 * Ajax utils function
 *
 * @param {String} type Request type (GET, POST)
 * @param {String} url Request url
 * @param {String} data Request datas (JSON stringify)
 * @param {Boolean} withCredentials Request credentials
 * @param {Function} beforeSend Request before send function
 * @param {Function} success Request success function
 * @param {Function} error Request error function
 */
export default function ajax ( {
	type = 'GET',
	url = '',
	data = '',
	withCredentials = false,
	beforeSend,
	success,
	error
}) {
	// Create the request
	const request = new window.XMLHttpRequest();
	request.open(type, url);

	// Set data to send if the type is correct
	const sendData = (type === 'POST' || type === 'PATCH') ? data : '';

	// Define creadentials
	request.withCredentials = withCredentials;

	// Define beforeSend function
	if (typeof beforeSend === 'function') {
		beforeSend(request);
	}

	// Define request type
	if (type === 'POST') {
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	} else if (type === 'PATCH') {
		request.setRequestHeader('Content-Type', 'application/json');
	}

	// Add onload event listener
	request.onload = () => {
		if (request.status >= 200 && request.status < 400) {
			success(request);
		} else {
			error(request);
		}
	};

	// Add onerror event listener
	request.onerror = () => {
		error(request);
	};

	// Send the request
	request.send(sendData);
}
