import './post.css'

const Post = (props) => {
    const {id, title, body} = props;
    return (
        <div className={'block2'}>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body:{body}</div>
        </div>
    )
};
export default Post;