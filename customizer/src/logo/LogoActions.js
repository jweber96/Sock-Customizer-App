export const INPUT_LOGO = "INPUT_LOGO";
export const RESET_LOGO = "RESET_LOGO";

export const inputLogo = (logo) => {
    return {
        type: INPUT_LOGO,
        payload: {
            logo: logo
        }
    };
}

export const resetLogo = () => {
    return {
        type: RESET_LOGO,
        payload: {
            logo: null
        }
    };
}