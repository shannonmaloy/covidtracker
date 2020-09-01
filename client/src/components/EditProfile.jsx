import React from 'react'
import EditForm from './EditForm'

class EditProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            method: 'PUT',
        })
    }
    render() {
            return (
                <div>
                    <h4>Update User Information</h4>
                    <EditForm handleFormSubmit={this.props.handleFormSubmit} state={this.state} userState={this.props.userState} currentPage={this.props.currentPage}/>
                    <span>{(this.props.userState.message) && this.props.userState.message}</span>
                </div>
            ) 
        }
}
export default EditProfile