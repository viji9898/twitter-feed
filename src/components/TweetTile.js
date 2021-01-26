import React from "react"

const TweetTile=(props)=>{
debugger
return( 
        <div>
            <div>
                <img src={props.profileImage}/>
            </div>
            <div>
                <p>{props.userName}</p>
                <p>{props.screenName}</p>
                <p>{props.timestamp}</p>
            </div>
            <div>
                <p>{props.tweetText}</p>
            </div>
            <div>
                <p>replyIcon</p>
                <p>{props.retweetCount}</p>
                <p>{props.favoriteCount}</p>
                <p>moreIcon</p>
            </div>
        </div>
)
}



export default TweetTile;
