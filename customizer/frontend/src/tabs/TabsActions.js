export const CLICK_TAB = "CLICK_TAB";

export const clickTab = (value) => {
    return {
        type: CLICK_TAB,
        payload: {
            value: value
        }
    };
}