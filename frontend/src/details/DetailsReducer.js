import { FIRST_NAME, LAST_NAME, ORGANIZATION, PHONE_NUMBER, EMAIL, STREET1, STREET2, CITY, STATE, ZIP, COUNTRY } from "./DetailsActions";

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
        state: null,
        zip: null, 
        country: null
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
        default:
            return state;
    }
}

export default detailsReducer;