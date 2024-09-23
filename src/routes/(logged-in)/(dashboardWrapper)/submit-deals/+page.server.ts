import {
	UpsertCompanyStore,
	type UpsertCompanyAttributeInput,
	type UpsertCompanyInput
} from '$houdini';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	add_new_company: async (event) => {
		const data = await event.request.formData();
		const name = data.get('company_name')?.toString();
		const investingEntityId = data.get('investing_entity_id')?.toString();
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

		try {
			const upsertCompanyRes = await store.mutate({ input }, { event });

			if (upsertCompanyRes.errors) {
				return { error: upsertCompanyRes.errors[0].message };
			}

			const upsertCompanyData = await upsertCompanyRes.data;

			console.log({ upsertCompanyData });
			return {
				success: true,
				message: 'Successfully added new investment'
			};
		} catch (error) {
			console.error((error as Error).message);
		}
	}
};
