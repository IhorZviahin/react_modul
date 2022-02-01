import {useState} from "react";

import Form from "./components/Form/Form";
import Dogs from "./components/Dogs/Dogs";
import FormCat from "./components/Form/FormCat";
import Cats from "./components/Cats/Cats";
import './App.css'

function App() {
    const [dogs, setDogs] = useState([]);

    const getFormData = (data) => {
        setDogs([...dogs, {id: new Date().getTime(), ...data}])
    }

    const getDogid = (id) => {
        setDogs(dogs.filter(dog => dog.id !== id))
    }

////////////////////////////////

    const [cats, setCats] = useState([]);

    const getFormCatData = (dataCat) => {
        setCats([...cats, {id: new Date().getTime(), ...dataCat}])
    }

    const getCatid = (id) => {
        setCats(cats.filter(cat => cat.id !== id))
    }


    return (
        <div className={'Block'}>
            <div>
                <Form getFormData={getFormData}/>
                <Dogs dogs={dogs} getDogid={getDogid}/>
            </div>

            <div>
                <FormCat getFormCatData={getFormCatData}/>
                <Cats cats={cats} getCatsid={getCatid}/>
            </div>
        </div>
    );
}

export default App;
