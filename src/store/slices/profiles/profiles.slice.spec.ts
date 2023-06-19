import { ProfilesState } from './profiles.types';
import profilesReducer, { addPost, deletePost } from 'src/store/slices/profiles/profiles.slice';

describe('Profiles slice', () => {
  let state: ProfilesState = {
    userProfile: null,
    profileStatus: '',
    userPosts: [
      { id: 1, text: 'How I learned Infra Hard', likeCount: 11 },
      { id: 2, text: 'How I learned Torba Black', likeCount: 22 },
      { id: 3, text: 'About Gimbarr in 2011', likeCount: 33 },
    ],
  };
  const postLength = state.userPosts.length;

  it('length of posts should be incremented', () => {
    let action = addPost({ postText: 'VERY VERY NEW POST' });
    let newState = profilesReducer(state, action);
    expect(newState.userPosts.length).toBe(postLength + 1);
  });

  it('message of new post should be correct', () => {
    const postText = 'My post';
    let action = addPost({ postText });
    let newState = profilesReducer(state, action);
    expect(newState.userPosts[postLength].text).toBe(postText);
  });

  it('after deleting length of messenger should be decrement', () => {
    let action = deletePost({ postId: 1 });
    let newState = profilesReducer(state, action);
    expect(newState.userPosts.length).toBe(postLength - 1);
  });

  it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    let action = deletePost({ postId: postLength + 1 });
    let newState = profilesReducer(state, action);
    expect(newState.userPosts.length).toBe(postLength);
  });
});
