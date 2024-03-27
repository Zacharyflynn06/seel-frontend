import type { DataSource } from '$houdini/runtime'

export type Result<DataType> = {
	isFetching: boolean
	partial: boolean
	source?: DataSource | null
	data?: DataType | null
	error?: Error | null
}
export * from './ClientsQuery'
export * from './DashboardQuery'
export * from './EmailsQuery'
export * from './ReviewDealsQuery'