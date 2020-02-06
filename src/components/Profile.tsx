import * as React from 'react';

type UserName = {
    username: string
}

class Profile extends React.Component<{}, UserName> {
    constructor(props:any) {
        super(props);
        this.state = {
            username: ''
        }
        this.onUserChange = this.onUserChange.bind(this);
        this.onSubmitUser = this.onSubmitUser.bind(this);
    }
    
    onUserChange(e: React.FormEvent<HTMLInputElement>) {
        this.setState({ username: (e.target as HTMLInputElement).value });
        
    }

    onSubmitUser() {
        localStorage.setItem('username', this.state.username);
        window.location.href="/tweet";
    }

    render() {
        return(
            <div className="login">
                <h4>User Name</h4>
                <input className="user" onChange={this.onUserChange} ></input>
                <button className="changeUser" onClick={this.onSubmitUser}>Save</button>
            </div>
        )
    }
}
export default Profile;