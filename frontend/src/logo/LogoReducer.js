import { INPUT_LOGO, RESET_LOGO } from "./LogoActions";

const initialState = () => {
    return {
        logo: null
    };
};

const logoReducer = (state = initialState(), action) => {
    switch (action.type) {
        case INPUT_LOGO:
            return {
                logo: action.payload.logo
            };
        case RESET_LOGO:
            return {
                logo: action.payload.logo
            };
        default:
            return state;
    }
}

export default logoReducer;