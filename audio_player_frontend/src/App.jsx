import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import { Container } from 'semantic-ui-react'
import Player from './components/Audio_player'
import SongList from './components/SongList'
import SongDetails from './components/SongDetails'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentTrack: 0,
      isPlaying: false,
      playlist: [0]
    }
  }

  updateTrack = (trackNum) => {
    this.setState({
      currentTrack: trackNum
    })
  }

  togglePlay = (bool) => {
    this.setState({
      isPlaying: bool
    })
  }

  componentWillMount() {
    axios.get('http://localhost:8080')
      .then((response) => {
        this.setState({
          playlist: response.data
        })
      })
      .catch(function (err) {
        console.log(err)
      })
  }

  render() {
    return (
      <Container>
        <Switch>
          <Route exact path='/'
            render={() => <SongList
              playlist={this.state.playlist}
              currentTrack={this.state.currentTrack}
              isPlaying={this.state.isPlaying}
              updateTrack={this.updateTrack}
              togglePlay={this.togglePlay} />}
          />
          <Route path='/:id'
            render={(routeProps) => <SongDetails
              playlist={this.state.playlist}
              updateTrack={this.updateTrack}
              togglePlay={this.togglePlay}
              {...routeProps} />}
          />
        </Switch>
        <Player playlist={this.state.playlist}
          track={this.state.currentTrack}
          updateTrack={this.updateTrack}
          togglePlay={this.togglePlay}
          isPlaying={this.state.isPlaying}
        />
      </Container>
    )
  }
}

export default App;
