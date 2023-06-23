import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from 'src/store/slices/profiles/profiles.initial-state';
import { IProfile, ProfilePhotos } from 'src/store/slices/profiles/profiles.types';

const profilesSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<{ postText: string }>) {
      state.userPosts = [
        ...state.userPosts,
        {
          id: 4,
          text: action.payload.postText,
          likeCount: 0,
        },
      ];
    },
    deletePost(state, action: PayloadAction<{ postId: number }>) {
      state.userPosts = state.userPosts.filter(post => post.id !== action.payload.postId);
    },
    setUserProfile(state, action: PayloadAction<{ profile: IProfile }>) {
      state.userProfile = action.payload.profile;
    },
    setProfileStatus(state, action: PayloadAction<{ status: string }>) {
      state.profileStatus = action.payload.status;
    },
    setProfilePhoto(state, action: PayloadAction<{ photos: ProfilePhotos }>) {
      const profile = state.userProfile;
      if (profile !== null) {
        profile.photos = action.payload.photos;
      }
    },
  },
});

export const { addPost, deletePost, setUserProfile, setProfileStatus, setProfilePhoto } = profilesSlice.actions;

export default profilesSlice.reducer;
