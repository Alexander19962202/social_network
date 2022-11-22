import React, {useEffect, useRef} from "react";
import {connect} from "react-redux"
// @ts-expect-error TS(6142): Module './Profile' was resolved to '/home/alexevs/... Remove this comment to see the full error message
import Profile from "./Profile";
import {
    getProfile,
    getProfileStatus,
    updateProfileStatus,
    savePhoto,
    saveProfile
} from "../../../redux/reducers/profilepage_reducer";
// @ts-expect-error TS(6142): Module '../../common/hoc/withAuthRedirect' was res... Remove this comment to see the full error message
import withAuthRedirect from "../../common/hoc/withAuthRedirect";
import {compose} from "redux";
import {Outlet, useNavigate, useParams} from "react-router-dom";
import usePrevious from "../../common/hook/use-previous";

const ProfileContainer = (props: any) => {
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
        // @ts-expect-error TS(2339): Property 'userID' does not exist on type 'never'.
        if (((!isNaN(+prevParams?.userID ) || !isNaN(+params.userID)) && +prevParams?.userID !== +params.userID) || !mounted.current) {
            refreshProfile()
            if (!mounted.current) {
                mounted.current = true
            }
        }
    }, [params])

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Profile profileInfoData={props.profileInfoData}
                     myPostsData={props.myPostsData}
                     updateProfileStatus={props.updateProfileStatus}
                     isOwner={!params?.userID}
                     savePhoto={props.savePhoto}
                     saveProfile={props.saveProfile}/>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Outlet/>
        </div>
    );
}

let mapStateToProps = (state: any) => {
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