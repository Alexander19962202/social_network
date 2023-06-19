export type ProfilePhotos = {
  large: string;
  small: string;
};

export interface IProfileContacts {
  facebook: string;
  website: string;
  vk: string;
  twitter: string;
  instagram: string;
  youtube: string;
  github: string;
  mainLink: string;
}

export interface IProfile {
  fullName: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  aboutMe: string;
  photos: ProfilePhotos;
  contacts: IProfileContacts;
  userId: number;
}

export type Post = {
  id: number;
  text: string;
  likeCount: number;
};

export type ProfilesState = {
  userProfile: IProfile | null;
  profileStatus: string;
  userPosts: Post[];
};
