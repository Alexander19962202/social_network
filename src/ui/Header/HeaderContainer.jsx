import React from "react";
import {connect} from "react-redux"
import Header from "./Header";
import {setAuthMe} from "../../redux/auth_reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
       this.props.setAuthMe();
    }

    render() {
        return (
            <Header authUserData={this.props.authUserData} />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        authUserData: state.auth.authUserData
    }
};

export default connect(mapStateToProps, {setAuthMe})(HeaderContainer);