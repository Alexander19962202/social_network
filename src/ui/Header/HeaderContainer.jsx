import React from "react";
import {connect} from "react-redux"
import Header from "./Header";
import * as axios from "axios";
import {setAuthUserData} from "../../redux/auth_reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(response => {
                if(response.data.resultCode === 0)
                    this.props.setAuthUserData(response.data.data);
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