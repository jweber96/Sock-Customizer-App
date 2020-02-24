import { INPUT_DESIGN } from "./DesignActions";
import QUARTER from "../images/quartersock.svg";
import CREW from "../images/crewsock.svg";
import KNEEHIGH from "../images/kneehighsock.svg";

const initialState = () => {
    return {
        design: null,
        designs: [ // Hard code the sock design for now...
            {
                name: "Vapor",
                image: QUARTER,
                price: 5.45,
                description: "A quarter sized sock",
                available: true
            },
            {
                name: "Two Tone",
                image: CREW,
                price: 5.95,
                description: "A crew sized sock",
                available: true
            },
            {
                name: "Split Top",
                image: KNEEHIGH,
                price: 6.45,
                description: "A knee high sized sock",
                available: true
            },
            {
                name: "Stripe",
                image: KNEEHIGH,
                price: 6.45,
                description: "A knee high sized sock",
                available: true
            },
            {
                name: "Double Stripe",
                image: KNEEHIGH,
                price: 6.45,
                description: "A knee high sized sock",
                available: true
            },
            {
                name: "Triple Stripe",
                image: KNEEHIGH,
                price: 6.45,
                description: "A knee high sized sock",
                available: true
            }
        ]
    };
};

const designReducer = (state = initialState(), action) => {
    switch (action.type) {
        case INPUT_DESIGN:
            return {
                ...state,
                design: action.payload.design
            };
        default:
            return state;
    }
}

export default designReducer;