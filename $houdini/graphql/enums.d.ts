
type ValuesOf<T> = T[keyof T]
	
/**  ##############################################################################
                                    Fields                                   #
##############################################################################
 The type used to store this field in the DB */
export declare const FieldTypePostgres: {
    readonly BOOL: "BOOL";
    readonly DATE: "DATE";
    readonly DOUBLE: "DOUBLE";
    readonly INT: "INT";
    readonly TEXT: "TEXT";
    readonly TIME: "TIME";
    readonly TIMESTAMP: "TIMESTAMP";
}

/**  ##############################################################################
                                    Fields                                   #
##############################################################################
 The type used to store this field in the DB */
export type FieldTypePostgres$options = ValuesOf<typeof FieldTypePostgres>
 
/**  ##############################################################################
                                   Company                                   #
##############################################################################
 Used as the Tag part of a tagged union */
export declare const FieldValueType: {
    readonly BOOLEAN: "BOOLEAN";
    readonly DATE: "DATE";
    readonly DATE_TIME: "DATE_TIME";
    readonly EMAIL: "EMAIL";
    readonly FLOAT: "FLOAT";
    readonly INT: "INT";
    readonly IP_ADDRESS: "IP_ADDRESS";
    readonly JSON: "JSON";
    readonly PHONE: "PHONE";
    readonly STRING: "STRING";
    readonly TIME: "TIME";
    readonly TIMESTAMP: "TIMESTAMP";
    readonly URL: "URL";
}

/**  ##############################################################################
                                   Company                                   #
##############################################################################
 Used as the Tag part of a tagged union */
export type FieldValueType$options = ValuesOf<typeof FieldValueType>
 
export declare const InvestingEntityStrategy: {
    readonly DIGITAL_ASSETS: "DIGITAL_ASSETS";
    readonly FUND_OF_FUNDS: "FUND_OF_FUNDS";
    readonly OTHER: "OTHER";
    readonly PRIVATE_DEBT: "PRIVATE_DEBT";
    readonly PRIVATE_EQUITY: "PRIVATE_EQUITY";
    readonly REAL_ESTATE: "REAL_ESTATE";
    readonly VENTURE_CAPITAL: "VENTURE_CAPITAL";
}

export type InvestingEntityStrategy$options = ValuesOf<typeof InvestingEntityStrategy>
 
/**  ##############################################################################
                                     Fund                                    #
############################################################################## */
export declare const InvestingEntityType: {
    readonly FUND: "FUND";
    readonly OTHER: "OTHER";
    readonly SERIES_LLC: "SERIES_LLC";
    readonly SPV: "SPV";
}

/**  ##############################################################################
                                     Fund                                    #
############################################################################## */
export type InvestingEntityType$options = ValuesOf<typeof InvestingEntityType>
 