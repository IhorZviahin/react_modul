import './App.css';

import Users from "./components/user/users";
import Posts from "./components/post/posts";
import Comments from "./components/comments/Comments";

function App() {
    return (
        <div>
            <div className={'bigblock'}>
                <Users/>
                <Posts/>
            </div>
            <Comments/>
        </div>

    )
}

export default App;
