import React from "react";
import { connect } from "react-redux";
import "typeface-roboto";

const preview = (props) => {
    const setPreview = () => {
        const preview = document.getElementById("preview");
        if (preview) {
            const content = preview.contentDocument;

            const primaryColor = content.getElementById("primaryColor");
            primaryColor.style.fill = props.colors.primaryColorCode || "#000000";

            const secondaryColor = content.getElementById("secondaryColor");
            secondaryColor.style.fill = props.colors.secondaryColorCode || "#000000";

            const toeText = content.getElementById("toeText");
            toeText.innerHTML = props.text.toeText || "";
            toeText.style.fill = props.colors.secondaryColorCode || "#000000";

            const brimText = content.getElementById("brimText");
            brimText.innerHTML = props.text.brimText || "";
            brimText.style.fill = props.colors.secondaryColorCode || "#000000";

            const logo = content.getElementById("logo");
            logo.setAttribute("href", props.logo.logo ?? "");
        }
    }

    return (
        <React.Fragment>
            <object id="preview" type="image/svg+xml" data={props.cut.cut.image} onLoad={setPreview} style={{width: "75%", height: "75%"}}>
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