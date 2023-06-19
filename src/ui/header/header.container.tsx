import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Header from 'src/ui/header/header';
import { logout } from 'src/store/slices/auth/auth.thunks';
import { RootState } from 'src/store/redux-store';

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

class HeaderContainer extends React.Component<Props> {
  render() {
    return (
      <Header
        errorMessage={this.props.errorMessage}
        authUserData={this.props.authUserData}
        logout={this.props.logout}
      />
    );
  }
}

export default connector(HeaderContainer);
