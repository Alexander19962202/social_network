import React from "react";
import {connect} from "react-redux"
import Header from "./Header";
import {logout} from "../../redux/auth_reducer";

class HeaderContainer extends React.Component {

    render() {
        return (
            <Header authUserData={this.props.authUserData} logout={this.props.logout}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        authUserData: state.auth.authUserData
    }
};

export default connect(mapStateToProps, {logout})(HeaderContainer);