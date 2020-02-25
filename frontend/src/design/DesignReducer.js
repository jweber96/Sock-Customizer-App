import { INPUT_DESIGN } from "./DesignActions";
import VAPOR from "../images/vaporsock.jpg"
import TWOTONE from "../images/twotonesock.jpg"
import SPLITTOP from "../images/splittopsock.png"
import STRIPE from "../images/stripesock.png"
import DOUBLESTRIPE from "../images/doublestripe.png"
import TRIPLESTRIPE from "../images/tripestripe.png"


const initialState = () => {
    return {
        design: null,
        designs: [ // Hard code the sock design for now...
            {
                name: "Vapor",
                image: VAPOR,
                description: "A Vapor design sock",
                available: true
            },
            {
                name: "Two Tone",
                image: TWOTONE,
                description: "A Two-Tone design sock",
                available: true
            },
            {
                name: "Split Top",
                image: SPLITTOP,
                description: "A Split Top sock",
                available: true
            },
            {
                name: "Stripe",
                image: STRIPE,
                description: "A Stripesock",
                available: true
            },
            {
                name: "Double Stripe",
                image: DOUBLESTRIPE,
                description: "A Double Stripe sock",
                available: true
            },
            {
                name: "Triple Stripe",
                image: TRIPLESTRIPE,
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