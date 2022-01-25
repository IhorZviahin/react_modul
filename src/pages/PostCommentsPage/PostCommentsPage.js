import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../../services/post.service";
import PostCommentPage from "../../component/Post/PostCommentPage";

const PostCommentsPage = () => {
    let {id} = useParams();
    const [postCommentsPages, setPostCommentsPages] = useState([]);
    useEffect(() => {
        postService.getByComments(id).then(value => setPostCommentsPages([...value]))
    }, [id])
    console.log(postCommentsPages)
    return (
        <div>
            {postCommentsPages.map(postCommentPage => <PostCommentPage key={postCommentPage.id}
                                                                       postCommentPage={postCommentPage}/>)}
        </div>
    )
};

export default PostCommentsPage;