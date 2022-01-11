import {useEffect, useState} from "react";

import Post from './post'

const Posts = () => {
    const [posts, setposts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setposts(value))
    }, [])

    return (
        <div>
            {posts.map(value => <Post key={value.id} id={value.id} title={value.title} body={value.body}/>)}
        </div>
    );
};

export default Posts;