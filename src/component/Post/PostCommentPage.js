import React from 'react';

const PostCommentPage = ({postCommentPage: {id, name, email, body}}) => {
    return (
        <div>
            <div>id: {id}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export default PostCommentPage;