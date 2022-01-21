import {useEffect, useState} from "react";
import {getUser} from "../../services/user_service";



const UserInfo = ({id, getPost}) => {

    let [chosenUser, setChosenUser] = useState(null);
    useEffect(() => {
        getUser(id).then(value => setChosenUser(value.data));
    } , [id])

    return (
        <div>
            {chosenUser && (
                <div>
                    <div> name: {chosenUser.name}</div>
                    <div>username: {chosenUser.username}</div>
                    <div>email: {chosenUser.email}</div>
                    <div>address: {chosenUser.address.street}</div>
                    <div>phone: {chosenUser.phone}</div>
                    <div>website: {chosenUser.website}</div>
                    <button onClick={() => getPost(id)}>get post</button>
                </div>
            )}
        </div>
    )
};
export default UserInfo