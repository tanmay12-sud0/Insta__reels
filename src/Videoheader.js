import React from 'react'
import './Videoheader.css'
import IconButton from '@material-ui/core/IconButton';

import CameraAltIcon from '@material-ui/icons/CameraAlt';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
function Videoheader() {
    return (
        <div className="videoHeader">
     
           <ArrowBackIosIcon />
           
            <h3>Reels</h3>
           
           <CameraAltIcon />
          
        </div>
    )
}

export default Videoheader
