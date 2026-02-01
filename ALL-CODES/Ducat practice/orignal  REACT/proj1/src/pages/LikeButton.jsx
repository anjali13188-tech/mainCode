import React, { useState } from 'react'

export default function LikeButton() {
    const [like,setLike]= useState(false)
    function likeButton()
    {
        setLike(!like)
    }  
  return (
    <div>
       <button onClick={()=>likeButton()}>
        {
            like
            ?<span><span style={{color:'red'}}>❤️</span>Liked</span>
            : <span>🤍Disliked</span>}
       
       </button>
    </div>
  )
}
