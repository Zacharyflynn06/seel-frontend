
type ValuesOf<T> = T[keyof T]
	
export declare const CompanySource: {
    readonly EMAIL: "EMAIL";
    readonly FRONTEND: "FRONTEND";
}

export type CompanySource$options = ValuesOf<typeof CompanySource>
 