import {
	DeleteCompanyStore,
	UpsertCompanyStore,
	type UpsertCompanyAttributeInput,
	type UpsertCompanyInput
} from '$houdini';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	add_new_company: async (event) => {
		const data = await event.request.formData();

		const name = data.get('company_name')?.toString();
		const investingEntityId = data.get('investingEntityId')?.toString();

		const store = new UpsertCompanyStore();

		const attributes: UpsertCompanyAttributeInput = {
			// this is the id for the company name attribute in the database
			fieldId: '67876143-44aa-47cb-9a89-b189fa53392d'
		};
		const input: UpsertCompanyInput = {
			attributes: [attributes],
			investingEntityId: investingEntityId
		};

		try {
			await store.mutate({ input }, { event }).then((res) => {
				console.log('yes', { res });
			});

			return {
				success: true,
				message: 'Successfully added new company'
			};
		} catch (error) {
			console.log((error as Error).message);
		}
	},

	delete_company: async (event) => {
		console.log('delete company');
		const data = await event.request.formData();
		const companyId = data.get('company_id')?.toString();

		const store = new DeleteCompanyStore();

		if (!companyId) {
			return { error: 'Company id not found' };
		}

		try {
			await store.mutate({ id: companyId }, { event }).then((res) => {
				console.log({ res });
			});
			return {
				success: true,
				message: 'Successfully deleted company'
			};
		} catch (error) {
			console.log((error as Error).message);
			return { error: error.message };
		}
	}
};
