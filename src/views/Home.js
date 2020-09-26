import React from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import WorkIcon from '@material-ui/icons/Work'
import LocationIcon from '@material-ui/icons/LocationOn'

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
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={2}
      >
        {this.state.users.map(user => {
          return (
            <Grid item xs={4} key={user.id}>
              <Card className="user-card">
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className="user-card-avatar">
                      A
                    </Avatar>
                  }
                  title={user.name}
                  subheader={user.email}
                />
                <CardContent>
                  <List>
                    <ListItem>
                      <ListItemAvatar>
                        <WorkIcon />
                      </ListItemAvatar>
                      <ListItemText primary="Company" secondary={user.company.name} />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <LocationIcon />
                      </ListItemAvatar>
                      <ListItemText primary="City" secondary={user.address.city} />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    )
  }
}
