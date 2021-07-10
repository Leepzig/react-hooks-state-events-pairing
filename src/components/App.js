import video from "../data/video.js";
import React, { useState } from "react";
import Comments from "./Comments"
import VideoDisplay from "./VideoDisplay.js";
import VideoInfo from "./VideoInfo.js";

function App() {

  //show/hide comments
  const [showComments, setCommentState] = useState(true)



  function changeCommentDisplay() {
    setCommentState(!showComments)
  }


  return (
    <div className="App">
      <VideoDisplay title={video.title} embedUrl={video.embedUrl}/>
      <VideoInfo views={video.views} 
      createdAt={video.createdAt} 
      showComments={showComments}
      changeCommentDisplay={changeCommentDisplay}
      upvotes={video.upvotes}
      downvotes={video.downvotes}
      />
      {showComments ? <Comments comments={video.comments}/> : null}
    </div>
  );
}

export default App;
