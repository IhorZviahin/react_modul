import React, {useEffect, useState} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";
import {postService} from "../../services/post.service";

const PostDetailsPage = () => {
    let {id} = useParams();
    const [postDetails, setPostDetails] = useState(null);
    useEffect(() => {
        postService.getById(id).then(value => setPostDetails({...value}))
    },[id])
    return (
        <div>
            <div>
                {
                    postDetails && (
                        <div>
                            <div>{postDetails.id}</div>
                            <div> Title: {postDetails.title}</div>
                            <div> Body: {postDetails.body}</div>
                            <Link to={`/posts/${id}/comments`}>
                                <button>GetComments</button>
                            </Link>
                        </div>
                    )
                }
            </div>
            <Outlet/>
        </div>
    );
};

export default PostDetailsPage;