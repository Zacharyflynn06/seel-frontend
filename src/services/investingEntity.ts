import { performFetch } from './fetchWrapper';

interface createInvestingEntityInput {
	name: string;
	address?: string;
	entityType?: string;
	strategy?: string;
}

export const getAllInvestingEntities = async (token: string) => {
	return await performFetch('/investing_entities', 'GET', null, token);
};

export const getInvestingEntity = async (id: string, token: string) => {
	return await performFetch(`/investing_entities/${id}`, 'GET', null, token);
};

export const createInvestingEntity = async (input: createInvestingEntityInput, token: string) => {
	return await performFetch('/investing_entities', 'POST', input, token);
};

export const updateInvestingEntity = async (
	id: string,
	input: createInvestingEntityInput,
	token: string
) => {
	return await performFetch(`/investing_entities/${id}`, 'PUT', input, token);
};

export const deleteInvestingEntity = async (id: string, token: string) => {
	return await performFetch(`/investing_entities/${id}`, 'DELETE', null, token);
};
