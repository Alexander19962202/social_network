import React from "react";
import {connect} from "react-redux"
// @ts-expect-error TS(6142): Module './Header' was resolved to '/home/alexevs/p... Remove this comment to see the full error message
import Header from "./Header";
import {logout} from "../../redux/reducers/auth_reducer";

class HeaderContainer extends React.Component {

    render() {
        return (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Header errorMessage={this.props.errorMessage} authUserData={this.props.authUserData} logout={this.props.logout}/>
        );
    }
}

let mapStateToProps = (state: any) => {
    return {
        authUserData: state.auth.authUserData
    }
};

export default connect(mapStateToProps, {logout})(HeaderContainer);