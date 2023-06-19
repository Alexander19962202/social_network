import { ProfilesState } from './profiles.types';

export const initialState: ProfilesState = {
  userProfile: null,
  profileStatus: '',
  userPosts: [
    { id: 1, text: 'How I learned Infra Hard', likeCount: 11 },
    { id: 2, text: 'How I learned Torba Black', likeCount: 22 },
    { id: 3, text: 'About Gimbarr in 2011', likeCount: 33 },
  ],
};
