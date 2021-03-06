import { INPUT_CUT } from "./CutActions";
import QUARTER from "../images/quartersock.svg";
import CREW from "../images/crewsock.svg";
import KNEEHIGH from "../images/kneehighsock.svg";

const initialState = () => {
    return {
        cut: null,
        cuts: [ // Hard code the sock cuts for now...
            {
                name: "Quarter Sock",
                image: QUARTER,
                price: 5.45,
                description: "A quarter sized sock",
                available: true
            },
            {
                name: "Crew Sock",
                image: CREW,
                price: 5.95,
                description: "A crew sized sock",
                available: true
            },
            {
                name: "Knee High Sock",
                image: KNEEHIGH,
                price: 6.45,
                description: "A knee high sized sock",
                available: true
            }
        ]
    };
};

const cutReducer = (state = initialState(), action) => {
    switch (action.type) {
        case INPUT_CUT:
            return {
                ...state,
                cut: action.payload.cut
            };
        default:
            return state;
    }
}

export default cutReducer;