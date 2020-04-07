import { FIRST_NAME, LAST_NAME, ORGANIZATION, PHONE_NUMBER, EMAIL, STREET1, STREET2, CITY, STATE, ZIP, COUNTRY, YOUTH, SMALL, MEDIUM, LARGE } from "./DetailsAction";

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
        case FIRST_NAME:
            return {
                ...state,
                firstName: action.payload.text
            };
        case LAST_NAME:
            return {
                ...state,
                lastName: action.payload.text
            };
        case ORGANIZATION:
            return {
                ...state,
                organization: action.payload.text
            };
        case PHONE_NUMBER:
            return {
                ...state,
                phoneNumber: action.payload.text
            };
        case EMAIL:
            return {
                ...state,
                email: action.payload.text
            };
        case STREET1:
            return {
                ...state,
                street1: action.payload.text
            };    
        case STREET2:
            return {
                ...state,
                street2: action.payload.text
            };
        case CITY:
            return {
                ...state,
                city: action.payload.text
            };
        case STATE:
            return {
                ...state,
                state: action.payload.text
            };
        case ZIP:
            return {
                ...state,
                zip: action.payload.text
            };
        case COUNTRY:
            return {
                ...state,
                country: action.payload.text
            };
        case YOUTH:
            return {
                ...state,
                youth: action.payload.text
            };
        case SMALL:
            return {
                ...state,
                small: action.payload.text
            };
        case MEDIUM:
            return {
                ...state,
                medium: action.payload.text
            };
        case LARGE:
            return {
                ...state,
                large: action.payload.text
            };
        default:
            return state;
    }
}

export default detailsReducer;