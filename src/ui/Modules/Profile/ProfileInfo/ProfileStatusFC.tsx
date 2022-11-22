import React, {useEffect, useState} from 'react';

const ProfileStatusFC = (props: any) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] );

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateProfileStatus(status);
    };

    const onStatusChange = (e: any) => {
        setStatus(e.currentTarget.value);
    };

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <b>Status: </b>
            { !editMode &&
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <span onDoubleClick={ activateEditMode }>{props.status || "-------"}</span>
            }
            { editMode &&
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <input onChange={onStatusChange} autoFocus={true} onBlur={ deactivateEditMode } value={status} />
            }
        </div>
    )
};

export default ProfileStatusFC;