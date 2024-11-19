export const createEmptyUserObject = async () => {
	return {
		isAuthenticated: false,
		email: '',
		id: '',
		accessToken: ''
	};
};
