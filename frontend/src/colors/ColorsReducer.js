import { PICK_PRIMARY_COLOR, PICK_SECONDARY_COLOR } from "./ColorsActions";

const initialState = () => {
    return {
        primaryColor: null,
        primaryColorCode: null,
        secondaryColor: null,
        secondaryColorCode: null,
        colors: {
            "White": "#FFFFFF",
            "Black": "#000000",
            "Gailgrey": "#7B7A7F",
            "Grey": "#656773",
            "Charcoal": "#38383C",
            "Tonybrown": "#BC744E",
            "Brown": "#5A3F29",
            "Coffeebean": "#423433",
            "Carolinablue": "#87B0D6",
            "Columbiablue": "#507AA8",
            "Lightblue": "#5C89C2",
            "Bahama": "#4668A5",
            "Royalblue": "#324476",
            "Navyblue": "#282A39",
            "Teal": "#245A54",
            "Libbyteal": "#154B5F",
            "Flourescentgreen": "#5FAD68",
            "Kiwigreen": "#337741",
            "Kellygreen": "#3B7C3E",
            "Darkgreen": "#395141",
            "Libbyyellow": "#D8DC63",
            "Yellow": "#EFC42B",
            "Gold": "#EE9C32",
            "Brass": "#B67E43",
            "Vegasgold": "#947C50",
            "Lightorange": "#F17A3D",
            "Neonorange": "#FE4B3A",
            "Beachfire": "#B04612",
            "Orange": "#DA3733",
            "Rust": "#A73F3A",
            "Red": "#CF2E34",
            "Cardinalred": "#752935",
            "Maroon": "#492330",
            "Pink": "#EDC4E4",
            "Bobbypink": "#E93C67",
            "Darkpink": "#EF89B8",
            "Flashpink": "#CE465E",
            "Fuschia": "#E3376C",
            "Purple": "#4B3872",
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