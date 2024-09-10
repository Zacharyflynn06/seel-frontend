import {
	DeleteCompanyStore,
	GetInvestingEntityStore,
	UpsertCompanyStore,
	UpsertFieldStore,
	type UpsertCompanyAttributeInput,
	type UpsertCompanyInput,
	type UpsertFieldInput
} from '$houdini';
import type { Actions } from '@sveltejs/kit';
// import type { PageLoad } from './$types';
// import type { PageLoadEvent } from './$types';

// export const load: PageLoad = async (event: PageLoadEvent) => {
// 	const investingEntityId = event.params.investingEntityId;

// 	const store = new GetInvestingEntityStore();

// 	const { data } = await store.fetch({ event, variables: { id: investingEntityId } });
// 	return {
// 		investingEntity: data?.getInvestingEntity
// 	};
// };

export const actions: Actions = {
	add_new_company: async (event) => {
		const data = await event.request.formData();

		const name = data.get('company_name')?.toString();
		const investingEntityId = data.get('investingEntityId')?.toString();

		const store = new UpsertCompanyStore();

		const attributes: UpsertCompanyAttributeInput = {
			// this is the id for the company name attribute in the database
			fieldId: 'ad172e80-05ca-4e8b-a071-b4bbd3e85d2c',
			stringValue: name
		};
		const input: UpsertCompanyInput = {
			attributes: [attributes],
			investingEntityId: investingEntityId
		};

		const res = await store.mutate({ input }, { event });

		console.log({ res });

		if (res.errors) {
			return { error: res.errors[0].message };
		}

		return {
			success: true,
			message: 'Successfully added new company'
		};
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
