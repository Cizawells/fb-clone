import React from 'react'
import"./Feed.css"
import StoryReel from "./StoryReel"
import MessageSender from "./MessageSender"
import Post from "./Post"

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post profilePic="https://e0.365dm.com/20/08/1600x900/skysports-lionel-messi-graphic_5077681.jpg?20200826082834" message={"Wow this works"} timestamp=" timeestamp..." username="Ciza wells" image="https://code.org/shared/images/social-media/codeorg2020_social.png"/>
            <Post profilePic="https://e0.365dm.com/20/08/1600x900/skysports-lionel-messi-graphic_5077681.jpg?20200826082834" message={"Wow this works"} timestamp="timestamp..." username="Ciza wells" />
            
        </div>
    )
} 

export default Feed
