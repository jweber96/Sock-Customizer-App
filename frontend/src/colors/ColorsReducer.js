import { PICK_PRIMARY_COLOR, PICK_SECONDARY_COLOR } from "./ColorsActions";

const initialState = () => {
    return {
        primaryColor: null,
        primaryColorCode: null,
        secondaryColor: null,
        secondaryColorCode: null,
        colors: { // Hard coded ROYGBIV colors for now...
            "Red": "#FF0000",
            "Orange": "#FF7F00",
            "Yellow": "#FFFF00",
            "Green": "#00FF00",
            "Blue": "#0000FF",
            "Indigo": "#4B0082",
            "Violet": "#9400D3",
        }
    };
};

const textReducer = (state = initialState(), action) => {
    switch (action.type) {
        case PICK_PRIMARY_COLOR:
            return {
                ...state,
                primaryColor: action.payload.color,
                primaryColorCode: action.payload.code
            };
        case PICK_SECONDARY_COLOR:
            return {
                ...state,
                secondaryColor: action.payload.color,
                secondaryColorCode: action.payload.code
            };
        default:
            return state;
    }
}

export default textReducer;