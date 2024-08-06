import type { DataSource } from '$houdini/runtime'

export type Result<DataType> = {
	isFetching: boolean
	partial: boolean
	source?: DataSource | null
	data?: DataType | null
	error?: Error | null
}
export * from './AskSeel'
export * from './DeleteCompany'
export * from './GetCompany'
export * from './GetInvestingEntities'
export * from './GetInvestingEntity'
export * from './GetUser'
export * from './GetUsers'
export * from './linkInvestingEntityToUser'
export * from './UpsertCompany'
export * from './UpsertDocumentMetadata'
export * from './UpsertInvestingEntity'
export * from './UpsertUser'