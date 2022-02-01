import {useState} from "react";
import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";

function App() {
    const [cars, setCars] = useState([]);

    const getFormData = (data) => {
        setCars([...cars, {id: new Date().getTime(), ...data}])
    }

    const getCarid = (id) => {
        setCars(cars.filter(car => car.id !== id))
    }
    return (

        <div>
            <Form getFormData={getFormData}/>
            <Cars cars={cars} getCarid={getCarid}/>
        </div>
    );
}

export default App;
