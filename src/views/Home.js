import React from 'react'
import axios from 'axios'
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
      <Card className="user-card">
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className="user-card-avatar">
              A
            </Avatar>
          }
          title="Some Title"
          subheader="Some sub header"
        />
        <CardContent>
          <List>
            <ListItem>
              <ListItemAvatar>
                <WorkIcon />
              </ListItemAvatar>
              <ListItemText primary="Some title" secondary="Some value" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <LocationIcon />
              </ListItemAvatar>
              <ListItemText primary="Some title" secondary="Some value" />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    )
  }
}
