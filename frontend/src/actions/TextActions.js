export const INPUT_TEXT = "INPUT_TEXT";
export const RESET_TEXT = "RESET_TEXT";

export const inputText = (text) => {
    return {
        type: INPUT_TEXT,
        payload: {
            text: text
        }
    };
}

export const resetText = () => {
    return {
        type: INPUT_TEXT,
        payload: {
            text: ""
        }
    };
}