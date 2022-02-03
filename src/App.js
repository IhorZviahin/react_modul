import {useState} from "react";

import {Form} from "./Components";
import {Cars} from "./Components";

function App() {
    const [cars, setCars] = useState([]);

    const getformData = (data) => {
        setCars([...cars, {id: new Date().getTime(), ...data}])

    }
    const getCarid = (id) => {
        setCars(cars.filter(car => car.id !== id))
    }

    return (


        <div>

            <Form getformData={getformData}/>
            <Cars cars={cars} getCarid={getCarid}/>

        </div>
    );
}

export default App;
