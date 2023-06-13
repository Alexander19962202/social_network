import React, {ChangeEvent} from 'react'

type Props = {
  status: string,
  updateProfileStatus: (newStatus: string) => void
}

class ProfileStatusOld extends React.Component<Props> {
  state = {
    editMode: false,
    status: this.props.status
  };

  activateEditMode = () => {
    this.setState({
      editMode: true
    });
  };


  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateProfileStatus(this.state.status);
  };

  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({status: e.currentTarget.value});
  };

  componentDidUpdate(prevProps: Props) {
    if (prevProps.status !== this.props.status)
      this.setState({status: this.props.status});
  }

  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div>
            <span onDoubleClick={this.activateEditMode}>{'Status is empty'}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactivateEditMode.bind(this)}
              value={this.state.status}/>
          </div>
        }
      </div>
    )
  }
}

export default ProfileStatusOld
