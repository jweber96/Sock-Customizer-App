import { PICK_PRIMARY_COLOR, PICK_SECONDARY_COLOR } from "./ColorsActions";

const initialState = () => {
    return {
        primaryColor: "",
        primaryColorCode: "",
        secondaryColor: "",
        secondaryColorCode: "",
        colors: { // Hard coded ROYGBIV colors for now...
            "red": "#FF0000",
            "orange": "#FF7F00",
            "yellow": "#FFFF00",
            "green": "#00FF00",
            "blue": "#0000FF",
            "indigo": "#4B0082",
            "violet": "#9400D3",
        }
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