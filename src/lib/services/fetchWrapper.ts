// Function to handle error responses by returning a Response object with error details
const handleErrorResponse = (error: string, status = 400) => {
	return new Response(
		JSON.stringify({
			error,
			status
		}),
		{ status }
	);
};

// Define supported HTTP methods
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

// Perform a fetch request with the provided parameters
export const performFetch = async (
	path: string,
	method: HttpMethod,
	body: Record<string, unknown> | null,
	token: string | null
) => {
	// Set up headers for the request
	let headers: { 'Content-Type': string; Authorization?: string } = {
		'Content-Type': 'application/json'
	};

	// Add authorization header if token is provided
	if (token) {
		headers = {
			...headers,
			Authorization: `Bearer ${token}`
		};
	}

	// Initialize fetch options
	const init: RequestInit = {
		method,
		headers,
		body: body ? JSON.stringify(body) : null
	};

	// Perform the fetch request
	const response = await fetch(`${import.meta.env.VITE_API_URL}${path}`, init);

	// Handle error responses
	if (response.status >= 400) {
		const resBody = await response.json();
		return handleErrorResponse(resBody.error, response.status);
	}

	// Return the response body as JSON
	return response.json();
};
