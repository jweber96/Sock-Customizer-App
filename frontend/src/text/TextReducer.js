import { INPUT_TOE_FIRST_LINE_TEXT, INPUT_TOE_SECOND_LINE_TEXT, INPUT_BRIM_FIRST_LINE_TEXT, INPUT_BRIM_SECOND_LINE_TEXT, RESET_TEXT } from "./TextActions";

const initialState = () => {
    return {
        toeFirstLineText: "",
        toeSecondLineText: "",
        brimFirstLineText: "",
        brimSecondLineText: ""
    };
};

const textReducer = (state = initialState(), action) => {
    switch (action.type) {
        case INPUT_TOE_FIRST_LINE_TEXT:
            return {
                toeFirstLineText: action.payload.text,
                toeSecondLineText: state.toeSecondLineText,
                brimFirstLineText: state.brimFirstLineText,
                brimSecondLineText: state.brimSecondLineText
            };
        case INPUT_TOE_SECOND_LINE_TEXT:
            return {
                toeFirstLineText: state.toeFirstLineText,
                toeSecondLineText: action.payload.text,
                brimFirstLineText: state.brimFirstLineText,
                brimSecondLineText: state.brimSecondLineText
            };
        case INPUT_BRIM_FIRST_LINE_TEXT:
            return {
                toeFirstLineText: state.toeFirstLineText,
                toeSecondLineText: state.toeSecondLineText,
                brimFirstLineText: action.payload.text,
                brimSecondLineText: state.brimSecondLineText
            };
        case INPUT_BRIM_SECOND_LINE_TEXT:
            return {
                toeFirstLineText: state.toeFirstLineText,
                toeSecondLineText: state.toeSecondLineText,
                brimFirstLineText: state.brimFirstLineText,
                brimSecondLineText: action.payload.text
            };
        case RESET_TEXT:
            return {
                toeFirstLineText: action.payload.toeFirstLineText,
                toeSecondLineText: action.payload.toeSecondLineText,
                brimFirstLineText: action.payload.brimFirstLineText,
                brimSecondLineText: action.payload.brimSecondLineText
            };
        default:
            return state;
    }
}

export default textReducer;