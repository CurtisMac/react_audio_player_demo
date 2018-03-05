import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Image, Icon } from 'semantic-ui-react'

const divStyles = {
    color: '#2185d0',
    img: {
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    p: {
        paddingLeft: '10px'
    }
}

function SongDetails(props){
    const song = props.match.params.id-1
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
                    <Link to='/'><Icon name='arrow left'/>Back to Playlist</Link>
                    <h2>
                        <Icon name='video play'
                              link={true}
                              onClick={() => {
                                props.updateTrack(song);
                                props.togglePlay(true)
                            }}
                        />
                        {props.playlist[song].title}
                    </h2>
                    <p style={divStyles.p}>Album: {props.playlist[song].album}</p>
                    <p style={divStyles.p}>Artist: {props.playlist[song].artist}</p>
                    <p style={divStyles.p}>About: {props.playlist[0].about}</p>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default SongDetails