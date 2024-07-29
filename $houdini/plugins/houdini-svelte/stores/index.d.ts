import type { DataSource } from '$houdini/runtime'

export type Result<DataType> = {
	isFetching: boolean
	partial: boolean
	source?: DataSource | null
	data?: DataType | null
	error?: Error | null
}
export * from './AddDocumentToCollectionUrl'
export * from './AskCollection'
export * from './AskSeel'
export * from './GetCompany'
export * from './GetInvestingEntities'
export * from './GetInvestingEntity'
export * from './GetUser'
export * from './GetUsers'
export * from './linkInvestingEntityToUser'
export * from './UpsertCompany'
export * from './UpsertInvestingEntity'
export * from './UpsertUser'