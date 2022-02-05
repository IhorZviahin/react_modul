import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Car} from "../Car/Car";
import {getAllCars} from "../../store";

const Cars = () => {
    const {cars, status, error} = useSelector(state => state['carReducer']);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars())
    }, [])


    return (
        <div>
            <div>{status === 'pending' && <h1>loaging</h1>}</div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};


export {Cars};