import { Amplify } from 'aws-amplify';
import awsConfigObject from '../amplifyconfiguration.json';
import type { PageServerLoad } from './$houdini';
Amplify.configure(awsConfigObject);

export const load: PageServerLoad = async ({ locals }) => {
	return {
		user: locals.user,
		locals: locals
	};
};
