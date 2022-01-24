import React from 'react';
import {Link} from "react-router-dom";

import './Post.css'

const Post = ({post: {id, body}}) => {
    return (
        <div className={'post'}>
            <div> {id}) </div>
            <div> Body: {body}</div>
            <Link to={id.toString()}> <button>PostDetail</button> </Link>
        </div>
    );
};

export default Post;