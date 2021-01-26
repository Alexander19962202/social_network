const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const profilePage_reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.profilePageData.myPostsData.newPostText = action.newPostTextValue;
            return state;
        case ADD_POST:
            let newPost = {
                id: 4,
                text: state.profilePageData.myPostsData.newPostText,
                likeCount: 0
            };
            state.profilePageData.myPostsData.myPostStateItems.push(newPost);
            state.profilePageData.myPostsData.newPostText = '';
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (newText) => ({ type: UPDATE_NEW_POST_TEXT, newPostTextValue: newText })

export default profilePage_reducer;