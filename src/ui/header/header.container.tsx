import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Header from 'src/ui/header/header';
import { logout } from 'src/store/slices/auth/auth.thunks';
import { RootState } from 'src/store/store';

type OwnProps = {
  errorMessage: string;
};

let mapStateToProps = (state: RootState) => {
  return {
    authUserData: state.auth.authUserData,
  };
};

const connector = connect(mapStateToProps, { logout });

type Props = ConnectedProps<typeof connector> & OwnProps;

const HeaderContainer: React.FC<Props> = ({ errorMessage, authUserData, logout }) => {
  return <Header errorMessage={errorMessage} authUserData={authUserData} logout={logout} />;
};

export default connector(HeaderContainer);
