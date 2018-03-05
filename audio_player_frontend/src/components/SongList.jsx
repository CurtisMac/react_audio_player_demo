import React from 'react';
import { Link } from 'react-router-dom'
import { Grid, Image, Icon } from 'semantic-ui-react'

const divStyles={
    color: '#2185d0',
    img: {
        marginLeft: 'auto',
        marginRight: 'auto'
    }
}

function SongList(props) {
    
    const songs = props.playlist.map((songObj, i) => {
        return <Song
            key={songObj.id}
            song={songObj.title}
            arrayNum={i}
            currentTrack={props.currentTrack}
            updateTrack={props.updateTrack}
            togglePlay={props.togglePlay}
            isPlaying={props.isPlaying}
        />}
    )
    return (
        <div style={divStyles}>
            <h1 >{props.playlist[0].album}</h1>
            <p>{props.playlist[0].artist}</p>
            <Grid>
                <Grid.Column mobile={16} tablet={4} computer={3}>
                    <Image src={props.playlist[0].img}
                        height='150'
                        style={divStyles.img}
                        alt='albumn cover' />
                </Grid.Column>
                <Grid.Column mobile={16} tablet={12} computer={13}>
                    <ol>{songs}</ol>
                </Grid.Column>
            </Grid>
        </div>
    )
}

function Song(props) {
    return (
        <li>
            {props.currentTrack === props.arrayNum && props.isPlaying  ?
                <Icon name='pause circle' 
                      link={true} 
                      size={'large'}
                      color={'blue'}
                      onClick={() => {props.togglePlay(false)}}
                /> :
                <Icon name='video play' 
                      link={true} 
                      size={'large'}
                      color={'blue'}
                      onClick={() => {
                        props.updateTrack(props.arrayNum);
                        props.togglePlay(true)
                    }}
                />
            }
            <Link to={'/' + (props.arrayNum + 1)}>{props.song}</Link>
        </li>
    )
}

export default SongList