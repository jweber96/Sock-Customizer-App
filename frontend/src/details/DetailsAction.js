export const INPUT_FIRST_NAME = "INPUT_FIRST_NAME";
export const INPUT_LAST_NAME = "INPUT_LAST_NAME";
export const INPUT_ORGANIZATION = "INPUT_ORGANIZATION";
export const INPUT_PHONE_NUMBER = "INPUT_PHONE_NUMBER";
export const INPUT_EMAIL = "INPUT_EMAIL";
export const INPUT_STREET1 = "INPUT_STREET1"
export const INPUT_STREET2 = "INPUT_STREET2"
export const INPUT_CITY = "INPUT_CITY"
export const INPUT_STATE = "INPUT_STATE"
export const INPUT_ZIP = "INPUT_ZIP"
export const INPUT_COUNTRY = "INPUT_COUNTRY"
export const INPUT_YOUTH = "INPUT_YOUTH"
export const INPUT_SMALL = "INPUT_SMALL"
export const INPUT_MEDIUM = "INPUT_MEDIUM"
export const INPUT_LARGE = "INPUT_LARGE"

export const inputFirstName = (text) => {
    return {
        type: INPUT_FIRST_NAME,
        payload: {
            text: text
        }
    };
}

export const inputLastName = (text) => {
    return {
        type: INPUT_LAST_NAME,
        payload: {
            text: text
        }
    };
}

export const inputOrganization = (text) => {
    return {
        type: INPUT_ORGANIZATION,
        payload: {
            text: text
        }
    };
}

export const inputPhoneNumber = (text) => {
    return {
        type: INPUT_PHONE_NUMBER,
        payload: {
            text: text
        }
    };
}

export const inputEmail = (text) => {
    return {
        type: INPUT_EMAIL,
        payload: {
            text: text
        }
    };
}

export const inputStreet1 = (text) => {
    return {
        type: INPUT_STREET1,
        payload: {
            text: text
        }
    };
}

export const inputStreet2 = (text) => {
    return {
        type: INPUT_STREET2,
        payload: {
            text: text
        }
    };
}

export const inputCity = (text) => {
    return {
        type: INPUT_CITY,
        payload: {
            text: text
        }
    };
}

export const inputState = (text) => {
    return {
        type: INPUT_STATE,
        payload: {
            text: text
        }
    };
}

export const inputZip = (text) => {
    return {
        type: INPUT_ZIP,
        payload: {
            text: text
        }
    };
}

export const inputCountry = (text) => {
    return {
        type: INPUT_COUNTRY,
        payload: {
            text: text
        }
    };
}

export const inputYouth = (text) => {
    return {
        type: INPUT_YOUTH,
        payload: {
            text: text
        }
    };
}

export const inputSmall = (text) => {
    return {
        type: INPUT_SMALL,
        payload: {
            text: text
        }
    };
}

export const inputMedium = (text) => {
    return {
        type: INPUT_MEDIUM,
        payload: {
            text: text
        }
    };
}


export const inputLarge = (text) => {
    return {
        type: INPUT_LARGE,
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