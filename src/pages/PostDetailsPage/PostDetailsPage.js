import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import {postService} from "../../services/post.service";

const PostDetailsPage = () => {
    let {id} = useParams();
    const [postDetails,setPostDetails] = useState(null);
    useEffect(()=>{
        postService.getById(id).then(value => setPostDetails({...value}))
    })
    return (
        <div>
            <div>
                {
                    postDetails && (
                        <div>
                            <div>{postDetails.id}</div>
                            <div>{postDetails.title}</div>
                            <div>{postDetails.body}</div>
                        </div>
                    )
                }
            </div>
            <Outlet/>
        </div>
    );
};

export default PostDetailsPage;