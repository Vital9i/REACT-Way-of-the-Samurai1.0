import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div><img src='https://phuketescape.com/wp-content/uploads/2023/10/sergey-matveev.jpg'></img>
                <div>
                    ava + description
                </div>
                <div>
                    <MyPosts />
                </div>
            </div>
        </div>
    )
}

export default Profile