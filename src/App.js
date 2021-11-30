import React from 'react';
import axios from 'axios';
import User from './components/User';
import FollowerList from './components/FollowerList';
class App extends React.Component {

  state = {
    user: 'ByrdJayson',
    userInfo: {
      name: '',
      public_repos: '',
      followers: '',
      userName: ''
    },
    followers: []
  }

  componentDidMount(){
    axios.get(`https://api.github.com/users/${this.state.user}`)
    .then(res => {
      this.setState({
        ...this.state,
        userInfo: {
          name: res.data.name,
          public_repos: res.data.public_repos,
          followers: res.data.followers,
          userName: res.data.login
        }
      })
      console.log(res);
    })
    .catch(err => {
      console.error(err);
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.userInfo.name != this.state.userInfo.name){
      axios.get(`https://api.github.com/users/${this.state.user}/followers`)
      .then(res => {
        console.log(res);
        this.setState({
          ...this.state,
          followers: res.data
        })
      })
  }}

  handleChange = e => {
    this.setState({
      ...this.state,
      user: e.target.value
    })
    console.log(e.target.value);
  }

  handleSubmit = e => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.user}`)
    .then(res => {
      this.setState({
        ...this.state,
        userInfo: {
          name: res.data.name,
          public_repos: res.data.public_repos,
          followers: res.data.followers,
          userName: res.data.login
        }
      })
      console.log(res);
    })
  }






  render() {
    return(
    <div>
      GitHub UserCard
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onSubmit={this.handleSubmit} onChange={this.handleChange} value={this.state.user} placeholder='search' name='search' type='text'/>
          <button onClick={this.handleSubmit}>Find user</button>
        </form>

        <User userData={this.state}/>
        <div>
        <FollowerList followers={this.state.followers}/>
        </div>
      </div>
    </div>);
  }
}

export default App;
