import React from "react";
import {withSuspense} from "src/ui/common/hoc/with-suspense";
import {createBrowserRouter, Navigate} from "react-router-dom";
import SocialNetworkApp from "src/app";
import LoginDialogContainer from "src/ui/login-dialog/login-dialog.container";
import NewsPage from "src/ui/pages/news-page/news-page";
import MusicPage from "src/ui/pages/music-page/music-page";
import SettingsPage from "src/ui/pages/settings-page/settings-page";
import UsersPageContainer from "src/ui/pages/users-page/users-page.container";
import NotFoundPage from "src/ui/common/components/not-found-page/not-found-page";

let ProfilePage = React.lazy(() => import('./ui/pages/profile-page/profile-page.container'));
let MessagesPage = React.lazy(() => import('./ui/pages/messages-page/messages-page'));
let ProfileContainerWithSuspense = withSuspense(ProfilePage)
let MessagesWithSuspense = withSuspense(MessagesPage)

const BASE_NAME = ''

const router = createBrowserRouter([
    {
      path: '/',
      element: <SocialNetworkApp/>,
      errorElement: <NotFoundPage/>,
      children: [
        {
          path: '/login',
          element: <LoginDialogContainer/>
        },
        {
          path: '/profile',
          element: <ProfileContainerWithSuspense/>,
          children: [
            {
              path: ':userID',
              element: <ProfileContainerWithSuspense/>,
            },
          ]
        },
        {
          path: '/messages',
          element: <MessagesWithSuspense/>,
        },
        {
          path: '/news',
          element: <NewsPage/>
        },
        {
          path: '/music',
          element: <MusicPage/>,
        },
        {
          path: '/users',
          element: <UsersPageContainer/>
        },
        {
          path: '/settings',
          element: <SettingsPage/>
        },
        {
          path: '/',
          element: <Navigate to='/profile' />
        },
        {
          path: '*',
          element: <Navigate to='/profile' />
        },
      ]
    },

  ], { basename: BASE_NAME })
;
export default router;
