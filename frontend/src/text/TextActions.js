export const INPUT_TOE_TEXT = "INPUT_TOE_TEXT";
export const INPUT_BRIM_TEXT = "INPUT_BRIM_TEXT";
export const RESET_ALL_TEXT = "RESET_ALL_TEXT";

export const inputToeText = (text) => {
    return {
        type: INPUT_TOE_TEXT,
        payload: {
            text: text
        }
    };
}

export const inputBrimText = (text) => {
    return {
        type: INPUT_BRIM_TEXT,
        payload: {
            text: text
        }
    };
}

export const resetAllText = () => {
    return {
        type: RESET_ALL_TEXT,
        payload: {
            toeText: null,
            brimText: null,
        }
    };
}