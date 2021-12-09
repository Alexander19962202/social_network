import {profileAPI} from "../../Api/Api";
import {stopSubmit} from "redux-form";
import {setGlobalError} from "./app_reducer";

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

const profilePage_reducer = (state = initialState, action) => {
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

export const addPost = (postText) => ({type: ADD_POST, postText: postText});
export const deletePost = (postID) => ({type: DELETE_POST, postID});
const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile: userProfile});
const setStatus = (status) => ({type: SET_STATUS, status: status});
const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO, photos});

export const getProfile = (userID) => {
    return (dispatch) => {
        profileAPI.getProfile(userID).then(data => {
            dispatch(setUserProfile(data));
        });
    }
};

export const getProfileStatus = (userID) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userID).then(response => {
            dispatch(setStatus(response.data));
        })
    }
};

export const updateProfileStatus = (newStatus) => async (dispatch) => {
    try {
        const response = await profileAPI.updateStatus(newStatus);
        if (response.data.resultCode === 0)
            dispatch(setStatus(newStatus))
    }
    catch (error)
    {
        dispatch(setGlobalError("ERROR UPDATE STATUS FAILED"));
    }
};

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
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