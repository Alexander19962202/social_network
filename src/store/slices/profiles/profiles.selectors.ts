import { RootState } from 'src/store/store';

export const profilesStateProfileStatus = (state: RootState) => state.profiles.profileStatus;
export const profilesStateUserProfile = (state: RootState) => state.profiles.userProfile;
export const profilesStateUserPosts = (state: RootState) => state.profiles.userPosts;
