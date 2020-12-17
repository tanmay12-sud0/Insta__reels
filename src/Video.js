import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter'
import Videoheader from './Videoheader'
function Video({channel, url, likes, shares, song, avatarscr}) {
    const VideoRef = useRef(null)
    const [isVideo, setIsVideo] = useState(false)
    const onVideoPress = () => {
        if(isVideo){
            VideoRef.current.pause()
            setIsVideo(false)
        }else{
            VideoRef.current.play()
            setIsVideo(true)
        }
    }


    return (
        <div className="video">
            <Videoheader />
            <video 
            ref={VideoRef}
            onClick={onVideoPress}
            className="video__player" 
            alt="reel" 
            src={url}
             loop/>
             <VideoFooter 
              channel= {channel}
              likes = {likes}
              shares = {shares}
              avatarscr = {avatarscr}
              song = {song}
              />
        </div>
    )
}

export default Video
