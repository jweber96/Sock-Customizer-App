import { CLICK_TAB } from "./TabsActions";

const initialState = () => {
    return {
        value: 0
    };
};

const tabsReducer = (state = initialState(), action) => {
    switch (action.type) {
        case CLICK_TAB:
            return {
                value: action.payload.value
            };
        default:
            return state;
    }
}

export default tabsReducer;