import { performFetch } from './fetchWrapper';

interface createUserInput {
	isAuthenticated: boolean;
	email: string;
	id: string;
	accessToken: string;
}

export const createEmptyUserObject = async () => {
	return {
		isAuthenticated: false,
		email: '',
		id: '',
		accessToken: ''
	};
};
export const getAllUsers = async (token: string) => {
	return await performFetch('/users/', 'GET', null, token);
};

export const getUserInfo = async (token: string) => {
	return await performFetch(`/oauth2/userInfo/`, 'GET', null, token);
};

export const createUser = async (input: createUserInput, token: string) => {
	return await performFetch('/users/', 'POST', input, token);
};

export const updateUser = async (id: string, input: createUserInput, token: string) => {
	return await performFetch(`/users/${id}`, 'PUT', input, token);
};

export const deleteUser = async (id: string, token: string) => {
	return await performFetch(`/users/${id}`, 'DELETE', null, token);
};
