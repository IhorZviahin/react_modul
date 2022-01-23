import {Routes, Route} from "react-router-dom"

import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import NotFoundPage from "./pages/NotFoundPade/NotFoundPage";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./component/Layout/Layout";
import UserDetailsPage from "./pages/UserDetailsPage/UserDetailsPage";
import PostDetailsPage from "./pages/PostDetailsPage/PostDetailsPage";
import PostCommentsPage from "./pages/PostCommentsPage/PostCommentsPage";
import UserPostPage from "./pages/UserPostPage/UserPostPage";


function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>

                <Route index element={<HomePage/>}/>

                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<UserDetailsPage/>}>
                        <Route path={'posts'} element={<UserPostPage/>}/>
                    </Route>
                </Route>

                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<PostDetailsPage/>}>
                        <Route path={'comments'} element={<PostCommentsPage/>}/>
                    </Route>
                </Route>

                <Route path={'*'} element={<NotFoundPage/>}/>

            </Route>
        </Routes>
    );
}

export default App;
