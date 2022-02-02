import React from 'react';

const Car = ({car: {id, model, prise, year}, getCarid}) => {
    return (
        <div style={{display: 'flex'}}>
            <div>
                <div>model: {model}</div>
                <div>prise: {prise}</div>
                <div>year: {year}</div>
            </div>
            <button>Delate</button>
        </div>

    );
};

export {Car}