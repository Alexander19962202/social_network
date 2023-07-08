import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import SocialNetworkApp from 'src/app';
import NotFoundPage from 'src/ui/common/components/not-found-page/not-found-page';
import { withSuspense } from 'src/ui/common/hoc/with-suspense';
import LoginDialogContainer from 'src/ui/login-dialog/login-dialog.container';
import UsersPageContainer from 'src/ui/pages/users-page/users-page.container';

const ProfilePage = React.lazy(() => import('./ui/pages/profile-page/profile-page.container'));
const MessagesPage = React.lazy(() => import('./ui/pages/messages-page/messages-page'));
const ProfileContainerWithSuspense = withSuspense(ProfilePage);
const MessagesWithSuspense = withSuspense(MessagesPage);

const BASE_NAME = '';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <SocialNetworkApp />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: '/login',
          element: <LoginDialogContainer />,
        },
        {
          path: '/profile',
          element: <ProfileContainerWithSuspense />,
          children: [
            {
              path: ':userID',
              element: <ProfileContainerWithSuspense />,
            },
          ],
        },
        {
          path: '/messenger',
          element: <MessagesWithSuspense />,
        },
        {
          path: '/users',
          element: <UsersPageContainer />,
        },
        {
          path: '/',
          element: <Navigate to="/profile" />,
        },
        {
          path: '*',
          element: <Navigate to="/profile" />,
        },
      ],
    },
  ],
  { basename: BASE_NAME },
);
export default router;
