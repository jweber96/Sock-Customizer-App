import { INPUT_FIRST_NAME, INPUT_LAST_NAME, INPUT_ORGANIZATION, INPUT_PHONE_NUMBER, INPUT_EMAIL, INPUT_STREET1, INPUT_STREET2, INPUT_CITY, INPUT_STATE, INPUT_ZIP, INPUT_COUNTRY, INPUT_YOUTH, INPUT_SMALL, INPUT_MEDIUM, INPUT_LARGE } from "./DetailsAction";

const initialState = () => {
    return {
        firstName: null,
        lastName: null,
        organization: null,
        phoneNumber: null,
        email: null,
        street1: null, 
        street2: null,
        city: null, 
        state: "Alabama",
        zip: null, 
        country: "United States",
        youth: 0,
        small: 0,
        medium: 0,
        large: 0,
    };
};

const detailsReducer = (state = initialState(), action) => {
    switch (action.type) {
        case INPUT_FIRST_NAME:
            return {
                ...state,
                firstName: action.payload.text
            };
        case INPUT_LAST_NAME:
            return {
                ...state,
                lastName: action.payload.text
            };
        case INPUT_ORGANIZATION:
            return {
                ...state,
                organization: action.payload.text
            };
        case INPUT_PHONE_NUMBER:
            return {
                ...state,
                phoneNumber: action.payload.text
            };
        case INPUT_EMAIL:
            return {
                ...state,
                email: action.payload.text
            };
        case INPUT_STREET1:
            return {
                ...state,
                street1: action.payload.text
            };    
        case INPUT_STREET2:
            return {
                ...state,
                street2: action.payload.text
            };
        case INPUT_CITY:
            return {
                ...state,
                city: action.payload.text
            };
        case INPUT_STATE:
            return {
                ...state,
                state: action.payload.text
            };
        case INPUT_ZIP:
            return {
                ...state,
                zip: action.payload.text
            };
        case INPUT_COUNTRY:
            return {
                ...state,
                country: action.payload.text
            };
        case INPUT_YOUTH:
            return {
                ...state,
                youth: action.payload.text
            };
        case INPUT_SMALL:
            return {
                ...state,
                small: action.payload.text
            };
        case INPUT_MEDIUM:
            return {
                ...state,
                medium: action.payload.text
            };
        case INPUT_LARGE:
            return {
                ...state,
                large: action.payload.text
            };
        default:
            return state;
    }
}

export default detailsReducer;