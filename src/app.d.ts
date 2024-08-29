// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user?: {
				isAuthenticated: boolean;
				email: string;
				id: string;
				investingEntities: InvestingEntity[];
			};
		}
		// interface PageData {}
		// interface ActionData {
		// 	form?: {
		// 		error?: string;
		// 		success?: string;
		// 		message?: string;
		// 	};
		// }
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
