import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../../services/post.service";
import UserPost from "../../component/User/UserPost";

const UserPostPage = () => {
    let {id} = useParams();
    const [userPosts, setuserPosts] = useState([]);
    useEffect(() => {
        postService.getByComments(id).then(value => setuserPosts([...value]))
    }, [id])
    return (
        <div>
            {userPosts.map(userPost => <UserPost key={userPost.id}
                                                 userPost={userPost}/>)}
        </div>
    );
};

export default UserPostPage;