import React from 'react'
import { withRouter } from 'react-router'

class User extends React.Component {
  render() {
    return (
      <h1>User {this.props.match.params.userId}</h1>
    )
  }
}

export default withRouter(User)
