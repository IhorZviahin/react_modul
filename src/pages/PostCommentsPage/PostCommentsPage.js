import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postService} from "../../services/post.service";

const PostCommentsPage = () => {
    let {id} = useParams();
    const [postCommentsPage, setPostCommentsPage] = useState(null);
    useEffect(() => {
        postService.getByComments(id).then(value => setPostCommentsPage({...value}))
    }, [id])
    return (
        <div>
            <div>
                {
                    postCommentsPage && (
                        <div>
                            <div>Id: {postCommentsPage.id}</div>
                            <div>Name: {postCommentsPage.name}</div>
                            <div>Email: {postCommentsPage.email}</div>
                            <div>Body: {postCommentsPage.body}</div>
                        </div>
                    )
                }
            </div>
        </div>
    )
};

export default PostCommentsPage;