import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import WorkIcon from '@material-ui/icons/Work'
import LocationIcon from '@material-ui/icons/LocationOn'


TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  )
}

function tabProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.handleTabChange = this.handleTabChange.bind(this)
  }

  state = {
    users: [],
    currentTabPosition: 0
  }

  componentWillMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.setState({users: response.data})
      })
  }

  handleTabChange(event, newPosition) {
    this.setState({currentTabPosition: newPosition})
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Tabs value={this.state.currentTabPosition} onChange={this.handleTabChange} aria-lable="nav tabs">
            <Tab label="Workers" {...tabProps(0)} />
            <Tab label="Map View" {...tabProps(1)} />
          </Tabs>
        </AppBar>

        <Container maxWidth="lg">
          <TabPanel value={this.state.currentTabPosition} index={0}>
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
                    <Link to={"/user/" + user.id}>
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
                    </Link>
                  </Grid>
                )
              })}
            </Grid>
          </TabPanel>

          <TabPanel value={this.state.currentTabPosition} index={1}>
            <h1>Map View here</h1>
          </TabPanel>
        </Container>
      </div>
    )
  }
}
