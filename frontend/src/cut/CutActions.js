export const INPUT_CUT = "INPUT_CUT";

export const inputCut = (cut) => {
    return {
        type: INPUT_CUT,
        payload: {
            cut: cut
        }
    };
}