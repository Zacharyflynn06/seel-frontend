import { UpsertCompanyStore, type UpsertCompanyInput } from '$houdini';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	add_company: async (event) => {
		const data = await event.request.formData();
		const companyStore = new UpsertCompanyStore();

		const company: UpsertCompanyInput = {
			client_id: event.locals.user?.id,
			any_additional_founders: data.get('any_additional_founders')?.toString(),
			burn_rate: Number(data.get('burn_rate')),
			category: data.get('category')?.toString(),
			company_name: data.get('company_name')?.toString(),
			competitors: data.get('competitors')?.toString(),
			differentiation_from_competitors: data.get('differentiation_from_competitors')?.toString(),
			first_time_founder: !!data.get('first_time_founder'),
			full_time: !!data.get('full_time'),
			funding_round: data.get('funding_round')?.toString(),
			is_saas: !!data.get('is_saas'),
			is_us_based: !!data.get('is_us_based'),
			location: data.get('location')?.toString(),
			next_steps: data.get('next_steps')?.toString(),
			university: data.get('university')?.toString(),
			women_founded_or_owned: !!data.get('women_founded_or_owned')
		};

		await companyStore.mutate({ company }, { event }).then((res) => {
			console.log({ res });
		});
	}
};
