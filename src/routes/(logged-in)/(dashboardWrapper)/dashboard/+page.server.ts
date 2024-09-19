import {
	DeleteCompanyStore,
	GetIvestmentCriteriaRulsetStore,
	UpsertCompanyStore,
	UpsertInvestmentCriterionStore,
	type UpsertCompanyAttributeInput,
	type UpsertCompanyInput,
	type UpsertInvestmentCriterionInput
} from '$houdini';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	save_criteria: async (event) => {
		const formData = await event.request.formData();
		const userCriteriaInput = formData.get('user_criteria_input')?.toString();
		const required = formData.get('required')?.toString();
		const enabled = formData.get('enabled')?.toString();
		const investingEntityId = formData.get('investing_entity_id')?.toString();
		const fieldId = formData.get('field_id')?.toString();
		const store = new UpsertInvestmentCriterionStore();
		let rules = '';

		if (!investingEntityId || !fieldId) {
			return { error: 'Investing entity id or field id not found' };
		}

		if (userCriteriaInput) {
			const investmentCriterionStore = new GetIvestmentCriteriaRulsetStore();
			const req = await investmentCriterionStore.fetch({
				event,
				variables: { input: userCriteriaInput }
			});

			if (req.errors) {
				return { error: req.errors[0].message };
			}

			console.log(req.data?.getInvestmentCriteriaRuleSet);

			rules = req.data?.getInvestmentCriteriaRuleSet;
			console.log({ rules });
		}

		const input: UpsertInvestmentCriterionInput = {
			required: required === 'true',
			enabled: enabled === 'true',
			rules: rules
		};

		const res = await store.mutate(
			{ investingEntityId: investingEntityId, fieldId: fieldId, input },
			{ event }
		);

		if (res.errors) {
			return { error: res.errors[0].message };
		}

		return {
			success: true,
			message: 'Successfully saved investment criterion'
		};
	},
	get_investment_rulset: async (event) => {
		const formData = await event.request.formData();
		const description = formData.get('description')?.toString();

		const store = new GetIvestmentCriteriaRulsetStore();

		if (!description) {
			return { error: 'Description not found' };
		}
		const req = await store.fetch({ event, variables: { input: description } });

		if (req.errors) {
			return { error: req.errors[0].message };
		}

		console.log(req.data?.getInvestmentCriteriaRuleSet);

		return {
			success: true,
			message: 'Successfully fetched investment criteria rulset'
		};
	},
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
				message: 'Successfully added new company'
			};
		} catch (error) {
			console.error((error as Error).message);
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
			return { error: (error as Error).message };
		}
	}
};
