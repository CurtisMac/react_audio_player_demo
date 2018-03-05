import React, { Component } from 'react';
import { Progress, Icon } from 'semantic-ui-react'

const divStyles = {
    color: '#2185d0',
    backgroundColor: 'black',
    position: 'fixed',
    bottom: '20px',
    left: '5%',
    right: '5%',
    textAlign: 'center',
    pBar: {
        marginBottom: '14px',
        marginTop: '20px'
    }
}

class Player extends Component {
    constructor() {
        super()
        this.state = ({
            currentTime: 0,
            displayTime: '',
            songLength: 0
        })
    }

    onEnd = () => {
        if (this.props.track !== this.props.playlist.length - 1) {
            this.props.updateTrack(this.props.track + 1)
        } else {
            this.props.updateTrack(0)
            this.props.togglePlay(false)
        }
    }

    updateProgress = () => {
        let minutes = (Math.floor(this.player.currentTime/60)).toString()
        let sec = (this.player.currentTime%60/100).toString().substring(2,4)
        this.setState({
            displayTime: (minutes + ':' + sec),
            currentTime: this.player.currentTime,
            songLength: this.player.duration
        })
    }

    componentDidUpdate() {
        if (this.props.isPlaying) {
            this.player.play()
        } else if (!this.props.isPlaying) {
            this.player.pause()
        }
    } 

    render() {
        const playlist = this.props.playlist
        return (
            <div style={divStyles}>
                <audio
                    id='player'
                    ref={(self) => { this.player = self }}
                    src={playlist[this.props.track].src}
                    onEnded={this.onEnd}
                    onTimeUpdate={this.updateProgress}>
                    Your browswer does not support audio playback
                </audio>
                <Progress
                    total={this.state.songLength}
                    value={this.state.currentTime}
                    disabled={!this.props.isPlaying}
                    color={'blue'}
                    size={'small'}
                    style={divStyles.pBar}
                    inverted 
                />
                <div>
                    <h3>{this.state.displayTime}    {playlist[this.props.track].title}</h3>
                    <Icon
                        name='backward'
                        size={'huge'}
                        link={this.props.track !== 0}
                        disabled={this.props.track === 0}
                        onClick={() => {
                            if (this.props.track !== 0) {
                                this.props.updateTrack(this.props.track - 1)
                            }
                        }}
                    />
                    {this.props.isPlaying ?
                        <Icon
                            name='pause circle outline'
                            size={'massive'}
                            link={true}
                            onClick={() => { this.props.togglePlay(!this.props.isPlaying) }}
                        /> :
                        <Icon
                            name='play circle outline'
                            size={'massive'}
                            link={true}
                            onClick={() => { this.props.togglePlay(!this.props.isPlaying) }}
                        />
                    }
                    <Icon
                        name='forward'
                        size={'huge'}
                        link={this.props.track !== playlist.length - 1}
                        disabled={this.props.track === playlist.length - 1}
                        onClick={() => {
                            if (this.props.track !== playlist.length - 1) {
                                this.props.updateTrack(this.props.track + 1)
                            }
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default Player