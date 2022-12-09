import React from 'react'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        // @ts-expect-error TS(2339): Property 'status' does not exist on type 'Readonly... Remove this comment to see the full error message
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
        // @ts-expect-error TS(2339): Property 'updateProfileStatus' does not exist on t... Remove this comment to see the full error message
        this.props.updateProfileStatus(this.state.status);
    };

    onStatusChange = (e: any) => {
        this.setState( {status: e.currentTarget.value} );
    };

    componentDidUpdate(prevProps: any, prevState: any) {
        // @ts-expect-error TS(2339): Property 'status' does not exist on type 'Readonly... Remove this comment to see the full error message
        if (prevProps.status !== this.props.status)
            // @ts-expect-error TS(2339): Property 'status' does not exist on type 'Readonly... Remove this comment to see the full error message
            this.setState({ status: this.props.status });
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
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus