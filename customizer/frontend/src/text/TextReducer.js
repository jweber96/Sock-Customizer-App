import { INPUT_TOE_TEXT, INPUT_BRIM_TEXT, RESET_ALL_TEXT } from "./TextActions";

const initialState = () => {
    return {
        toeText: null,
        brimText: null
    };
};

const textReducer = (state = initialState(), action) => {
    switch (action.type) {
        case INPUT_TOE_TEXT:
            return {
                ...state,
                toeText: action.payload.text
            };
        case INPUT_BRIM_TEXT:
            return {
                ...state,
                brimText: action.payload.text
            };
        case RESET_ALL_TEXT:
            return {
                ...action.payload
            };
        default:
            return state;
    }
}

export default textReducer;