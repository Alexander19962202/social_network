import ContactItem from "./contact-item/contact-item";
import React from "react";
import {IProfile} from "src/redux/reducers/profiles/profiles.types";

type Props = {
  profile: IProfile,
  isOwner: boolean,
  goToEditMode: () => void
}

const ProfileData: React.FC<Props> = ({profile, isOwner, goToEditMode}) => {
  return <div>
    {
      isOwner &&
      <div>
        <button onClick={goToEditMode}>Edit</button>
      </div>
    }
    <div>
      <b>Full name</b>: {profile.fullName}
    </div>
    <div>
      <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
    </div>
    {
      profile.lookingForAJob &&
      <div>
        <b>My professional skills</b>: {profile.lookingForAJobDescription}
      </div>
    }
    <div>
      <b>About me</b>: {profile.aboutMe}
    </div>
    <div>
      <b>Contacts</b>:
      {
        Object.keys(profile.contacts)
          .map((key)=> {return <ContactItem key={key} contactTitle={key} contactValue={profile.contacts[key]}/>})
      }
    </div>
  </div>
};

export default ProfileData;
