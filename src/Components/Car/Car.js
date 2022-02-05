import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteCar} from "../../store";

const Car = ({car: {id, model, prise, year}}) => {
    const dispatch = useDispatch()
    const {info} = useSelector(state => state['carReducer']);

    return (
        <div style={{display: 'flex'}}>
            <h1>{info}</h1>
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