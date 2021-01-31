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
}

const profilePage_reducer = (state = initialState, action) => {
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