import { usersAPI } from 'src/api/api';
import { AppAsyncThunkAction } from 'src/store/slices/common/common.types';
import { AnyAction } from 'redux';
import { setFollowState, setFollowingProgress } from 'src/store/slices/users/users.slice';

export const follow =
  (userId: number): AppAsyncThunkAction<AnyAction> =>
  dispatch => {
    dispatch(setFollowingProgress({ isFollowing: true, userId }));
    return usersAPI.follow(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(setFollowState({ isFollow: true, userId }));
      }
      dispatch(setFollowingProgress({ isFollowing: false, userId }));
    });
  };

export const unfollow =
  (userId: number): AppAsyncThunkAction<AnyAction> =>
  dispatch => {
    dispatch(setFollowingProgress({ isFollowing: true, userId }));
    return usersAPI.unFollow(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(setFollowState({ isFollow: false, userId }));
      }
      dispatch(setFollowingProgress({ isFollowing: false, userId }));
    });
  };
