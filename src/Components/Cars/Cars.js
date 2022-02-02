import React from 'react';

import {Car} from "../Car/Car";

const Cars = ({cars, getCarid}) => {
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} getCarid={getCarid} /> )}
        </div>
    );
};


export {Cars}