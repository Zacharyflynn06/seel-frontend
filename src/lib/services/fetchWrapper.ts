const handleErrorResponse = (error: string, status = 400) => {
	return new Response(
		JSON.stringify({
			error,
			status
		}),
		{ status }
	);
};

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
export const performFetch = async (
	path: string,
	method: HttpMethod,
	body: Record<string, unknown> | null,
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

	const init: RequestInit = {
		method,
		headers,
		body: body ? JSON.stringify(body) : null
	};

	const response = await fetch(`${import.meta.env.VITE_API_URL}${path}`, init);

	if (response.status >= 400) {
		const resBody = await response.json();
		return handleErrorResponse(resBody.error, response.status);
	}

	return response.json();
};
