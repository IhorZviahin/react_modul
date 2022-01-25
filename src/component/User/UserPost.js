import React from 'react';

const UserPost = ({userPost:{id,title,body}}) => {
    return (
        <div>

            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>

        </div>
    );
};

export default UserPost;