import React from 'react';
import './Car.css'
const Car = ({car:{id, model, price, year}, getCarid}) => {
    return (
        <div className={'block'}>
           <div>
               <div>model - {model}</div>
               <div>price - {price}</div>
               <div>year - {year}</div>
           </div>
            <button onClick={()=>getCarid(id)}>Delate</button>
        </div>
    );
};

export default Car;