export const FIRST_NAME = "FIRST_NAME";
export const LAST_NAME = "INPUT_TOE_SECONDARY_TEXT";
export const ORGANIZATION = "ORGANIZATION";
export const PHONE_NUMBER = "PHONE_NUMBER";
export const EMAIL = "EMAIL";
export const STREET1 = "STREET1"
export const STREET2 = "STREET2"
export const CITY = "CITY"
export const STATE = "STATE"
export const ZIP = "ZIP"
export const COUNTRY = "COUNTRY"

export const firstName = (text) => {
    return {
        type: FIRST_NAME,
        payload: {
            text: text
        }
    };
}

export const lastName = (text) => {
    return {
        type: LAST_NAME,
        payload: {
            text: text
        }
    };
}

export const organization = (text) => {
    return {
        type: ORGANIZATION,
        payload: {
            text: text
        }
    };
}

export const phoneNumber = (text) => {
    return {
        type: PHONE_NUMBER,
        payload: {
            text: text
        }
    };
}

export const email = (text) => {
    return {
        type: EMAIL,
        payload: {
            text: text
        }
    };
}

export const street1 = (text) => {
    return {
        type: STREET1,
        payload: {
            text: text
        }
    };
}

export const street2 = (text) => {
    return {
        type: STREET2,
        payload: {
            text: text
        }
    };
}

export const city = (text) => {
    return {
        type: CITY,
        payload: {
            text: text
        }
    };
}

export const state = (text) => {
    return {
        type: STATE,
        payload: {
            text: text
        }
    };
}

export const zip = (text) => {
    return {
        type: ZIP,
        payload: {
            text: text
        }
    };
}

export const country = (text) => {
    return {
        type: COUNTRY,
        payload: {
            text: text
        }
    };
}


// export const resetAllText = () => {
//     return {
//         type: RESET_ALL_TEXT,
//         payload: {
//             toePrimaryText: null,
//             toeSecondaryText: null,
//             brimPrimaryText: null,
//             brimSecondaryText: null,
//         }
//     };
// }