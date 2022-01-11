import './SpaceX.css'
const Spacex = (props) => {
    const {flight_number, mission_name, mission_patch_small} = props;
    return (
        <div className={'block'}>
            <div>flight_number: {flight_number}</div>
            <div>Mission_name: {mission_name}</div>
            <img src = {mission_patch_small} alt=""/>
        </div>
    )
};
export default Spacex;