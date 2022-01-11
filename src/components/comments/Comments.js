import {useEffect, useState} from "react";
import Comment from "./Comment";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setComments(value))
    }, [])

    return (
        <div>
            {comments.map(value => <Comment key={value.id} id={value.id} name={value.name}  email={value.email}/>)}
        </div>
    );
};

export default Comments;