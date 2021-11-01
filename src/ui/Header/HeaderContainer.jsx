import React from "react";
import {connect} from "react-redux"
import Header from "./Header";
import {setAuthUserData} from "../../redux/auth_reducer";
import {usersAPI} from "../Api/Api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        usersAPI.authMe()
            .then(data => {
                if(data.resultCode === 0)
                    this.props.setAuthUserData(data.data);
            });
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);