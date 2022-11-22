import React, {useEffect, useRef} from "react";
import {connect} from "react-redux"
import Profile from "./Profile";
import {
    getProfile,
    getProfileStatus,
    updateProfileStatus,
    savePhoto,
    saveProfile
} from "../../../redux/reducers/profilepage_reducer";
import withAuthRedirect from "../../common/hoc/withAuthRedirect";
import {compose} from "redux";
import {Outlet, useNavigate, useParams} from "react-router-dom";
import usePrevious from "../../common/hook/use-previous";

const ProfileContainer = (props) => {
    const params = useParams()
    const navigate = useNavigate()
    const mounted = useRef(false)

    const refreshProfile = () => {
        console.log('refresh')
        let userID = params?.userID
        if (!userID) {
            userID = props.userID;
            if (!userID) {
                navigate("/login");
            }
        }
        props.getProfile(userID);
        props.getProfileStatus(userID)
    }
    const prevParams = usePrevious(params)

    useEffect(() => {
        if (((!isNaN(+prevParams?.userID ) || !isNaN(+params.userID)) && +prevParams?.userID !== +params.userID) || !mounted.current) {
            refreshProfile()
            if (!mounted.current) {
                mounted.current = true
            }
        }
    }, [params])

    return (
        <div>
            <Profile profileInfoData={props.profileInfoData}
                     myPostsData={props.myPostsData}
                     updateProfileStatus={props.updateProfileStatus}
                     isOwner={!params?.userID}
                     savePhoto={props.savePhoto}
                     saveProfile={props.saveProfile}/>
            <Outlet/>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        profileInfoData: state.profilePage.profilePageData.profileInfoData,
        myPostsData: state.profilePage.profilePageData.myPostsData,
        isAuth: state.auth.authUserData.isAuth,
        userID: state.auth.authUserData.id
    }
};

export default compose(
    connect(mapStateToProps, {getProfile, getProfileStatus, updateProfileStatus, savePhoto, saveProfile}),
    withAuthRedirect
)
(ProfileContainer);