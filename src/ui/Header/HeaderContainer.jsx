import React from "react";
import {connect} from "react-redux"
import Header from "./Header";
import {getAuthUserData, logout} from "../../redux/auth_reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
       this.props.getAuthUserData();
    }

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

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);