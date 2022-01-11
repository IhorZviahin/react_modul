import './user.css'
const User = (props) => {
    const {id, name, email} = props;
    return (
        <div className={'block'}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email:{email}</div>
        </div>
    )
};
export default User;