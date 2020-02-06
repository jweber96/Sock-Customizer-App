export const PICK_PRIMARY_COLOR = "PICK_PRIMARY_COLOR";
export const PICK_SECONDARY_COLOR = "PICK_SECONDARY_COLOR";

export const pickPrimaryColor = (color) => {
    return {
        type: PICK_PRIMARY_COLOR,
        payload: {
            color: color
        }
    };
}

export const pickSecondaryColor = (color) => {
    return {
        type: PICK_SECONDARY_COLOR,
        payload: {
            color: color
        }
    };
}