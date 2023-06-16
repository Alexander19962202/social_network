import React, { ChangeEvent, useEffect, useState } from 'react';

type Props = {
  status: string;
  updateProfileStatus: (newStatus: string) => void;
  isOwner: boolean;
};

const ProfileStatus: React.FC<Props> = props => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    if (!props.isOwner) {
      return;
    }
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    if (!props.isOwner) {
      return;
    }
    props.updateProfileStatus(status);
  };

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      <b>Status: </b>
      {!editMode && <span onDoubleClick={activateEditMode}>{props.status || '-------'}</span>}
      {editMode && <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />}
    </div>
  );
};

export default ProfileStatus;
