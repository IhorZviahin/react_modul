import React from 'react';

import './Dog.css'

const Dog = ({dog:{id, dogname}, getDogid}) => {
    return (
        <div className={'block'}>
           <div>
               <div>dogname - {dogname}</div>
           </div>
            <button onClick={()=>getDogid(id)}>Delate</button>
        </div>
    );
};

export default Dog;