import { INPUT_TEXT, RESET_TEXT } from "../actions/TextActions";

const initialState = () => {
    return {
        text: ""
    };
};

const textReducer = (state = initialState(), action) => {
    switch (action.type) {
        case INPUT_TEXT:
            return {
                text: action.payload.text
            };
        case RESET_TEXT:
            return {
                text: action.payload.text
            };
        default:
            return state;
    }
}

export default textReducer;