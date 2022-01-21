import './App.css';
import Users from "./components/user/Users";
import Posts from "./components/post/Posts";
import {useState} from "react";

function App() {
    const [userId, setUserId] = useState(null);
    return (
        <div>
            <Users getPost={setUserId}/>
            {userId && <Posts id={userId}/>}
        </div>

    )
}

export default App;