import React from "react";
import {connect} from "react-redux"
import Header from "./Header";
import {logout} from "../../redux/reducers/auth/auth.thunks";

class HeaderContainer extends React.Component<any, any> {

    render() {
        return (
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