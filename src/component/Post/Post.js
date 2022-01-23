import React from 'react';

import './Post.css'

const Post = ({post: {id, body}}) => {
    return (
        <div className={'post'}>
            <div> {id}) </div>
            <div> Body: {body}</div>
            <button>PostDetail</button>
        </div>
    );
};

export default Post;