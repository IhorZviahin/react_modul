import {useState} from "react";
import {Form, Cars} from "./Components";


function App() {
  const [cars,setCars] = useState([]);

  const getformData =(data)=>{
      setCars([...cars, {id: new Date().getTime(), ...data}])

  }

  return (


    <div >

      <Form getformData ={getformData}/>
      <Cars cars ={cars} getCarid={getCarid} />

    </div>
  );
}

export default App;
