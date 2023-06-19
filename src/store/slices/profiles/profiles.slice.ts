import { createSlice } from '@reduxjs/toolkit';
import { initialState } from 'src/store/slices/profiles/profiles.initial-state';
import { IProfile, ProfilePhotos } from 'src/store/slices/profiles/profiles.types';

const profilesSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {
    addPost(state, action: { payload: { postText: string } }) {
      state.userPosts = [
        ...state.userPosts,
        {
          id: 4,
          text: action.payload.postText,
          likeCount: 0,
        },
      ];
    },
    deletePost(state, action: { payload: { postId: number } }) {
      state.userPosts = state.userPosts.filter(post => post.id !== action.payload.postId);
    },
    setUserProfile(state, action: { payload: { profile: IProfile } }) {
      state.userProfile = action.payload.profile;
    },
    setProfileStatus(state, action: { payload: { status: string } }) {
      state.profileStatus = action.payload.status;
    },
    setProfilePhoto(state, action: { payload: { photos: ProfilePhotos } }) {
      const profile = state.userProfile;
      if (profile !== null) {
        profile.photos = action.payload.photos;
      }
    },
  },
});

export const { addPost, deletePost, setUserProfile, setProfileStatus, setProfilePhoto } = profilesSlice.actions;

export default profilesSlice.reducer;
