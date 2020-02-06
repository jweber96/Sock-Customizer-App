import { PICK_PRIMARY_COLOR, PICK_SECONDARY_COLOR } from "./ColorActions";

const initialState = () => {
    return {
        primaryColor: "",
        secondaryColor: ""
    };
};

const textReducer = (state = initialState(), action) => {
    switch (action.type) {
        case PICK_PRIMARY_COLOR:
            return {
                ...state,
                primaryColor: action.payload.color,
            };
        case PICK_SECONDARY_COLOR:
            return {
                ...state,
                secondaryColor: action.payload.color,
            };
        default:
            return state;
    }
}

export default textReducer;