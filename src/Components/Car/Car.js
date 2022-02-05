import React from 'react';
import {useDispatch} from "react-redux";
import {deleteCar} from "../../store";

const Car = ({car: {id, model, prise, year}}) => {
    const dispatch = useDispatch()
    return (
        <div style={{display: 'flex'}}>
            <div>
                <div>model: {model}</div>
                <div>prise: {prise}</div>
                <div>year: {year}</div>
            </div>
            <button onClick={()=>dispatch(deleteCar({id}))}>Delate</button>
        </div>

    );
};

export {Car}