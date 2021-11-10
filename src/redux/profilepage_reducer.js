import {profileAPI, usersAPI} from "../Api/Api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

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
            return  {
                ...state,
                profilePageData: {
                    ...state.profilePageData,
                    myPostsData: {
                        ...state.profilePageData.myPostsData,
                        myPostStateItems: [...state.profilePageData.myPostsData.myPostStateItems, { id: 4, text: text, likeCount: 0 }]
                    }
                }
            };
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

        default: {
            return state;
        }
    }
};

export const addPost = (postText) => ({ type: ADD_POST, postText: postText });
const setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE, userProfile: userProfile });
const setStatus = (status) => ({ type: SET_STATUS, status: status});

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

export const updateProfileStatus = (newStatus) => {
    return (dispatch) => {
        profileAPI.updateStatus(newStatus).then(respnnse => {
            if(respnnse.data.resultCode === 0)
                dispatch(setStatus(newStatus))
        })
    }
};

export default profilePage_reducer;