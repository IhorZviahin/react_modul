import {useEffect, useState} from "react";

import Spacex from "./SpaceX";
import './SpaceXs.css'

const Spacexs = () => {
    const [Spacexs, setSpacexs] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setSpacexs(value.filter(value => value.launch_year != 2020)));
    }, [])

    return (
        <div className={'wrapper'}>
            {Spacexs.map(value => <Spacex key={value.flight_number} flight_number={value.flight_number} mission_name={value.mission_name} mission_patch_small={value.links.mission_patch_small}/>)}
        </div>
    );
};

export default Spacexs;