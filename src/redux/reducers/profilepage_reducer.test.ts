import profilePage_reducer, {addPost, deletePost} from "./profilepage_reducer";

let state = {
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
const postLength = state.profilePageData.myPostsData.myPostStateItems.length;

it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPost('VERY VERY NEW POST');

    // 2. action
    let newState = profilePage_reducer(state, action);

    // 3. expectation
    expect(newState.profilePageData.myPostsData.myPostStateItems.length).toBe(postLength + 1);
});

it('message of new post should be correct', () => {
    // 1. test data
    const postTest = "My post";
    let action = addPost(postTest);

    // 2. action
    let newState = profilePage_reducer(state, action);

    // 3. expectation
    expect(newState.profilePageData.myPostsData.myPostStateItems[postLength].text).toBe(postTest);
});


it('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profilePage_reducer(state, action);

    // 3. expectation
    expect(newState.profilePageData.myPostsData.myPostStateItems.length).toBe(postLength - 1);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    // 1. test data
    let action = deletePost(postLength + 1);

    // 2. action
    let newState = profilePage_reducer(state, action);

    // 3. expectation
    expect(newState.profilePageData.myPostsData.myPostStateItems.length).toBe(postLength );
});