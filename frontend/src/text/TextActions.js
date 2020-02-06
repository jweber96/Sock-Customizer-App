export const INPUT_TOE_PRIMARY_TEXT = "INPUT_TOE_PRIMARY_TEXT";
export const INPUT_TOE_SECONDARY_TEXT = "INPUT_TOE_SECONDARY_TEXT";
export const INPUT_BRIM_PRIMARY_TEXT = "INPUT_BRIM_PRIMARY_TEXT";
export const INPUT_BRIM_SECONDARY_TEXT = "INPUT_BRIM_SECONDARY_TEXT";
export const RESET_ALL_TEXT = "RESET_ALL_TEXT";

export const inputToePrimaryText = (text) => {
    return {
        type: INPUT_TOE_PRIMARY_TEXT,
        payload: {
            text: text
        }
    };
}

export const inputToeSecondaryText = (text) => {
    return {
        type: INPUT_TOE_SECONDARY_TEXT,
        payload: {
            text: text
        }
    };
}

export const inputBrimPrimaryText = (text) => {
    return {
        type: INPUT_BRIM_PRIMARY_TEXT,
        payload: {
            text: text
        }
    };
}

export const inputBrimSecondaryText = (text) => {
    return {
        type: INPUT_BRIM_SECONDARY_TEXT,
        payload: {
            text: text
        }
    };
}

export const resetAllText = () => {
    return {
        type: RESET_ALL_TEXT,
        payload: {
            toePrimaryText: "",
            toeSecondaryText: "",
            brimPrimaryText: "",
            brimSecondaryText: "",
        }
    };
}