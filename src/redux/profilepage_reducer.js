const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    profilePageData: {
        myPostsData: {
            myPostStateItems: [
                {id: 1, text: 'How I learned Infra Hard', likeCount: 11},
                {id: 2, text: 'How I learned Torba Black', likeCount: 22},
                {id: 3, text: 'About Gimbarr in 2011', likeCount: 33}
            ],
            newPostText: ''
        }
    }
};

const profilePage_reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.profilePageData = {...state.profilePageData}
            stateCopy.profilePageData.myPostsData = {...state.profilePageData.myPostsData};

            stateCopy.profilePageData.myPostsData.newPostText = action.newPostTextValue;
            return stateCopy;
        }
        case ADD_POST: {
            let stateCopy = {...state};
            stateCopy.profilePageData = {...state.profilePageData}
            stateCopy.profilePageData.myPostsData = {...state.profilePageData.myPostsData};
            stateCopy.profilePageData.myPostsData.myPostStateItems = [...state.profilePageData.myPostsData.myPostStateItems];

            let newPost = {
                id: 4,
                text: stateCopy.profilePageData.myPostsData.newPostText,
                likeCount: 0
            };
            stateCopy.profilePageData.myPostsData.myPostStateItems.push(newPost);
            stateCopy.profilePageData.myPostsData.newPostText = '';
            return stateCopy;
        }
        default: {
            return state;
        }
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (newText) => ({ type: UPDATE_NEW_POST_TEXT, newPostTextValue: newText });

export default profilePage_reducer;