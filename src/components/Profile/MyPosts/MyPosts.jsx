import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <div className={classes.item}>
            <textarea></textarea>
            <button>add post</button>
            <br></br>
                My posts
                            </div>
            <Post message="Hey, how are you?" countLike="27" />
            <Post message="HI" countLike="3" />
            <Post message="My first post" countLike="34" />
        </div>
    )
}

export default MyPosts