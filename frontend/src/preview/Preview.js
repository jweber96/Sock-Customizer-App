import React from "react"
import { connect } from "react-redux";
import "typeface-roboto";

class preview extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    onLoad(event) {
        console.log("loaded!");
        const primary = document.getElementById("primary");
        console.log(primary);
    }

    render() {
        return (
            <React.Fragment>
            {
                this.props.state.cut.cut
                ? (
                    <React.Fragment>
                        <object type="image/svg+xml" data={this.props.state.cut.cut.image} width="200" height="200" onLoad={this.onLoad}>
                            {this.props.state.cut.cut.description}
                        </object>
                    </React.Fragment>
                ) : (
                    <></>
                )
            }
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        // Nothing to map yet...
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(preview)