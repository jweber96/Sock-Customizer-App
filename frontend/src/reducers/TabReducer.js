import { CLICK_TAB } from "../actions/TabActions";

const initialState = () => {
    return {
        value: 0
    };
};

const tabReducer = (state = initialState(), action) => {
    switch (action.type) {
        case CLICK_TAB:
            return {
                value: action.payload.value
            };
        default:
            return state;
    }
}

export default tabReducer;