import React from 'react'
import axios from 'axios'

export default class Home extends React.Component {
  state = {
    users: []
  }

  componentWillMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.setState({users: response.data})
      })
  }
  render() {
    return (
      <h1>Home</h1>
    )
  }
}
