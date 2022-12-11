import {profileAPI} from "../../../api/Api";
import {stopSubmit} from "redux-form";
import {setGlobalErrorAC} from "../app/app.action-creators";

const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO = 'SAVE_PHOTO';

let initialState = {
    profilePageData: {
        profileInfoData: {
            userProfile: null,
            status: ""
        },
        myPostsData: {
            myPostStateItems: [
                {id: 1, text: 'How I learned Infra Hard', likeCount: 11},
                {id: 2, text: 'How I learned Torba Black', likeCount: 22},
                {id: 3, text: 'About Gimbarr in 2011', likeCount: 33}
            ]
        }
    }
};

const profilePage_reducer = (state = initialState, action: any) => {
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
                            // @ts-expect-error TS(2698): Spread types may only be created from object types... Remove this comment to see the full error message
                            ...state.profilePageData.profileInfoData.userProfile,
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

export const addPost = (postText: any) => ({
    type: ADD_POST,
    postText: postText
});
export const deletePost = (postID: any) => ({
    type: DELETE_POST,
    postID
});
const setUserProfile = (userProfile: any) => ({
    type: SET_USER_PROFILE,
    userProfile: userProfile
});
const setStatus = (status: any) => ({
    type: SET_STATUS,
    status: status
});
const savePhotoSuccess = (photos: any) => ({
    type: SAVE_PHOTO,
    photos
});

export const getProfile = (userID: any) => {
    return (dispatch: any) => {
        profileAPI.getProfile(userID).then(data => {
            dispatch(setUserProfile(data));
        });
    };
};

export const getProfileStatus = (userID: any) => {
    return (dispatch: any) => {
        profileAPI.getUserStatus(userID).then(response => {
            dispatch(setStatus(response.data));
        })
    };
};

export const updateProfileStatus = (newStatus: any) => async (dispatch: any) => {
    try {
        const response = await profileAPI.updateStatus(newStatus);
        if (response.data.resultCode === 0)
            dispatch(setStatus(newStatus))
    }
    catch (error)
    {
        dispatch(setGlobalErrorAC("ERROR UPDATE STATUS FAILED"));
    }
};

export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};

export const saveProfile = (profile: any) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.authUserData.id;
    const response = await profileAPI.saveProfile(profile);

    if (response.data.resultCode === 0) {
        dispatch(getProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
};

export default profilePage_reducer;
