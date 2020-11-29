import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import UserInput from './Components/UserInput/UserInput'
import UserDetails from './Components/UserDetails/UserDetails'
import NotFound from './Components/NotFound/NotFound'
import { Alert, Spinner } from 'react-bootstrap'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      loading: false,
      id: '',
      imgSrc: '',
      details: [],
      error: false,
      alert: false
    }
  }
  fetchUser = () => {
    if (this.state.username) {
      this.setState({
        loading: true,
      })
      const url = `https://api.github.com/users/${this.state.username}`
      axios.get(url)
        .then((response) => {
          this.setState({
            loading: false,
            id: response.data.id,
            details: {
              imgSrc: response.data.avatar_url || 'Not available',
              name: response.data.name || 'Not available',
              bio: response.data.bio || 'Not available',
              created_at: response.data.created_at || 'Not available',
              email: response.data.email || 'Not available',
              html_url: response.data.html_url || 'Not available',
              location: response.data.location || 'Not available',
              public_repos: response.data.public_repos || 'Not available'
            }
          })
        })
        .catch(() => {
          this.setState({
            error: true,
            loading: false,
            id: ''
          })
        })
    }
    else {
      this.setState({
        alert: true,
        id: ''
      })
    }
  }
  onchange = (e) => {
    this.setState({
      username: e.target.value,
      alert: false,
      error: false,
      loading: false
    })
  }
  componentDidUpdate() {
    document.getElementById('input').focus();
  }
  render() {
    return <>
      <h2 id='head'>Check details of any github user</h2>
      <div className='appContainer'>
        <UserInput fetchUser={this.fetchUser} onchange={this.onchange} />
        <Alert id='alert' show={this.state.alert} variant='dark'>
          Please enter a user name!
        </Alert>
        {this.state.loading ?
          <Spinner id='load' animation="border" variant="light" /> :
          <>
            {this.state.error ? <NotFound /> :
              <>
                {this.state.id ?
                  <UserDetails details={this.state.details} /> : null}
              </>}
          </>}
      </div>
    </>
  }
}
export default App