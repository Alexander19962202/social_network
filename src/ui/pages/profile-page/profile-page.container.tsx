import React, { useEffect, useRef } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import ProfilePage from 'src/ui/pages/profile-page/profile-page';
import {
  getProfile,
  getProfileStatus,
  updateProfileStatus,
  savePhoto,
  saveProfile,
} from 'src/redux/reducers/profiles/profiles.thunks';
import withAuthRedirect, { WithAuthRedirectProps } from 'src/ui/common/hoc/with-auth-redirect';
import { compose } from 'redux';
import { useNavigate, useParams } from 'react-router-dom';
import usePrevious from 'src/ui/common/hook/use-previous';
import { RootState } from 'src/redux/redux-store';

let mapStateToProps = (state: RootState) => ({
  profileInfoData: state.profilePage.profilePageData.profileInfoData,
  myPostsData: state.profilePage.profilePageData.myPostsData,
  isAuth: state.auth.authUserData.isAuth,
  userID: state.auth.authUserData.id,
});

const connector = connect(mapStateToProps, {
  getProfile,
  getProfileStatus,
  updateProfileStatus,
  savePhoto,
  saveProfile,
});

type Props = ConnectedProps<typeof connector> & WithAuthRedirectProps;

const ProfilePageContainer: React.FC<Props> = props => {
  const params = useParams<{ userID: string }>();
  const navigate = useNavigate();
  const mounted = useRef(false);

  const refreshProfile = () => {
    let userID = params?.userID ? +params.userID : null;
    if (!userID) {
      userID = props.userID;
      if (!userID) {
        navigate('/login');
      }
    }
    props.getProfile(userID);
    props.getProfileStatus(userID);
  };
  const prevParams = usePrevious(params, { userID: '' });

  useEffect(() => {
    const userIdChanged = !!(
      ((prevParams?.userID && !isNaN(+prevParams.userID)) || (params?.userID && !isNaN(+params.userID))) &&
      prevParams?.userID !== params?.userID
    );

    if (userIdChanged || !mounted.current) {
      refreshProfile();
      if (!mounted.current) {
        mounted.current = true;
      }
    }
  }, [params]);

  return (
    <div>
      <ProfilePage
        profileInfoData={props.profileInfoData}
        updateProfileStatus={props.updateProfileStatus}
        isOwner={!params?.userID}
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}
      />
    </div>
  );
};

export default compose(connector, withAuthRedirect)(ProfilePageContainer);
