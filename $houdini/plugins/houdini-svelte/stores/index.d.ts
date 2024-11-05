import type { DataSource } from '$houdini/runtime'

export type Result<DataType> = {
	isFetching: boolean
	partial: boolean
	source?: DataSource | null
	data?: DataType | null
	error?: Error | null
}
export * from './AddDocumentToCollection'
export * from './AskSeel'
export * from './ChatEvent'
export * from './DeleteCompany'
export * from './DeleteDocumentCollection'
export * from './GetCompany'
export * from './GetDocumentCollection'
export * from './GetFields'
export * from './GetInvestingEntities'
export * from './GetInvestingEntity'
export * from './GetUser'
export * from './GetUsers'
export * from './linkInvestingEntityToUser'
export * from './SendMessageToChat'
export * from './UpsertChat'
export * from './UpsertCompany'
export * from './UpsertDocumentCollection'
export * from './UpsertDocumentMetadata'
export * from './UpsertField'
export * from './UpsertInvestingEntity'
export * from './UpsertInvestmentCriterion'
export * from './UpsertUser'
export * from './ValidateCompany'