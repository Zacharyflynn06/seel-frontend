import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	delete_company: async (event) => {
		console.log('delete company');
		const data = await event.request.formData();
		const companyId = data.get('company_id')?.toString();

		if (!companyId) {
			return { error: 'Company id not found' };
		}

		try {
			// TODO Delete Company
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
