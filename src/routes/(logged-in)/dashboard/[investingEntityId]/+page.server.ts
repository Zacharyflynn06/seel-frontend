import {
	GetInvestingEntityStore,
	UpsertCompanyStore,
	type UpsertCompanyAttributeInput,
	type UpsertCompanyInput
} from '$houdini';
import type { Actions } from '@sveltejs/kit';
import type { PageLoad } from '../$types';

export const load: PageLoad = async (event) => {
	const investingEntityId = event.params.investingEntityId;

	const store = new GetInvestingEntityStore();

	const { data } = await store.fetch({ event, variables: { id: investingEntityId } });
	// console.log(data.getInvestingEntity.companies);
	return {
		investingEntity: data?.getInvestingEntity
	};
};

export const actions: Actions = {
	add_new_company: async (event) => {
		const data = await event.request.formData();

		const name = data.get('company_name')?.toString();
		const investingEntityId = data.get('investingEntityId')?.toString();

		const store = new UpsertCompanyStore();

		const attributes: UpsertCompanyAttributeInput = {
			// this is the id for the company name field
			fieldId: '67876143-44aa-47cb-9a89-b189fa53392d',
			value: {
				string: name
			}
		};
		const input: UpsertCompanyInput = {
			attributes: [attributes],
			investingEntityId: investingEntityId
		};

		try {
			await store.mutate({ input }, { event }).then((res) => {
				console.log({ res });
			});
		} catch (error) {
			console.log((error as Error).message);
		}
	}
};
