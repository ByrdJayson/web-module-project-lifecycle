import React from 'react';

class User extends React.Component{

  render(){
    return (
      <>
        <h1>{this.props.userData.userInfo.name}</h1>
        <p>{this.props.userData.userInfo.userName}</p>
        <div>
          <p>Public Repos: {this.props.userData.userInfo.public_repos}</p>
          <p>Followers:{this.props.userData.userInfo.followers}</p>
        </div>

      </>
    )
  }
}

export default User;
