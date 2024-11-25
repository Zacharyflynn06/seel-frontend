import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	save_criteria: async (event) => {
		const formData = await event.request.formData();
		const userCriteriaInput = formData.get('user_criteria_input')?.toString();
		const required = formData.get('required');
		const enabled = formData.get('enabled');
		const investingEntityId = formData.get('investing_entity_id')?.toString();
		const fieldId = formData.get('field_id')?.toString();
		// const store = new UpsertInvestmentCriterionStore();

		console.log({ userCriteriaInput, required, enabled, investingEntityId, fieldId });
		if (!investingEntityId || !fieldId) {
			return { error: 'Investing entity id or field id not found' };
		}

		// const input: UpsertInvestmentCriterionInput = {
		// 	required: required === 'on',
		// 	enabled: enabled === 'on'
		// };

		// const res = await store.mutate(
		// 	{ investingEntityId: investingEntityId, fieldId: fieldId, input },
		// 	{ event }
		// );

		// if (res.errors) {
		// 	return { error: res.errors[0].message };
		// }

		return {
			success: true,
			message: 'Successfully saved investment criterion'
		};
	}
};
