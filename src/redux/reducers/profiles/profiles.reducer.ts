import {
  ADD_POST,
  DELETE_POST, IProfile, ProfilesAction, ProfilesState,
  SAVE_PHOTO,
  SET_STATUS,
  SET_USER_PROFILE
} from "./profiles.types";
import {initialState} from "./profiles.initial-state";

const profilesReducer = (state = initialState, action: ProfilesAction): ProfilesState => {
  switch (action.type) {
    case ADD_POST: {
      let text = action.postText;
      return {
        ...state,
        profilePageData: {
          ...state.profilePageData,
          myPostsData: {
            ...state.profilePageData.myPostsData,
            myPostStateItems: [...state.profilePageData.myPostsData.myPostStateItems, {
              id: 4,
              text: text,
              likeCount: 0
            }]
          }
        }
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        profilePageData: {
          ...state.profilePageData,
          myPostsData: {
            ...state.profilePageData.myPostsData,
            myPostStateItems: state.profilePageData.myPostsData.myPostStateItems.filter(post => post.id != action.postID)
          }
        }
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profilePageData: {
          ...state.profilePageData,
          profileInfoData: {
            ...state.profilePageData.profileInfoData,
            userProfile: action.userProfile
          }
        }
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        profilePageData: {
          ...state.profilePageData,
          profileInfoData: {
            ...state.profilePageData.profileInfoData,
            status: action.status
          }
        }
      }
    }
    case SAVE_PHOTO: {
      return {
        ...state,
        profilePageData: {
          ...state.profilePageData,
          profileInfoData: {
            ...state.profilePageData.profileInfoData,
            userProfile: {
              ...(state.profilePageData.profileInfoData.userProfile as IProfile),
              photos: action.photos
            }
          }
        }
      }
    }
    default: {
      return state;
    }
  }
};

export default profilesReducer;
