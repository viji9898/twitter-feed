import React from 'react';
import TweetTile from './TweetTile'

const TwitterFeed = (props) => {
  
  const twitterData=props.data.map((tweet)=>{

    return(
        <TweetTile
        key={tweet.id_str}
        tweetText={tweet.text}
        retweetCount={tweet.retweet_count}
        favoriteCount={tweet.favorite_count}
        likeStatus={tweet.liked}
        retweetedStatus={tweet.retweeted}
        timestamp={tweet.timestamp_ms}
        userName={tweet.user.name}
        screenName={tweet.user.screen_name}
        profileImage={tweet.user.profile_image_url} 
        />
    )
  })

  return(
    <div>
      <ul>{twitterData}</ul>
    </div>
  ) 
        
    
    
};

export default TwitterFeed;
