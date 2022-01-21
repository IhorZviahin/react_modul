export default function User(props) {
    const {item, chooseUser} = props;
    return (<div>
        <h2>{item.id} -- {item.name}</h2>
        <button onClick={() => {
            chooseUser(item.id)
        }}>Details
        </button>
    </div>);
}