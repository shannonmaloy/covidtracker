//will have input for username, password, email, and submit
//ternary statements to toggle between edit, register, and login

import React from 'react'

class UserForm extends React.Component {
    constructor() {
        super()
        this.state = ({
            email: '',
            username: '',
            password: '',
        })
    }

    handleFormChanges = (e) => {
        const name = {e.target.name}
        const value = {e.target.value}
        this.setState({
            [name]: value
        })

    }

    render() {
        return(
            <div className='form-container'>
                <h3>Edit User Info</h3>
                <form>
                    <input type="text" name="email" value={this.state.email} placeholder="Email" />
                    <input type="text" name="username" value={this.state.username} placeholder="Username" />
                    <input type="password" name="password" value={this.state.password} placeholder="Password" />
                    <input type="submit" value="Submit" />
                </form>
            </div>

        )
    }
}

export default UserForm