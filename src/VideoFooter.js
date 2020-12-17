import React from 'react'
import './VideoFooter.css'
import Avatar from '@material-ui/core/Avatar';
import { Button } from '@material-ui/core';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import SendIcon from '@material-ui/icons/Send';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
function VideoFooter(props) {
    return (
        <div className="videofooter">
            <div className="videofooter__text">
            <Avatar src={props.avatarscr} />
            <h3>
                {props.channel} . <Button>Follow</Button>
            </h3>
            
            </div>
            <div className="videofooter__ticker">
                    <MusicNoteIcon className="videofooter__icon" />
                    <Ticker mode="smooth">
                        {
                            ({index}) => (
                                <>
                                    <h1 className="videofooter__h1">{props.song}</h1>
                                </>
                            )
                        }
                    </Ticker>
            </div>
            <div className="videofooter__actions">
                <div className="videofooter__actionLeft">
                        <FavoriteIcon fontSize="large" />
                        <ModeCommentIcon fontSize="large" />
                        <SendIcon fontSize="large" />
                        <MoreHorizIcon fontSize="large" />
                </div>
                <div className="videofooter__actionRight">
                      <div className="videofooter__stat">
                          <FavoriteIcon/>
                          <p>{props.likes}</p>
                      </div>  
                      <div className="videofooter__stat">
                          <ModeCommentIcon/>
                          <p>{props.shares}</p>
                      </div>  
                </div>
            </div>
        </div>
    )
}

export default VideoFooter
