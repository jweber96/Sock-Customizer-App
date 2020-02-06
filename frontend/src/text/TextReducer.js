import { INPUT_TOE_PRIMARY_TEXT, INPUT_TOE_SECONDARY_TEXT, INPUT_BRIM_PRIMARY_TEXT, INPUT_BRIM_SECONDARY_TEXT, RESET_ALL_TEXT } from "./TextActions";

const initialState = () => {
    return {
        toePrimaryText: "",
        toeSecondaryText: "",
        brimPrimaryText: "",
        brimSecondaryText: ""
    };
};

const textReducer = (state = initialState(), action) => {
    switch (action.type) {
        case INPUT_TOE_PRIMARY_TEXT:
            return {
                ...state,
                toePrimaryText: action.payload.text
            };
        case INPUT_TOE_SECONDARY_TEXT:
            return {
                ...state,
                toeSecondaryText: action.payload.text
            };
        case INPUT_BRIM_PRIMARY_TEXT:
            return {
                ...state,
                brimPrimaryText: action.payload.text
            };
        case INPUT_BRIM_SECONDARY_TEXT:
            return {
                ...state,
                brimSecondaryText: action.payload.text
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