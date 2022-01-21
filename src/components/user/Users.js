import {useEffect, useState} from "react";

import {getUsers} from "../../services/user_service";
import UserInfo from "./User.info";
import User from "./User";
import './Users.css'

const Users = ({getPost}) => {
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState(null)


    useEffect(() => {
        getUsers().then(value => setUsers(value.data));
    }, [])

    const chooseUser = (id) => {
        setUserId(id)
    }

    return (<div className={'userblock'}>

            <div>
                {users.map(value => <User key={value.id} item={value} chooseUser={chooseUser}
                />)}
            </div>

            <div>
                {userId && (<UserInfo id={userId} getPost={getPost}/>)}

            </div>

        </div>
    )
}

export default Users