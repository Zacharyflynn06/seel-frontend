export const ChatEventType = {
    "ACKNOWLEDGE": "ACKNOWLEDGE",
    "REPLY": "REPLY"
};

/**  ##############################################################################
                                    Fields                                   #
##############################################################################
 The type used to store this field in the DB */
export const FieldTypePostgres = {
    "BOOL": "BOOL",
    "DATE": "DATE",
    "DOUBLE": "DOUBLE",
    "INT": "INT",
    "TEXT": "TEXT",
    "TIME": "TIME",
    "TIMESTAMP": "TIMESTAMP"
};

/**  ##############################################################################
                                   Company                                   #
##############################################################################
 Used as the Tag part of a tagged union */
export const FieldValueType = {
    "BOOLEAN": "BOOLEAN",
    "DATE": "DATE",
    "DATE_TIME": "DATE_TIME",
    "EMAIL": "EMAIL",
    "FLOAT": "FLOAT",
    "INT": "INT",
    "IP_ADDRESS": "IP_ADDRESS",
    "JSON": "JSON",
    "PHONE": "PHONE",
    "STRING": "STRING",
    "TIME": "TIME",
    "TIMESTAMP": "TIMESTAMP",
    "URL": "URL"
};

export const InvestingEntityStrategy = {
    "DIGITAL_ASSETS": "DIGITAL_ASSETS",
    "FUND_OF_FUNDS": "FUND_OF_FUNDS",
    "OTHER": "OTHER",
    "PRIVATE_DEBT": "PRIVATE_DEBT",
    "PRIVATE_EQUITY": "PRIVATE_EQUITY",
    "REAL_ESTATE": "REAL_ESTATE",
    "VENTURE_CAPITAL": "VENTURE_CAPITAL"
};

/**  ##############################################################################
                                     Fund                                    #
############################################################################## */
export const InvestingEntityType = {
    "FUND": "FUND",
    "OTHER": "OTHER",
    "SERIES_LLC": "SERIES_LLC",
    "SPV": "SPV"
};