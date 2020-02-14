import React from "react";
import { connect } from "react-redux";
import "typeface-roboto";

const preview = (props) => {
    const setPreview = () => {
        const preview = document.getElementById("preview");
        if (preview) {
            const document = preview.contentDocument;

            const primary = document.getElementById("primary");
            primary.style.fill = props.colors.primaryColorCode || "#000000";

            const secondary = document.getElementById("secondary");
            secondary.style.fill = props.colors.secondaryColorCode || "#000000";
        }
    }

    return (
        <React.Fragment>
            <object id="preview" type="image/svg+xml" data={props.cut.cut.image} width="600" height="600" onLoad={setPreview}>
                {props.cut.cut.description}
            </object>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        ...state
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        // Nothing to map yet...
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(preview)