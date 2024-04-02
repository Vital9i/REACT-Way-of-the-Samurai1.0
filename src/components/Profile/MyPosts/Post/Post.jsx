import React from 'react';
import classes from './Post.module.css';


const Post = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.item}>
                <img src="https://www.kiprinform.com/wp-content/uploads/2022/11/avatar.jpg" alt="" srcset="" />
                {props.message}
            </div>
            <div className={classes.Like}>
                <img src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-facebook-like-icon-png-image_3584862.jpg" alt="" srcset="" />
                {props.countLike}
            </div>
        </div>
    )
}

export default Post