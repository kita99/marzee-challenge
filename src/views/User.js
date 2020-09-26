import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

class User extends React.Component {
  state = {
    user: {
      company: {
        name: '',
        catchPhrase: ''
      },
      address: {
        geo: {
          lat: 0,
          lng: 0
        }
      }
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users/' + this.props.match.params.userId)
      .then(res => {
        this.setState({user: res.data})
      })
  }

  render() {
    return (
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item xs={10} className="user-detailed-card-header">
            <h1>{this.state.user.name}</h1>
          </Grid>

          <Grid item xs={2}>
            <Link to="/">
              <Button
                className="user-details-back-button"
                variant="contained"
                color="primary"
                startIcon={<ArrowBackIcon />}
              >
                Go Back
              </Button>
            </Link>
          </Grid>

          <Card className="user-detailed-card">
            <CardContent>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                spacing={2}
              >
                <Grid item xs={2} className="info-title">
                  <p>Username</p>
                </Grid>
                <Grid item xs={10} className="info-detail">
                  <p>{this.state.user.username}</p>
                </Grid>

                <Grid item xs={2} className="info-title">
                  <p>Email</p>
                </Grid>
                <Grid item xs={10} className="info-detail">
                  <p>{this.state.user.email}</p>
                </Grid>

                <Grid item xs={2} className="info-title">
                  <p>Phone</p>
                </Grid>
                <Grid item xs={10} className="info-detail">
                  <p>{this.state.user.phone}</p>
                </Grid>

                <Grid item xs={2} className="info-title">
                  <p>Website</p>
                </Grid>
                <Grid item xs={10} className="info-detail">
                  <p>{this.state.user.website}</p>
                </Grid>

                <Grid item xs={2} className="info-title">
                  <p>Company Name</p>
                </Grid>
                <Grid item xs={10} className="info-detail">
                  <p>{this.state.user.company.name}</p>
                </Grid>

                <Grid item xs={2} className="info-title">
                  <p>Company Motto</p>
                </Grid>
                <Grid item xs={10} className="info-detail">
                  <p>{this.state.user.company.catchPhrase}</p>
                </Grid>

                <Grid item xs={2} className="info-title">
                  <p>Street</p>
                </Grid>
                <Grid item xs={10} className="info-detail">
                  <p>{this.state.user.address.street}</p>
                </Grid>

                <Grid item xs={2} className="info-title">
                  <p>City</p>
                </Grid>
                <Grid item xs={10} className="info-detail">
                  <p>{this.state.user.address.city}</p>
                </Grid>

                <Grid item xs={2} className="info-title">
                  <p>Zip Code</p>
                </Grid>
                <Grid item xs={10} className="info-detail">
                  <p>{this.state.user.address.zipcode}</p>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Container>
    )
  }
}

export default withRouter(User)
