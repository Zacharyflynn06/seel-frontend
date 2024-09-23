import { DeleteCompanyStore } from '$houdini';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
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
