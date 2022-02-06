import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteCarThunk} from "../../store";

const Car = ({car: {id, model, price, year}}) => {
    const dispatch = useDispatch()
    const {info} = useSelector(state => state['carReducer']);

    return (
        <div style={{display: 'flex'}}>
            <h1>{info}</h1>
            <div>
                <div>model: {model}</div>
                <div>prise: {price}</div>
                <div>year: {year}</div>
            </div>
            <button onClick={()=>dispatch(deleteCarThunk({id}))}>Delate</button>
        </div>

    );
};

export {Car}