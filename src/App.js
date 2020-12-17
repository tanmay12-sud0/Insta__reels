import React, { useEffect, useState } from 'react'
import './App.css';
import Video from './Video';
import db from './firebase'
function App() {
  const [reels, setreels] = useState([])
  useEffect(() => {
    db.collection("reels").onSnapshot(snapshot => (
      setreels(snapshot.docs.map(doc => doc.data()))
    ))
  }, [])
  console.log(reels)

  return (
    <div className="app">
        <div className="app__top">
            <img alt="s" className="app__logo" src="https://www.flaticon.com/svg/static/icons/svg/2111/2111463.svg" />
            <h1>Reels</h1>
        </div>
        <div className="app__video">

                  {
                    reels.map(item => (
                    <Video
                    channel = {item.channel}
                    song = {item.song}
                    url = {item.url}
                    likes = {item.likes}
                    shares = {item.shares}
                    avatarscr = {item.avatarscr} 
                    ></Video>
                    ))
                  }


            

               
              
        </div>
    </div>
  );
}

export default App;
