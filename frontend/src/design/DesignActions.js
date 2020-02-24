export const INPUT_DESIGN = "INPUT_DESIGN";

export const inputDesign = (design) => {
    return {
        type: INPUT_DESIGN,
        payload: {
            design: design
        }
    };
}