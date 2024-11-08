export const handleErrorResponse = (error: string, status = 400) => {
	return new Response(
		JSON.stringify({
			error,
			status
		}),
		{ status }
	);
};

export const handleSuccessResponse = (data = {}, status = 200) => {
	return new Response(
		JSON.stringify({
			data,
			status
		}),
		{ status }
	);
};
export const performFetch = async (
	path: string,
	method: string,
	body: any,
	token: string | null
) => {
	let headers: { 'Content-Type': string; Authorization?: string } = {
		'Content-Type': 'application/json'
	};

	if (token) {
		headers = {
			...headers,
			Authorization: `Bearer ${token}`
		};
	}

	const response = await fetch(`${import.meta.env.VITE_API_URL}/${path}`, {
		method,
		headers,
		body
	});

	if (response.status >= 400) {
		console.error(response);
		const resBody = await response.json();
		return handleErrorResponse(resBody.error, response.status);
	}

	return response;
};
