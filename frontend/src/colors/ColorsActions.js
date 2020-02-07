export const PICK_PRIMARY_COLOR = "PICK_PRIMARY_COLOR";
export const PICK_SECONDARY_COLOR = "PICK_SECONDARY_COLOR";

export const pickPrimaryColor = (color, code) => {
    return {
        type: PICK_PRIMARY_COLOR,
        payload: {
            color: color,
            code: code
        }
    };
}

export const pickSecondaryColor = (color, code) => {
    return {
        type: PICK_SECONDARY_COLOR,
        payload: {
            color: color,
            code: code
        }
    };
}