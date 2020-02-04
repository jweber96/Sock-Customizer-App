export const INPUT_TOE_FIRST_LINE_TEXT = "INPUT_TOE_FIRST_LINE_TEXT";
export const INPUT_TOE_SECOND_LINE_TEXT = "INPUT_TOE_SECOND_LINE_TEXT";
export const INPUT_BRIM_FIRST_LINE_TEXT = "INPUT_BRIM_FIRST_LINE_TEXT";
export const INPUT_BRIM_SECOND_LINE_TEXT = "INPUT_BRIM_SECOND_LINE_TEXT";
export const RESET_TEXT = "RESET_TEXT";

export const inputToeFirstLineText = (text) => {
    return {
        type: INPUT_TOE_FIRST_LINE_TEXT,
        payload: {
            text: text
        }
    };
}

export const inputToeSecondLineText = (text) => {
    return {
        type: INPUT_TOE_SECOND_LINE_TEXT,
        payload: {
            text: text
        }
    };
}

export const inputBrimFirstLineText = (text) => {
    return {
        type: INPUT_BRIM_FIRST_LINE_TEXT,
        payload: {
            text: text
        }
    };
}

export const inputBrimSecondLineText = (text) => {
    return {
        type: INPUT_BRIM_SECOND_LINE_TEXT,
        payload: {
            text: text
        }
    };
}

export const resetText = () => {
    return {
        type: RESET_TEXT,
        payload: {
            toeFirstLineText: "",
            toeSecondLineText: "",
            brimFirstLineText: "",
            brimSecondLineText: "",
        }
    };
}