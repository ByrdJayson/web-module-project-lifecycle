import React from 'react';

class FollowerList extends React.Component{
  render(){
    return(
      <div>
        <h1>Followers List</h1>
        <div>
          {this.props.followers.map(follower => {
            return <div key={follower.login}>
              <h2>
                {follower.login}
              </h2>
              <img src={follower.avatar_url}/>
            </div>
          })}
        </div>
      </div>

    )
  }
}

export default FollowerList;
